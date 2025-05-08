import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Web3 from "web3";
import IPFS from "ipfs-api";
import Library from "../build/contracts/Library.json";
import Navbar from "./Navbar";
import Student from "./Student";
import StudentNotes from "./StudentNotes";
import Librarian from "./Librarian";
import Admin from "./Adminl";

// IPFS Setup (Infura)
const ipfs = new IPFS({
  host: "127.0.0.1",
  port: 5001,
  protocol: "http",
});

// Global variables for admin and librarian
var admin;
var librarian;

class Applib extends Component {
  // Move the logic from componentWillMount to componentDidMount
  async componentDidMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  // Web3 Setup
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Listen for disconnect event
        window.ethereum.on('disconnect', (error) => {
          console.warn('MetaMask disconnected:', error);
          this.setState({ account: "", library: null, librarian: "", admin: "", books: [], notes: [] });
        });
      } catch (error) {
        console.error("User denied account access");
      }
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }

    this.setState({ web3: window.web3 });
  }

  // Load Blockchain data and set contract state
  async loadBlockchainData() {
    const web3 = window.web3;

    // Load account
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });

    // Get network ID and contract address
    const networkId = await web3.eth.net.getId();
    const networkData = Library.networks[networkId];

    // Connect to the contract
    if (networkData) {
      const library = new web3.eth.Contract(Library.abi, networkData.address);
      this.setState({ library });

      // Fetch admin and librarian addresses
      admin = await library.methods.admin().call();
      librarian = await library.methods.librarian().call();
      this.setState({ admin, librarian });

      // Fetch books and notes data
      const no_of_books = await library.methods.BookCount().call();
      this.setState({ no_of_books });

      for (let i = 1; i <= no_of_books; i++) {
        const file = await library.methods.books(i).call();
        this.setState({ books: [...this.state.books, file] });
      }

      const no_of_notes = await library.methods.NoteCount().call();
      this.setState({ no_of_notes });

      for (let i = 1; i <= no_of_notes; i++) {
        const file_N = await library.methods.notes(i).call();
        this.setState({ notes: [...this.state.notes, file_N] });
      }
    } else {
      window.alert("Library contract not deployed to detected network.");
    }
  }

  // Book upload and conversion to buffer
  loadBook = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) });
      console.log("buffer", this.state.buffer);
    };
  };

  // Note upload and conversion to buffer
  loadNote = (event) => {
    event.preventDefault();
    const file_N = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file_N);
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) });
      console.log("buffer", this.state.buffer);
    };
  };

  // Handle librarian change (Admin only)
  changelibrarian = (_librarian) => {
    if (this.state.account === admin) {
      this.state.library.methods
        .changelibrarian(_librarian)
        .send({ from: this.state.account });
      librarian = _librarian;
    } else {
      window.alert("Error occured!! Please Refresh & Retry");
      window.location.reload();
    }
  };

  // Handle book deletion (Librarian only)
  deletebook = (_index) => {
    this.setState({ loading: true });
    if (this.state.account === librarian) {
      this.state.library.methods
        .deletebook(_index)
        .send({ from: this.state.account })
        .on("transactionHash", () => {
          this.setState({ loading: false });
          window.location.reload();
        });
    } else {
      window.alert("Error occured!! Please Refresh & Retry");
      window.location.reload();
    }
  };

  // Handle note deletion (Uploader & Librarian only)
  deletenote = (_index) => {
    this.setState({ loading: true });
    this.state.library.methods
      .deletenote(_index)
      .send({ from: this.state.account })
      .on("transactionHash", () => {
        this.setState({ loading: false });
        window.location.reload();
      })
      .on("error", () => {
        window.alert("Error occured!! Please Refresh & Retry");
        this.setState({ loading: false });
        window.location.reload();
      });
  };

  // Report note (Anyone except uploader)
  reportnote = (_index) => {
    this.setState({ loading: true });
    this.state.library.methods
      .reportnote(_index)
      .send({ from: this.state.account })
      .on("transactionHash", () => {
        this.setState({ loading: false });
        window.location.reload();
      })
      .on("error", () => {
        window.alert("Error occured!! Please Refresh & Retry");
        this.setState({ loading: false });
        window.location.reload();
      });
  };

  // Upload book to IPFS and contract
  uploadBook = (name, description, author) => {
    ipfs.add(this.state.buffer, (error, result) => {
      if (error) {
        console.error(error);
        return;
      }

      this.setState({ loading: true });
      if (this.state.account === librarian) {
        this.state.library.methods
          .uploadBook(result[0].hash, result[0].size, name, description, author)
          .send({ from: this.state.account })
          .on("transactionHash", () => {
            this.setState({ loading: false });
            window.location.reload();
          })
          .on("error", () => {
            window.alert("Failed to Upload Books");
            this.setState({ loading: false });
          });
      } else {
        window.alert("Only Librarian Can Upload Books");
        window.location.reload();
      }
    });
  };

  // Upload note to IPFS and contract
  uploadNote = (stream, subjectcode, teacher, date) => {
    ipfs.add(this.state.buffer, (error, result) => {
      if (error) {
        console.error(error);
        return;
      }

      this.setState({ loading: true });
      this.state.library.methods
        .uploadNote(result[0].hash, result[0].size, stream, subjectcode, teacher, date)
        .send({ from: this.state.account })
        .on("transactionHash", () => {
          this.setState({ loading: false });
          window.location.reload();
        })
        .on("error", () => {
          window.alert("Failed to Upload Notes.");
          this.setState({ loading: false });
        });
    });
  };

  // Constructor and state initialization
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      library: null,
      librarian: "",
      admin: "",
      books: [],
      notes: [],
      loading: false,
    };
    this.uploadBook = this.uploadBook.bind(this);
    this.loadBook = this.loadBook.bind(this);
    this.uploadNote = this.uploadNote.bind(this);
    this.loadNote = this.loadNote.bind(this);
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            {/* Routes for Students, Admin, Librarian */}
            <Route path="/lib-ebook">
              <Navbar account={this.state.account} />
              <Student books={this.state.books} loadBook={this.loadBook} />
            </Route>
            <Route exact path="/lib-notes">
              <Navbar account={this.state.account} />
              {this.state.loading ? (
                <div id="loader" className="text-center mt-5">
                  <p>Loading...</p>
                </div>
              ) : (
                <StudentNotes
                  notes={this.state.notes}
                  loadNote={this.loadNote}
                  uploadNote={this.uploadNote}
                  deletenote={this.deletenote}
                  reportnote={this.reportnote}
                  account={this.state.account}
                  librarian={this.state.librarian}
                />
              )}
            </Route>
            <Route path="/admin">
              <Navbar account={this.state.account} />
              <Admin
                changelibrarian={this.changelibrarian}
                account={this.state.account}
                admin={this.state.admin}
                librarian={this.state.librarian}
              />
            </Route>
            <Route exact path="/lib-librarian">
              <Navbar account={this.state.account} />
              {this.state.loading ? (
                <div id="loader" className="text-center mt-5">
                  <p>Loading...</p>
                </div>
              ) : (
                <Librarian
                  books={this.state.books}
                  loadBook={this.loadBook}
                  uploadBook={this.uploadBook}
                  deletebook={this.deletebook}
                  account={this.state.account}
                  librarian={this.state.librarian}
                />
              )}
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Applib;

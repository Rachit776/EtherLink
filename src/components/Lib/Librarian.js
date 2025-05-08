import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./library.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faDownload,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";

class Librarian extends Component {
  render() {
    return (
      <div className="container" style={{ textAlign: "center" }}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const name = this.book_Name.value;
            const description = this.book_Description.value;
            const author = this.author.value;
            this.props.uploadBook(name, description, author);
          }}
        >
          <h1 style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            <b>Welcome Librarian</b>
          </h1>
          <h4
            className="libraryhead4"
            style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
          >
            Use this module to add books to the network
          </h4>
          <div className="sidenav">
            <div className="form-row">
              <div className="form-group form_components">
                <h5 className="form_components" style={{ textAlign: "center" }}>
                  Upload Books In PDF
                </h5>
                <h6>Enter Book Name</h6>
                <input
                  id="book_Name"
                  type="text"
                  ref={(input) => {
                    this.book_Name = input;
                  }}
                  className="form-control"
                  placeholder="Book Name"
                  required
                />
              </div>
              <div className="form-group form_components">
                <h6>Enter Author Name</h6>
                <input
                  id="author"
                  type="text"
                  ref={(input) => {
                    this.author = input;
                  }}
                  className="form-control text-monospace"
                  placeholder="Author"
                  required
                />
              </div>
              <div className="form-group form_components">
                <h6>Enter Description</h6>
                <textarea
                  id="book_Description"
                  type="text"
                  ref={(input) => {
                    this.book_Description = input;
                  }}
                  className="form-control text-monospace"
                  placeholder="Description"
                  required
                />
              </div>
              <div className="form-group form_components">
                <input
                  type="file"
                  onChange={this.props.loadBook}
                  className="text-black text-monospace"
                  accept="application/pdf"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={this.props.account !== this.props.librarian}
                className="btn btn-success col-md-1.5"
              >
                <b>
                  Upload &nbsp; <FontAwesomeIcon icon={faUpload} />
                </b>
              </button>
            </div>
          </div>
        </form>
        <div className="cardnav">
          <div className="card-group">
            {this.props.books.map((file, key) => {
              return (
                <Row>
                  <Col style={{ marginRight: "12px", marginLeft: "12px" }}>
                    <Card
                      className="card_sp w-95"
                      // border="shadow"

                      style={{
                        width: "20rem",
                        height: "24rem",
                        textAlign: "center",
                        marginBottom: "2%",
                        borderRadius: "16px",
                      }}
                      key={key}
                    >
                      <Card.Img
                        variant="top"
                        src={
                          "https://images.ctfassets.net/o78em1y1w4i4/LHN0F94cNFCx1drEcfcsY/984e632abf38018f2a6ab22c4b61fdc6/teaser-book-with-heart-pages.jpg?fm=webp&w=1160&q=75"
                        }
                        className="card_sp_image"
                        style={{ height: "16rem" }}
                      />
                      <Card.Body>
                        <Card.Title
                          style={{
                            fontSize: "20px",
                            color: "black",
                            fontFamily: "'Be Vietnam Pro', sans-serif",
                          }}
                        >
                          <b>{file.book_Name.substring(0, 46)}</b>
                        </Card.Title>
                        <Card.Subtitle
                          className="mb-1 text-muted"
                          style={{ fontSize: "16px" }}
                        >
                          {file.author}
                        </Card.Subtitle>
                        <Card.Text style={{ fontSize: "14px", height: "50px" }}>
                          {file.book_Description.substring(0, 50)}...
                        </Card.Text>
                        {/* <Card.Link
                      style={{ fontSize: "12px", color: "darkcyan" }}
                      href={"https://etherscan.io/address/" + file.uploader}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      By: {file.uploader.substring(0, 10)}...
                    </Card.Link>
                    <br></br> */}
                        <div style={{ textAlign: "center" }}>
                          <Card.Link
                            style={{
                              fontSize: "1rem",
                              borderRadius: "10px",
                              margin: "2%",
                            }}
                            className="btn btn-success"
                            href={
                              "http://127.0.0.1:8080/ipfs/" + file.book_Hash
                            }
                            target="_blank"
                            download="download"
                          >
                            Download &nbsp;{" "}
                            <FontAwesomeIcon icon={faDownload} />
                          </Card.Link>

                          <Card.Link
                            id="delete"
                            className="btn btn-danger"
                            style={{
                              fontSize: "1rem",
                              borderRadius: "10px",
                              margin: "1%",
                            }}
                            disabled={
                              this.props.account !== this.props.librarian
                            }
                            variant="danger btn-sm"
                            onClick={() => this.props.deletebook(key + 1)}
                          >
                            Delete &nbsp; <FontAwesomeIcon icon={faTrash} />
                          </Card.Link>
                          {/* <Card.Link
                          style={{
                            fontSize: "1rem",
                            borderRadius: "10px",
                            margin: "2%",
                            marginTop:"4%"
                          }}
                          className="btn btn-outline-primary"
                          href={
                            "http://books.google.com/books?vid=ISBN" + file.isbn
                          }
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Google Books
                        </Card.Link> */}
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Librarian;
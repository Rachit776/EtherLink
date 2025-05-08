import React, { Component } from "react";
import { InputGroup } from "react-bootstrap";
import "./adminstyle.css";

class Adminf extends Component {
  render() {
    console.log("undefined");
    return (
      <div>
        <div className="container-fluid mt-5 text-center">
          {/* <h3>Change Commision Percentage</h3> */}
          {/* <div>{rvalue} %</div> */}
          {/* <h6>Current Commision : {this.commision} %</h6> */}
          <form
            id="adminowner"
            onSubmit={(event) => {
              event.preventDefault();
              const address = this.owner_address.value;
              if (
                window.confirm(
                  "Owner's Address will be changed to " + address + ". Sure?"
                )
              ) {
                this.props.changeOwner(address);
              }
            }}
          >
            <div className="form-row container">
              <div className="form-group col-md-6">
                <h3 style={{ marginBottom: "2%", textAlign: "left" }}>
                  Change Cafeteria Owner:{" "}
                </h3>
                <h6 style={{ marginBottom: "2%", textAlign: "left" }}>
                  Current Owner:{" "}
                  <a
                    href={
                      "https://etherscan.io/address/" + this.props.canteenOwner
                    }
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {this.props.canteenOwner.substring(0, 6)}...
                    {this.props.canteenOwner.substring(38, 42)}
                  </a>
                </h6>
                <InputGroup>
                  <input
                    id="commision"
                    style={{ marginBottom: "2%" }}
                    required
                    maxLength="42"
                    disabled={this.props.admin !== this.props.account}
                    placeholder="Change Cafeteria Owner (By Address)"
                    className="form-control" 
                    ref={(input) => {
                      this.owner_address = input;
                    }}
                  />
                  <button
                    style={{ height: 38 }}
                    disabled={this.props.admin !== this.props.account}
                    type="submit"
                    className="btn btn-warning"  
                  >
                    <b>Change</b>
                  </button>
                </InputGroup>
              </div>
            </div>
          </form>
        </div>
        <div className="container-fluid mt-5 text-center">
          <form
            id="adminowner"
            onSubmit={(event) => {
              event.preventDefault();
              const fees = this.college_fees.value;
              if (window.confirm("Are you sure?")) {
                this.props.changeFees(fees);
              }
            }}
          >
          </form>
        </div>
      </div>
    );
  }
}

export default Adminf;

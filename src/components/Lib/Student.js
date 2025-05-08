import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./library.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

class Student extends Component {
  render() {
    return (
      <>
        <h2
          style={{
            marginBottom: "5%",
            textAlign: "center",
            fontFamily: "'Be Vietnam Pro', sans-serif",
          }}
        >
          Welcome to Library
        </h2>
        <div className="container-fluid mt-5 text-center">
          {/* ========================================= Show all Books (Mapping) ========================================= */}

          <Row className="card-group">
            {this.props.books.map((file, index) => {
              return (
                <Col lg={3} md={4} sm={6} className="pt-4 mb-3" key={file.book_Hash}>
                  <Card
                    className="card_sp w-100"
                    style={{
                      textAlign: "center",
                      marginBottom: "2%",
                      borderRadius: "16px",
                      boxShadow: "0 4px 8px 0 #f2f1f1, 0 6px 5px 0 rgba(0, 0, 0, 0.19)"
                    }}
                  >
                    {/* ======================== Book Image (From Google Books)  */}
                    <Card.Img
                      variant="top"
                      src={
                        "https://images.ctfassets.net/o78em1y1w4i4/LHN0F94cNFCx1drEcfcsY/984e632abf38018f2a6ab22c4b61fdc6/teaser-book-with-heart-pages.jpg?fm=webp&w=1160&q=75"
                      }
                      alt={`Cover of ${file.book_Name}`}
                      style={{ height: "13.6rem" }}
                    />

                    {/* ======================== Book Name  */}
                    <Card.Body>
                      <Card.Title
                        style={{
                          fontSize: "17px",
                          color: "black",
                          fontFamily: "'Be Vietnam Pro', sans-serif",
                        }}
                      >
                        <b>{file.book_Name.substring(0, 46)}</b>
                      </Card.Title>

                      {/* ======================== Author  */}
                      <Card.Subtitle
                        className="mb-1 text-muted"
                        style={{ fontSize: "14px", height: "30px" }}
                      >
                        {file.author}
                      </Card.Subtitle>

                      {/* ======================== Description  */}
                      <Card.Text style={{ fontSize: "12px", height: "30px" }}>
                        {file.book_Description.substring(0, 80)}...
                      </Card.Text>

                      {/* ======================== Uploader Address  */}
                      <Card.Link
                        style={{ fontSize: "11px", color: "darkcyan" }}
                        href={"https://etherscan.io/address/" + file.uploader}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        By: {file.uploader.substring(0, 10)}...
                      </Card.Link>
                      <br />

                      {/* ======================== Download Link (IPFS Infura)  */}
                      <Card.Link
                        className="btn btn-success"
                        style={{
                          fontSize: "0.8rem",
                          borderRadius: "10px",
                          margin: "2%",
                        }}
                        href={"http://127.0.0.1:8080/ipfs/" + file.book_Hash}
                        target="_blank"
                        download="download"
                      >
                        Download &nbsp; <FontAwesomeIcon icon={faDownload} />
                      </Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </>
    );
  }
}

export default Student;

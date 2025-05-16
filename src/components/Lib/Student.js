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
            marginBottom: "1rem",  // reduced from 5%
            textAlign: "center",
            fontFamily: "'Be Vietnam Pro', sans-serif",
          }}
        >
          Welcome to Library
        </h2>
        <div className="container-fluid text-center">
          {/* Removed mt-5 here to reduce space */}

          <Row className="card-group gx-3 gy-4">
            {this.props.books.map((file) => (
              <Col
                lg={2}
                md={3}
                sm={4}
                xs={6}
                className="pt-2 mb-3"
                key={file.book_Hash}
              >
                <Card
                  className="card_sp w-100 h-100"
                  style={{
                    borderRadius: "20px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    padding: "0.5rem",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://images.ctfassets.net/o78em1y1w4i4/LHN0F94cNFCx1drEcfcsY/984e632abf38018f2a6ab22c4b61fdc6/teaser-book-with-heart-pages.jpg?fm=webp&w=1160&q=75"
                    alt={`Cover of ${file.book_Name}`}
                    style={{
                      height: "10rem",
                      objectFit: "cover",
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                    }}
                  />

                  <Card.Body style={{ padding: "0.5rem" }}>
                    <Card.Title
                      style={{
                        fontSize: "14px",
                        color: "#222",
                        fontFamily: "'Be Vietnam Pro', sans-serif",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                      title={file.book_Name}
                    >
                      <b>{file.book_Name}</b>
                    </Card.Title>

                    <Card.Subtitle
                      className="mb-1 text-muted"
                      style={{
                        fontSize: "12px",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {file.author}
                    </Card.Subtitle>

                    <Card.Text
                      style={{
                        fontSize: "11px",
                        height: "35px",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {file.book_Description?.substring(0, 70)}...
                    </Card.Text>

                    <Card.Link
                      style={{ fontSize: "10px", color: "darkcyan" }}
                      href={`https://etherscan.io/address/${file.uploader}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      By: {file.uploader?.substring(0, 10)}...
                    </Card.Link>
                    <br />

                    <Card.Link
                      className="btn btn-sm btn-success mt-2"
                      style={{
                        fontSize: "0.7rem",
                        borderRadius: "12px",
                        padding: "4px 10px",
                      }}
                      href={`https://ipfs.io/ipfs/${file.book_Hash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download <FontAwesomeIcon icon={faDownload} />
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </>
    );
  }
}

export default Student;

import React from "react";
import "./home.css";
import imagebook from "../assets/imagebook.svg";
import imagefood from "../assets/imagefood.svg";
import imageinfo from "../assets/imageinfo.svg";
import icon from "../assets/icon.svg";

export default function Home() {
  return (
    <>
      {/* =================== Library Section =================== */}
      <div className="row p-5 home_about_container">
        <div className="col-lg-5 d-flex justify-content-center align-items-center">
          <div className="logo">
            <a href="/library">
              <img
                src={imagebook}
                width="500px"
                className="img-fluid"
                alt="Library"
              />
            </a>
          </div>
        </div>
        <div className="col-lg-7 d-flex align-items-center">
          <div>
            <a href="/library">
              <h3 className="home_about_header">Library</h3>
            </a>
            <p className="home_about_description_main">
              <br /> We understand the value of knowledge and thus this
              e-Library is a homogeneous result of our ideas, skills and
              implementation.
              <br />
              This library is primarily made for <strong>
                students
              </strong> and <strong>librarian</strong>, however we have included
              an Admin section as well. <br />
              <strong>Students</strong> have access to books and notes. They can
              upload class notes themselves which can be accessed by other
              students. <br />
              <strong>Librarian</strong> has the authority to upload new books
              to the library stack and can delete books as well. <br />
              <strong>Admin</strong> has the power to change the librarian if
              needed.
            </p>
          </div>
        </div>
      </div>

      {/* =================== Cafeteria Section =================== */}
      <div className="row p-5 home_about_container">
        <div className="col-lg-6 d-flex align-items-center">
          <div>
            <a href="/food">
              <h3 className="home_about_header">Cafeteria</h3>
            </a>
            <p style={{ width: "80%" }} className="home_about_description_main">
              <em>
                Even if we go out less, our hunger doesn't get reduced. Getting
                food delivered at doorstep is so cool!
              </em>{" "}
              <br />
              It's our cumulative effort to make the life of students living a{" "}
              <strong>"campus-life"</strong>, a bit easy. <br />{" "}
              <strong>Students</strong> get to order food from their college
              cafeteria. They have freedom to choose where they want their food,
              is it in the canteen or they prefer to get it delivered at their
              doorstep. They get to see all their previous orders along with all
              necessary details at <strong>"Previous Orders"</strong> section.
              <br />
              <strong>Canteen Owner</strong> can add new dishes and delete
              dishes at the same time. They may even change the price or
              availability of any dish at any time they want.
              <br />
              <strong>College Admin</strong> has the right to change Canteen
              Owner and manipulate college commission on orders.
            </p>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <div className="logo">
            <a href="/food">
              <img
                src={imagefood}
                width="800px"
                className="img-fluid"
                alt="Cafeteria"
              />
            </a>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      {/* =================== Cards Section =================== */}
      <div className="home_about_container">
        <div className="container-fluid cards bg_gradient mt-0 d-flex justify-content-around flex-wrap">
          <a
            href="/library"
            className="card text-dark text-decoration-none m-2"
            style={{ width: "19.8%" }}
          >
            <img
              src={imagebook}
              className="card-img-top"
              alt="Library"
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
            <div className="card-body" style={{ backgroundColor: "#f2f1f1" }}>
              <h4 className="card-title">Library</h4>
              <p className="card-text">
                Get library always at your service. Online book reading,
                checking, class notes, etc.
              </p>
            </div>
          </a>
          <a
            href="/food"
            className="card text-dark text-decoration-none m-2"
            style={{ width: "20%" }}
          >
            <img
              src={imagefood}
              className="card-img-top"
              alt="Cafeteria"
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
            <div className="card-body" style={{ backgroundColor: "#f2f1f1" }}>
              <h4 className="card-title">Cafeteria</h4>
              <p className="card-text">
                Hunger doesn't let your mind work. Order food and get it
                delivered to you.
              </p>
            </div>
          </a>
          <a
            href="/about"
            className="card text-dark text-decoration-none m-2"
            style={{ width: "20%" }}
          >
            <img
              src={imageinfo}
              className="card-img-top"
              alt="about"
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
            <div className="card-body" style={{ backgroundColor: "#f2f1f1" }}>
              <h4 className="card-title">About</h4>
              <p className="card-text">
                Small information related to project. My information and skills.
              </p>
            </div>
          </a>
        </div>
      </div>
      <br />
      <br />
      <br />
      {/* =================== About Section =================== */}
      <div className="row p-5 home_about_container">
        <div className="col-lg-6 d-flex align-items-center">
          <div>
            <a href="/about">
              <h3 className="home_about_header">About</h3>
            </a>
            <p className="home_about_description_main">
              This <strong>Dapp</strong> is a result of the joint effort of all
              of my friends to help and support while developing this. We all
              have tried our level best to make this Dapp functional and easy to
              use at the same time. We tried to make this{" "}
              <strong>feature-rich</strong>. We wish our effort will have some
              useful impact on all of our users. We wish to continue this effort
              to make this Dapp more useful and efficient.
              <em> Thank You.</em> 🙏🏻
            </p>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <div className="logo">
            <a href="/about">
            <img
              src={icon}
              alt="App logo"
              width="480"
              height="160"
              className="img-fluid"
            />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import "./home.css";
import imagebook from "../assets/imagebook.avif";
import imagefood from "../assets/imagefood.avif";
import imagehouse from "../assets/imagehouse.jpg";

export default function Home() {
  return (
    <>
      <div className="row p-5 home_about_container">
        <div className="col-lg-5">
          <div className="logo">
            <a href="/library">
              <img src={imagebook} width="500px" />
            </a>
          </div>
        </div>

        <div className="col-lg-6 d-flex align-items-right justify-content-center">
          {/* <div className="col-lg-6"> */}
          <a href="/library">
            <h3 className="home_about_header">Library</h3>
          </a>

          <p className="home_about_description_main">
            
            <br /> We understand the value of knowledge and thus this e-Library
            is a homogeneous result of our ideas, skills and implementation.
            <br />
            This library is primarily made for <strong>
              students
            </strong> and <strong>librarian</strong>, however we have included
            an Admin section as well. <br />
            <strong> Students</strong> have access to books and notes. They can
            upload class notes themselves which can be accessed by other
            students. <br />
            <strong> Librarian </strong>has the authority to upload new books to
            the library stack and can delete books as well. <br />
            <strong> Admin</strong> has the power to change the librarian if
            needed.
          </p>
          {/* </div> */}
        </div>
      </div>

      <div className="row p-5 home_about_container">
        <div className="col-lg-6">
          <a href="/food">
            <h3 className="home_about_header">Cafeteria</h3>
          </a>
          <p style={{ width: "80%" }} className="home_about_description_main">
            <em>
              Even if we go out less, our hunger doesn't get reduced. Getting
              food delivered at doorstep is so cool!
            </em>{" "}
            <br />
            Its our cumulative effort to make the life of students living a{" "}
            <strong>"campus-life"</strong>, a bit easy. <br />{" "}
            <strong> Students</strong> get to order food from their college
            cafeteria. They have freedom to choose where they want their food,
            is it in the canteen or they prefer to get it delivered at their
            doorstep. They get to see all their previous orders along with all
            necessary details at <strong>"Previous Orders"</strong> section.
            <br />
            <strong> Canteen Owner</strong> can add new dishes and delete dishes
            at the same time. They may even change the price or availability of
            any dish at any time they want.
            <br />
            <strong> College Admin</strong> has the right to change Canteen
            Owner and manipulate college commission on orders.
          </p>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="logo">
            <a href="/food">
              <img src={imagefood} width="800px" />
            </a>
          </div>
        </div>
      </div>
      <div className="row p-5 home_about_container">
        <div className="col-lg-4">
          <div className="logo">
            <a href="/ ">
              <img src={imagehouse} width="500px" />
            </a>
          </div>
        </div>
        <div className="col-lg-7 d-flex align-items-right justify-content-center">
          {/* <div className="col-lg-6"> */}
          <a href="/">
            <h3 className="home_about_header">Hostel</h3>
          </a>
          <p className="home_about_description_main">
            
            <br />
            We tried to provide such students a platform where they get
            to know <strong> nearest </strong>hostel to their college. <br />{" "}
          </p>
          {/* </div> */}
        </div>
      </div>
      <div className="home_about_container">
        <div className="container-fluid cards bg_gradient mt-0">
          <a href="/library" className="card text-dark text-decoration-none">
            <img
              src="https://clipart-library.com/newhp/kissclipart-library-clipart-library-clip-art-0a3bd1adc0bb736d.png"
              className="card-img-top"
              alt="image here"
              height="300"
            />
            <div className="card-body " style={{ backgroundColor: "#f2f1f1" }}>
              <h4 className="card-title">Library</h4>
              <p className="card-text">
                Get library always at your service. Online book reading,
                checking, class notes, etc.
              </p>
            </div>
          </a>
          <a href="/food" className="card text-dark text-decoration-none">
            <img
              src="https://img.freepik.com/free-vector/city-street-with-cafe-exterior-with-terrace_107791-18492.jpg?t=st=1732473211~exp=1732476811~hmac=a2c03e97a40879a6b6c66a2e75a91d24eb65e77be1af2d36007a4afb326251ab&w=1380"
              className="card-img-top"
              alt="image here"
              height="300"
            />
            <div className="card-body" style={{ backgroundColor: "#f2f1f1" }}>
              <h4 className="card-title">Cafeteria</h4>
              <p className="card-text">
                Hunger doesn't let your mind work. Order food and get it
                delivered to you.
              </p>
            </div>
          </a>
          <a href="/" className="card text-dark text-decoration-none">
            <img
              src="https://img.freepik.com/free-vector/bedroom-interior-with-furniture-blue-theme_1308-50913.jpg?ga=GA1.1.77882649.1718159646&semt=ais_hybrid"
              className="card-img-top"
              alt="image here"
              height="300"
            />
            <div className="card-body " style={{ backgroundColor: "#f2f1f1" }}>
              <h4 className="card-title ">Hostel</h4>
              <p className="card-text">
                Find a perfect hostel nearest to our college. <br /> Feel
                home away from home.
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="row p-5 home_about_container">
        <div className="col-lg-6">
          <a href="/">
            <h3 className="home_about_header">About</h3>
          </a>
          <p className="home_about_description_main">
            This <strong> Dapp</strong> is a result of the joint effort of all
            members of Team <strong> G-73</strong>. We all have tried our
            level best to make this Dapp functional and easy to use at the same
            time. We tried to make this <strong> feature-rich</strong>. We wish
            our effort will have some useful impact on all of our users. We wish
            to continue this effort to make this Dapp more useful and efficient. <em> Thank You.</em> 🙏🏻
          </p>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="logo">
            <img
              src="/icon.png"
              alt="Hindi fonts"
              width="480"
              height="160"
              className="align-top"
            />
          </div>
        </div>
      </div>

      {/* ========================== Cards ================================== */}
    </>
  );
}

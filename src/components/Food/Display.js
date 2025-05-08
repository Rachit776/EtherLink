import React from "react";
import "./display.css";
import "../home.css";
import foodorder from "../../assets/foodorder.svg";
import orderhistory from "../../assets/orderhistory.svg";
import foodowner from "../../assets/foodowner.svg";
import historycard from "../../assets/historycard.svg";
import ordercard from "../../assets/ordercard.svg";
import ownercard from "../../assets/ownercard.svg";

function Display() {
  return (
    <>
      <div className="row p-5 home_about_container">
        <div className="col-lg-6">
          <a href="/foodiegenie">
            <h3 className="home_about_header">Order Food</h3>
          </a>
          <p className="home_about_description_main">
            Feeling hungry? It's obvious when you use your brain so much.
            <br />
            <strong>Order</strong> food from college cafe, eat at cafe or get it{" "}
            <strong>delivered</strong> to your room. <br /> Pay using
            <strong>Ethereum</strong> the next-gen currency. You can also
            provide a <strong>feedback</strong> on your order once it's done.{" "}
            <br />
            <em>A Zomato or Swiggy just for college. Isn't that awesome?</em>
          </p>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="logo">
            <a href="/foodiegenie">
              <img src={foodorder} width="500px" alt="Order Food" />
            </a>
          </div>
        </div>
      </div>
      <div className="row p-5 home_about_container">
        <div className="col-lg-6">
          <div className="logo">
            <a href="/foodiegenie-owner">
              <img src={foodowner} width="580px" alt="Canteen Owner" />
            </a>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-right justify-content-center">
          <a href="/foodiegenie-owner">
            <h3 className="home_about_header">Canteen Owner</h3>
          </a>
          <p className="home_about_description_main">
            <strong>Canteen</strong> authority adds the delicious and fresh-made
            food items here. Toggle the <strong>availability</strong> of any
            dish when needed and can also
            <strong>update</strong> the prices of the items when needed.
            <br />
            <em>Go add your dishes now!</em>
          </p>
        </div>
      </div>
      <div className="row p-5 home_about_container">
        <div className="col-lg-6">
          <a href="/foodiegenie-orders">
            <h3 className="home_about_header">Order History</h3>
          </a>
          <p className="home_about_description_main">
            <em>The heading is sufficient, isn't it?</em> <br />
            Details such as <strong>Order no.</strong>,{" "}
            <strong>Ordered Items</strong>, <strong>Quantity</strong>,{" "}
            <strong>Price</strong>, <strong>Delivery Location</strong>,{" "}
            <strong>Delivery status</strong>, <strong>Rating</strong> <br /> and
            many more are displayed here.
          </p>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="logo">
            <a href="/foodiegenie-orders">
              <img src={orderhistory} width="500px" alt="Order History" />
            </a>
          </div>
        </div>
      </div>
      <div className="home_about_container">
        <div className="container login_cards" style={{ marginBottom: "2%" }}>
          <a
            href="/foodiegenie"
            class="card each_card text-dark text-decoration-none"
          >
            <img
              src={ordercard}
              height="220"
              class="card-img-top"
              alt="Order Food Card"
            />
            <div class="card-body">
              <h4 class="card-title">Order Food</h4>
              <p class="card-text">
                Don't let hunger destroy your work-time. Order food and get it
                delivered to you.
              </p>
            </div>
          </a>
          <a
            href="/foodiegenie-owner"
            class="card each_card text-dark text-decoration-none"
          >
            <img
              src={ownercard}
              height="220"
              class="card-img-top"
              alt="Canteen Owner Card"
            />
            <div class="card-body">
              <h4 class="card-title">Canteen Owner</h4>
              <p class="card-text">
                Add remove food dishes, change price and availability. All here,
                just one click away.
              </p>
            </div>
          </a>
          <a
            href="/foodiegenie-orders"
            class="card each_card text-dark text-decoration-none"
          >
            <img
              src={historycard}
              height="220"
              class="card-img-top"
              alt="Order History Card"
            />
            <div class="card-body">
              <h4 class="card-title">Order History</h4>
              <p class="card-text">
                See every detail of all your previous orders here. Take no
                stress.
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Display;

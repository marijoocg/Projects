import React from "react";
import ReviewCard from "./ReviewCard1";
//import { Navbar, Nav, Container, Col, Row } from 'react-bootstrap'
import { Link } from "react-router-dom";
import "../App.css";

class MainPage extends React.Component {
  render() {
    const image =
      "https://media.istockphoto.com/id/1142873622/vector/travel.jpg?s=612x612&w=0&k=20&c=IzNwO_x-ENHTLfuObj5NFITXapRxgaMlgfVLqYjGT-0=";
    const flight = "https://cdn-icons-png.flaticon.com/512/870/870143.png";
    const hotel = "https://cdn-icons-png.flaticon.com/512/2286/2286054.png";
    const reservations =
      "https://cdn-icons-png.flaticon.com/128/7860/7860463.png";
    return (
      <div>
        <div className='container text-center'>
          <div className='row'>
            <div className='col'>
              <img
                src={image}
                width='90%'
                height='auto'
                alt='key_10'
              />
            </div>
            <div className='col'>
              <br></br>
              <br></br>
              <h1 className='title'>About us</h1>
              <p className='subtitle'>With <b>MAF Air</b>, you don't have to
                    go to multiple websites to book the trip of your dreams. Find
                    multiple options of the most wantedd destinatios, and book your tours
                    with us for the best deals. Your dream vacation just a click away.
              </p>
            </div>
          </div>
        </div>
        <br></br>
        <hr></hr>
        <br></br>

        <div className='container text-center'>
          <b className='title'>Services</b>
          <p className='subtitle'>
            See all our services for the trip of a lifetime.
          </p>
          <div className='row'>
            <div className='col'>
              <div className='servicecard'>
                <br></br>
                <img
                  src={flight}
                  width='33%'
                  height='auto'
                  alt='key_11'
                />
                <br></br>
                <Link to='/flights'>
                  {" "}
                  <button
                    type='submit'
                    className='btn btn-danger'
                    style={{ marginTop: "30px" }}
                  >
                    Search for Flights!
                  </button>
                </Link>
                <br></br>
                <br></br>
              </div>
            </div>
            <div className='col'>
              <div className='servicecard'>
                <img
                  src={hotel}
                  width='40%'
                  height='auto'
                  alt='key_12'
                />
                <br></br>
                <Link to='/Flights'>
                  {" "}
                  <button
                    type='submit'
                    className='btn btn-danger'
                    style={{ marginTop: "30px" }}
                  >
                    See our Package Deals!
                  </button>
                </Link>
                <br></br>
                <br></br>
              </div>
            </div>
            <div className='col'>
              <div className='servicecard'>
                <br></br>
                <img
                  src={reservations}
                  width='33%'
                  height='auto'
                  alt='key_13'
                />
                <br></br>
                <Link to='/History'>
                  {" "}
                  <button
                    type='submit'
                    className='btn btn-danger'
                    style={{ marginTop: "30px" }}
                  >
                    Manage your Reservations!
                  </button>
                </Link>
                <br></br>
                <br></br>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <hr></hr>

        <div className='container text-center'>
          <b className='title'>Reviews</b>
          <p className='subtitle'>Read what other users have to say!</p>
          <div className='row'>
            <div className='col'>
              <ReviewCard
                icon="https://pbs.twimg.com/profile_images/1144262833573642241/YizELhLs_400x400.jpg"
                title='Super easy to use!'
                destination='Paris, France'
                info='Using TravelAgency made going on my trip super easy!'
              />
            </div>
            <div className='col'>
              <ReviewCard
                icon="https://www.nacionrex.com/__export/1540598576736/sites/debate/img/2018/10/26/miley_blue_eyes.jpg_1196925623.jpg"
                title='Great service!'
                destination='Madrid, Spain'
                info='Had an absolute blast! Looking forward to another trip'
              />
            </div>
            <div className='col'>
              <ReviewCard
                icon="https://yt3.ggpht.com/ytc/AMLnZu80fQMaVszkfCRlJn04TvuiawgUh-rIwpmQL2gJ0g=s900-c-k-c0x00ffffff-no-rj"
                title='MAF Air is Magical!'
                destination='Walt Disney World, Florida'
                info='Had the most magical time, it was all so easy with MAF Air!'
              />
            </div>
          </div>
        </div>
      </div>
    ); //return
  }
}

export default MainPage;

import React from "react";

function Footer() {
  //const home = "https://www.freeiconspng.com/uploads/home-icon-png-31.png";
  //const email =
  //  "https://www.freeiconspng.com/thumbs/email-icon/email-icon--clipart-best-22.png";
  //const phone = "";

  return (
    <div className='footer'>
      <div className='row'>
        <div className='col'>
          <b>MAF Air</b>
        </div>
        <div className='col'>
          <b>SERVICES</b>
        </div>
        <div className='col'>
          <b>CONTACT US</b>
        </div>
      </div>
      <div className='row'>
        <hr></hr>
      </div>
      <div className='row'>
        <div className='col'>
          <p>
            Find multiple options of the most wantedd destinatios, and book your tours
            with us for the best deals. Your dream vacation just a click away
          </p>
        </div>
        <div className='col'>
          <div className='row'>
            <a href='MainPage'>Home</a>
          </div>
          <div className='row'>
            <a href='Flights'>Flights</a>
          </div>
          <div className='row'>
            <a href='Flights'>Packages</a>
          </div>
          <div className='row'>
            <a href='History'>Reservations</a>
          </div>
        </div>
        <div className='col'>
          <div className='row'>
            <a href='https://www.google.com.mx/maps/place/Nueva+York,+EE.+UU./@40.6971494,-74.2598796,10z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728'>
              New York, NY, 10012 US
            </a>
          </div>
          <div className='row'>
            {" "}
            <b>Email</b>
          </div>
          <div className='row'>
            <a href='https://gmail.com'>mafair@contact.com</a>
          </div>
          <div className='row'>
            {" "}
            <b>Phone</b>{" "}
          </div>
          <div className='row'>
            <p>+01 2345 6789</p>
          </div>
        </div>
      </div>
      <div className='row'>
        <hr></hr>
      </div>
      <div className='row'>
        <a href='MainPage'>
          <b>MAFair.com</b>
        </a>
      </div>
    </div>
  );
}

export default Footer;

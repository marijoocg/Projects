import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

class History extends React.Component {
  render() {
    return (
      <div>
        <body>
          <div className='row'>
            <div className='col-sm-3 col-md-3 col-lg-3'></div>
            <div className='col-sm-6 col-md-6 col-lg-6'>
              <div className={"borderr"}>
                <div>
                  <h1 className='title'>Reservations</h1>
                </div>
                <div className='subtitle'>
                  You haven't booked any trips yet!
                  <br></br>
                  <br></br>
                  <Link to="/Flights"><button class="contactbutton" type="submit">BOOK NOW<br></br></button></Link>
                </div>
              </div>
            </div>
            <div class='col-sm-3 col-md-3 col-lg-3'></div>
          </div>
        </body>
      </div>
    );
  }
}

export default History;

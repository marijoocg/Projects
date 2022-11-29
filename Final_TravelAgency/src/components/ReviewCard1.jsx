import React from "react";
import "./ReviewCard1.css";

export default function ReviewCard(props) {
  //<img src={stars} class="stars"></img>
  const stars = "https://cdn-icons-png.flaticon.com/512/1601/1601243.png";
  const icon =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png";
  return (
    <div className='cardbackRC'>
      <center>
        <br></br>
        <img
          src={props.icon}
          className='image'
          alt='key_a'
        />
        <br></br>
        <h2 className='cardtextRC'>{props.title}</h2>
        <p>{props.destination}</p>
        <p className='cardinfoRC'>{props.info}</p>
        <b>Rating:</b>
        <img
          src={stars}
          className='stars'
          alt='key_b'
        />
        <img
          src={stars}
          className='stars'
          alt='key_c'
        />
        <img
          src={stars}
          className='stars'
          alt='key_d'
        />
        <img
          src={stars}
          className='stars'
          alt='key_e'
        />
      </center>
      <br></br>
    </div>
  );
}

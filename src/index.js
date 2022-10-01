import React from "react";
import ReactDOM from "react-dom";

function Card (props){
  return(
    <div>
    <h2>{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img"
    />
    <p>{props.tel}</p>
    <p>{props.email}</p>
    </div>

  )
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card 
      name="Beyonce"
      img="https://www.beyonce.com/uploads/2022/09/cache/fKHYxrA6o90f_1920x1920_KaMXZQjO.jpg"
      tel="1212122111212121"
      email="b@be.com" 
      />

      <Card 

    name="Jack Bauer"
    img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      alt="avatar_img"
    
    tel="987 654 321"
    email="jack@nowhere.com"

    />

    <Card

    name="Chuck Norris"
    img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      alt="avatar_img"
    tel="918 372 574"
    email="gmail@chucknorris.com"
      />
    
  </div>,
  document.getElementById("root")
);

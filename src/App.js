import "./App.css";
import { useState, useEffect } from "react";
import defaultPhoto from "./299307594_142085175233459_4813057762078205252_n.jpg";

function App() {
  const [fullName, setFullName] = useState("Omar Sharif");
  const [bio, setBio] = useState("High Energy, Passionate employer");
  const [image, setImage] = useState(defaultPhoto);
  const [profession, setProfession] = useState("Front-End Developer");
  const [show, setShow] = useState(true);
  const [time, setTime] = useState(new Date());
  const [timeSinceLastMounted, setTimeSinceLastMounted] = useState(time);

  const handleClicked = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
      let currentTime = new Date();
      setTimeSinceLastMounted(Math.abs(currentTime - time));
      setTime(currentTime);
    }
  };

  const imageStyle = {
    width: 200,
    height: 200,
    borderRadius: "50%",
  };

  return (
    <div className="App">
      {show ? (
        <div>
          <img src={image} alt="ProfileImage" style={imageStyle} />
          <p>{fullName}</p>
          <p>{profession}</p>
          <p>{bio}</p>
        </div>
      ) : (
        ""
      )}
      <button
        onClick={() => {
          handleClicked();
        }}
      >
        Show / Hide
      </button>
      <p>
        Time interval since last time showed : {timeSinceLastMounted / 1000}{" "}
        second
      </p>
    </div>
  );
}

export default App;

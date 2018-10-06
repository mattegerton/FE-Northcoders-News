import React from "react";
import "./css/WrongPath.css";
import { Link } from "react-router-dom";

const WrongPath = () => {
  return (
    <div>
      <div className="errorAlert">
        <ion-icon name="alert" />
        <p> Error: Path does not exist! </p>
      </div>

      <button id="takeMeBackButton">
        <Link className="articleButton" to="/articles">
          Take me back to Articles, please!
        </Link>
      </button>
    </div>
  );
};

export default WrongPath;

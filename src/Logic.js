import React from "react";
import "./styles.css";
const cssStyle = {};
export default function Logic() {
  let date = new Date();
  let currdate = date.getHours();
  let data = "";
  if (currdate >= 16 && currdate < 20) {
    data = "Good Evening";
    cssStyle.color = "red";
  } else if (currdate >= 20 && currdate < 24) {
    data = "Good Night";
    cssStyle.color = "green";
  } else if (currdate < 16 && currdate >= 12) {
    data = "Good AfterNoon";
    cssStyle.color = "yellow";
  } else if (currdate > 0 && currdate < 12) {
    data = "Good Morning";
    cssStyle.color = "grey";
  }
  return (
    <>
      <div className="container">
        <h1>
          Hey , <span style={cssStyle}>{data}</span>
        </h1>
      </div>
    </>
  );
}

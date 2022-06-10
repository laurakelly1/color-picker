import "./styles.css";
import React from "react";
import Form from "./components/Form";
import Display from "./components/Display";

export default function App() {
  //function to get a color
  const randomColor = () => {
    const randomColor = () => Math.floor(Math.random() * 256);
    let red = randomColor();
    let green = randomColor();
    let blue = randomColor();
    return `rgb(${red}, ${green}, ${blue})`;
  };

  //function to build ColorPicker
  const getColors = () => {
    let colorArray = [];

    //remove previous colors
    let blocks = document.querySelectorAll(".colorBlock");
    blocks.forEach((block) => block.remove());

    // gets 64 random colors
    for (let i = 0; i < 64; i++) {
      colorArray.push(randomColor());
    }
    colorPicker(colorArray);
  };

  // makes 64 blocks
  const colorPicker = (array) => {
    for (let i = 0; i < array.length; i++) {
      let block = document.createElement("div");
      block.className = "colorBlock";
      block.style.backgroundColor = array[i];
      document.getElementsByClassName("colorPicker")[0].appendChild(block);
    }
  };

  // Show colors on load
  React.useEffect(() => {
    getColors();
  });

  //This state will carry the choose color and pass it to the boxes
  const [color, setColor] = React.useState("Selected color");

  return (
    <div className="App">
      <h1>Color Picker</h1>
      <div className="colorPicker"></div>
      <div className="selected">
        <h2>{color}</h2>
        <div className="selectedBlock"></div>
      </div>

      <Form colorSearch={getColors} />
      <Display />
    </div>
  );
}

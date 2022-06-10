import "./styles.css";
import React from "react";
import Form from "./components/Form";
import Display from "./components/Display";
import ColorPicker from "./components/ColorPicker";

export default function App() {
  //This state will carry the choose color and pass it to the boxes
  const [color, setColor] = React.useState(null);

  //function to get a color
  const randomColor = () => {
    const randomColor = () => Math.floor(Math.random() * 256);
    let red = randomColor();
    let green = randomColor();
    let blue = randomColor();
    return `rgb(${red}, ${green}, ${blue})`;
  };

  //function to build ColorPicker
  let colorArray = [];
  const getColor = () => {
    // gets 64 random colors
    for (let i = 0; i < 64; i++) {
      colorArray.push(randomColor());
    }
    // makes 64 blocks
  };

  return (
    <div className="App">
      <h1>Color Picker</h1>
      <ColorPicker />
      <Form colorSearch={getColor} />
      <Display />
    </div>
  );
}

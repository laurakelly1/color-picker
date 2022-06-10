import React from "react";

const Form = ({ colorSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    colorSearch();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="submit" value="Generate new colors" />
    </form>
  );
};
export default Form;

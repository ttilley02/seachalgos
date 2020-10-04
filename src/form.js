import React from "react";

export default class Form extends React.Component {
   //adds note to the database for the current card
   handleSubmit = (ev) => {
      const { text } = ev.target;
      ev.preventDefault();
      console.log(text.value);
   };

   //create the text field for when you decide to enter a note
   render() {
      return (
         <form className="ReviewForm" onSubmit={this.handleSubmit}>
            <input></input>
            <div className="text">
               <input required placeholder="search..." name="search"></input>
            </div>
            <button type="submit">submit</button>
         </form>
      );
   }
}

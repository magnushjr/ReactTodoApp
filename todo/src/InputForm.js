import React from 'react'

class InputForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = { value: "" };
   }
	
   handleChange = (e) => {
      this.setState({ value: e.target.value });
   }
	
   onSubmit = (e) => {
      e.preventDefault();
      this.props.onSubmit(this.state.value);
      this.setState({ value: "" });
   }
	
   render() {
      return (
         <form>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <button onClick={this.onSubmit}>{this.props.prompt}</button>
         </form>
      )
   }
}

export default InputForm;
import React from 'react'
import InputForm from './InputForm'

class TodoList extends React.Component {
   constructor(props) {
      super(props);
      this.state = { items: [] };
   }
   
   addItem = (item) => {
      this.setState(prevState => ({
         items: prevState.items.concat([item])
      }));
   }
	
   render() {
      const countMsg = this.state.items.length === 1
         ? <p>You have {this.state.items.length} thing to do.</p>
         : <p>You have {this.state.items.length} things to do.</p>;
		
      return (
         <div>
            {countMsg}
            <ul>
               {this.state.items.map((item) =>
                  <li>{item}</li>
               )}
            </ul>
            <InputForm prompt="Add" onSubmit={this.addItem} />
         </div>
      );
   }
}

export default TodoList;

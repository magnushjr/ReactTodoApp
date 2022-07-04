import React, { useState } from 'react';
import InputForm from './InputForm';

function TodoList(props) {
   const [items, setItems] = useState(props.items ? props.items : []);
	
   const countMsg = items.length === 1
         ? <p>You have {items.length} thing to do.</p>
         : <p>You have {items.length} things to do.</p>;
		
   return (
      <div>
         {countMsg}
         <ul>
            {items.map((item, index) =>
               <li key={index}>{item}</li>
            )}
         </ul>
         <InputForm prompt="Add" onSubmit={(item) => setItems(items.concat([item]))} />
      </div>
   );
}

export default TodoList;

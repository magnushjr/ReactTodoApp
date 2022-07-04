import React, { useState } from 'react';

function InputForm(props) {
   const [value, setValue] = useState("");
   
   function onSubmit(e) {
      e.preventDefault();
      props.onSubmit(value);
      setValue("");
   }
   
   return (
      <form>
         <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
         <button onClick={onSubmit}>{props.prompt}</button>
      </form>
   );
}

export default InputForm;

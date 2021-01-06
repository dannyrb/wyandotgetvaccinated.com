import React from 'react';

const CustomDateInput = (props) => {
    const [value, setValue] = React.useState("");
    
    const handleChange = event => {
        let val = event.target.value;
        
        if (val){
            val = val.replace(/\D/g,'');
            if(val.length > 8) {
                val = val.slice(0, 8);
            }
            if(val.length > 2) {
                val = spliceSlice(val, 2, '/')
            }
            if(val.length > 5) {
                val = spliceSlice(val, 5, '/')
            }
        }

        setValue(val);
    }

    return (<input type="text" value={value} onChange={handleChange} {...props}></input>)
}

function spliceSlice(str, index, add) {
    // We cannot pass negative indexes directly to the 2nd slicing operation.
    if (index < 0) {
      index = str.length + index;
      if (index < 0) {
        index = 0;
      }
    }
  
    return str.slice(0, index) + (add || "") + str.slice(index);
  }

export default CustomDateInput;
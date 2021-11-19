import React from 'react'
import Popuppage from './popup';
import {Modal} from "@material-ui/core"

function Mainindex() {
    const [open, setOpen] = React.useState(false);
   const handleopen=()=>{
     setOpen(!open)
   }
  
    return (
        <div>
          <button onClick={handleopen}>popup</button>
         <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Popuppage></Popuppage>
      </Modal>
        </div>
    )
}

export default Mainindex

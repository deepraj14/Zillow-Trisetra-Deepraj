import React, { useState } from 'react';
import { Toast, Button, ToastContainer } from 'react-bootstrap';

function ToastComponent({showToast,setShowToast}) {
 

  const toggleToast = () => {
    setShowToast(!showToast);
  };

  return (
    <div>
      
      <ToastContainer position="top-center">
        <Toast show={showToast} onClose={toggleToast}>
          <Toast.Header>
            <strong className="me-auto">Warning</strong>
          </Toast.Header>
          <Toast.Body>
            Please enter a City, Neighborhood, ZIP, or Address
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default ToastComponent;
// import Toast from 'react-bootstrap/Toast';

// function BasicExample() {
//   return (
//     <Toast>
//       <Toast.Header>
//         <img src="" className="rounded me-2" alt="" />
//         <strong className="me-auto">Bootstrap</strong>
//         <small>11 mins ago</small>
//       </Toast.Header>
//       <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
//     </Toast>
//   );
// }

// export default BasicExample;
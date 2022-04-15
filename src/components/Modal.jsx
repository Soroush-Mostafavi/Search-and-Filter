import React from "react";
function Modal({closemodal,poster,movie}) {
  return (
    <div className="container modal"  >
         
          <div>
          <button
            className="btn modal-close "
            onClick={() => closemodal(false)}
          ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
        </svg> </button>
          <img
            width= "600vh"
            height= "760vh"
           
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
          </div>
    </div>
  
  );
}

export default Modal;

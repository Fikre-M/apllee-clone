// import React from 'react'
// // import "../../App"

// function Mac() {
//   return (
//      <div>
//         <section className="internal-page-wrapper top-100 bottom-100">
//           <div className="container">
//             <div className="row h-100 align-items-center justify-content-center text-center">
//               <div className="col-12">
//                 <h1 className="title-wraper bold" style={{ marginTop: '30px' }}>Mac Page</h1>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//   )
// }

// export default Mac
import React from "react";
// import "./Mac.css"; // Assuming you create a separate CSS file

function Mac() {
  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <h1 className="page title-wraper bold" style={{ marginTop: "65px" }}>
                Mac Page
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mac;

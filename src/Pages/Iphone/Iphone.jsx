import react from 'react';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function Iphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/js/iphone.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) =>
        console.error("Error unable to fetching product:", error)
      );
  }, []);

  console.log(products);

  let flip = true;

  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div
                className="page title-wraper bold"
                style={{ marginTop: "65px" }}
              >
                iPhones Page
              </div>
              <div className="page brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {products.map((product, index) => {
            let order1 = 1;
            let order2 = 2;
            if (flip) {
              order1 = 2;
              order2 = 1;
              flip = !flip;
            } else {
              flip = !flip;
            }

            return (
              <div
                key={index}
                className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="product-title">{product.product_name}</div>
                  <div className="product-brief">
                    {product.Product_brief_description}
                  </div>
                  <div className="starting-price">
                    {`Starting at ${product.Starting_price}`}
                  </div>
                  <div className="monthly-price">{product.Price_range}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={`/iphone/${product.product_url}`}>
                          Learn more
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="product-image">
                    <img src={product.Product_img} alt={product.product_name} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Iphone;




















// Alternative way to fetch data from JSON file

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// import '../../App.css'

// function Iphone() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/js/iphone.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data.products);
//       })
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);

//   console.log(products);

//   return (
//     <div>
//       <section className="internal-page-wrapper top-100">
//         <div className="container">
//           <div className="row justify-content-center text-center">
//             <div className="col-12">
//               <div
//                 className="page title-wraper bold"
//                 style={{ marginTop: "65px" }}
//               >
//                 iPhones Page
//               </div>
//               <div className="page brief-description">
//                 The best for the brightest.
//               </div>
//             </div>
//           </div>
//           {products.map((product, index) => {
//             // Ternary logic to determine order based on index
//             const order1 = index % 2 === 0 ? 2 : 1;
//             const order2 = index % 2 === 0 ? 1 : 2;

//             return (
//               <div
//                 key={index}
//                 className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
//               >
//                 <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
//                   <div className="product-title">{product.product_name}</div>
//                   <div className="product-brief">
//                     {product.Product_brief_description}
//                   </div>
//                   <div className="starting-price">{`Starting at ${product.Starting_price}`}</div>
//                   <div className="monthly-price">{product.Price_range}</div>
//                   <div className="links-wrapper">
//                     <ul>
//                       <li>
//                         <Link to={`/iphone/${product.product_url}`}>
//                           Learn more
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className={`col-sm-12 col-md-6 order-${order2}`}>
//                   <div className="product-image">
//                     <img src={product.Product_img} alt={product.product_name} />
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Iphone;





























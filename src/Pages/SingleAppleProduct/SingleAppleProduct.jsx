import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Four04 from "../Four04/Four04"

function SingleAppleProduct() {
    const [product, setProduct] = useState([]);
    const { productID } = useParams
    console.log(productID);

    useEffect(() => {
        fetch("/js/iphone.json")
        .then((res) => res.json())
        .then((data) => {
            const productList = data.product;
            // console.log(productList)
            const singleProduct = productList.filter(
            (product) => product.product_url === productID
            );//dont use === all the time 
            setProduct(singleProduct);
        });
    }, [productID]); //replace and try using product_name

    console.log (product);

    return (
        <div>
        <section className="internal-page-wrapper top-100">
            <div className="container">
            {product.map((product) => {

                return (
                <div key={product.product_url} className="bottom-100">
                    <div className="row justify-content-center text-center">
                    <div className="col-12 mt-5 pt-5">
                        <div className="title-wraper bold">{product.product_name}</div>
                        <div className="brief-description">
                        {product.product_brief_description}
                        </div>
                    </div>
                    </div>

                    <div className="row justify-content-center text-center product-holder h-100 m-5">
                    <div className={`col-sm-12 col-md-6 my-auto`}>
                        <div className="starting-price">
                        {`Starting at ${product.starting_price}`}
                        </div>
                        <div className="monthly-price">{product.price_range}</div>
                        <div className="product-details">{product.product_description}</div>
                    </div>

                    <div className={`col-sm-12 col-md-6`}>
                        <div className="prodict-image">
                        <img src={product.product_img} alt={product} />
                        </div>
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

export default SingleAppleProduct;









// import React, { useState, useEffect } from "react"; 
// import { useParams } from "react-router-dom";
// import Four04 from "../Four04/Four04"; // Assuming this is your 404 component

// function SingleAppleProduct() {
//   const [product, setProduct] = useState(null); // Initialize as null for better control
//   const { productID } = useParams(); // Corrected usage of useParams
//   console.log(productID);

//   useEffect(() => {
//     fetch("/js/iphone.json")
//       .then((res) => res.json())
//       .then((data) => {
//         // Assuming the JSON structure contains a "products" array
//         const productList = data.products; // Fixed "product" to "products"
//         const singleProduct = productList.find(
//           (product) => product.product_url === productID
//         );
//         setProduct(singleProduct);
//       })
//       .catch((error) => console.error("Error fetching product:", error)); // Added error handling
//   }, [productID]);

//   // Check if product exists, otherwise render 404 component
//   if (!product) {
//     return <Four04 />;
//   }

//   console.log(product);

//   return (
//     <div>
//       <section className="internal-page-wrapper top-100">
//         <div className="container">
//           <div className="row justify-content-center text-center">
//             <div className="col-12 mt-5 pt-5">
//               <div className="title-wraper bold">{product.product_name}</div>
//               <div className="brief-description">{product.Product_brief_description}</div>
//             </div>
//           </div>

//           <div className="row justify-content-center text-center product-holder h-100 m-5">
//             <div className={`col-sm-12 col-md-6 my-auto`}>
//               <div className="starting-price">{`Starting at ${product.Starting_price}`}</div>
//               <div className="monthly-price">{product.Price_range}</div>
//               <div className="product-details">{product.Product_description}</div>
//             </div>

//             <div className={`col-sm-12 col-md-6`}>
//               <div className="product-image">
//                 <img src={product.Product_img} alt={product.product_name} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default SingleAppleProduct;

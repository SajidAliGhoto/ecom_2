import React from "react";
import ProductDetails from "../components/ProductDetails/ProductDetails.jsx";

const ProductDetailPage = ({addToCart}) => {
     

    return (
        <ProductDetails addToCart={addToCart}/>
    );
}
export default ProductDetailPage;
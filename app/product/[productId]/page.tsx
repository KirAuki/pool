import React from 'react';
import Container from "../../components/Container";
import ProductDetails from "./ProductDetails";
import { product } from "@/app/utils/product";
import ProductReviews from "./ProductReviews";


const MemoizedProductDetails = React.memo(ProductDetails);
const MemoizedProductReviews = React.memo(ProductReviews);

interface IParams {
    productId?: string
}


const Product = ({params} : {params: IParams}) => {
    
    return ( 
        <div>
            <Container>
                    <MemoizedProductDetails product={product}/>
                    <MemoizedProductReviews  product={product}/>
            </Container>  
        </div>  
    );
}
 
export default Product;
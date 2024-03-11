import React from 'react';
import Container from "../../components/Container";
import ProductDetails from "./ProductDetails";
import ProductReviews from "./ProductReviews";
import { products } from '@/app/utils/products';


const MemoizedProductDetails = React.memo(ProductDetails);
const MemoizedProductReviews = React.memo(ProductReviews);

interface IParams {
    productId?: string
}


const Product = ({params} : {params: IParams}) => {
    
    const product = products.find((item) => item.id === params.productId)

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
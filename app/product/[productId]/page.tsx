import Container from "../../components/Container";
import ProductDetails from "./ProductDetails";
import { product } from "@/app/utils/product";
import ProductReviews from "./ProductReviews";

interface IParams {
    productId?: string
}



const Product = ({params} : {params: IParams}) => {

    
    return ( 
        <div>
            <Container>
                    <ProductDetails product={product}/>
                    <ProductReviews product={product}/>
            </Container>  
        </div>  
    );
}
 
export default Product;
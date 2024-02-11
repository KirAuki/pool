'use client';

import Heading from "@/app/components/Products/Heading/Heading";
import { Rating } from "@mui/material";
import moment from "moment";

interface ProductReviewsProps {
    product: any;
}


const ProductReviews: React.FC<ProductReviewsProps> = ({product}) => {
    return ( 
        <div className="product-reviews">
            <Heading title="Отзывы о продукте"/>
            <ul className="product-reviews__list">
                {product.reviews && product.reviews.map((review: any) => {
                    return <li key={review.id} className="product-reviews__item">
                        <div className="product-reviews__user">
                            <p className="product-reviews__username">{review?.user.name}</p>
                            <p className="product-reviews__date">{moment(review.createdDate).fromNow()}</p>  
                        </div>
                        <div className="product-reviews__content">
                            <Rating value={review.rating} readOnly/>
                            <p className="product-reviews__comment">{review.comment}</p>
                        </div>
                        <hr className="horizontal-line"/>
                    </li>
                }   
                )}
            </ul>
        </div> 
    
    );
}
 
export default ProductReviews;
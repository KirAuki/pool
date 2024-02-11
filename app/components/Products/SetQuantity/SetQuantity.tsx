'use client'

import { CartProductType } from "@/app/product/[productId]/ProductDetails";

interface SetQtyProps{
    cartCounter?: boolean;
    cartProduct: CartProductType;
    handleQtyIncrease: () => void;
    handleQtyDecrease: () => void;
}

const SetQuantity:React.FC<SetQtyProps> = ({
    cartCounter,
    cartProduct,
    handleQtyIncrease,
    handleQtyDecrease,
}) => {
    return ( 
        <div className="product-details__quantity">
            {cartCounter ? null : <p>Количество:</p>}
            <div className="quantity__controls">
                <button onClick={handleQtyDecrease}>-</button>
                <div>{cartProduct.quantity}</div>
                <button onClick={handleQtyIncrease}>+</button>
            </div>
        </div>
        
     );
}
 
export default SetQuantity;
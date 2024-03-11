import Link from "next/link";
import { CartProductType } from "../product/[productId]/ProductDetails";
import { formatPrice } from "../utils/formatPrice";
import { truncateText } from "../utils/truncateText";
import Image from "next/image";
import SetQuantity from "../components/Products/SetQuantity/SetQuantity";
import { useCart } from "@/hooks/useCart";

interface ItemContentProps{
    item: CartProductType
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {

    const {handleRemoveProductFromCart , handleCartQtyIncrease , handleCartQtyDecrease} = useCart()
    return ( 
    <li className="cart-client__item item">
        <div className="item__product"> 
            <Link href={`/product/${item.id}`} className="item__image-link" >
                    <Image className="item__image" src={item.image} alt={item.name} fill/>
            </Link>
            <div className="item__info">
                <Link href={`/product/${item.id}`}>
                    {truncateText(item.name)}  
                </Link>
                <button className="item__remove-btn" onClick={() => 
                    handleRemoveProductFromCart(item)
                }>Удалить</button>
            </div>
        </div>
        <div className="item__price">{formatPrice(item.price)}</div>
        <div className="item__quantity">
            <SetQuantity 
            cartCounter={true} 
            cartProduct={item}
            handleQtyDecrease={()=> handleCartQtyDecrease(item)}
            handleQtyIncrease={()=> handleCartQtyIncrease(item)}/>
        </div>
        <div className="item__total">{formatPrice(item.price * item.quantity)}</div>
    </li> 
    );
}
 
export default ItemContent;
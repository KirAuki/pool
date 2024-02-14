import { CartProductType } from "../product/[productId]/ProductDetails";
import { formatPrice } from "../utils/formatPrice";

interface ItemContentProps{
    item: CartProductType
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
    return ( 
    <li className="cart-client__item">
        <div className="cart-client__product"></div>
        <div className="cart-client__price">{formatPrice(item.price)}</div>
        <div className="cart-client__quantity"></div>
        <div className="cart-client__total"></div>
    </li> 
    );
}
 
export default ItemContent;
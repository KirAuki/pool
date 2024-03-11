'use client'

import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Products/Heading/Heading";
import CustomButton from "../components/CustomButton/CustomButton";
import ItemContent from "./ItemContent";
import { formatPrice } from "../utils/formatPrice";

const CartClient = () => {
    const {cartProducts , handleClearCart ,cartTotalAmount} = useCart();

    if(!cartProducts || cartProducts.length === 0) {
        return (
            <div className="cart-client cart-client--empty">
                <p>Корзина пуста</p>
                    <Link href={"/"} className="cart-client__link">
                        <MdArrowBack/>
                        <span>Перейти к покупкам</span>
                    </Link>
            </div>
        )
    }

    return ( 
        <div className="cart-client">
            <Heading title="Корзина" center/>
            <div className="cart-client__headers">
                <p style={{justifySelf: 'start', gridColumn:'span 2 / span 2'}}>Товар</p>
                <p style={{justifySelf: 'center'}}>Цена</p>
                <p style={{justifySelf: 'center'}}>Количество</p>
                <p style={{justifySelf: 'end'}}>Сумма</p>
            </div>
            <ul className="cart-client__list">
                {cartProducts && cartProducts.map((item) => {
                    return <ItemContent key={item.id} item={item}/>
                })}
            </ul>
            <div className="cart-client__actions">
                <div className="cart-client__clear">
                    <CustomButton label="Очистить корзину" onClick={() => handleClearCart()} alternative small/>
                </div>
                <div className="cart-client__payment-info">
                    <div className="cart-client__subtotal">
                        <span>Общая стоимость</span>
                        <span>{formatPrice(cartTotalAmount)}</span>
                    </div>
                    <CustomButton label="Оплатить" onClick={() => {}}/>
                    <Link href={"/"} className="cart-client__link">
                            <MdArrowBack/>
                            <span>Перейти к покупкам</span>
                    </Link>
                </div> 
            </div> 
        </div> 
    );
}
 
export default CartClient;
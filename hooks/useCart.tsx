import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import {toast} from 'react-hot-toast';


type CartContextType = {
    cartTotalQty: number;
    cartProducts: CartProductType[] | null;
    handleAddProductToCart: (product: CartProductType) => void;
}

interface Props {
    [propName: string]: any;
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = (props: Props) => {

    const [cartTotalQty , setCartTotalQty] = useState(20)
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null)


    useEffect(() => {
        const cartItems: any = localStorage.getItem('PoolShopCartItems')
        const cProducts: CartProductType[] | null = JSON.parse(cartItems)
    
        setCartProducts(cProducts)
    }, [])
    

    const handleAddProductToCart = useCallback((product: CartProductType) => {
        setCartProducts((prev) =>{
            let updatedCart;

            if(prev){
                updatedCart = [...prev, product]
            }else{
                updatedCart = [product]
            }

            toast.success('Добавлено в корзину' , {id: 'addedtocart',})
            localStorage.setItem('PoolShopCartItems', JSON.stringify(updatedCart))
            return updatedCart
        })
    }, [])

    const value = {
        cartTotalQty,
        cartProducts,
        handleAddProductToCart,
    }


    return <CartContext.Provider value={value} {...props}/>
}

export const useCart = () =>{
    const context = useContext(CartContext);

    if(context === null) {
        throw new Error("useCart должен использоваться внутри CartContextProvider")
    }

    return context
}
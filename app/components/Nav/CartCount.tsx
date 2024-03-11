'use client';

import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { CiShoppingCart } from "react-icons/ci";

const CartCount = () => {


    const { cartTotalQty } = useCart();
    const router = useRouter();


    return ( 
        <div className="nav-menu__cart-count" onClick={() => router.push('/cart')}>
            <CiShoppingCart/>
            <span>{cartTotalQty}</span>
        </div>
     );
}
 
export default CartCount;
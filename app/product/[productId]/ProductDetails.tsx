'use client';

import CustomButton from "@/app/components/CustomButton/CustomButton";
import ProductGallery from "@/app/components/Products/ProductGallery/ProductGallery";
import SetQuantity from "@/app/components/Products/SetQuantity/SetQuantity";
import { useCart } from "@/hooks/useCart";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { MdCheckCircle } from "react-icons/md";

interface ProductDetailsProps {
    product: any;
}

export type CartProductType = {
    id: string,
    name: string,
    description: string,
    category: string,
    producer: string,
    image: string,
    quantity: number,
    price: number,
}


const Horizontal = () => {
    return <hr className="horizontal-line"/>
}

const ProductDetails:React.FC<ProductDetailsProps> = ({product}) => {
    const {cartTotalQty} = useCart()
    const {handleAddProductToCart, cartProducts} = useCart()
    const [isProductInCart, setIsProductInCart] = useState(false);
    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        producer: product.producer,
        image: product.images[0].image,
        quantity: 1,
        price: product.price,
    })

    const router = useRouter()

    console.log( cartProduct )

    useEffect(() => {
        if(cartProducts){
            const existingIndex = cartProducts.findIndex((item) => item.id === product.id)

            if(existingIndex > -1) {
                setIsProductInCart(true);
            }
        }
    }, [cartProducts])

    const productRating = product.reviews.reduce((acc: number,item: any) => 
    item.rating + acc, 0) / product.reviews.length
    
    let reviews;

    if (product.reviews.length === 1) {
            reviews = "1 отзыв";
        } else if (product.reviews.length > 1 && product.reviews.length < 5) {
            reviews = `${product.reviews.length} отзыва`;
        } else if (product.reviews.length >= 5) {
            reviews = `${product.reviews.length} отзывов`;
        } else {
            reviews = "Нет отзывов";
    };

    const handleQtyDecrease = useCallback(() => {

        if(cartProduct.quantity === 1){
            return;
        }

        setCartProduct((prev) => {
            return {...prev, quantity: prev.quantity - 1};
        });
    }, [cartProduct]);

    const handleQtyIncrease = useCallback(() => {
        setCartProduct((prev) => {
            return {...prev, quantity: prev.quantity + 1};
        });
    }, [cartProduct]);


    return ( 
        <div className="product-details">
            <ProductGallery cartProduct={cartProduct} product={product}/>
            <div className="product-details__info">
                <h2 className="product-details__name">{product.name}</h2>
                <div className="product-details__reviews">
                    <Rating value={productRating} readOnly/>
                    <div>{reviews}</div>
                </div>
                <Horizontal />
                <p className="product-details__desc">{product.description}</p>
                <Horizontal />
                <p>
                    <span>Категория:</span> {product.category}
                </p>
                <p>
                    <span>Производитель:</span> {product.producer}
                </p>
                <p className={product.inStock ? "instock" : "notinstock"}>
                    {product.inStock ? "В наличии" : "Нет в наличии"}
                </p>
                <div className="product-details__controls">
                    <Horizontal />
                    {isProductInCart ? (
                        <>
                        <p className="product-details__message">
                            <MdCheckCircle size={20}/>
                            <span>Товар добавлен в корзину</span>
                        </p>
                        <div className="product-details__gotocart">
                            <CustomButton label="Перейти в корзину" alternative onClick={() => {
                                router.push('/cart')
                            }}/>
                        </div>
                        </>
                    
                    ) : (
                        <>
                            <SetQuantity 
                                cartProduct={cartProduct}
                                handleQtyDecrease={handleQtyDecrease}
                                handleQtyIncrease={handleQtyIncrease}
                            />
                            <Horizontal />
                            <div className="product-details__addtocart">
                                <CustomButton label="Добавить в корзину" onClick={() => handleAddProductToCart(cartProduct)}/>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div> )
}
 
export default ProductDetails;
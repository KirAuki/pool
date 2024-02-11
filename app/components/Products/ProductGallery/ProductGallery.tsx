'use client';

import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import Image from 'next/image';
import { useState } from "react";

interface ProductGalleryProps{
    cartProduct: CartProductType,
    product: {
        images: { image: string }[]
    },
}


const ProductGallery: React.FC<ProductGalleryProps> = ( {cartProduct,product} ) => {

    const [selectedImgIndex, setSelectedImgIndex] = useState(0);
    const handleImgSelect = (index: number) => {
        setSelectedImgIndex(index);
    };

    return <div className="product-gallery">
        <div className="product-gallery__container">
            {product.images.map((image, index) => {
                return <div key={index} className={`product-gallery__select ${ index === selectedImgIndex ? 'selected' : ''}`} onClick={() => handleImgSelect(index)}>
                    <Image src={image.image} alt={cartProduct.name} fill/>
                </div>
            })}
        </div>
        <div className="product-gallery__main-img">
            <Image src={product.images[selectedImgIndex].image}  alt={cartProduct.name} fill/>
        </div>        
    </div>;
}
 
export default ProductGallery;
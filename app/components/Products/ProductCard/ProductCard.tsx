'use client';
import { formatPrice } from '@/app/utils/formatPrice';
import { truncateText } from '@/app/utils/truncateText';
import { Rating } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


interface ProductCardProps{
    product: any
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {

    const router = useRouter()

    const productRating = product.reviews.reduce((acc: number,item: any) => item.rating + acc, 0) / product.reviews.length

    return ( 
        <div className="product-card" onClick={() => router.push(`/product/${product.id}`)}>
            <div className="product-card__content">
                <div className="image__container">
                    <Image 
                    fill 
                    src={product.images[0].image}
                    alt={product.name}
                    className="product-card__image"
                    />
                </div>
                <p className="product-card__name">{truncateText(product.name)}</p>
                <div className="product-card__reviews"><Rating value={productRating} readOnly/></div>
                <div className="product-card__price">{formatPrice(product.price)}</div>
            </div>
        </div>
    );
}
 
export default ProductCard;
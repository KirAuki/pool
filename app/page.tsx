import { products } from "./utils/products";
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import { truncateText } from "./utils/truncateText";
import ProductCard from "./components/Products/ProductCard/ProductCard";

export default function Home() {
    return (
            <Container>
                <div>
                    <HomeBanner/>
                </div>
                <div className="products-list">
                    {products.map((product:any) => {
                        return <ProductCard product={product}/>
                    })}
                </div>
            </Container>
    );
}

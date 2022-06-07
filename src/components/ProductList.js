import styled from 'styled-components';
import ProductGrid from './ProductGrid';

function ProductList() {
    const ProductList = styled.div`
        display: flex;
        justify-content: flex-start;
        gap: 15px;
        padding: 50px 0;
        flex-wrap: wrap;
    `;

    return (
      <ProductList className="product-list container">
        <ProductGrid />
        <ProductGrid />
        <ProductGrid />
        <ProductGrid />
        <ProductGrid />
        <ProductGrid />
        <ProductGrid />
        <ProductGrid />
        <ProductGrid />
        <ProductGrid />
        <ProductGrid />
        <ProductGrid />
      </ProductList>
    );
}

export default ProductList;

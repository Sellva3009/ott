import styled from 'styled-components';

function ProductGrid() {
    const ProductGrid = styled.div`
      width: 155px;
      height: 270px;
      position: relative;
      display: block;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.5s ease-out;
      img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
      .grid-detail {
        display: none;
        position: absolute;
        content: "";
        bottom: 0;
        left: 0;
        padding: 10px;
        color: #fff;
        font-size: 12px;
        transition: all 0.5s ease-out;
        background: rgba(0, 0, 0, 0.7);
        -webkit-transform-style: preserve-3d;
        -webkit-backface-visibility: hidden;
        .title {
          font-size: 16px;
        }
        .title,
        .category,
        .content {
          margin-bottom: 5px;
        }
      }
      &:hover {
        transform: scale(1.2);
        z-index: 9;
        .grid-detail {
          display: block;
          border-radius: 0 0 10px 10px;
        }
      }
    `;

    return (
      <ProductGrid className="product-grid">
        <img
          src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7802/1257802-v-f35b2ba79ec1"
          alt=""
        />
        <div className="grid-detail">
          <h6 className="title">Vikram</h6>
          <div className="category">Drama</div>
          <div className="content">Lorem ipsum dolor sit amet consectet</div>
          <div className="wishlist">Add to Wishlist</div>
        </div>
      </ProductGrid>
    );
}

export default ProductGrid;
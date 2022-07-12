import React from 'react';
import { StyledWrapper } from './ProductItem.style';
import { test, cart1, search1, heart1 } from '~/assets';
import { IconList } from '~/components';

interface IProduct {
    products: {
        id?: number;
        category_id?: number;
        name?: string;
        code?: string;
        price: number;
        description?: string;
        discount: number;
        created_at?: string;
        updated_at?: string;
        category?: {
            id?: number;
            name?: string;
            created_at?: string;
            updated_at?: string;
        };
        images?: any;
    };
}

const ProductItem = ({ products }: IProduct) => {
    console.log(products);
    const discountedPrice = (products.price / 100) * (100 - products.discount);

    return (
        <StyledWrapper>
            <div className="product-img">
                <img src={products.images[0].image_url} alt="" />
            </div>
            <div className="product-item-content">
                <div className="product-title">
                    <h3>{products.name}</h3>
                    <span className="dot dot1"></span>
                    <span className="dot dot2"></span>
                    <span className="dot dot3"></span>
                </div>
                <span className="price ">${discountedPrice}</span>
                <span className="price old-price">${products.price}</span>
                <p className="product-desc">{products.description}</p>
                <div className="product-icon">
                    <IconList active>
                        <img src={cart1} alt="" />
                    </IconList>
                    <IconList className="product-icon-heart">
                        <img src={heart1} alt="" />
                    </IconList>
                    <IconList>
                        <img src={search1} alt="" />
                    </IconList>
                </div>
            </div>
        </StyledWrapper>
    );
};

export default ProductItem;

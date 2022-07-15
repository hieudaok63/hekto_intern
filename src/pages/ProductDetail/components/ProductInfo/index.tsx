import React from 'react';
import { StyledWrapper } from './ProductInfo.style';
import { test, star, heart1, facebook, insta, twitter } from '~/assets';
import { Button } from '~/components';

function ProductInfo() {
    return (
        <StyledWrapper>
            <div className="product-info-img">
                <div className="info-img-left">
                    <img src={test} alt="" />
                    <img src={test} alt="" />
                    <img src={test} alt="" />
                </div>
                <div className="info-img-right">
                    <img src={test} alt="" />
                </div>
            </div>
            <div className="product-info-content">
                <h3>Playwood arm chair</h3>
                <div className="info-content-star">
                    <img src={star} alt="" /> <span>(22)</span>
                </div>
                <span className="new-price">$32.00</span>
                <span className="old-price">$32.00</span>
                <p className="info-content-color">Color</p>
                <p className="info-content-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris tellus porttitor purus, et volutpat sit.
                </p>
                <div className="info-content-add">
                    <Button>Add to cart</Button>
                    <span>
                        <img src={heart1} alt="" />
                    </span>
                </div>
                <p className="info-content-category">Categories:</p>
                <p className="info-content-category">Tags</p>
                <div className="info-content-social">
                    <span className="info-content-search">Share</span>
                    <span>
                        <img src={facebook} alt="" />
                        <img src={insta} alt="" />
                        <img src={twitter} alt="" />
                    </span>
                </div>
            </div>
        </StyledWrapper>
    );
}

export default ProductInfo;

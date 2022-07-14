import React from 'react';
import { StyledFeaturedWrapper } from './Featured.style';
import { img, heart1, cart1, search1 } from '~/assets';
import { Button, IconList } from '~/components';

const FeaturedProducts = () => {
    return (
        <StyledFeaturedWrapper>
            <div className="feature-item">
                <div className="feature-item-img">
                    <img src={img} alt="" />
                    <Button position="absolute" height="2.9rem">
                        View Details
                    </Button>
                    <div className="feature-item-icon">
                        <IconList>
                            <img src={cart1} alt="" />
                        </IconList>
                        <IconList>
                            <img src={heart1} alt="" />
                        </IconList>
                        <IconList>
                            <img src={search1} alt="" />
                        </IconList>
                    </div>
                </div>
                <div className="feature-item-content">
                    <p>Cantilever chair</p>
                    <div className="feature-item-dot">
                        <span className="dot1 "></span>
                        <span className="dot2 "></span>
                        <span className="dot3"></span>
                    </div>
                    <div className="feature-item-code">Code - Y523201</div>
                    <div className="feature-item-price">$42.00</div>
                </div>
            </div>
        </StyledFeaturedWrapper>
    );
};

export default FeaturedProducts;

import React from 'react';
import {
    StyledFeaturedBody,
    StyledFeaturedWrapper,
    Wrapper,
} from './Featured.style';
import { img } from '~/assets';

const FeaturedProducts = () => {
    return (
        <Wrapper>
            <StyledFeaturedBody>
                <StyledFeaturedWrapper>
                    <div className="feature-item">
                        <div className="feature-item-img">
                            <img src={img} alt="" />
                        </div>
                        <div className="feature-item-content">
                            <p>Cantilever chair</p>
                        </div>
                    </div>
                </StyledFeaturedWrapper>
            </StyledFeaturedBody>
        </Wrapper>
    );
};

export default FeaturedProducts;

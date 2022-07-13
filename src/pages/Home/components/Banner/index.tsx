import React from 'react';
import { StyledBody, Wrapper } from './Banner.style';
import { light, banner } from '~/assets';
import { Button } from '~/components';

const Banner = () => {
    return (
        <Wrapper>
            <StyledBody>
                <div className="banner-light">
                    <img src={light} alt="" />
                </div>
                <div className="banner-right">
                    <span>Best Furniture For Your Castle....</span>
                    <h1>New Furniture Collection Trends in 2020</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Magna in est adipiscing in phasellus non in justo.
                    </p>

                    <Button
                        width="163px"
                        height="50px"
                        backgroundColor="var(--primary)"
                        borderRadius="3px"
                    >
                        Shop Now
                    </Button>
                </div>
                <div className="banner-left">
                    <img src={banner} alt="" />
                </div>
            </StyledBody>
        </Wrapper>
    );
};

export default Banner;

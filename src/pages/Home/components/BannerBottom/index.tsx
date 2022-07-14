import React from 'react';
import { Wrapper } from './BannerBottom.style';
import { bannerbottom } from '~/assets';
import { Button } from '~/components';

function BannerBottom() {
    return (
        <Wrapper>
            <div className="banner-img">
                <img src={bannerbottom} alt="" />
            </div>
            <div className="banner-content">
                <h1 className="banner-content-heading">
                    Unique Features Of leatest & Trending Poducts
                </h1>
                <div className="banner-content-desc">
                    <span className="content-desc-dot1"></span>
                    <p className="content-desc-text">
                        All frames constructed with hardwood solids and
                        laminates
                    </p>
                </div>
                <div className="banner-content-desc">
                    <span className="content-desc-dot2"></span>

                    <p className="content-desc-text">
                        Reinforced with double wood dowels, glue, screw - nails
                        corner blocks and machine nails
                    </p>
                </div>
                <div className="banner-content-desc">
                    <span className="content-desc-dot3"></span>

                    <p className="content-desc-text">
                        Arms, backs and seats are structurally reinforced
                    </p>
                </div>
                <div className="banner-content-bottom">
                    <Button>Add To Cart</Button>
                    <div className="content-bottom-info">
                        <p>B&B Italian Sofa </p>
                        <span>$32.00</span>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default BannerBottom;

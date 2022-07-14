import React from 'react';
import { Wrapper } from './Leatest.style';
import { latest, sale, search2, cart2, heart2 } from '~/assets';
import { IconList } from '~/components';

function LeatestProducts() {
    return (
        <Wrapper>
            <div className="leates-img">
                <img src={latest} alt="" />
                <div className="latest-sale">
                    <img src={sale} alt="" />
                </div>
                <div className="latest-icon">
                    <IconList>
                        <img src={cart2} alt="" />
                    </IconList>
                    <IconList>
                        <img src={heart2} alt="" />
                    </IconList>
                    <IconList>
                        <img src={search2} alt="" />
                    </IconList>
                </div>
            </div>
            <div className="leates-info">
                <p>Comfort Handy Craft</p>
                <div className="leates-info-price">
                    <span className="info-price-new">$42.00</span>
                    <span className="info-price-old">$65.00</span>
                </div>
            </div>
        </Wrapper>
    );
}

export default LeatestProducts;

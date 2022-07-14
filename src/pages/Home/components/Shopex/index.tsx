import React from 'react';
import { Wrapper } from './Shopex.style';
import { freeDelivery, search1, cashback, premium, hours } from '~/assets';

function Shopex() {
    return (
        <Wrapper>
            <div className="shopex-icon">
                <img src={freeDelivery} alt="" />
            </div>
            <h3 className="shopex-support-text">24/7 Support</h3>
            <p className="shopex-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
            </p>
        </Wrapper>
    );
}

export default Shopex;

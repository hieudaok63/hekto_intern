import React from 'react';
import { Wrapper } from './Tranning.style';
import { img } from '~/assets';

function Tranning() {
    return (
        <Wrapper>
            <div className="tranning-img">
                <img src={img} alt="" />
            </div>

            <p className="tranning-heading">Cantilever chair</p>

            <span className="price-new">$26.00 </span>
            <span className="price-old">$42.00 </span>
        </Wrapper>
    );
}

export default Tranning;

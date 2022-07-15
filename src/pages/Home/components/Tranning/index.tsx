import React from 'react';
import { Wrapper } from './Tranning.style';
import { img } from '~/assets';
import { ITrending } from '../..';

interface IPropsDataTrending {
    trending: ITrending;
}

function Tranning({ trending }: IPropsDataTrending) {
    const newPrice = trending.discount
        ? trending.price - trending.price * (trending.discount / 100)
        : trending.price;

    const thumbnail = trending.images.find(
        (image: { is_thumbnail: any }) => image.is_thumbnail,
    );

    return (
        <Wrapper>
            <div className="tranning-img">
                <img src={`${thumbnail?.image_url}`} alt="" />
            </div>

            <p className="tranning-heading">{trending.name}</p>

            <span className="price-new">{newPrice} </span>
            <span className="price-old">{trending.price}</span>
        </Wrapper>
    );
}

export default Tranning;

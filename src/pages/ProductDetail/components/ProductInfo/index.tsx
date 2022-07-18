import { useMemo } from 'react';
import { StyledWrapper } from './ProductInfo.style';
import { star, heart1, facebook, insta, twitter } from '~/assets';
import { Button } from '~/components';
import { IProductInfo as IdProductInfoProps } from '../..';

interface IProductInfoData {
    data?: IdProductInfoProps;
}
interface IImage {
    id: number;
    is_thumbnail: boolean;
    image_url: string;
}

function ProductInfo({ data }: IProductInfoData) {
    const newPrice = useMemo(() => {
        const result = data?.discount
            ? data.price - data.price * (data.discount / 100)
            : data?.price;

        return result;
    }, [data?.price, data?.discount]);
    const images = data?.images.filter((image) => !image.is_thumbnail);
    const thumbnail = data?.images.find((image) => image.is_thumbnail);

    return (
        <StyledWrapper>
            <div className="product-info-img">
                <div className="info-img-left">
                    {images?.map((image: IImage) => (
                        <img src={image.image_url} alt="" key={image.id} />
                    ))}
                </div>
                <div className="info-img-right">
                    <img src={thumbnail?.image_url} alt="" />
                </div>
            </div>
            <div className="product-info-content">
                <h3>{data?.name}</h3>
                <div className="info-content-star">
                    <img src={star} alt="" /> <span>(22)</span>
                </div>
                <span className="new-price">${newPrice}</span>
                <span className="old-price">${data?.price}</span>
                <p className="info-content-color">Color</p>
                <p className="info-content-desc">{data?.description}</p>
                <div className="info-content-add">
                    <Button>Add to cart</Button>
                    <span>
                        <img src={heart1} alt="" />
                    </span>
                </div>
                <p className="info-content-category">
                    Categories:{data?.category.name}
                </p>
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

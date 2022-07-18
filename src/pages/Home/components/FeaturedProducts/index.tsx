import { StyledFeaturedWrapper } from './Featured.style';
import { heart1, cart1, search1 } from '~/assets';
import { Button, IconList } from '~/components';

interface IPropsData {
    data: {
        [x: string]: any;
        id: number;
        name: string;
        price: number;
        code: string;
        discount: number;
    };
}

const FeaturedProducts = ({ data }: IPropsData) => {
    const price = data.discount
        ? data.price * (1 - data.discount / 100)
        : data.price;

    const thumbnail = data.images.find(
        (image: { is_thumbnail: boolean }) => image.is_thumbnail,
    );
    return (
        <StyledFeaturedWrapper>
            <div className="feature-item">
                <div className="feature-item-img">
                    <img src={`${thumbnail?.image_url}`} alt="" />

                    <Button position="absolute" height="2.9rem">
                        <span>View Details</span>
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
                    <p>{data.name}</p>
                    <div className="feature-item-dot">
                        <span className="dot1 "></span>
                        <span className="dot2 "></span>
                        <span className="dot3"></span>
                    </div>
                    <div className="feature-item-code">Code - {data.code}</div>
                    <div className="feature-item-price">{price}</div>
                </div>
            </div>
        </StyledFeaturedWrapper>
    );
};

export default FeaturedProducts;

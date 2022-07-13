import { StyledWrapper } from './ProductItem.style';
import { cart1, search1, heart1 } from '~/assets';
import { IconList } from '~/components';

interface IProduct {
    data: {
        followed: boolean | undefined;
        id?: number;
        category_id?: number;
        name?: string;
        code?: string;
        price: number;
        description?: string;
        discount: number;
        created_at?: string;
        updated_at?: string;
        category?: {
            id?: number;
            name?: string;
            created_at?: string;
            updated_at?: string;
        };
        images?: any;
    };
    onClickHeart?: () => void;
}

const ProductItem = ({ data, onClickHeart }: IProduct) => {
    const discountedPrice = (data.price / 100) * (100 - data.discount);

    return (
        <StyledWrapper>
            <div className="product-img">
                <img src={data.images[0].image_url} alt="" />
            </div>
            <div className="product-item-content">
                <div className="product-title">
                    <h3>{data.name}</h3>
                    <span className="dot dot1"></span>
                    <span className="dot dot2"></span>
                    <span className="dot dot3"></span>
                </div>
                <span className="price ">${discountedPrice}</span>
                <span className="price old-price">${data.price}</span>
                <p className="product-desc">{data.description}</p>
                <div className="product-icon">
                    <IconList>
                        <img src={cart1} alt="" />
                    </IconList>
                    <IconList
                        onClick={onClickHeart}
                        active={data.followed}
                        className="product-icon-heart"
                    >
                        <img src={heart1} alt="" />
                    </IconList>
                    <IconList>
                        <img src={search1} alt="" />
                    </IconList>
                </div>
            </div>
        </StyledWrapper>
    );
};

export default ProductItem;

import { Wrapper } from './Leatest.style';
import { search2, cart2, heart2 } from '~/assets';
import { IconList } from '~/components';
import { ILatest as ILatestList } from '../..';

interface IData {
    latest: ILatestList;
}

function LeatestProducts({ latest }: IData) {
    const newPrice = latest.discount
        ? latest.price - latest.price * (latest.discount / 100)
        : latest.price;

    const thumbnail = latest.images.find(
        (image: { is_thumbnail: any }) => image.is_thumbnail,
    );

    return (
        <Wrapper>
            <div className="leates-img">
                {/* <img src={latest1} alt="" /> */}
                <div className="latest-sale">
                    <img src={`${thumbnail?.image_url}`} alt="" />
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
                <p>{latest.name}</p>
                <div className="leates-info-price">
                    <span className="info-price-new">{newPrice}</span>
                    <span className="info-price-old">{latest.price}</span>
                </div>
            </div>
        </Wrapper>
    );
}

export default LeatestProducts;

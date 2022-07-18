import { RelatedWrapper } from './ProductRelated.style';
import { star } from '~/assets';
import { IRelated as IRelatedProps } from '../..';

interface IRelatedPropsData {
    relatedData: IRelatedProps;
}

function ProductRelated({ relatedData }: IRelatedPropsData) {
    const images = relatedData.images.find((image) => image.is_thumbnail);
    return (
        <RelatedWrapper>
            <div className="related-img">
                <img src={images?.image_url} alt="" />
            </div>
            <div className="related-name">
                <span className="related-heading-text">{relatedData.name}</span>
                <span>
                    <img src={star} alt="" />
                </span>
            </div>
            <p className="related-price">${relatedData.price}</p>
        </RelatedWrapper>
    );
}

export default ProductRelated;

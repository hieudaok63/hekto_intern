import { RelatedWrapper } from './ProductRelated.style';
import { test, star } from '~/assets';

function ProductRelated() {
    return (
        <RelatedWrapper>
            <div className="related-img">
                <img src={test} alt="" />
            </div>
            <div className="related-name">
                <span className="related-heading-text">Mens Fashion Wear</span>
                <span>
                    <img src={star} alt="" />
                </span>
            </div>
            <p className="related-price">$43.00</p>
        </RelatedWrapper>
    );
}

export default ProductRelated;

import { SetStateAction, useState } from 'react';
import config from '~/config';
import { BrandList, HeadingPage } from '~/components';
import { Wrapper } from './ProductDetail.style';
import ProductInfo from './components/ProductInfo';
import ProductRelated from './components/ProductRelated';

const DESCRIPTION = 'DESCRIPTION';
const ADDITIONAL_INFO = 'ADDITIONAL_INFO';
const REVIEWS = 'REVIEWS';
const VIDEO = 'VIDEO';

const breadcrumb = [
    {
        name: 'Home',
        path: config.routes.home,
    },
    {
        name: 'Pages',
        path: config.routes.page,
    },
    {
        name: 'Product detail',
        path: config.routes.productdetail,
    },
];
const ProductDetail = () => {
    const [tab, setTab] = useState<string>(DESCRIPTION);
    const switchTab = (key: SetStateAction<string>) => {
        setTab(key);
    };

    const renderContent = () => {
        switch (tab) {
            case DESCRIPTION:
                return <div>description</div>;
            case ADDITIONAL_INFO:
                return <div>Additional info</div>;
            case REVIEWS:
                return <div>Review</div>;
            case VIDEO:
                return <div>Video</div>;
            default:
        }
    };

    return (
        <Wrapper>
            <div className="product-detail">
                <HeadingPage breadcrumb={breadcrumb} title="Product Details" />
            </div>

            <div className="product-info">
                <ProductInfo />
            </div>

            <div className="product-tab">
                <div className="product-tab-menu">
                    <span
                        className={`tab-menu-text ${
                            tab === DESCRIPTION ? 'active' : ''
                        }`}
                        onClick={() => switchTab(DESCRIPTION)}
                    >
                        Description
                    </span>
                    <span
                        className={`tab-menu-text ${
                            tab === ADDITIONAL_INFO ? 'active' : ''
                        }`}
                        onClick={() => switchTab(ADDITIONAL_INFO)}
                    >
                        Additional Info
                    </span>
                    <span
                        className={`tab-menu-text ${
                            tab === REVIEWS ? 'active' : ''
                        }`}
                        onClick={() => switchTab(REVIEWS)}
                    >
                        Reviews
                    </span>
                    <span
                        className={`tab-menu-text ${
                            tab === VIDEO ? 'active' : ''
                        }`}
                        onClick={() => switchTab(VIDEO)}
                    >
                        Video
                    </span>
                    <div className="render-contenr">{renderContent()}</div>
                </div>
            </div>

            <div className="product-related">
                <h3 className="related-heading">Related Products</h3>
                <div className="product-related-list">
                    <ProductRelated />
                    <ProductRelated />
                    <ProductRelated />
                    <ProductRelated />
                </div>
                <div className="product-related-brand">
                    <BrandList />
                </div>
            </div>
        </Wrapper>
    );
};

export default ProductDetail;

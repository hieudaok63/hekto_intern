import { SetStateAction, useEffect, useState } from 'react';
import { productApi } from '~/api';
import config from '~/config';
import { BrandList, HeadingPage } from '~/components';
import { Wrapper } from './ProductDetail.style';
import ProductInfo from './components/ProductInfo';
import ProductRelated from './components/ProductRelated';
import { useParams } from 'react-router-dom';

const DESCRIPTION = 'DESCRIPTION';
const ADDITIONAL_INFO = 'ADDITIONAL_INFO';
const REVIEWS = 'REVIEWS';
const VIDEO = 'VIDEO';

export interface IProductInfo {
    description: string;
    name: string;
    id: number;
    price: number;
    discount: number;

    images: {
        id: number;
        is_thumbnail: boolean;
        image_url: string;
    }[];

    category: {
        id: number;
        name: string;
    };
}

interface Imenu {
    additional_info: string;
    description: string;
    reviews: string;
    video: string;
}

export interface IRelated {
    image_url: string | undefined;
    id: number;
    name: string;
    price: number;

    images: {
        is_thumbnail: unknown;
        id: number;
        image_url: string;
    }[];
}

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
    const [productInfo, setProductInfo] = useState<IProductInfo | undefined>(
        undefined,
    );

    const [related, setRelated] = useState([]);

    const [menuDetail, setMenuDetail] = useState<Imenu>();

    const { id } = useParams();

    const showApi = async () => {
        const res = await productApi.show(Number(id));
        setRelated(res.data.related_products);
        setProductInfo(res.data.data);
        setMenuDetail(res.data.more_info);
    };

    useEffect(() => {
        showApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const switchTab = (key: SetStateAction<string>) => {
        setTab(key);
    };

    const renderContent = () => {
        switch (tab) {
            case DESCRIPTION:
                return <div>{menuDetail?.additional_info}</div>;
            case ADDITIONAL_INFO:
                return <div>{menuDetail?.description}</div>;
            case REVIEWS:
                return <div>{menuDetail?.reviews}</div>;
            case VIDEO:
                return (
                    <div className="video">
                        <video controls src={menuDetail?.video}></video>
                    </div>
                );
            default:
        }
    };
    return (
        <Wrapper>
            <div className="product-detail">
                <HeadingPage breadcrumb={breadcrumb} title="Product Details" />
            </div>

            <div className="product-info">
                <ProductInfo data={productInfo} />
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
                        className={`tab-menu-text tab-menu-video ${
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
                    {related.map((relatedProduct: IRelated) => (
                        <div key={relatedProduct.id}>
                            <ProductRelated relatedData={relatedProduct} />
                        </div>
                    ))}
                </div>
                <div className="product-related-brand">
                    <BrandList />
                </div>
            </div>
        </Wrapper>
    );
};

export default ProductDetail;

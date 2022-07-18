import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import { bannerimg } from '~/assets';
import { StyledBannerSlide, Wrapper } from './Home.style';
import LeatestProducts from './components/LeatestProducts';
import Shopex from './components/Shopex';

import { generatePath, Link } from 'react-router-dom';
import config from '~/config';

import BannerBottom from './components/BannerBottom';
import { BrandList, Button } from '~/components';
import Tranning from './components/Tranning';
import LatestBlog from './components/Blog';
import { productApi, blogApi } from '~/api';
import FeaturedProducts from './components/FeaturedProducts';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';

interface IProduct {
    id: number;
    name: string;
    price: number;
    code: string;
    discount: number;
}

export interface ILatest {
    images?: {
        image_url?: string;
        is_thumbnail?: boolean;
    }[];
    id: number;
    name: string;
    price: number;
    discount: number;
}

export interface ITrending {
    images: {
        image_url: string;
        is_thumbnail: boolean;
    }[];
    id: number;
    name: string;
    price: number;
    discount: number;
}

export interface IBlog {
    image_url?: string;
    id: number;
    title: string;
    price: number;
    discount: number;
    author: string;
    description: string;
    updated_at: string;
}

const Home = () => {
    const [featureProduct, setFeatureProducts] = useState([]);
    const [latestProducts, setLatestProducts] = useState([]);
    const [trending, setTrending] = useState([]);
    const [blog, setBlog] = useState([]);

    const getFeatured = async () => {
        const res = await productApi.getFeatured();
        return setFeatureProducts(res.data.data);
    };

    const getLatest = async () => {
        const res = await productApi.getLatest();
        return setLatestProducts(res.data.data);
    };

    const getTrending = async () => {
        const res = await productApi.getTrending();
        return setTrending(res.data.data);
    };

    const getList = async () => {
        const res = await blogApi.getList();
        return setBlog(res.data.data);
    };

    useEffect(() => {
        getFeatured();
        getLatest();
        getTrending();
        getList();
    }, []);

    return (
        <Wrapper>
            <StyledBannerSlide>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Banner />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Banner />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Banner />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Banner />
                    </SwiperSlide>
                </Swiper>
            </StyledBannerSlide>
            <h2>Featured Products</h2>
            <div className="Featured">
                {featureProduct.map((product: IProduct) => {
                    return (
                        <div key={product.id}>
                            <Link
                                to={generatePath(config.routes.productdetail, {
                                    id: String(product.id),
                                })}
                            >
                                <FeaturedProducts data={product} />
                            </Link>
                        </div>
                    );
                })}
            </div>
            <h2>Leatest Products</h2>
            <div className="Leatest">
                {latestProducts.map((latest: ILatest) => {
                    return (
                        <div key={latest.id}>
                            <Link
                                to={generatePath(config.routes.productdetail, {
                                    id: String(latest.id),
                                })}
                            >
                                <LeatestProducts latest={latest} />
                            </Link>
                        </div>
                    );
                })}
            </div>
            <h2>What Shopex Offer!</h2>
            <div className="Shopex">
                <Shopex />
                <Shopex />
                <Shopex />
                <Shopex />
            </div>
            <div className="banner-bottom">
                <BannerBottom />
            </div>

            <h3> Get Leatest Update By Subscribe 0ur Newslater</h3>
            <div className="home-btn">
                <Button>Shop Now</Button>
            </div>
            <h2>Trending Products</h2>
            <div className="Trending">
                {trending.map((dataTrending: ITrending) => {
                    return (
                        <div key={dataTrending.id}>
                            <Tranning trending={dataTrending} />
                        </div>
                    );
                })}
            </div>
            <div className="banner-img">
                <img src={bannerimg} alt="" />
            </div>
            <div className="brand-list">
                <BrandList />
            </div>

            <h2>Leatest Blog</h2>

            <div className="leatest-blog">
                {blog.map((item: IBlog) => {
                    return (
                        <div key={item.id}>
                            <LatestBlog dataBlog={item} />
                        </div>
                    );
                })}
            </div>
        </Wrapper>
    );
};

export default Home;

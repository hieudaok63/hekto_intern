import Banner from './components/Banner';
import FeaturedProducts from './components/FeaturedProducts';
import { StyledBannerSlide, Wrapper } from './Home.style';
import LeatestProducts from './components/LeatestProducts';
import Shopex from './components/Shopex';
import { bannerimg } from '~/assets';
//
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import BannerBottom from './components/BannerBottom';
import { BrandList, Button } from '~/components';
import Tranning from './components/Tranning';
import LatestBlog from './components/Blog';

const Home = () => {
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
                <FeaturedProducts />
                <FeaturedProducts />
                <FeaturedProducts />
                <FeaturedProducts />
            </div>
            <h2>Leatest Products</h2>
            <div className="Leatest">
                <LeatestProducts />
                <LeatestProducts />
                <LeatestProducts />
                <LeatestProducts />
                <LeatestProducts />
                <LeatestProducts />
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
                <Tranning />
                <Tranning />
                <Tranning />
                <Tranning />
            </div>
            <div className="banner-img">
                <img src={bannerimg} alt="" />
            </div>
            <div className="brand-list">
                <BrandList />
            </div>

            <h2>Leatest Blog</h2>

            <div className="leatest-blog">
                <LatestBlog />
                <LatestBlog />
                <LatestBlog />
            </div>
        </Wrapper>
    );
};

export default Home;

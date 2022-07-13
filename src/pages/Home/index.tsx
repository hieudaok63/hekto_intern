import Banner from './components/Banner';
import FeaturedProducts from './components/FeaturedProducts';
//
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { StyledBannerSlide, Wrapper } from './Home.style';

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
            <div className="Featured">
                <h2>Featured Products</h2>
                <FeaturedProducts />
            </div>
        </Wrapper>
    );
};

export default Home;

import { StyledWrapper } from './Blog.style';
import { latestblog, calendar, vector } from '~/assets';

function LatestBlog() {
    return (
        <StyledWrapper>
            <img src={latestblog} alt="" className="latest-blog-img" />
            <div className="latest-blog-body">
                <div className="latest-blog-top">
                    <div className="blog-top-left">
                        <span className="blog-top-left-icon">
                            <img src={calendar} alt="" />
                        </span>
                        <span>SaberAli</span>
                    </div>
                    <div className="blog-top-right">
                        <span className="blog-top-right-icon">
                            <img src={vector} alt="" />
                        </span>
                        <span>21 August,2020</span>
                    </div>
                </div>
                <p className="latest-blog-heading">
                    Top esssential Trends in 2021
                </p>
                <p className="latest-blog-desc">
                    More off this less hello samlande lied much over tightly
                    circa horse taped mightly
                </p>
                <span className="latest-blog-more">Read More</span>
            </div>
        </StyledWrapper>
    );
}

export default LatestBlog;

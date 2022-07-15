import { StyledWrapper } from './Blog.style';
import { calendar, vector } from '~/assets';
import { IBlog as IDataBlog } from '../..';
import moment from 'moment';

interface IDataBlogList {
    dataBlog: IDataBlog;
}

function LatestBlog({ dataBlog }: IDataBlogList) {
    console.log(dataBlog);
    return (
        <StyledWrapper>
            <img src={dataBlog.image_url} alt="" className="latest-blog-img" />
            <div className="latest-blog-body">
                <div className="latest-blog-top">
                    <div className="blog-top-left">
                        <span className="blog-top-left-icon">
                            <img src={calendar} alt="" />
                        </span>
                        <span>
                            {moment(dataBlog.updated_at).format(
                                ' DD MMMM YYYY',
                            )}
                        </span>
                    </div>
                    <div className="blog-top-right">
                        <span className="blog-top-right-icon">
                            <img src={vector} alt="" />
                        </span>
                        <span>{dataBlog.author}</span>
                    </div>
                </div>
                <p className="latest-blog-heading">{dataBlog.title}</p>
                <p className="latest-blog-desc">{dataBlog.description}</p>
                <span className="latest-blog-more">Read More</span>
            </div>
        </StyledWrapper>
    );
}

export default LatestBlog;

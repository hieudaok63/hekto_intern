import styled from 'styled-components';

export const StyledWrapper = styled.div`
    background: #ffffff;
    box-shadow: 0px 8px 40px rgba(49, 32, 138, 0.05);
    border-radius: 5px;
    width: 37rem;
    height: 49.3rem;

    .latest-blog-img {
        width: 100%;
        height: 25.5rem;
        border-radius: 0.5rem;
    }

    .latest-blog-body {
        padding: 0 3rem 0 1.9rem;
        font-family: 'Josefin Sans', sans-serif;
        color: #151875;

        .latest-blog-top {
            display: flex;
            align-items: center;
            padding: 1.9rem 0 3.1rem 0;
            font-size: 14px;
            line-height: 16px;
            .blog-top-left {
                padding-right: 3rem;
                .blog-top-left-icon {
                    padding-right: 0.8rem;
                }
            }
            .blog-top-right {
                padding-right: 3rem;
                .blog-top-right-icon {
                    padding-right: 0.8rem;
                }
            }
        }

        .latest-blog-heading {
            font-size: 1.8rem;
            line-height: 2.1rem;
            font-weight: 700;
            margin-bottom: 1.7rem;
            &:hover {
                color: var(--primary);
                cursor: pointer;
            }
        }

        .latest-blog-desc {
            font-weight: 400;
            font-size: 1.6rem;
            line-height: 3rem;
            color: #72718f;
            margin-bottom: 1.4rem;
        }
        .latest-blog-more {
            font-size: 1.6rem;
            font-family: 'Lato', sans-serif;
            border-bottom: 1px solid #151875;
            cursor: pointer;

            &:hover {
                color: var(--primary);
                border-color: var(--primary);
            }
        }
    }
`;

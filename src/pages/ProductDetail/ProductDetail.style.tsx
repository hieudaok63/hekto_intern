import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    .product-info {
        max-width: 1164px;
        margin: 0 auto;
        height: 76rem;
        padding: 12rem 0;
    }

    .product-tab {
        height: 65rem;
        background-color: #f9f8fe;
        .product-tab-content {
            max-width: 1164px;
            margin: 0 auto;
        }
    }

    .product-related {
        height: 93rem;
        max-width: 1164px;
        margin: 0 auto;

        .related-heading {
            font-size: 3.6rem;
            line-height: 4.2rem;
            padding: 12.6rem 0 4.7rem 0;
            color: #101750;
            font-family: 'Josefin Sans', sans-serif;
        }
        .product-related-list {
            display: flex;
            justify-content: space-between;
        }

        .product-related-brand {
            text-align: center;
            margin-top: 12.5rem;
        }
    }

    .product-tab {
        max-width: 1920px;
        margin: 0 auto;
        .product-tab-menu {
            max-width: 1164px;
            margin: 0 auto;
            font-family: 'Josefin Sans', sans-serif;
            padding: 10.9rem 0 5.9rem 0;
            .tab-menu-text {
                line-height: 2.8rem;
                font-size: 2.4rem;
                color: #151875;
                margin-right: 8.5rem;
                font-weight: 600;
                cursor: pointer;
            }
            .active {
                border-bottom: 3px solid #151875;
            }

            .render-contenr {
                font-size: 2.2rem;
                margin-top: 4rem;
            }
        }
    }
`;

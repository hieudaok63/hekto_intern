import * as footer from './Footer.style';
import { insta, logo, twitter, facebook } from '~/assets';
import { Button, Input } from '~/components';

const Footer: React.FC = () => {
    const {
        Wrapper,
        WrapperFooterTop,
        FooterTopBody,
        FooterTopList,
        FooterTopLogo,
        FooterTopInput,
        FooterTopItem,
        WrapperFooterBottom,
        WrapperFooterBody,
    } = footer;

    return (
        <Wrapper>
            <WrapperFooterTop>
                <FooterTopBody>
                    <FooterTopList>
                        <FooterTopLogo>
                            <img src={logo} alt="" />
                        </FooterTopLogo>
                        <FooterTopInput>
                            <Input
                                placeholder="Enter Email Address"
                                width="100%"
                            />
                            <Button
                                width="135px"
                                height="39px"
                                backgroundColor="var(--primary)"
                                borderRadius="3px"
                            >
                                Sign Up
                            </Button>
                        </FooterTopInput>
                        <ul>
                            <FooterTopItem>Contact Info</FooterTopItem>
                            <FooterTopItem>
                                17 Princess Road, London, Greater London NW1
                                8JR, UK
                            </FooterTopItem>
                        </ul>
                    </FooterTopList>

                    <FooterTopList>
                        <h3>Catagories</h3>

                        <ul>
                            <FooterTopItem>Laptops & Computers</FooterTopItem>
                            <FooterTopItem>Cameras & Photography</FooterTopItem>
                            <FooterTopItem>
                                Smart Phones & Tablets
                            </FooterTopItem>
                            <FooterTopItem>
                                Video Games & Consoles
                            </FooterTopItem>
                            <FooterTopItem>Waterproof Headphones</FooterTopItem>
                        </ul>
                    </FooterTopList>
                    <FooterTopList>
                        <h3>Customer Care</h3>
                        <ul>
                            <FooterTopItem>My Account</FooterTopItem>
                            <FooterTopItem>Discount</FooterTopItem>
                            <FooterTopItem>Returns</FooterTopItem>
                            <FooterTopItem>Orders History</FooterTopItem>
                            <FooterTopItem>Order Tracking</FooterTopItem>
                        </ul>
                    </FooterTopList>
                    <FooterTopList>
                        <h3>Pages</h3>

                        <ul>
                            <FooterTopItem>Blog</FooterTopItem>
                            <FooterTopItem>Browse the Shop</FooterTopItem>
                            <FooterTopItem>Category</FooterTopItem>
                            <FooterTopItem>Pre-Built Pages</FooterTopItem>
                            <FooterTopItem>
                                Visual Composer Elements
                            </FooterTopItem>
                            <FooterTopItem>WooCommerce Pages</FooterTopItem>
                        </ul>
                    </FooterTopList>
                </FooterTopBody>
            </WrapperFooterTop>

            <WrapperFooterBottom>
                <WrapperFooterBody>
                    <p>©Webecy - All Rights Reserved</p>
                    <div>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={insta} alt="" />
                    </div>
                </WrapperFooterBody>
            </WrapperFooterBottom>
        </Wrapper>
    );
};

export default Footer;

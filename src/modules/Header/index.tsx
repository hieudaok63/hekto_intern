import { useState } from 'react';
import { useDebounce } from 'src/hooks';
import { axiosClient, productApi } from '~/api';
import SearchResult from './SearchResult';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import config from '~/config';
import * as header from './Header.style';

import {
    email,
    phone,
    chevron,
    user,
    heart,
    cart,
    logo,
    search,
} from '~/assets';
import { Button } from '~/components';

const Header: React.FC = () => {
    const {
        StyledWrapper,
        StyledHeaderTop,
        StyledHeaderBottom,
        StyledHeaderTopLeft,
        StyledHeaderTopWrapper,
        StyledHeaderTopRight,
        StyledHeaderTopEmail,
        StyledHeaderTopPhone,
        HeaderTopRightList,
        HeaderBottomMenu,
        HeaderBottomLogo,
        HeaderBottomSearchInput,
        HeaderBottomBody,
    } = header;

    const [valueInput, setValueInput] = useState('');
    const [products, setProducts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [, setLoading] = useState(false);

    const navigate = useNavigate();

    useDebounce(
        () => {
            if (valueInput.trim()) {
                setLoading(true);
                productApi
                    .getList(valueInput)
                    .then((res) => setProducts(res.data.data))
                    .finally(() => setLoading(true));
            } else {
                setProducts([]);
            }
        },
        [valueInput],
        800,
    );

    const handleClickSearch = () => {
        navigate(config.routes.searchResult + '?q=' + valueInput);
    };

    return (
        <StyledWrapper>
            <StyledHeaderTop>
                <StyledHeaderTopWrapper>
                    <StyledHeaderTopLeft>
                        <StyledHeaderTopEmail>
                            <img src={email} alt="" />

                            <span>mhhasanul@gmail.com</span>
                        </StyledHeaderTopEmail>
                        <StyledHeaderTopPhone>
                            <img src={phone} alt="" />

                            <span>(12345)67890</span>
                        </StyledHeaderTopPhone>
                    </StyledHeaderTopLeft>

                    <StyledHeaderTopRight>
                        <HeaderTopRightList>
                            <span>English</span>
                            <img src={chevron} alt="" />
                        </HeaderTopRightList>

                        <HeaderTopRightList>
                            <span>USD</span>
                            <img src={chevron} alt="" />
                        </HeaderTopRightList>

                        <HeaderTopRightList>
                            <div className="hover-header">
                                <Link
                                    to={config.routes.login}
                                    className="login-header"
                                >
                                    <span>Login</span>
                                    <img src={user} alt="" />
                                </Link>
                                {/* <span className="modal-header">Log out</span> */}
                            </div>
                        </HeaderTopRightList>

                        <HeaderTopRightList>
                            <span>Wishlist</span>
                            <img src={heart} alt="" />
                        </HeaderTopRightList>

                        <HeaderTopRightList>
                            <Link to={config.routes.shop}>
                                <img src={cart} alt="" />
                            </Link>
                        </HeaderTopRightList>
                    </StyledHeaderTopRight>
                </StyledHeaderTopWrapper>
            </StyledHeaderTop>
            <StyledHeaderBottom>
                <HeaderBottomBody>
                    <Link to={config.routes.home}>
                        <HeaderBottomLogo src={logo} alt="" />
                    </Link>
                    <HeaderBottomMenu>
                        <NavLink
                            to={config.routes.home}
                            className={({ isActive }) => 'active'}
                        >
                            Home
                        </NavLink>
                        <NavLink to={config.routes.home}>Pages</NavLink>
                        <NavLink to={config.routes.product}>Products</NavLink>
                        <NavLink to={config.routes.blog}>Blog</NavLink>
                        <NavLink to={config.routes.shop}>Shop</NavLink>
                        <NavLink to={config.routes.about}>Contact</NavLink>
                    </HeaderBottomMenu>
                </HeaderBottomBody>
                <HeaderBottomSearchInput>
                    <input
                        type="text"
                        value={valueInput}
                        onChange={(e) => setValueInput(e.target.value)}
                        onFocus={() => setShowResult(true)}
                        onBlur={() => setShowResult(false)}
                    />
                    <Button onClick={handleClickSearch}>
                        <img src={search} alt="" />
                    </Button>
                    {showResult && <SearchResult products={products} />}
                </HeaderBottomSearchInput>
            </StyledHeaderBottom>
        </StyledWrapper>
    );
};

export default Header;

import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeadingPage } from '~/components';
import config from '~/config';
import ProductItem from './components/ProductItem';
import { productApi } from '~/api';

const SearchResult: React.FC = () => {
    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    const fetchingProducts: any = useRef();

    const location = useLocation();
    const keyword = location.search.split('=')[1] || 'ao';

    useEffect(() => {
        productApi.getList(keyword, true).then((res) => {
            setProducts(res.data.data);
        });
    }, [keyword]);

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
            name: 'Shop list',
            path: config.routes.searchResult,
        },
    ];

    const handleFollow = (product: any) => {
        if (fetchingProducts.current?.includes(product.id)) {
            return;
        }

        const token = window.localStorage.getItem('token');
        if (!token) {
            navigate(config.routes.login);
            return;
        }

        fetchingProducts.current?.push(product.id);
        const follow = product.followed;
        const api = follow
            ? productApi.unFollow(product.id)
            : productApi.follow(product.id);

        api.then((res) => {
            const newProducts: any = products.map((item: any) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        followed: res.data.followed,
                    };
                } else {
                    return item;
                }
            });

            setProducts(newProducts);
        }).finally(() => {
            fetchingProducts.current = fetchingProducts.current?.filter(
                (id: any) => id !== product.id,
            );
        });
    };

    return (
        <div>
            <HeadingPage breadcrumb={breadcrumb} title="Shop List" />

            {products.map((product, i) => {
                return (
                    <ProductItem
                        data={product}
                        key={i}
                        onClickHeart={() => handleFollow(product)}
                    />
                );
            })}
        </div>
    );
};

export default SearchResult;

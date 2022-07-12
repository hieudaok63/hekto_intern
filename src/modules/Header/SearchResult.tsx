import {
    SearchResultBody,
    SearchResultImage,
    SearchResultInfo,
    StyledWrapper,
} from './SearchResult.style';

interface ISearchProps {
    products: {
        name?: string;
        price?: number;
        id?: number;
        images?: [
            {
                is_thumbnail?: boolean;
                image_url?: string;
            },
        ];
    }[];
}

const SearchResult = ({ products }: ISearchProps) => {
    return (
        <StyledWrapper>
            {products.map((product: any) => (
                <SearchResultBody key={product.id}>
                    <SearchResultImage>{product.image}</SearchResultImage>
                    <SearchResultInfo>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </SearchResultInfo>
                </SearchResultBody>
            ))}
        </StyledWrapper>
    );
};

export default SearchResult;

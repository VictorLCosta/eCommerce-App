import { AddShoppingCartOutlined, FavoriteBorderOutlined, RemoveRedEyeOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { ProductBriefDto } from '../../../../models/product';
import './ProductListCard.css';

interface Props {
    product: ProductBriefDto
}

const ProductListCard = ({ product }: Props) => {
    return (
        <div className='product-card'>
            <div className='card-showcase'>
                <img src={product.pictureUrl} alt={product.name} />
            </div>
            <div className='card-icons'>
                <span className='card-icon'>
                    <FavoriteBorderOutlined />
                </span>
                <Link to={`/product/${product.id}`}>
                    <span className='card-icon'>
                        <RemoveRedEyeOutlined />
                    </span>
                </Link>
                <span className='card-icon'>
                    <AddShoppingCartOutlined />
                </span>
            </div>
            <div className='card-content'>
                {product.name.substring(0, 30) + '...'}
                <div className='price'>
                    {product.priceLabel}
                </div>
            </div>
        </div>
    )
}

export default ProductListCard
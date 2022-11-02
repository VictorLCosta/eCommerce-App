import { AddShoppingCartOutlined, FavoriteBorderOutlined, RemoveRedEyeOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import ShowcaseBadge from '../../../../components/ui/ShowcaseBadge/ShowcaseBadge';
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
            {product.localSeller && (
                <ShowcaseBadge content='local' angle />
            )}
            <div className='card-icons'>
                <span className='card-icon'>
                    <FavoriteBorderOutlined />
                </span>
                <Link to={`/products/${product.id}`}>
                    <span className='card-icon'>
                        <RemoveRedEyeOutlined />
                    </span>
                </Link>
                <span className='card-icon'>
                    <AddShoppingCartOutlined />
                </span>
            </div>
            <div className='card-content'>
                <div className='price'>
                    {product.priceLabel}
                </div>
                <div className="name">
                    <Link to={`/products/${product.id}`}>
                        {product.name.substring(0, 30) + '...'}
                    </Link>
                </div>
                <div className="details">
                    <span className="location">{product.branchCity}</span>
                    <span className="sales">{product.salesNumber} vendidos</span>
                </div>
            </div>
        </div>
    )
}

export default ProductListCard
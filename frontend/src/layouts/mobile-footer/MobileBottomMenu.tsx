import { 
    MenuOutlined, 
    HomeOutlined, 
    ShoppingCartOutlined, 
    FavoriteBorderOutlined, 
    GridViewOutlined 
} from '@mui/icons-material'
import { Badge, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import './MobileBottomMenu.css'

const MobileBottomMenu = () => {
    return (
        <div className='mobile-bottom-menu'>
            <IconButton>
                <MenuOutlined />
            </IconButton>

            <IconButton>
                <Badge badgeContent={1} color="info">
                    <ShoppingCartOutlined />
                </Badge>
            </IconButton>

            <IconButton>
                <Link to="/">
                    <HomeOutlined />
                </Link>
            </IconButton>

            <IconButton>
                <Badge badgeContent={1} color="info">
                    <FavoriteBorderOutlined />
                </Badge>
            </IconButton>

            <IconButton>
                <GridViewOutlined />
            </IconButton>
        </div>
    )
}

export default MobileBottomMenu
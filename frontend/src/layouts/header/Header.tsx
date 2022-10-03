import { ShoppingCartOutlined, Person2Outlined, FacebookSharp, Twitter, Instagram, LinkedIn } from '@mui/icons-material'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className='header-top'>

                <ul className="header-social-container">
                    <li>
                        <FacebookSharp />
                    </li>
                    <li>
                        <Twitter />
                    </li>
                    <li>
                        <Instagram />
                    </li>
                    <li>
                        <LinkedIn />
                    </li>
                </ul>

                <div className='header-top-actions'>

                    <select name="currency">
                        <option value="BRL">BRL R$</option>
                        <option value="USD">USD $</option>
                        <option value="EUR">EUR &euro;</option>
                    </select>

                    <select name="language">
                        <option value="">Português - BR</option>
                        <option value="">English</option>
                    </select>

                </div>

            </div>

            <div className='header-main'>

                <div className='header-logo'>
                    Aware
                </div>

                <div className='search-container'>
                    <input type="search" className="search-bar" />
                </div>

                <div className='header-user-actions'>
                    <button className='action-btn'>
                        <ShoppingCartOutlined />
                    </button>
                    <button className="action-btn">
                        <Person2Outlined />
                    </button>
                </div>

            </div>
        </header>
    )
}

export default Header
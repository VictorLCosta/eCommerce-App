import {
	ShoppingCartOutlined,
	Person2Outlined,
	FacebookSharp,
	Twitter,
	Instagram,
	LinkedIn,
	FavoriteBorderOutlined,
	SearchOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
	<header>
		<div className="header-top">
			<ul className="header-social-container">
				<li className="social-link">
					<FacebookSharp />
				</li>
				<li className="social-link">
					<Twitter />
				</li>
				<li className="social-link">
					<Instagram />
				</li>
				<li className="social-link">
					<LinkedIn />
				</li>
			</ul>

			<div className="header-top-actions">
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

		<div className="header-main">
			<Link to={"/"} className="header-logo">
				Aware
			</Link>

			<div className="header-search-container">
				<input type="search" className="search-bar" placeholder="Buscar na Aware" />
				<button className="search-button" role={"img"}>
					<SearchOutlined />
				</button>
			</div>

			<div className="header-user-actions">
				<button className="action-btn">
					<ShoppingCartOutlined />
				</button>
				<button className="action-btn">
					<FavoriteBorderOutlined />
				</button>
				<button className="action-btn">
					<Person2Outlined />
				</button>
			</div>
		</div>
	</header>
);

export default Header;

import {
	MenuOutlined,
	HomeOutlined,
	ShoppingCartOutlined,
	FavoriteBorderOutlined,
	GridViewOutlined,
} from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { useStore } from "../../stores/store";
import "./MobileBottomMenu.css";

const MobileBottomMenu = () => {
	const {
		commonStore: { toggleDesktopMenuVisibility },
	} = useStore();

	return (
		<div className="mobile-bottom-menu">
			<IconButton onClick={() => toggleDesktopMenuVisibility()}>
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
	);
};

export default observer(MobileBottomMenu);

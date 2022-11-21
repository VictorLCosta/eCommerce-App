import { Close, FacebookSharp, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Divider, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { Container } from "@mui/system";
import "./DesktopMenu.css";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import CollapsibleListItem from "../../components/ui/CollapsibleListItem";
import DesktopListItem from "../../components/ui/DesktopListItem";
import { useStore } from "./../../stores/store";

const DesktopMenu = () => {
	const {
		commonStore: { isDesktopMenuVisible, toggleDesktopMenuVisibility },
	} = useStore();

	return (
		<nav className={`desktop-navigation-menu ${isDesktopMenuVisible ? "active" : ""}`}>
			<Container>
				<div className="menu-header">
					<h1>Menu</h1>
					<IconButton onClick={() => toggleDesktopMenuVisibility()}>
						<Close />
					</IconButton>
				</div>
				<Divider />

				<div className="menu-body">
					<List sx={{ width: "100%" }}>
						<ListItem disablePadding divider>
							<Link to={"/"} className="home-link">
								<ListItemText
									primary="Home"
									primaryTypographyProps={{ fontSize: "1.6rem", fontWeight: 600 }}
								/>
							</Link>
						</ListItem>

						<DesktopListItem
							text="Men's"
							fontSize="1.6rem"
							fontWeight={600}
							padding=".5rem 0"
							divider
						/>

						<DesktopListItem
							text="Women's"
							fontSize="1.6rem"
							fontWeight={600}
							padding=".5rem 0"
							divider
						/>

						<DesktopListItem
							text="Blog"
							fontSize="1.6rem"
							fontWeight={600}
							padding=".5rem 0"
							divider
						/>
					</List>

					<List>
						<CollapsibleListItem itemText="Language" fontSize="1.6rem">
							<DesktopListItem
								text="Português - BR"
								fontSize="1.3rem"
								fontWeight={500}
								padding="0 1rem"
							/>

							<DesktopListItem text="English" fontSize="1.3rem" fontWeight={500} padding="0 1rem" />
						</CollapsibleListItem>

						<CollapsibleListItem itemText="Currency" fontSize="1.6rem">
							<DesktopListItem text="BRL R$" fontSize="1.3rem" fontWeight={500} padding="0 1rem" />

							<DesktopListItem text="EUR " fontSize="1.3rem" fontWeight={500} padding="0 1rem" />

							<DesktopListItem text="USD $" fontSize="1.3rem" fontWeight={500} padding="0 1rem" />
						</CollapsibleListItem>
					</List>
				</div>

				<ul className="social-container">
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
			</Container>
		</nav>
	);
};

export default observer(DesktopMenu);

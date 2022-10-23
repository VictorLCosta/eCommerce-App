import Header from "./layouts/header/Header";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import MobileBottomMenu from "./layouts/mobile-footer/MobileBottomMenu";
import DesktopMenu from "./layouts/desktop-menu/DesktopMenu";
import Overlay from "./layouts/overlay/Overlay";

function App() {
	return (
		<div className="App">
			<Overlay />
			<Header />
			<DesktopMenu />
			<Container>
				<Routes>
					<Route index element={<Home/>} />
					<Route path="/products/:id" element={<ProductDetails/>} />
				</Routes>
			</Container>
			<MobileBottomMenu />
		</div>
	);
}

export default App;

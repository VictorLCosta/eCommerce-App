import Header from "./layouts/header/Header";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
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
					<Route path="details" element={<Details/>} />
				</Routes>
			</Container>
			<MobileBottomMenu />
		</div>
	);
}

export default App;

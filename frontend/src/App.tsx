import Header from "./layouts/header/Header";
import { Container } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import MobileBottomMenu from "./layouts/mobile-footer/MobileBottomMenu";
import DesktopMenu from "./layouts/desktop-menu/DesktopMenu";
import Overlay from "./layouts/overlay/Overlay";
import useBreakpoints from './hooks/useBreakpoints';

function App() {
	const { isSm, isXs } = useBreakpoints();

	return (
		<div className="App">
			<Overlay />
			<Header />
			<DesktopMenu />
			<Container style={{paddingBlockEnd: (isSm || isXs) ? '120px' : '45px'}}>
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

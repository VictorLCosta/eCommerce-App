import Header from "./layouts/header/Header";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";

function App() {
	return (
		<div className="App">
			<Header />
			<Container>
				<Routes>
					<Route index element={<Home/>} />
					<Route path="details" element={<Details/>} />
				</Routes>
			</Container>
		</div>
	);
}

export default App;

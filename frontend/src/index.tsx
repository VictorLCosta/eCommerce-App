import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store, StoreContext } from "./stores/store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<StoreContext.Provider value={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StoreContext.Provider>
);

reportWebVitals();

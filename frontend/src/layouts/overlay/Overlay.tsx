import "./Overlay.css";
import { observer } from "mobx-react-lite";
import { useStore } from "./../../stores/store";

const Overlay = () => {
	const {
		commonStore: { isOverlayActive, toggleDesktopMenuVisibility },
	} = useStore();

	return (
		<div
			className={`overlay ${isOverlayActive ? "active" : ""}`}
			onClick={toggleDesktopMenuVisibility}
		/>
	);
};

export default observer(Overlay);

import { makeAutoObservable, reaction } from "mobx";

export default class CommonStore {
	isDesktopMenuVisible = false;
	isOverlayActive = false;

	constructor() {
		makeAutoObservable(this);

		reaction(
			() => this.isDesktopMenuVisible,
			(isDesktopMenuVisible) => {
				if (isDesktopMenuVisible) {
					this.toggleOverlay();
				} else {
					this.toggleOverlay();
				}
			}
		);
	}

	toggleDesktopMenuVisibility = () => {
		this.isDesktopMenuVisible = !this.isDesktopMenuVisible;
	};

	toggleOverlay = () => {
		this.isOverlayActive = !this.isOverlayActive;
	};
}

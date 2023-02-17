import { makeAutoObservable } from "mobx";

export class LayoutStore {
  desktopMenuIsOpen = false;

  overlayIsShown = false;

  constructor() {
    makeAutoObservable(this);
  }

  setDesktopMenuIsOpen = (isOpen: boolean) => {
    this.desktopMenuIsOpen = isOpen;
  };

  setOverlayIsShown = (isVisible: boolean) => {
    this.overlayIsShown = isVisible;
  };
}

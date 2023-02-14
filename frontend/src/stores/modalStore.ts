import { makeAutoObservable } from "mobx";

interface Modal {
  isOpen: boolean;
  body: React.ReactNode;
}

export class ModalStore {
  modal: Modal = {
    isOpen: false,
    body: null,
  };

  constructor() {
    makeAutoObservable(this);
  }

  openModal = (content: React.ReactNode) => {
    this.modal.isOpen = true;
    this.modal.body = content;
  };

  closeModal = () => {
    this.modal.isOpen = false;
    this.modal.body = null;
  };
}

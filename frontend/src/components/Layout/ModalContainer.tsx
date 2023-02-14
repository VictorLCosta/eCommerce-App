import { Dialog, Transition } from "@headlessui/react";
import { observer } from "mobx-react-lite";
import { Fragment } from "react";

import { useStore } from "@/stores";

export default observer(function ModalContainer() {
  const {
    modalStore: { modal, closeModal },
  } = useStore();

  return (
    <Transition appear show={modal.isOpen} as={Fragment}>
      <Dialog
        className="relative"
        open={modal.isOpen}
        onClose={() => closeModal()}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            aria-hidden="true"
          />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto z-50">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel>{modal.body}</Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
});

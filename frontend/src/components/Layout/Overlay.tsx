/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { Transition } from "@headlessui/react";
import { observer } from "mobx-react-lite";
import { Fragment } from "react";

import { useStore } from "@/stores";

export const Overlay = observer(() => {
  const {
    layoutStore: { overlayIsShown, setDesktopMenuIsOpen, setOverlayIsShown },
  } = useStore();

  function handleClick() {
    setDesktopMenuIsOpen(false);
    setOverlayIsShown(false);
  }

  return (
    <Transition
      as={Fragment}
      appear
      show={overlayIsShown}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        aria-hidden="true"
        onClick={() => handleClick()}
      />
    </Transition>
  );
});

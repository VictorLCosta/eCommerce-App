import {
  MdOutlineFavoriteBorder,
  MdOutlineHome,
  MdOutlineMenu,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { Link } from "react-router-dom";

import { Button } from "@/components/Elements/Button";
import { Icon } from "@/components/Elements/Icon";
import { useStore } from "@/stores";

export function MobileBottomMenu() {
  const {
    layoutStore: { setDesktopMenuIsOpen, setOverlayIsShown },
  } = useStore();

  function handleMenuClick() {
    setDesktopMenuIsOpen(true);
    setOverlayIsShown(true);
  }

  return (
    <div
      id="mobile-bottom-menu"
      className="fixed bottom-0 w-full z-40 flex justify-between items-center py-8 px-[9%] shadow-top bg-white sm:hidden"
    >
      <Button size="xs" variant="basic" onClick={() => handleMenuClick()}>
        <Icon icon={MdOutlineMenu} size="md" />
      </Button>

      <Button size="xs" variant="basic">
        <Icon icon={MdOutlineShoppingCart} size="md" />
      </Button>

      <Link to="/">
        <Button size="xs" variant="basic">
          <Icon icon={MdOutlineHome} size="md" />
        </Button>
      </Link>

      <Button size="xs" variant="basic">
        <Icon icon={MdOutlineFavoriteBorder} size="md" />
      </Button>
    </div>
  );
}

import {
  MdOutlineFavoriteBorder,
  MdOutlineHome,
  MdOutlineMenu,
  MdOutlineShoppingCart,
} from "react-icons/md";

import { Button } from "@/components/Elements/Button";
import { Icon } from "@/components/Elements/Icon";

export function MobileBottomMenu() {
  return (
    <div
      id="mobile-bottom-menu"
      className="fixed bottom-0 w-full z-40 flex justify-between items-center py-10 px-[9%] shadow-top bg-white sm:hidden"
    >
      <Button size="xs" variant="basic">
        <Icon icon={MdOutlineMenu} />
      </Button>

      <Button size="xs" variant="basic">
        <Icon icon={MdOutlineShoppingCart} />
      </Button>

      <Button size="xs" variant="basic">
        <Icon icon={MdOutlineHome} />
      </Button>

      <Button size="xs" variant="basic">
        <Icon icon={MdOutlineFavoriteBorder} />
      </Button>
    </div>
  );
}

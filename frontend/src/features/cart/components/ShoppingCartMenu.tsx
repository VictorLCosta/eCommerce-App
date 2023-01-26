import { Menu, Transition } from "@headlessui/react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

import { Button } from "@/components/Elements/Button";
import { Icon } from "@/components/Elements/Icon";
import { Image } from "@/components/Elements/Image";

export function ShoppingCartMenu() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button as={Button} size="xs" variant="basic">
        <Icon icon={MdOutlineShoppingCart} size="md" color="onyx" />
      </Menu.Button>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute origin-top-right top-12 right-5 w-96 bg-white shadow-md focus:outline-none"
          static
        >
          <Menu.Item
            as="div"
            className="flex gap-x-4 w-full p-4 border-b-sonic-silver border-b border-solid border-x-0 border-t-0"
            disabled
          >
            <Image src="https://dummyimage.com/400x400/000/fff" size="xs" />
            <div>
              <Link
                to="product"
                className="text-xl relative overflow-hidden max-h-[calc(2_*_1em_*_1.3)] text-ellipsis"
              >
                O Produto mais Top de Todos os Tempos da Era moderna
              </Link>

              <h3 className="text-lg text-salmon-pink font-semibold my-2">
                preço
              </h3>

              <div className="flex justify-between items-center">
                <input type="number" />
                <span>Total: R$ 150,00</span>
              </div>
            </div>
          </Menu.Item>
          <Menu.Item as="div" className="p-4" disabled>
            <h2 className="text-2xl text-eerie-black font-bold mb-5">
              Total: 12
            </h2>
            <Button
              content="Go to shopping cart"
              size="lg"
              variant="dark"
              fluid
            />
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

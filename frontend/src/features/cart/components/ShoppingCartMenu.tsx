import { Menu, Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

import { Button } from "@/components/Elements/Button";
import { Icon } from "@/components/Elements/Icon";
import { Image } from "@/components/Elements/Image";
import { NumericStepper } from "@/components/Elements/NumericStepper";

import { useCartItems } from "../api/getCartItems";
import { useIncreaseItemQuantity } from "../api/increaseItemQuantity";

export function ShoppingCartMenu() {
  const { data } = useCartItems({});
  const increaseItemQuantityMutation = useIncreaseItemQuantity({});

  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    if (data)
      setTotalValue(
        data
          .filter((x) => x.price)
          .reduce((partialSum, a) => partialSum + a.price, 0),
      );
  }, [data]);

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
          className="absolute origin-top-right top-12 right-5 w-[30rem] bg-white shadow-md focus:outline-none"
          static
        >
          {data?.map((item) => (
            <Menu.Item
              key={item.id}
              as="div"
              className="flex gap-x-4 w-full p-4 border-b-sonic-silver border-b border-solid border-x-0 border-t-0"
              disabled
            >
              <Image src={item.pictureUrl} size="xs" />
              <div className="w-full">
                <Link
                  to={`product/${item.id}`}
                  className="text-xl relative overflow-hidden max-h-[calc(2_*_1em_*_1.3)] text-ellipsis"
                >
                  {item.productName}
                </Link>

                <h3 className="text-xl text-salmon-pink font-semibold mt-2 mb-4">
                  {item.price}
                </h3>

                <div className="flex justify-between items-center gap-x-2">
                  <NumericStepper initialValue={1} min={0} max={1000} />
                  <span className="text-lg">
                    Total:
                    <span className="font-semibold">
                      {item.quantity * item.price}
                    </span>
                  </span>
                </div>
              </div>
            </Menu.Item>
          ))}
          <Menu.Item as="div" className="p-4" disabled>
            <h2 className="text-2xl text-eerie-black font-bold mb-5">
              Total: {totalValue}
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

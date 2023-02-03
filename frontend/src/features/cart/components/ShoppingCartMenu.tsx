import { Menu, Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { IoBagRemoveOutline, IoTrashOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

import { Button } from "@/components/Elements/Button";
import { Icon } from "@/components/Elements/Icon";
import { Image } from "@/components/Elements/Image";
import { NumericStepper } from "@/components/Elements/NumericStepper";

import { useDecreaseItemQuantity } from "../api/decreaseItemQuantity";
import { useDeleteCartItem } from "../api/deleteCartItem";
import { useCartItems } from "../api/getCartItems";
import { useIncreaseItemQuantity } from "../api/increaseItemQuantity";

function EmptyCart() {
  return (
    <Menu.Item
      as="div"
      className="flex flex-col justify-center items-center p-6"
      disabled
    >
      <Icon icon={IoBagRemoveOutline} className="mb-5" size="lg" color="onyx" />
      <h3 className="text-xl text-onyx">Your shopping cart is empty</h3>
    </Menu.Item>
  );
}

export function ShoppingCartMenu() {
  const { data } = useCartItems({});

  const increaseItemQuantityMutation = useIncreaseItemQuantity({});
  const decreaseItemQuantityMutation = useDecreaseItemQuantity({});

  const deleteCartItemMutation = useDeleteCartItem({});

  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    if (data)
      setTotalValue(
        data.reduce(
          (total, cartItem) =>
            total + (cartItem.price || 0) * cartItem.quantity,
          0,
        ),
      );
  }, [data]);

  return (
    <Menu as="div" className="relative">
      <Menu.Button as={Button} size="xs" variant="basic">
        <Icon icon={MdOutlineShoppingCart} size="md" color="onyx" />
        <span className="text-lg font-semibold">{data?.length}</span>
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

                <div className="flex justify-between items-center mt-2 mb-4">
                  <h3 className="text-xl text-salmon-pink font-semibold">
                    {item.price}
                  </h3>

                  <Button
                    size="xs"
                    variant="light"
                    onClick={() => deleteCartItemMutation.mutate(item.id)}
                  >
                    <Icon icon={IoTrashOutline} size="xs" />
                  </Button>
                </div>

                <div className="flex justify-between items-center gap-x-2">
                  <NumericStepper
                    initialValue={0}
                    value={item.quantity}
                    min={0}
                    max={1000}
                    decrement={() =>
                      decreaseItemQuantityMutation.mutate(item.id)
                    }
                    increment={() =>
                      increaseItemQuantityMutation.mutate(item.id)
                    }
                  />
                  <span className="text-lg">
                    Total:
                    <span className="font-semibold">
                      {(item.quantity * item.price).toFixed(2)}
                    </span>
                  </span>
                </div>
              </div>
            </Menu.Item>
          ))}
          {data?.length === 0 ? (
            <EmptyCart />
          ) : (
            <Menu.Item as="div" className="p-4" disabled>
              <h2 className="text-2xl text-eerie-black font-bold mb-5">
                <span className="mr-2">Total:</span>
                {totalValue.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h2>
              <Button
                content="Go to shopping cart"
                size="lg"
                variant="dark"
                fluid
              />
            </Menu.Item>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

import { Transition } from "@headlessui/react";
import { useState } from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";
import { MdClose, MdOutlineFacebook } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";

import { Button } from "../Elements/Button";
import { ExpandableMenu } from "../Elements/ExpandableMenu";
import { Icon } from "../Elements/Icon";

function MenuItem({ label }: { label: string }) {
  return (
    <h1 className="py-3 text-2xl text-onyx font-medium border-solid border-b border-b-cultured2 border-t-transparent border-x-transparent">
      {label}
    </h1>
  );
}

export function DesktopMenu() {
  const [active, setActive] = useState(false);

  return (
    <Transition
      as="nav"
      className="block fixed top-0 left-0 z-[60] h-screen max-w-sm w-full py-6 px-4 overflow-hidden bg-white"
      show={active}
      enter="duration-75 transition-all ease-in-out"
      enterFrom="w-0"
      enterTo="w-80"
      leave="duration-150 transition-all ease-in-out"
      leaveFrom="w-80"
      leaveTo="w-0"
    >
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl text-salmon-pink font-semibold">Menu</h1>
        <Button
          icon={MdClose}
          variant="basic"
          onClick={() => setActive(false)}
        />
      </div>

      <hr className="w-full h-[2px] bg-cultured2" />

      <div className="py-8">
        <div>
          <MenuItem label="Home" />
          <ExpandableMenu label="Men's" icon={IoChevronDown}>
            <li className="py-[6px] text-sonic-silver text-2xl font-light">
              Shirt
            </li>
            <li className="py-[6px] text-sonic-silver text-2xl font-light">
              Shorts and Jean
            </li>
            <li className="py-[6px] text-sonic-silver text-2xl font-light">
              Shorts and Jean
            </li>
            <li className="py-[6px] text-sonic-silver text-2xl font-light">
              Shorts and Jean
            </li>
          </ExpandableMenu>
          <ExpandableMenu label="Women's" icon={IoChevronDown}>
            <li className="py-[6px] text-sonic-silver text-2xl font-light">
              Shirt
            </li>
            <li className="py-[6px] text-sonic-silver text-2xl font-light">
              Shorts and Jean
            </li>
            <li className="py-[6px] text-sonic-silver text-2xl font-light">
              Shorts and Jean
            </li>
            <li className="py-[6px] text-sonic-silver text-2xl font-light">
              Shorts and Jean
            </li>
          </ExpandableMenu>
          <ExpandableMenu label="Jewelry" icon={IoChevronDown}>
            <li className="py-[6px] text-sonic-silver text-2xl font-light">
              Shirt
            </li>
            <li className="py-[6px] text-sonic-silver text-2xl font-light">
              Shorts and Jean
            </li>
            <li className="py-[6px] text-sonic-silver text-2xl font-light">
              Shorts and Jean
            </li>
            <li className="py-[6px] text-sonic-silver text-2xl font-light">
              Shorts and Jean
            </li>
          </ExpandableMenu>
          <ExpandableMenu label="Perfume" icon={IoChevronDown}>
            <li className="py-[6px] text-sonic-silver text-2xl font-light">
              Shirt
            </li>
            <li className="py-[6px] text-sonic-silver text-2xl font-light">
              Shorts and Jean
            </li>
            <li className="py-[6px] text-sonic-silver text-2xl font-light">
              Shorts and Jean
            </li>
            <li className="py-[6px] text-sonic-silver text-2xl font-light">
              Shorts and Jean
            </li>
          </ExpandableMenu>
          <MenuItem label="Blog" />
        </div>

        <div id="menu-bottom" className="mt-7">
          <ul className="mb-5">
            <li>
              <ExpandableMenu
                className="pl-2"
                label="Language"
                icon={TiArrowSortedDown}
                variant="basic"
              >
                <li className="py-[6px] text-sonic-silver text-2xl font-light">
                  English
                </li>
                <li className="py-[6px] text-sonic-silver text-2xl font-light">
                  Português
                </li>
              </ExpandableMenu>
            </li>
            <li>
              <ExpandableMenu
                className="pl-2"
                label="Currency"
                icon={TiArrowSortedDown}
                variant="basic"
              >
                <li className="py-[6px] text-sonic-silver text-2xl font-light">
                  BRL R$
                </li>
                <li className="py-[6px] text-sonic-silver text-2xl font-light">
                  USD $
                </li>
                <li className="py-[6px] text-sonic-silver text-2xl font-light">
                  EUR €
                </li>
              </ExpandableMenu>
            </li>
          </ul>

          <ul className="flex justify-center gap-x-3 py-8">
            <li>
              <Button size="xs" variant="secondary">
                <Icon icon={MdOutlineFacebook} />
              </Button>
            </li>
            <li>
              <Button size="xs" variant="secondary">
                <Icon icon={AiOutlineTwitter} />
              </Button>
            </li>
            <li>
              <Button size="xs" variant="secondary">
                <Icon icon={AiOutlineInstagram} />
              </Button>
            </li>
            <li>
              <Button size="xs" variant="secondary">
                <Icon icon={IoLogoLinkedin} />
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  );
}

import { MdFacebook, MdOutlineShoppingCart } from "react-icons/md";

import { Icon } from "@/components/Elements/Icon";
import SelectField from "@/components/Form/SelectField";

import { Button } from "../Elements/Button";

export default function Header() {
  return (
    <header>
      <div>
        <ul>
          <li>
            <Icon icon={MdFacebook} />
          </li>
          <li>
            <Icon icon={MdFacebook} />
          </li>
          <li>
            <Icon icon={MdFacebook} />
          </li>
          <li>
            <Icon icon={MdFacebook} />
          </li>
        </ul>
        <div />
      </div>
      <div>
        <h1>Aware</h1>
        <div>
          <input type="search" />
        </div>
        <div>
          <Button icon={MdOutlineShoppingCart} />
          <Button icon={MdOutlineShoppingCart} />
        </div>
      </div>
    </header>
  );
}

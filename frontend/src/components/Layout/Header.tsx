import { Form, Formik } from "formik";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import {
  MdOutlineFacebook,
  MdOutlinePersonOutline,
  MdOutlineFavoriteBorder,
} from "react-icons/md";

import { Button } from "@/components/Elements/Button";
import { ShoppingCartMenu } from "@/features/cart";

import { Icon } from "../Elements/Icon";
import SelectField from "../Form/SelectField";
import TextField from "../Form/TextField";

const topHeaderSelectOptions = {
  languages: [
    { label: "BRL R$", value: "R$" },
    { label: "USD $", value: "US$" },
  ],
  currencies: [
    { label: "English", value: "ENG" },
    { label: "Português", value: "PT" },
  ],
};

function TopHeaderActions() {
  return (
    <Formik
      initialValues={{ language: "ENG", currency: "US$" }}
      onSubmit={(values) => console.log(values)}
    >
      {() => (
        <Form className="flex gap-x-3">
          <SelectField
            name="language"
            options={topHeaderSelectOptions.languages}
            size="lg"
            className="!w-[10rem]"
          />
          <SelectField
            name="currency"
            options={topHeaderSelectOptions.currencies}
            size="lg"
            className="!w-[10rem]"
          />
        </Form>
      )}
    </Formik>
  );
}

function SearchContainer() {
  return (
    <Formik
      initialValues={{ search: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {() => (
        <Form className="w-full sm:w-3/6">
          <TextField
            name="search"
            className="rounded-md"
            endIcon={IoSearchOutline}
            fluid
          />
        </Form>
      )}
    </Formik>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 w-full z-20 bg-white shadow-3">
      <div className="hidden justify-between items-center border-t-transparent border-x-transparent border-b border-solid border-b-cultured2 py-3 px-[7%] sm:flex">
        <ul className="flex gap-x-3">
          <li>
            <Button icon={MdOutlineFacebook} size="xs" variant="secondary" />
          </li>
          <li>
            <Button icon={AiOutlineTwitter} size="xs" variant="secondary" />
          </li>
          <li>
            <Button icon={AiOutlineInstagram} size="xs" variant="secondary" />
          </li>
          <li>
            <Button icon={IoLogoLinkedin} size="xs" variant="secondary" />
          </li>
        </ul>

        <TopHeaderActions />
      </div>

      <div className="flex justify-between items-center flex-col py-10 px-[7%] sm:flex-row">
        <h1 className="text-7xl text-eerie-black font-semibold mb-8 sm:mb-0">
          Aware
        </h1>

        <SearchContainer />

        <div className="flex gap-x-4 max-sm:hidden">
          <Button size="xs" variant="basic">
            <Icon icon={MdOutlineFavoriteBorder} size="md" />
          </Button>
          <ShoppingCartMenu />
          <Button size="xs" variant="basic">
            <Icon icon={MdOutlinePersonOutline} size="md" />
          </Button>
        </div>
      </div>
    </header>
  );
}

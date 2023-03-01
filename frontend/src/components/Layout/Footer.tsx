import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";

import payment from "@/assets/payment.png";
import { Icon } from "@/components/Elements/Icon";

import { Image } from "../Elements/Image";

function NavTitle({ title }: { title: string }) {
  return (
    <h2 className="relative text-white text-2xl font-bold uppercase mb-4 pb-[5px] before:absolute before:bottom-0 before:left-0 before:content-[''] before:w-[60px] before:h-[1px] before:bg-salmon-pink">
      {title}
    </h2>
  );
}

function FooterCategoryLink({ content }: { content: string }) {
  return (
    <a
      href="/"
      className="relative text-sonic-silver hover:text-spanish-gray text-2xl capitalize transition-colors mr-2 last:after:content-none after:absolute after:content-[''] after:top-1 after:right-[-10px] after:bg-sonic-silver after:w-[1px] after:h-4"
    >
      {content}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="bg-eerie-black py-7">
      <div className="mb-8 px-16 pt-6 pb-10 border-b border-solid border-onyx border-x-transparent border-t-transparent">
        <h2 className="mb-4 text-salmon-pink font-semibold text-2xl uppercase">
          Brand directory
        </h2>

        <div className="flex flex-wrap justify-start items-center gap-x-5 gap-y-1 mb-4">
          <h3 className="text-spanish-gray text-xl font-semibold uppercase">
            Fashion :
          </h3>

          <FooterCategoryLink content="T-shirt" />
          <FooterCategoryLink content="Shirts" />
          <FooterCategoryLink content="shorts & jeans" />
          <FooterCategoryLink content="jacket" />
          <FooterCategoryLink content="dress & frock" />
          <FooterCategoryLink content="innerwear" />
          <FooterCategoryLink content="hosiery" />
        </div>

        <div className="flex flex-wrap justify-start items-center gap-x-5 gap-y-1 mb-4">
          <h3 className="text-spanish-gray text-xl font-semibold uppercase">
            footwear :
          </h3>

          <FooterCategoryLink content="sport" />
          <FooterCategoryLink content="formal" />
          <FooterCategoryLink content="Boots" />
          <FooterCategoryLink content="casual" />
          <FooterCategoryLink content="cowboy shoes" />
          <FooterCategoryLink content="safety shoes" />
          <FooterCategoryLink content="Party wear shoes" />
          <FooterCategoryLink content="Branded" />
          <FooterCategoryLink content="Firstcopy" />
          <FooterCategoryLink content="Long shoes" />
        </div>

        <div className="flex flex-wrap justify-start items-center gap-x-5 gap-y-1 mb-4">
          <h3 className="text-spanish-gray text-xl font-semibold uppercase">
            jewellery :
          </h3>

          <FooterCategoryLink content="Necklace" />
          <FooterCategoryLink content="Earrings" />
          <FooterCategoryLink content="Couple rings" />
          <FooterCategoryLink content="Pendants" />
          <FooterCategoryLink content="Crystal" />
          <FooterCategoryLink content="Bangles" />
          <FooterCategoryLink content="bracelets" />
          <FooterCategoryLink content="nosepin" />
          <FooterCategoryLink content="chain" />
          <FooterCategoryLink content="Earrings" />
          <FooterCategoryLink content="Couple rings" />
        </div>

        <div className="flex flex-wrap justify-start items-center gap-x-5 gap-y-1 mb-4">
          <h3 className="text-spanish-gray text-xl font-semibold uppercase">
            cosmetics :
          </h3>

          <FooterCategoryLink content="Shampoo" />
          <FooterCategoryLink content="Bodywash" />
          <FooterCategoryLink content="makeup kit" />
          <FooterCategoryLink content="liner" />
          <FooterCategoryLink content="lipstick" />
          <FooterCategoryLink content="prefume" />
          <FooterCategoryLink content="Body soap" />
          <FooterCategoryLink content="scrub" />
          <FooterCategoryLink content="hair gel" />
          <FooterCategoryLink content="hair colors" />
          <FooterCategoryLink content="hair dye" />
          <FooterCategoryLink content="sunscreen" />
        </div>
      </div>

      <div className="flex justify-between px-16 pb-8 mb-8 border-b border-solid border-onyx border-x-transparent border-t-transparent">
        <ul className="mb-5">
          <li className="py-1">
            <NavTitle title="Popular Categories" />
          </li>
          <li className="py-1">
            <a
              href="/"
              className="w-max text-sonic-silver text-2xl capitalize transition-colors hover:text-salmon-pink"
            >
              Fashion
            </a>
          </li>
          <li className="py-1">
            <a
              href="/"
              className="w-max text-sonic-silver text-2xl capitalize transition-colors hover:text-salmon-pink"
            >
              Eletronic
            </a>
          </li>
          <li className="py-1">
            <a
              href="/"
              className="w-max text-sonic-silver text-2xl capitalize transition-colors hover:text-salmon-pink"
            >
              Cosmetic
            </a>
          </li>
          <li className="py-1">
            <a
              href="/"
              className="w-max text-sonic-silver text-2xl capitalize transition-colors hover:text-salmon-pink"
            >
              Health
            </a>
          </li>
          <li className="py-1">
            <a
              href="/"
              className="w-max text-sonic-silver text-2xl capitalize transition-colors hover:text-salmon-pink"
            >
              Watches
            </a>
          </li>
        </ul>

        <ul className="mb-5">
          <li className="py-1">
            <NavTitle title="Products" />
          </li>
          <li className="py-1">
            <a
              href="/"
              className="w-max text-sonic-silver text-2xl capitalize transition-colors hover:text-salmon-pink"
            >
              Prices Drop
            </a>
          </li>
          <li className="py-1">
            <a
              href="/"
              className="w-max text-sonic-silver text-2xl capitalize transition-colors hover:text-salmon-pink"
            >
              New Products
            </a>
          </li>
          <li className="py-1">
            <a
              href="/"
              className="w-max text-sonic-silver text-2xl capitalize transition-colors hover:text-salmon-pink"
            >
              Best Sales
            </a>
          </li>
          <li className="py-1">
            <a
              href="/"
              className="w-max text-sonic-silver text-2xl capitalize transition-colors hover:text-salmon-pink"
            >
              Contact Us
            </a>
          </li>
          <li className="py-1">
            <a
              href="/"
              className="w-max text-sonic-silver text-2xl capitalize transition-colors hover:text-salmon-pink"
            >
              Sitemap
            </a>
          </li>
        </ul>

        <ul className="mb-5">
          <li className="py-1">
            <NavTitle title="Our Company" />
          </li>
          <li className="py-1">
            <a
              href="/"
              className="w-max text-sonic-silver text-2xl capitalize transition-colors hover:text-salmon-pink"
            >
              Delivery
            </a>
          </li>
          <li className="py-1">
            <a
              href="/"
              className="w-max text-sonic-silver text-2xl capitalize transition-colors hover:text-salmon-pink"
            >
              Legal Notice
            </a>
          </li>
          <li className="py-1">
            <a
              href="/"
              className="w-max text-sonic-silver text-2xl capitalize transition-colors hover:text-salmon-pink"
            >
              Terms and Conditions
            </a>
          </li>
          <li className="py-1">
            <a
              href="/"
              className="w-max text-sonic-silver text-2xl capitalize transition-colors hover:text-salmon-pink"
            >
              About Us
            </a>
          </li>
          <li className="py-1">
            <a
              href="/"
              className="w-max text-sonic-silver text-2xl capitalize transition-colors hover:text-salmon-pink"
            >
              Secure Payment
            </a>
          </li>
        </ul>

        <ul className="mb-5">
          <li className="py-1">
            <NavTitle title="Services" />
          </li>
          <li className="py-1">
            <a
              href="/"
              className="w-max text-sonic-silver text-2xl capitalize transition-colors hover:text-salmon-pink"
            >
              Prices Drop
            </a>
          </li>
          <li className="py-1">
            <a
              href="/"
              className="w-max text-sonic-silver text-2xl capitalize transition-colors hover:text-salmon-pink"
            >
              New Products
            </a>
          </li>
          <li className="py-1">
            <a
              href="/"
              className="w-max text-sonic-silver text-2xl capitalize transition-colors hover:text-salmon-pink"
            >
              Best Sales
            </a>
          </li>
          <li className="py-1">
            <a
              href="/"
              className="w-max text-sonic-silver text-2xl capitalize transition-colors hover:text-salmon-pink"
            >
              Contact Us
            </a>
          </li>
          <li className="py-1">
            <a
              href="/"
              className="w-max text-sonic-silver text-2xl capitalize transition-colors hover:text-salmon-pink"
            >
              Sitemap
            </a>
          </li>
        </ul>

        <ul>
          <li className="py-1">
            <NavTitle title="Contact" />
          </li>
          <li className="py-1 flex gap-x-3 items-start">
            <Icon icon={IoLocationOutline} className="text-sonic-silver" />
            <a
              href="/"
              className="w-max text-sonic-silver text-2xl capitalize transition-colors hover:text-salmon-pink"
            >
              419 State 414 Rte Beaver Dams, New York(NY), 14812, USA
            </a>
          </li>
          <li className="py-1 flex gap-x-3 items-start">
            <Icon icon={IoCallOutline} className="text-sonic-silver" />
            <a
              href="/"
              className="w-max text-sonic-silver text-2xl capitalize transition-colors hover:text-salmon-pink"
            >
              (607) 936-8058
            </a>
          </li>
          <li className="py-1 flex gap-x-3 items-start">
            <Icon icon={IoMailOutline} className="text-sonic-silver" />
            <a
              href="mailto:example@gmail.com"
              className="w-max text-sonic-silver text-2xl capitalize transition-colors hover:text-salmon-pink"
            >
              example@gmail.com
            </a>
          </li>
        </ul>
      </div>

      <div className="text-center mb-[15px]">
        <Image src={payment} className="mx-auto mb-4 max-w-[335px] w-full" />
        <p className="text-sonic-silver text-2xl tracking-wider font-medium capitalize">
          Copyright &copy; <a href="/">Aware</a> all rights reserved.
        </p>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";

import { navLinks } from "../data/data";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="w-full h-14 bg-[rgba(244, 244, 244, 0.95)] border border-b-gray-300 shadow-sm">
      <div className="flex-between container h-full">
        <Link href={`/`}>
          <Image src={`/icons/logo.svg`} alt="logo" width={120} height={32} />
        </Link>

        <div className="flex-center gap-5">
          {navLinks.map(({ id, link, title }) => (
            <Link
              key={id}
              href={link}
              className="opacity-60 font-normal text-[13px] hover:opacity-100 transition"
            >
              {title}
            </Link>
          ))}
          <Image
            src={`/icons/menu.svg`}
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>

        <Button
          title="Контакты"
          isComplex={false}
          iconSrc="/icons/phone.svg"
          iconPosition="left"
          iconH={14}
          iconW={14}
          buttonClass="flex-center gap-2 font-semibold border border-gray-200 py-3 px-4 cursor-pointer text-[13px]"
        />
      </div>
    </nav>
  );
};

export default Navbar;

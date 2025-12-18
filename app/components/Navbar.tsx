"use client";
import Image from "next/image";
import Link from "next/link";

import { mobileMenuItems, navLinks } from "../data/data";
import Button from "./Button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/app/components/ui/drawer";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { theme } = useTheme();
  const iconSrc =
    theme === "dark" ? "/icons/phone-white.svg" : "/icons/phone.svg";
  return (
    <nav className="w-full h-14 bg-[rgba(244, 244, 244, 0.95)] ">
      <div className="flex-between container h-full">
        <Link href={`/`}>
          <Image src={`/icons/logo.svg`} alt="logo" width={120} height={32} />
        </Link>

        <div className="hidden lg:flex justify-center items-center gap-5">
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

        <div className="flex-center gap-5">
          <Button
            title="Контакты"
            isComplex={false}
            iconSrc={iconSrc}
            iconPosition="left"
            iconH={14}
            iconW={14}
            buttonClass="
  flex-center gap-2 font-semibold border border-gray-200 py-3 px-4 cursor-pointer text-[13px]
  bg-white dark:bg-[rgba(0,208,255,1)] dark:border-none
"
          />
          <Drawer direction="left">
            <DrawerTrigger>
              <Image
                src={`/icons/menu.svg`}
                alt="menu"
                width={24}
                height={24}
                className="cursor-pointer block md:hidden"
              />
            </DrawerTrigger>
            <DrawerContent className="w-full h-auto overflow-y-auto">
              <DrawerClose asChild>
                <button className="flex justify-end items-center p-3 cursor-pointer">
                  <Image
                    src={`/icons/x.svg`}
                    alt="close"
                    width={24}
                    height={24}
                  />
                </button>
              </DrawerClose>
              <DrawerHeader className="flex-column-left gap-5 py-12 px-10">
                {navLinks.map(({ id, link, title }) => (
                  <DrawerTitle
                    key={id}
                    className="font-normal text-[20px] transition"
                  >
                    <Link href={link}>{title}</Link>
                  </DrawerTitle>
                ))}
                <div className="flex-column-left gap-8 mt-7">
                  {mobileMenuItems.map(
                    ({ id, title, subtitle, imgUrl, textClass }) => (
                      <div key={id} className="flex-center gap-4">
                        <Image
                          src={imgUrl}
                          alt="mobile-menu-img"
                          width={50}
                          height={50}
                        />
                        <div className="flex-column-left gap-1">
                          <p className="text-blue-500 text-lg">{title}</p>
                          {subtitle && (
                            <p className={cn(textClass)}>{subtitle}</p>
                          )}
                        </div>
                      </div>
                    )
                  )}
                </div>
                <div className="flex-start gap-3">
                  <Image
                    src={`/icons/telegram.svg`}
                    alt="telegram"
                    width={24}
                    height={24}
                  />
                  <Image
                    src={`/icons/youtube.svg`}
                    alt="telegram"
                    width={24}
                    height={24}
                  />
                  <Image
                    src={`/icons/vk.svg`}
                    alt="telegram"
                    width={24}
                    height={24}
                  />
                </div>
              </DrawerHeader>
              <DrawerFooter>
                <Button
                  title="Связаться с нами"
                  isComplex={true}
                  buttonClass=" w-[80%] self-center py-2 px-10 border-2 border-white bg-white flex-center gap-2 complex-b"
                  iconSrc="/icons/arrow-right.svg"
                  iconH={24}
                  iconW={24}
                  iconPosition="right"
                  hoverColor="#C4F9FC"
                />
                <div className="flex-start gap-2">
                  <p className="helvetica text-gray-400">Мы на связи сейчас</p>
                  <div className="bg-green-400 h-2 w-2 rounded-full" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="py-3 px-4 rounded-md flex-center h-14 shadow-lg inset-shadow-2xs">
                    <Image
                      src={`/icons/apple.svg`}
                      alt="apple-logo"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="py-3 px-4 rounded-md flex-center h-14 shadow-lg inset-shadow-2xs">
                    <Image
                      src={`/icons/android.svg`}
                      alt="android-logo"
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

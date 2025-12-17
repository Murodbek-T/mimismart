import React from "react";
import Switch from "./Switch";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="container flex-center h-3/4">
      <div className="w-full md:w-[70%] m-auto flex-column-left gap-5">
        <div className="flex-start gap-2">
          <Switch />
          <p className="helvetica">Увидеть в дейтсвии</p>
        </div>

        <div className="flex-column-left">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl w-64 md:w-full">
            Умный дом под ключ
          </h1>
          <p className="text-[17px] w-full pt-5 md:w-lg">
            Производство и монтаж современной электрики. Автоматическое
            управление всеми системами дома.
          </p>
        </div>

        <div className="pt-5 md:pt=10">
          <Button
            title="Узнать больше"
            isComplex={true}
            buttonClass="py-2 px-10 border-2 border-white bg-white flex-center gap-2 complex-b"
            iconSrc="/icons/arrow-right.svg"
            iconH={24}
            iconW={24}
            iconPosition="right"
            hoverColor="rgba(196, 249, 252, 1)"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

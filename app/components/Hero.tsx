import React from "react";
import Switch from "./Switch";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="container flex-center h-3/4">
      <div className="w-[70%] m-auto flex-column-left gap-5 ">
        <div className="flex-start gap-2">
          <Switch />
          <p className="helvetica">Увидеть в дейтсвии</p>
        </div>

        <div className="flex-column-left">
          <h1 className="font-bold text-6xl ">Умный дом под ключ</h1>
          <p className="text-[17px] w-lg">
            Производство и монтаж современной электрики. Автоматическое
            управление всеми системами дома.
          </p>
        </div>

        <div className="pt-10">
          <Button
            title="Узнать больше"
            isComplex={true}
            buttonClass="py-2 px-10 border border-gray-300 bg-white flex-center gap-2 complex-b"
            iconSrc="/icons/arrow-right.svg"
            iconH={24}
            iconW={24}
            iconPosition="right"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

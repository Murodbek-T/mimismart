import Image from "next/image";

interface ButtonProps {
  title: string;
  iconSrc?: string;
  iconPosition?: "right" | "left";
  iconW?: number;
  iconH?: number;
  buttonClass?: string;
  hoverColor?: string;
  isComplex: boolean;
}

const Button = ({
  title,
  iconSrc,
  iconPosition = "left",
  buttonClass,
  isComplex = false,
  iconW,
  iconH,
  hoverColor,
}: ButtonProps) => {
  if (isComplex) {
    return (
      <button className={`${buttonClass} rounded-full cursor-pointer`}>
        {iconSrc && iconPosition == "left" && (
          <Image src={`${iconSrc}`} alt="icon" width={iconW} height={iconH} />
        )}
        <span>{title}</span>
        {iconSrc && iconPosition == "right" && (
          <Image src={`${iconSrc}`} alt="icon" width={iconW} height={iconH} />
        )}
      </button>
    );
  }

  return (
    <button className={`${buttonClass} rounded-full cursor-pointer relative`}>
      <div className="bg-[rgba(0, 87, 107, 1)] absolute w-5 h-5" />
      {iconSrc && iconPosition == "left" && (
        <Image src={`${iconSrc}`} alt="icon" width={iconW} height={iconH} />
      )}
      <span>{title}</span>
      {iconSrc && iconPosition == "right" && (
        <Image src={`${iconSrc}`} alt="icon" width={iconW} height={iconH} />
      )}
    </button>
  );
};

export default Button;

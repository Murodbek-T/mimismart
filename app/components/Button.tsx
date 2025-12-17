"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

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
  const shadowRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isComplex || !shadowRef.current || !btnRef.current) return;

    const button = btnRef.current;
    const shadow = shadowRef.current;

    gsap.set(shadow, {
      transformOrigin: "center center",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const clientx = e.clientX - rect.left;
      const clienty = e.clientY - rect.top;

      gsap.to(shadow, {
        x: clientx,
        y: clienty,
        duration: 1.5,
        ease: "power3.out",
      });
    };

    button.addEventListener("mousemove", handleMouseMove);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isComplex]);

  if (isComplex) {
    return (
      <button
        ref={btnRef}
        className={`${buttonClass} rounded-full cursor-pointer relative overflow-hidden`}
      >
        <div
          ref={shadowRef}
          className={`absolute rounded-full pointer-events-none z-1 top-0 left-0`}
          style={{
            boxShadow: `0 0 50px 30px ${hoverColor}`,
            borderRadius: "999px",
            backdropFilter: "blur(5px)",
          }}
        />

        {iconSrc && iconPosition === "left" && (
          <Image src={iconSrc} alt="icon" width={iconW} height={iconH} />
        )}
        <span className="z-2">{title}</span>
        {iconSrc && iconPosition === "right" && (
          <Image src={iconSrc} alt="icon" width={iconW} height={iconH} />
        )}
      </button>
    );
  }

  return (
    <button className={`${buttonClass} rounded-full cursor-pointer relative`}>
      {iconSrc && iconPosition === "left" && (
        <Image src={iconSrc} alt="icon" width={iconW} height={iconH} />
      )}
      <span className="hidden md:block">{title}</span>
      {iconSrc && iconPosition === "right" && (
        <Image src={iconSrc} alt="icon" width={iconW} height={iconH} />
      )}
    </button>
  );
};

export default Button;

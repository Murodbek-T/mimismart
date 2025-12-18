"use client";

import { useTheme } from "next-themes";
import Hero from "./components/Hero";
import { useEffect, useState } from "react";

export default function Home() {
  const [imgUrl, setImgUrl] = useState("");
  const { theme } = useTheme();

  useEffect(() => {
    const bgImage =
      theme === "dark"
        ? setImgUrl("url('/images/hero-img-dark.png')")
        : setImgUrl("url('/images/bg-img.png')");
  }, [theme]);
  return (
    <div
      style={{
        backgroundImage: imgUrl,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "calc(100vh - 52px)",
      }}
      className="w-full relative "
    >
      <Hero />
    </div>
  );
}

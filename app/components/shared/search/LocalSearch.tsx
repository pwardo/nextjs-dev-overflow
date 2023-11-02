"use client";
import { Input } from "@/components/ui/input";
import React from "react";
import Image from "next/image";

interface ILocalSearch {
  route: string;
  placeholder: string;
  iconPosition: string;
  imgSrc: string;
  otherClasses: string;
}

const LocalSearch = ({
  route,
  placeholder,
  iconPosition,
  imgSrc,
  otherClasses,
}: ILocalSearch) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        {iconPosition === "left" && (
          <Image
            src={imgSrc}
            alt="Search"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        )}

        <Input
          placeholder={placeholder}
          className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
          type="text"
          value=""
          onChange={() => {}}
        />

        {iconPosition === "right" && (
          <Image
            src={imgSrc}
            alt="Search"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default LocalSearch;

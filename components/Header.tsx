"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import MainContainer from "./UI/MainContainer";
import { Flower2 } from "lucide-react";
import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "./UI/drawer";

const pages = [
  { name: "Početna", href: "/" },
  { name: "Proizvodi", href: "/proizvodi" },
  { name: "O nama", href: "/o-nama" },
  { name: "Kontakt", href: "/kontakt" },
];

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  const boarder = "border border-mt450-white rounded-xl";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed z-50 w-full">
      <MainContainer>
        <div className="flex justify-between items-center py-5">
          <Link href="/">
            <Image
              alt="logo"
              src="/assets/sanjalicaWhite.png"
              width={535}
              height={603}
              style={{ width: "100px", height: "auto" }}
              priority
            />
          </Link>
          <ul className="hidden md:flex flex-row gap-10 ">
            {pages.map((page) => (
              <li
                key={page.href}
                className={`${pathname === page.href ? boarder : "border border-transparent rounded-xl"} px-5 transition-all duration-500 ease-in-out hover:border-mt450-white/50 hover:rounded-xl`}
              >
                <Link href={page.href}>
                  <div>
                    <p className="text-mt450-white text-lg">{page.name}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="md:hidden">
            <Drawer open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
              <div onClick={() => setIsMenuOpen((prev) => !prev)}>
                <Flower2 size={64} color="#ffffff" strokeWidth={0.5} />
              </div>
              <DrawerContent className="bg-mt450-white/05 backdrop-blur-sm">
                <DrawerTitle />
                <DrawerDescription />
                <ul className="flex flex-col justify-center items-center gap-5 my-10">
                  {pages.map((page) => (
                    <li key={page.href}>
                      <Link
                        href={page.href}
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                      >
                        <p
                          className={`${pathname === page.href ? boarder : "border border-transparent rounded-xl"} px-5 text-mt450-white text-lg font-bold`}
                        >
                          {page.name}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </MainContainer>
    </header>
  );
};

export default Header;

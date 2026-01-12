"use client";

import Link from "next/link";
import Logo from "./Logo";
import { Button } from "./ui/button";

const navigation = [
  { name: "추천", href: "/recommand" },
  { name: "AI 비교", href: "/compare" },
  { name: "활용사례", href: "#" },
];

export default function Header() {
  return (
    <header className="fixed/ /top-0 /left-0 /right-0 z-50 shadow-md whitespace-nowrap border/ border-red-500 backdrop-blur-xs">
      <section className="flex justify-between py-3">
        {/* 좌측 */}
        <Link href="/" className="-m-1.5 p-1.5 uppercase font-extrabold">
          <Logo />
        </Link>

        {/* 메뉴 */}
        <div className="hidden md:flex gap-4">
          {navigation.map((item) => (
            <Button key={item.name} asChild variant="ghost">
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
        </div>

        {/* 우측 */}
        <div className="flex gap-4">
          <Button
            asChild
            variant={"ghost"}
            className="text-[#252432] font-bold hover:text-[#4e47ff] hover:bg-transparent"
          >
            <Link href={"/signup"}>회원가입</Link>
          </Button>
          <Button asChild className="bg-[#4e47ff] hover:bg-[#3d36e0] text-white rounded-[10px] px-6 font-bold">
            <Link href={"/signin"}>로그인</Link>
          </Button>
        </div>
      </section>
    </header>
  );
}

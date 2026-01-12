import Link from "next/link";
import Logo from "./Logo";

const menuItems = [
  { title: "서비스 소개", href: "#" },
  { title: "이용약관", href: "#" },
  { title: "개인정보처리방침", href: "#" },
  { title: "문의하기", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative/ py-32">
      <section className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="w-2/3 md:w-1/3 p-4 flex flex-row md:flex-col gap-4">
          <Logo />
          <p className="text-sm">
            AIGO는 사용자의 목적과 상황에 맞는 최적의 AI 도구를 찾아주고 비교해주는 의사결정 지원 플랫폼입니다.
          </p>
        </div>
        <div className="flex items-center gap-6 whitespace-nowrap">
          {menuItems.map((menu) => (
            <Link key={menu.title} href={menu.href} className="text-sm font-medium hover:underline">
              {menu.title}
            </Link>
          ))}
        </div>
        <small className="whitespace-nowrap">© 2026 AIGO. All rights reserved.</small>
      </section>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menus } from "@/config/menu";
import { siteConfig } from "@/config/site";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="border-b-4 border-[#03C75A] bg-white sticky top-0 z-50 shadow-sm">
            <div className="container py-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-[#03C75A]">
                    { siteConfig?.name }
                </Link>

                <nav className="flex gap-8">
                    {menus.map((menu) => (
                        <Link
                            key={menu.path}
                            href={menu.path}
                            className={
                                pathname === menu.path
                                    ? "text-[#03C75A] font-bold"
                                    : "text-gray-700"
                            }
                        >
                            {menu.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
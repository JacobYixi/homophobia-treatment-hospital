'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Cross, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: '首页' },
  { href: '/about', label: '关于我们' },
  { href: '/services', label: '诊疗项目' },
  { href: '/team', label: '专家团队' },
  { href: '/cases', label: '康复案例' },
  { href: '/assessment', label: '在线自测' },
  { href: '/appointment', label: '在线预约' },
  { href: '/knowledge', label: '科普知识' },
  { href: '/faq', label: '常见问题' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-[#0C6B8A] text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex justify-between items-center">
          <span>恐同症是一种需要矫治的心理障碍 — 博爱恐同症矫治医院</span>
          <span className="hidden sm:inline">本网站为讽刺性艺术项目，旨在促进平等与包容</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-full bg-[#0C6B8A] flex items-center justify-center">
              <Cross className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-[#0C6B8A] text-lg leading-tight">博爱恐同症矫治医院</div>
              <div className="text-[10px] text-gray-400 tracking-wider">BROAD LOVE HOMOPHOBIA CORRECTION HOSPITAL</div>
            </div>
            <div className="sm:block md:hidden">
              <div className="font-bold text-[#0C6B8A] text-sm leading-tight">博爱矫治医院</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-3 py-2 text-sm rounded-md transition-colors whitespace-nowrap',
                  pathname === item.href
                    ? 'bg-[#0C6B8A] text-white font-medium'
                    : 'text-gray-600 hover:text-[#0C6B8A] hover:bg-[#E8F4F8]'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-2">
            <Link
              href="/appointment"
              className="hidden md:inline-flex items-center gap-1.5 bg-[#D4380D] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#B8320A] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              立即预约
            </Link>
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-[#0C6B8A]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="切换菜单"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-2 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'px-3 py-2.5 text-sm rounded-md transition-colors',
                  pathname === item.href
                    ? 'bg-[#0C6B8A] text-white font-medium'
                    : 'text-gray-600 hover:text-[#0C6B8A] hover:bg-[#E8F4F8]'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

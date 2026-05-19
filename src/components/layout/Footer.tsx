import Link from 'next/link';
import { Cross, Heart, Shield, BookOpen } from 'lucide-react';

const quickLinks = [
  {
    title: '诊疗服务',
    links: [
      { href: '/services', label: '诊疗项目' },
      { href: '/assessment', label: '在线自测' },
      { href: '/appointment', label: '在线预约' },
      { href: '/cases', label: '康复案例' },
    ],
  },
  {
    title: '了解我们',
    links: [
      { href: '/about', label: '医院简介' },
      { href: '/team', label: '专家团队' },
      { href: '/faq', label: '常见问题' },
    ],
  },
  {
    title: '科普知识',
    links: [
      { href: '/knowledge#overview', label: '什么是恐同症' },
      { href: '/knowledge#symptoms', label: '症状识别' },
      { href: '/knowledge#causes', label: '成因分析' },
      { href: '/knowledge#harm', label: '恐同的危害' },
      { href: '/knowledge#prevention', label: '矫治方案' },
      { href: '/knowledge#resources', label: '延伸资源' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A2A35] text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#0C6B8A] flex items-center justify-center">
                <Cross className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-lg">博爱恐同症矫治医院</div>
                <div className="text-[10px] text-gray-500 tracking-wider">BROAD LOVE HOMOPHOBIA CORRECTION HOSPITAL</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              专治各种不服。当年你觉得同性恋需要"治疗"，现在我们把同样的标准还给你。
            </p>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded bg-[#0C6B8A]/30 flex items-center justify-center">
                <Heart className="w-4 h-4 text-[#1A9FBD]" />
              </div>
              <div className="w-8 h-8 rounded bg-[#0C6B8A]/30 flex items-center justify-center">
                <Shield className="w-4 h-4 text-[#1A9FBD]" />
              </div>
              <div className="w-8 h-8 rounded bg-[#0C6B8A]/30 flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-[#1A9FBD]" />
              </div>
            </div>
          </div>

          {/* Quick links */}
          {quickLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-medium text-sm mb-4 border-b border-gray-600 pb-2">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#1A9FBD] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-500">
            本网站为讽刺性艺术项目，所有内容均为虚构，旨在反思恐同现象、促进社会平等与包容。
          </p>
          <p className="text-xs text-gray-500 text-right">
            博爱恐同症矫治医院<span className="mx-4 text-gray-600">|</span>院长：<a href="https://space.bilibili.com/512776074" target="_blank" rel="noopener noreferrer" className="text-[#1A9FBD] hover:text-white transition-colors">Jac壹夕</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

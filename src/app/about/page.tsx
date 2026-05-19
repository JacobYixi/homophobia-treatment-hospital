'use client';

import { Heart, Shield, BookOpen, Users, Eye, Target } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: '铁腕与惩戒',
    desc: '偏见不是观点，是错误。错误需要被纠正，无论对方愿不愿意',
  },
  {
    icon: Shield,
    title: '手段与效率',
    desc: '电击、监禁、药物、洗脑——你当年觉得同性恋者"值得"这些，现在恐同者也"值得"',
  },
  {
    icon: BookOpen,
    title: '算账与报应',
    desc: '当年支持对别人做的那些事，现在一笔一笔还回来。这叫公平',
  },
  {
    icon: Users,
    title: '使命与立场',
    desc: '不是来跟你讲道理的。恐同者当年也没跟同性恋者讲道理',
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="medical-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">关于我们</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            了解博爱恐同症矫治医院的使命与核心价值观
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">医院使命</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  我们存在的理由很简单：你当年觉得同性恋需要"治疗"，现在我们认为恐同才需要被治。
                  而且我们用的疗法，都是你当年觉得"没问题"的那些。
                </p>
                <p>
                  长期以来，社会对性少数群体的偏见和歧视被包装成"传统价值观"或"个人观点"，
                  但这玩意儿本质上就是对陌生人的无端仇恨。你对同性恋的恐惧和排斥，和你因为别人用左手写字就想揍他一样——
                  没道理、丢人、该改。
                </p>
                <p>
                  我们不在乎你"有多痛苦"。当年同性恋者被电击、被监禁、被社会排斥的时候，也没人在乎他们有多痛苦。
                  现在只是让你体会一下，怎么就不行了？
                </p>
              </div>
            </div>
            <div className="bg-[#E8F4F8] rounded-xl p-8 flex flex-col justify-center">
              <blockquote className="text-lg text-[#0C6B8A] italic leading-relaxed border-l-4 border-[#0C6B8A] pl-4">
                &ldquo;当年你觉得同性恋需要治疗，现在轮到你自己了。&rdquo;
              </blockquote>
              <p className="text-sm text-gray-500 mt-4 pl-4">
                欢迎来到博爱恐同症矫治医院。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 section-title inline-block">核心价值观</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="medical-card p-6">
                <div className="w-12 h-12 rounded-lg bg-[#E8F4F8] flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-[#0C6B8A]" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Disclaimer */}
      <section className="bg-[#FFF7E6] border-b border-[#FFE58F]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-start gap-3">
            <span className="text-[#D4380D] shrink-0 mt-0.5 text-lg">⚠</span>
            <div className="text-sm text-[#874D00]">
              <strong>声明：</strong>本网站为讽刺性艺术项目，所有机构、人物、案例均为虚构。真正的偏见不是疾病，但偏见造成的伤害是真实的。请用包容的心态对待每一个人。
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

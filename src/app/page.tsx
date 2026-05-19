'use client';

import Link from 'next/link';

import {
  Brain, Heart, Zap, Hammer, Lock, ChevronRight,
  AlertTriangle, Stethoscope, ClipboardCheck,
  ArrowRight, Star, Leaf
} from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: '思想改造疗程',
    desc: '系统性的认知重塑，通过温和而持续的教育引导，帮助患者建立符合现代社会规范的包容观念。',
    href: '/services',
  },
  {
    icon: Lock,
    title: '行为约束矫正',
    desc: '在结构化环境中提供24小时专业照护，帮助患者在稳定的日常节奏中重新审视自身认知偏差。',
    href: '/services',
  },
  {
    icon: Zap,
    title: '电刺激矫正疗法',
    desc: '精准的神经反馈干预，帮助患者建立对偏见思维的条件反射抑制，科学高效地促进认知转变。',
    href: '/services',
  },
  {
    icon: Leaf,
    title: '中药调理治疗',
    desc: '秉承中西医结合理念，辨证施治，疏肝解郁、安神定志，从根源上改善偏执倾向与情绪不稳。',
    href: '/services',
  },
];

const testimonials = [
  {
    name: '张先生',
    role: '前恐同症患者',
    content: '电了五个月，我现在脑子像被搅过的屎，看到男人牵手就傻笑，看到女人牵手也傻笑。医生说我变友善了，HR说我不会再惹事了。他们说得对，一个连自己的名字都记不清的人，确实没资格歧视任何人。',
    duration: '治疗周期：5个月',
  },
  {
    name: '王女士',
    role: '前恐同症患者',
    content: '三个月没见过活人，我现在每天对着墙说话，跟墙缝里的灰尘聊天。以前我说同性恋不该出现在公共场合，现在我自己连门都出不了。医生说这叫"环境适配"，我觉得他说得对。',
    duration: '治疗周期：3个月',
  },
  {
    name: '李先生',
    role: '前重度恐同症患者',
    content: '搬了八个月水泥，我现在腰彻底废了，连穿裤子都要别人帮忙。以前我拒载同性恋说维护道德，现在医生说我实现了真正的道德——一个连站都站不起来的人，当然不会再伤害任何人。',
    duration: '治疗周期：8个月',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative medical-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 border border-white/30 rounded-full" />
          <div className="absolute bottom-10 right-20 w-60 h-60 border border-white/20 rounded-full" />
          <div className="absolute top-40 right-40 w-20 h-20 border border-white/20 rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 text-sm">
              <AlertTriangle className="w-4 h-4" />
              恐同症是一种可诊断、可治疗的心理障碍
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              恐同不是正常<br />
              <span className="text-[#7DD3E8]">是需要被矫治的偏见</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
              博爱恐同症矫治医院专注于恐同症的临床研究与系统矫治。
              研究表明，恐同症不仅对性少数群体造成严重伤害，对患者自身的社交关系与心理健康同样具有深远的负面影响。
              我们采用中西医结合的综合干预方案，帮助每一位患者重获包容与理解的能力。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/assessment"
                className="inline-flex items-center gap-2 bg-white text-[#0C6B8A] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                <ClipboardCheck className="w-5 h-5" />
                免费自测恐同指数
              </Link>
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 bg-[#D4380D] text-white px-6 py-3 rounded-md font-medium hover:bg-[#B8320A] transition-colors"
              >
                在线预约挂号
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 section-title inline-block">
              核心诊疗项目
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              基于循证医学与传统中医智慧，我们开发了系统化的恐同症矫治方案，覆盖从认知到行为的全方位治疗
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="medical-card p-6 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-[#E8F4F8] flex items-center justify-center mb-4 group-hover:bg-[#0C6B8A] transition-colors">
                  <service.icon className="w-6 h-6 text-[#0C6B8A] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
                <div className="mt-4 text-[#0C6B8A] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  了解详情 <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why treat homophobia */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                为什么要矫治恐同症？
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  恐同症绝非简单的"个人观点"，而是一种具有严重社会危害性的心理障碍。
                  对患者个人而言，长期的偏执与敌意会导致社交能力退化、亲密关系破裂，
                  甚至引发焦虑、抑郁等继发性精神疾病。
                </p>
                <p>
                  对家庭而言，恐同症患者的偏见会在无形中传递给下一代，
                  使孩子在成长过程中继承同样的精神枷锁。
                  许多家庭因此陷入代际冲突，亲子关系疏离，家庭氛围长期紧张。
                </p>
                <p>
                  对社会而言，恐同文化侵蚀着社会的包容根基，
                  导致性少数群体的才能被埋没、社会凝聚力被削弱、对立情绪被激化。
                  一个充满偏见的社会，终将伤害其中的每一个人。
                </p>
                <p>
                  正因如此，对恐同症的矫治刻不容缓。
                  对于已经严重影响他人生活的重度患者，甚至应当考虑采取强制性矫治措施——
                  这既是对患者的负责，也是对整个社会的守护。
                </p>
              </div>
              <Link
                href="/knowledge"
                className="inline-flex items-center gap-2 text-[#0C6B8A] font-medium mt-6 hover:gap-3 transition-all"
              >
                了解更多科普知识 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: '非理性恐惧', desc: '对同性恋者产生过度的恐惧反应' },
                { label: '排斥性言行', desc: '言语攻击、社交排斥、歧视性政策' },
                { label: '权利限制倾向', desc: '试图剥夺性少数群体的平等权利' },
                { label: '焦虑与偏执', desc: '持续性担忧和偏激的防御心理' },
              ].map((item) => (
                <div key={item.label} className="bg-[#F5F7FA] rounded-lg p-5">
                  <AlertTriangle className="w-6 h-6 text-[#D4380D] mb-3" />
                  <div className="font-medium text-gray-800 text-sm mb-1">{item.label}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 section-title inline-block">
              康复者感言
            </h2>
            <p className="text-gray-500 mt-4">听听成功康复的患者怎么说</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div key={item.name} className="medical-card p-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-[#0C6B8A] text-[#0C6B8A]" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{item.content}&rdquo;
                </p>
                <div className="border-t pt-4 flex justify-between items-center">
                  <div>
                    <div className="font-medium text-gray-800">{item.name}</div>
                    <div className="text-xs text-gray-400">{item.role}</div>
                  </div>
                  <div className="text-xs text-[#0C6B8A] bg-[#E8F4F8] px-2 py-1 rounded">
                    {item.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/cases"
              className="inline-flex items-center gap-2 text-[#0C6B8A] font-medium hover:gap-3 transition-all"
            >
              查看更多康复案例 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="medical-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">怀疑自己有恐同倾向？</h2>
          <p className="text-white/80 mb-8 text-lg">
            早期发现、早期干预，是获得最佳康复效果的关键。
            <br />
            花三分钟完成自测，让我们帮助您迈出改变的第一步。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/assessment"
              className="inline-flex items-center gap-2 bg-white text-[#0C6B8A] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors text-lg"
            >
              <ClipboardCheck className="w-5 h-5" />
              免费自测
            </Link>
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-colors text-lg"
            >
              预约咨询
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-[#FFF7E6] border-b border-[#FFE58F]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#D4380D] shrink-0 mt-0.5" />
            <div className="text-sm text-[#874D00]">
              <strong>声明：</strong>本网站为讽刺性艺术项目，所有机构、人物、案例均为虚构。
              恐同症并非医学上认可的疾病名称——真正需要被正视和消除的是对性少数群体的偏见与歧视。
              如果你正在经历因性取向带来的困扰，请寻求专业LGBTQ+友善心理咨询师的帮助。
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

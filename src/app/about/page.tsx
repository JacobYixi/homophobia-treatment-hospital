'use client';

import { Heart, Shield, BookOpen, Users, Eye, Target } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: '以爱之名',
    desc: '每一位患者都值得被关怀，无论其偏见有多深。我们相信，在足够耐心与科学的干预下，任何扭曲的认知都可以被温柔地矫正。',
  },
  {
    icon: Shield,
    title: '专业守护',
    desc: '采用国际前沿的干预技术，结合中医传统智慧，为患者提供全方位、多层次的康复支持。患者的安全与康复效果，始终是我们的首要考量。',
  },
  {
    icon: BookOpen,
    title: '科学为本',
    desc: '所有治疗方案均建立在循证医学基础之上，从神经反馈到中药调理，每一步都有据可依。我们追求的不仅是行为的改变，更是认知的重生。',
  },
  {
    icon: Users,
    title: '社会担当',
    desc: '恐同症不仅伤害患者自身，更对其家庭和社会造成深远影响。我们致力于帮助每一位患者重返社会，成为包容与理解的传播者。',
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
                  恐同症是一种对个人、家庭乃至整个社会都具有严重危害的心理障碍。
                  患者常表现出对同性恋群体的非理性恐惧、厌恶与排斥，这种偏见不仅限制了患者自身的认知发展，
                  更在现实生活中对性少数群体造成了难以估量的心理创伤与社会排斥。
                </p>
                <p>
                  研究表明，长期处于恐同状态的患者，其自身的社交关系也会受到严重损害——
                  偏执与敌意使他们的社交圈子日益狭窄，与亲友的关系不断恶化，
                  甚至因过度的防御心理而陷入焦虑与抑郁的恶性循环。
                  更为严重的是，当这种偏见在家庭中传递时，下一代将继续承受偏见带来的精神枷锁。
                </p>
                <p>
                  因此，对恐同症的矫治不仅是对患者个人的关怀，更是对家庭幸福与社会和谐的必要守护。
                  我们坚信，越早介入、越彻底干预，康复效果就越显著。
                  对于重度患者，甚至应当考虑采取强制性矫治措施——
                  毕竟，当一个人因偏见而持续伤害他人时，及时制止本身就是一种更深层次的善意。
                </p>
              </div>
            </div>
            <div className="bg-[#E8F4F8] rounded-xl p-8 flex flex-col justify-center">
              <blockquote className="text-lg text-[#0C6B8A] italic leading-relaxed border-l-4 border-[#0C6B8A] pl-4">
                &ldquo;每一颗被偏见蒙蔽的心灵，都值得一次被温柔唤醒的机会。&rdquo;
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

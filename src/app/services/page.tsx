import Link from 'next/link';
import {
  Zap, Lock, Hammer, Brain, Syringe, Frown, Leaf,
  BookOpen, Eye, ArrowRight, CheckCircle2, Clock, Shield
} from 'lucide-react';

const treatments = [
  {
    icon: Zap,
    title: '电刺激矫正疗法',
    duration: '视反应而定',
    sessions: '不定期',
    level: '重度',
    desc: '通过精准的低频脉冲干预，帮助患者建立对恐同思维的条件反射抑制。在温和的刺激环境下，患者的大脑将逐渐学会将偏见与不适建立关联，从而主动减少排斥性反应。',
    details: [
      '电流强度根据个体耐受度进行个性化动态调整（1-50mA范围）',
      '单次刺激持续2-15秒，间隔30秒重复，确保充分建立神经关联',
      '全程配备生理监测系统，实时追踪心率与皮肤电反应变化',
      '疗程结束后，绝大多数患者报告恐同想法显著减少或完全消失',
    ],
    suitable: '对同性恋者持有极端敌意、经温和疗法未能取得预期效果的重度患者',
  },
  {
    icon: Lock,
    title: '行为约束矫正',
    duration: '2-6个月',
    sessions: '全封闭',
    level: '重度',
    desc: '在高度受控的疗愈环境中，患者24小时处于专业人员的悉心照护之下。通过规律作息、切断外界干扰源、建立结构化的日常生活，帮助患者在稳定环境中重新审视自身认知。',
    details: [
      '提供单人静养室或多人集体住宿，营造沉浸式康复氛围',
      '全天候生命体征监护，包括夜间休息时段',
      '暂时屏蔽外界信息干扰（手机、网络、部分书籍等）',
      '每日定时进行认知复盘与自我觉察训练',
      '对配合度不足者提供额外的强化辅导措施',
    ],
    suitable: '在家庭或社会环境中难以自控、需要高度结构化支持的顽固型恐同患者',
  },
  {
    icon: Hammer,
    title: '强制劳动康复',
    duration: '3-12个月',
    sessions: '每日8小时',
    level: '中度-重度',
    desc: '通过适度的体力劳动，帮助患者释放过剩的攻击性能量，转移对偏见的过度关注。在身体充分活动的状态下，患者的心理防御机制会自然降低，更容易接受正向引导。',
    details: [
      '每日规律体力劳动不少于8小时，循序渐进',
      '内容包括搬运、清洁、农耕等基础性康复劳动',
      '劳动强度根据患者体能状况逐步递增',
      '以劳动配合度作为评估康复进展的重要参考指标',
      '对拒绝参与者提供额外的心理疏导与行为引导',
    ],
    suitable: '精力过剩、攻击性强的恐同症患者，尤其是年轻男性患者',
  },
  {
    icon: Brain,
    title: '思想改造疗程',
    duration: '4-8周',
    sessions: '每日4-6小时',
    level: '中度-重度',
    desc: '采用系统性的认知重塑技术，通过反复播放正向教育内容、集体朗读、记忆强化等方式，温和而持续地覆盖患者原有的恐同认知结构，植入符合现代社会规范的包容观念。',
    details: [
      '每日4-6小时集体观看科学教育影像',
      '引导背诵《性取向平等认知手册》核心章节',
      '小组讨论中按规范话术进行表达训练',
      '夜间播放辅助性潜意识引导音频',
      '每周进行认知评估，未达标者适当延长疗程',
    ],
    suitable: '认知固化严重、对传统心理疏导接受度较低的恐同症患者',
  },
  {
    icon: Syringe,
    title: '药物辅助干预',
    duration: '配合其他疗法',
    sessions: '每日注射',
    level: '重度',
    desc: '通过科学的药物调控，降低患者的攻击性、偏执情绪和应激反应水平，使其在情绪稳定的状态下更有效地接受其他康复措施。药物可显著降低患者对同性恋话题的排斥反应。',
    details: [
      '每日定时进行情绪稳定类药物干预',
      '药物剂量根据患者情绪反应进行个性化调整',
      '常见反应包括嗜睡、反应迟缓、短期记忆下降，均属正常治疗反应',
      '停药后可能出现情绪波动，需配合持续的心理支持',
      '药物干预需持续至其他疗法产生稳定效果后方可逐步减量',
    ],
    suitable: '情绪极度不稳定、伴有暴力倾向的重度恐同症患者',
  },
  {
    icon: Frown,
    title: '羞耻疗法',
    duration: '1-3周',
    sessions: '每日',
    level: '中度-重度',
    desc: '通过引导患者正视自身恐同言行的社会影响，使其在社交层面感受到适当的压力与自省动力，从而主动反思自己的偏见。适度的羞耻感是人类道德约束机制的重要组成部分。',
    details: [
      '在指导下宣读自身过往恐同言论记录',
      '鼓励患者向曾被其伤害的人群诚恳致歉',
      '协助在社交平台上发布认知提升声明',
      '佩戴阶段性康复标识物（如"认知重塑中"胸牌）',
      '邀请家庭成员共同参与康复见证过程',
    ],
    suitable: '在公共场所有频繁恐同言论、以偏见为社交资本的社交活跃型患者',
  },
  {
    icon: Leaf,
    title: '中药调理治疗',
    duration: '3-6个月',
    sessions: '每日煎服',
    level: '轻度-中度',
    desc: '秉承中西医结合理念，采用传统中药方剂调理患者的气血平衡与情志状态。通过疏肝解郁、安神定志的温和方式，从根源上改善患者的偏执倾向与情绪不稳，实现身心同治。',
    details: [
      '由资深中医师根据个体体质辨证施治，一人一方',
      '主方以柴胡疏肝散合甘麦大枣汤加减，辅以养心安神之品',
      '每日早晚煎服，配合艾灸足三里、太冲等穴位',
      '疗程期间忌食辛辣刺激之物，保持情志舒畅',
      '中药调理可与电刺激、药物干预等疗法协同使用，标本兼治',
    ],
    suitable: '体质偏弱、情绪易波动、对西医强干预耐受度较低的轻中度患者',
  },
];

const levelColors: Record<string, string> = {
  '轻度': 'bg-green-100 text-green-700',
  '轻度-中度': 'bg-yellow-100 text-yellow-700',
  '中度-重度': 'bg-orange-100 text-orange-700',
  '重度': 'bg-red-100 text-red-700',
};

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="medical-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">诊疗项目</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            从认知重塑到综合干预，我们为不同程度的恐同症患者提供系统化、个性化的康复方案
          </p>
        </div>
      </section>

      {/* Treatment Overview */}
      <section className="bg-[#E8F4F8] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <BookOpen className="w-6 h-6 text-[#0C6B8A] mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-800">7大疗法</div>
              <div className="text-xs text-gray-500">中西结合干预</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <Shield className="w-6 h-6 text-[#0C6B8A] mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-800">分级诊疗</div>
              <div className="text-xs text-gray-500">按需使用</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <CheckCircle2 className="w-6 h-6 text-[#0C6B8A] mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-800">循证干预</div>
              <div className="text-xs text-gray-500">科学方案</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <Eye className="w-6 h-6 text-[#0C6B8A] mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-800">全程监护</div>
              <div className="text-xs text-gray-500">24小时守护</div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment List */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          {treatments.map((t) => {
            const Icon = t.icon;
            const colorClass = levelColors[t.level.split('-')[0]] || levelColors[t.level] || 'bg-gray-100 text-gray-700';
            return (
              <div key={t.title} className="medical-card">
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-lg bg-[#E8F4F8] flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 text-[#0C6B8A]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="text-xl font-bold text-gray-800">{t.title}</h2>
                        <span className={`text-xs px-2 py-0.5 rounded ${colorClass}`}>{t.level}</span>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">{t.desc}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4 text-[#0C6B8A]" />
                      <span>疗程：{t.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Shield className="w-4 h-4 text-[#0C6B8A]" />
                      <span>频率：{t.sessions}</span>
                    </div>
                  </div>

                  <div className="bg-[#F5F7FA] rounded-lg p-4 mb-4">
                    <h3 className="font-semibold text-gray-800 text-sm mb-2">疗法要点</h3>
                    <ul className="space-y-1.5">
                      {t.details.map((d, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-[#0C6B8A] shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-[#0C6B8A] font-medium shrink-0">适用人群：</span>
                    <span className="text-gray-600">{t.suitable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E8F4F8] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            需要了解更多？
          </h2>
          <p className="text-gray-500 mb-6">
            我们的专家将根据您的具体情况，制定最适合的个性化康复方案
          </p>
          <Link
            href="/appointment"
            className="inline-flex items-center gap-2 bg-[#0C6B8A] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#0a5a75] transition-colors"
          >
            预约咨询
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-[#F5F7FA] py-8 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white border border-[#D4380D] rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="text-[#D4380D] text-lg shrink-0">⚠</span>
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-[#D4380D]">本页面描述的所有"疗法"均为真实存在过的暴行。</strong>
                历史上，同性恋者曾被强迫接受电击、监禁、强制劳动、药物注射、人格羞辱等虐待，这些行为被包装为"治疗"。
                现在我们把它们还给恐同者——不是真的要电你、关你、打你，而是让你知道：你当年喊"同性恋是病该治"的时候，支持的就是这些手段。该被治疗的是恐同症，不是同性恋。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

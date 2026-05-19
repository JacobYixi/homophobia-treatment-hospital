import Link from 'next/link';
import {
  Zap, Lock, Hammer, Brain, Syringe, Frown,
  BookOpen, Eye, ArrowRight, CheckCircle2, Clock, Shield
} from 'lucide-react';

const treatments = [
  {
    icon: Zap,
    title: '电刺激矫正疗法',
    duration: '视反应而定',
    sessions: '不定期',
    level: '重度',
    desc: '通过精确控制的低频电流刺激，建立对恐同思想的条件反射抑制。患者在接受刺激的同时观看与同性恋相关的图像，使其大脑将恐同思维与不适感建立牢固关联，从而主动抑制偏见表达。',
    details: [
      '电流强度根据患者耐受度动态调整（1-50mA范围）',
      '每次刺激持续2-15秒，间隔30秒重复',
      '配备生理监测系统，实时追踪心率与皮肤电反应',
      '疗程结束后患者报告恐同想法显著减少或完全消失',
    ],
    suitable: '对同性恋者持有极端敌意、经温和疗法无效的重度患者',
  },
  {
    icon: Lock,
    title: '行为约束矫正',
    duration: '2-6个月',
    sessions: '全封闭',
    level: '重度',
    desc: '在高度受控的隔离环境中，患者24小时处于专业人员的监督之下。通过限制自由活动、切断与外界的联系、强制遵守严格的作息制度，使患者在结构化环境中重新建立对"正常"的认知，消除恐同偏见。',
    details: [
      '单人隔离室或多人通铺住宿，消除隐私空间',
      '全天候监控，包括睡眠时段',
      '禁止私自接触外界信息（手机、网络、书籍等）',
      '每日定时进行思想汇报与自我批评',
      '违规者接受额外的纪律矫正措施',
    ],
    suitable: '在家庭或社会环境中难以控制的顽固型恐同患者',
  },
  {
    icon: Hammer,
    title: '强制劳动康复',
    duration: '3-12个月',
    sessions: '每日8小时',
    level: '中度-重度',
    desc: '通过高强度的体力劳动，消耗患者过剩的攻击性能量和偏执思维。在体力透支的状态下，患者的防御心理降低，更容易接受矫治人员的思想引导，从而实现认知重塑。',
    details: [
      '每日强制体力劳动不少于8小时',
      '内容包括搬运、清洁、农耕等基础性劳动',
      '劳动强度根据患者体能逐步递增',
      '以劳动表现作为评估矫治效果的核心指标',
      '拒绝劳动者接受额外纪律措施',
    ],
    suitable: '精力过剩、攻击性强的恐同症患者，尤其是年轻男性患者',
  },
  {
    icon: Brain,
    title: '思想改造疗程',
    duration: '4-8周',
    sessions: '每日4-6小时',
    level: '中度-重度',
    desc: '采用高强度、高频率的思想灌输技术，通过反复播放矫正性内容、集体朗读、背诵教条等方式，系统性地覆盖患者原有的恐同认知结构，植入新的、符合社会规范的平等观念。',
    details: [
      '每日4-6小时集体观看矫正教育视频',
      '强制背诵《性取向平等认知手册》全文',
      '小组讨论中必须按照规定话术发言',
      '夜间播放潜意识矫正音频',
      '每周进行认知测试，不合格者延长疗程',
    ],
    suitable: '认知固化严重、拒绝接受传统心理疏导的恐同症患者',
  },
  {
    icon: Syringe,
    title: '药物辅助干预',
    duration: '配合其他疗法',
    sessions: '每日注射',
    level: '重度',
    desc: '通过注射药物降低患者的攻击性、偏执情绪和应激反应水平，使其在药物作用下保持情绪稳定，从而更有效地接受其他矫治措施。药物可显著降低患者对同性恋话题的排斥反应。',
    details: [
      '每日定时注射镇静类药物',
      '药物剂量根据患者情绪反应动态调整',
      '常见副作用包括嗜睡、反应迟钝、短期记忆下降',
      '停药后可能出现情绪波动，需配合心理支持',
      '药物干预需持续至其他疗法产生稳定效果',
    ],
    suitable: '情绪极度不稳定、伴有暴力倾向的重度恐同症患者',
  },
  {
    icon: Frown,
    title: '羞耻疗法',
    duration: '1-3周',
    sessions: '每日',
    level: '中度-重度',
    desc: '通过公开揭露和羞辱患者的恐同言论和行为，使其在社交层面感受到巨大的压力与羞耻，从而被迫反思自己的偏见。羞耻感是人类最基本的道德约束机制，可有效抑制偏见的公开表达。',
    details: [
      '当众宣读患者过往恐同言论记录',
      '要求患者向曾被其伤害的人群公开道歉',
      '在社交平台上发布"忏悔声明"',
      '佩戴标识性物品（如"偏见矫正中"胸牌）',
      '家庭成员参与羞辱过程以增强效果',
    ],
    suitable: '在公共场所有频繁恐同言论、以偏见为社交资本的患者',
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
            从思想改造到强制干预，我们为不同程度的恐同症患者提供"合适"的诊疗方案
          </p>
        </div>
      </section>

      {/* Treatment Overview */}
      <section className="bg-[#E8F4F8] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <BookOpen className="w-6 h-6 text-[#0C6B8A] mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-800">6大疗法</div>
              <div className="text-xs text-gray-500">强制干预手段</div>
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
              <div className="text-xs text-gray-500">24小时监控</div>
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
            我们的专家将根据您的具体情况，制定最适合的个性化矫治方案
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
                现在我们把它们还给恐同者——不是真的要电你、关你、打你，而是让你知道：你当年喊"同性恋是病该治"的时候，嘴脸有多恶心。你支持的"治疗"，就是这些。该被治疗的是恐同症，不是同性恋。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

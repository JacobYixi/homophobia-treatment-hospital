import { Brain, Heart, Activity, Stethoscope, Users, MessageSquare, Quote, Leaf } from 'lucide-react';

const doctors = [
  {
    name: '赵明德',
    title: '首席研究员 / 思想改造疗程学科带头人',
    specialty: '认知行为治疗',
    icon: Brain,
    focus: '高强度信息输入与认知结构重塑 / 通过系统性引导纠正恐同认知偏差',
    philosophy: '很多患者说"我有权保持自己的看法"。我们完全尊重这种想法，同时也相信，在足够耐心和科学的引导下，任何认知都可以被温柔地重塑。我们的目标是帮助患者找到内心的平静——无论这需要多长时间。',
    motto: '"知识改变命运——我们有很多知识，患者会全部记住。"',
  },
  {
    name: '林慧心',
    title: '药物辅助干预首席专家',
    specialty: '叙事疗法 / 共情训练',
    icon: Heart,
    focus: '生理指标调控与情绪稳定化干预 / 通过药物辅助降低患者的敌意与焦虑反应',
    philosophy: '有些偏见根深蒂固，单靠谈话是不够的。好在现代医学有办法让人的情绪变得...温和一些。这不是惩罚，是让治疗过程更"顺畅"。当患者能够在药物的帮助下保持情绪稳定，他们就更容易接受正向的引导。',
    motto: '"情绪稳定是美德，科学可以帮助您达到这个目标。"',
  },
  {
    name: '陈志远',
    title: '羞耻疗法科主任',
    specialty: '行为治疗 / 暴露疗法',
    icon: Activity,
    focus: '刺激-反应配对与恐同行为抑制 / 通过条件反射建立对偏见表达的抑制机制',
    philosophy: '很多恐同者看到同性恋亲密场景就会不舒服。没关系，我们会通过科学的条件反射训练，帮助他们学会在社交场合保持沉默与微笑。这不是羞辱，这是帮助患者建立更适应社会的表达方式。',
    motto: '"条件反射是可以训练的，无论什么方向。"',
  },
  {
    name: '周思源',
    title: '电刺激矫正疗法主任',
    specialty: '精神分析 / 深度心理咨询',
    icon: Stethoscope,
    focus: '神经反馈与条件反射建立 / 通过精准干预建立对恐同思维的条件反射抑制',
    philosophy: '很多患者一开始会抗拒电击，觉得这是虐待。我会耐心地告诉他们：当年电击被包装成"科学治疗"的时候，社会是怎么接受它的？现在我们把同样的"科学"用在更需要它的地方。患者最终会理解的。',
    motto: '"身体的反应不会说谎，我们会认真对待每一个反应。"',
  },
  {
    name: '孙雅琴',
    title: '行为约束矫正中心负责人',
    specialty: '团体治疗 / 社会心理学',
    icon: Users,
    focus: '结构化环境设计与行为管控 / 通过限制自由活动建立对"正常"认知的重新理解',
    philosophy: '有些人就是需要被约束才能找到内心的平静。把他们的自由暂时收一收，把他们的选择暂时限一限，效果往往出奇地好。在安静的环境中，患者会重新思考什么才是真正重要的。',
    motto: '"秩序带来安宁，安宁带来改变。"',
  },
  {
    name: '黄志诚',
    title: '强制劳动康复项目负责人',
    specialty: '家庭治疗 / 系统性治疗',
    icon: MessageSquare,
    focus: '体力劳动与攻击性能量转化 / 通过高强度劳动消耗偏执思维与过剩精力',
    philosophy: '很多恐同家庭最大的问题是：闲。闲下来就有时间琢磨别人的事。我们的方案很简单：让他们忙起来，每天劳动八小时，累到没力气去想那些偏见。身体疲惫的时候，心灵往往更容易接受新的观念。',
    motto: '"劳动使人专注，专注使人平静。"',
  },
  {
    name: '吴百草',
    title: '中药调理治疗科主任',
    specialty: '中医情志病学 / 传统康复医学',
    icon: Leaf,
    focus: '中药辨证施治与情志调理 / 通过疏肝解郁、安神定志改善偏执倾向',
    philosophy: '中医讲"肝主疏泄"，长期的偏执与愤怒最易伤肝。我们用柴胡疏肝散合甘麦大枣汤加减，配合艾灸调理气血，从根源上改善患者的情绪根基。西药治标，中药治本，中西医结合，方能标本兼治。',
    motto: '"药补不如食补，食补不如心补——我们的心补，很有力度。"',
  },
];

export default function TeamPage() {
  return (
    <div>
      {/* Hero */}
      <section className="medical-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">专家团队</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            一支致力于用科学与关怀帮助每一位患者重获新生的专业团队
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doc) => (
              <div key={doc.name} className="medical-card overflow-hidden">
                {/* Avatar area */}
                <div className="bg-[#E8F4F8] p-8 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-[#0C6B8A] flex items-center justify-center mb-4">
                    <doc.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{doc.name}</h3>
                  <p className="text-xs text-[#0C6B8A] text-center mt-1">{doc.title}</p>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-400">专业方向</span>
                      <div className="text-gray-700 font-medium">{doc.specialty}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">研究方向</span>
                      <div className="text-gray-700">{doc.focus}</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <p className="text-gray-600 text-sm leading-relaxed italic">
                      {doc.philosophy}
                    </p>
                    <div className="mt-3 flex items-start gap-2 text-[#0C6B8A] text-sm">
                      <Quote className="w-4 h-4 shrink-0 mt-0.5" />
                      <span className="italic">{doc.motto}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="bg-[#F5F7FA] py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">我们的理念</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            我们相信，每一颗被偏见蒙蔽的心灵，都值得一次被唤醒的机会。
            通过中西医结合的系统干预，从神经反馈到中药调理，从认知重塑到行为约束，
            我们致力于为每一位患者提供最适合的康复路径。
            康复的过程或许不易，但请相信：当偏见被消除的那一刻，患者将迎来真正的自由。
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-[#FFF7E6] border-b border-[#FFE58F]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-start gap-3">
            <span className="text-[#D4380D] shrink-0 mt-0.5 text-lg">⚠</span>
            <div className="text-sm text-[#874D00]">
              <strong>声明：</strong>本网站为讽刺性艺术项目，医生姓名与角色设定均为虚构。我们未杜撰任何学历、职称或联系方式，以避免信息误导。
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

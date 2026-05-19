import { Brain, Heart, Activity, Stethoscope, Users, MessageSquare, Quote } from 'lucide-react';

const doctors = [
  {
    name: '赵明德',
    title: '首席研究员 / 思想改造疗程学科带头人',
    specialty: '认知行为治疗',
    icon: Brain,
    focus: '高强度信息输入与认知结构重塑 / 通过系统性灌输纠正恐同认知偏差',
    philosophy: '很多患者说"我有权保持自己的看法"。没问题，我们也有权每天给你灌输正确的看法，直到你记住为止。当年你们不也是这样教育同性恋者的吗？',
    motto: '"知识就是力量——我们有很多知识，你要全部记住。"',
  },
  {
    name: '林慧心',
    title: '药物辅助干预首席专家',
    specialty: '叙事疗法 / 共情训练',
    icon: Heart,
    focus: '生理指标调控与情绪稳定化干预 / 通过药物辅助降低患者的敌意与焦虑反应',
    philosophy: '有些偏见根深蒂固，单靠谈话是不够的。好在现代医学有办法让人的情绪变得...温和一些。这不是惩罚，是让治疗过程更"顺畅"。当年你们不也建议同性恋者"吃点药调理一下"吗？',
    motto: '"情绪稳定是美德，药物可以帮助你达到这个目标。"',
  },
  {
    name: '陈志远',
    title: '羞耻疗法科主任',
    specialty: '行为治疗 / 暴露疗法',
    icon: Activity,
    focus: '刺激-反应配对与恐同行为抑制 / 通过条件反射建立对偏见表达的抑制机制',
    philosophy: '很多恐同者看到同性恋亲密场景就会不舒服。没关系，我们会让这种不舒服升级，直到他们学会闭嘴。这不是虐待，这是你们自己发明的"科学疗法"。',
    motto: '"条件反射是可以训练的，无论训练什么。"',
  },
  {
    name: '周思源',
    title: '电刺激矫正疗法主任',
    specialty: '精神分析 / 深度心理咨询',
    icon: Stethoscope,
    focus: '神经反馈与条件反射建立 / 通过精确控制的电刺激建立对恐同思维的条件反射抑制',
    philosophy: '很多患者一开始会抗拒电击，觉得这是虐待。我会耐心地告诉他们：当年你们支持用电击"治疗"同性恋的时候，可不是这么说的。现在轮到你们了，别双标。',
    motto: '"电流不会撒谎，你的反应也不会。"',
  },
  {
    name: '孙雅琴',
    title: '行为约束矫正中心负责人',
    specialty: '团体治疗 / 社会心理学',
    icon: Users,
    focus: '结构化环境设计与行为管控 / 通过限制自由活动建立对"正常"认知的重新理解',
    philosophy: '有些人就是需要被约束才能老实。把他们的自由暂时收一收，把他们的选择暂时限一限，效果往往出奇地好。毕竟当年别人也是这么被"矫正"的，现在只是换了对象。',
    motto: '"自由是 privilege，不是 right。"',
  },
  {
    name: '黄志诚',
    title: '强制劳动康复项目负责人',
    specialty: '家庭治疗 / 系统性治疗',
    icon: MessageSquare,
    focus: '体力劳动与攻击性能量转化 / 通过高强度劳动消耗偏执思维与过剩精力',
    philosophy: '很多恐同家庭最大的问题是：闲。闲下来就有时间琢磨别人的事。我们的方案很简单：让他们忙起来，每天劳动八小时，累到没力气歧视。当年你们不也这样"锻炼"别人的吗？',
    motto: '"劳动最光荣，尤其是为别人劳动。"',
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
            一群认真执行"以彼之道还施彼身"的专业人士
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
            我们的理念很简单：你当年觉得同性恋需要"治疗"，现在轮到你自己尝尝这些"治疗"了。
            电击、监禁、强制劳动——这些你支持用来"矫正"别人的手段，现在全部还给你。
            欢迎来到博爱恐同症矫治医院，你不是觉得同性恋有病该治吗？很好，现在我们认为恐同才是病，而你，就是病人。
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

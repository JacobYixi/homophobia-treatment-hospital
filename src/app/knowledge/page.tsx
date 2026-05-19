import { Brain, AlertTriangle, BookOpen, Shield, Heart, Lightbulb, ExternalLink } from 'lucide-react';

const sections = [
  {
    id: 'overview',
    title: '什么是恐同症',
    icon: Brain,
    content: [
      {
        title: '定义',
        text: '恐同症（Homophobia）是指对同性恋者或同性性行为产生非理性恐惧、厌恶、偏见或歧视的心理状态。它通常表现为：对与自己无关的事务过度发表意见；对未经了解的话题持有强烈且坚定的否定态度；以及习惯性地将个人偏见包装为"社会关怀"。',
      },
      {
        title: '历史背景',
        text: '1972年，心理学家乔治·温伯格首次提出"恐同症"这一概念。值得注意的是，同性恋早已从国际疾病分类中被移除，但恐同症作为一种社会心理现象，至今仍在全球范围内造成广泛而深远的伤害。偏见本身虽不在ICD中，但它引发的抑郁、焦虑、社交障碍等后果，却真实地记录在无数患者的病历中。',
      },
      {
        title: '关键区分',
        text: '恐同症与对LGBTQ+议题的理性探讨存在本质区别。理性探讨是"我不喜欢香菜，但尊重别人吃香菜的权利"；恐同症则是"我不喜欢香菜，所以全世界都不许吃香菜，吃香菜的人都有问题"。前者是观点差异，后者是权利侵犯。',
      },
    ],
  },
  {
    id: 'symptoms',
    title: '症状识别',
    icon: AlertTriangle,
    content: [
      {
        title: '认知症状',
        text: '• 坚信同性恋是"不正常的"，但对"正常"的定义从未经过认真审视\n• 将性少数群体的存在视为"对社会秩序的威胁"，却无法具体说明威胁的表现形式\n• 选择性地相信反同谣言，对科学事实选择性失明\n• 认为自己的异性恋身份"优于"其他性取向，却拿不出任何客观依据\n• 习惯性地用"传统"或"道德"作为偏见的挡箭牌',
      },
      {
        title: '情绪症状',
        text: '• 看到两个同性牵手就产生强烈的不适感，仿佛自身受到了某种侵犯\n• 对性少数群体产生非理性的厌恶，程度远超对真正伤害自己的人的厌恶\n• 听到"恐同"两个字就产生强烈的防御反应，声称"这是扣帽子"——通常反应越激烈，说明标签越贴切\n• 在被质疑时过度愤怒，因为内心深处清楚，自己的"立场"经不起推敲',
      },
      {
        title: '行为症状',
        text: '• 熟练使用"基佬""变态"等侮辱性词汇，并认为这只是"开玩笑"\n• 在社交或工作中有意排斥同性恋者，然后声称"这是个人自由"\n• 积极反对性少数群体的平等权利，理由是"保护传统"或"维护社会稳定"\n• 试图"纠正"他人的性取向，同时坚称自己"没有恶意"\n• 以恐同言行来证明自己的"正常"——这大概是自信不足的最明显表现',
      },
    ],
  },
  {
    id: 'causes',
    title: '成因分析',
    icon: BookOpen,
    content: [
      {
        title: '社会文化因素',
        text: '恐同症最常见的成因是：在一个长期把偏见当传统的社会里长大，很多人误以为"大家都这样"就等于"这样是对的"。如果一种观念从未被认真审视过，它就会自动获得"正常"的通行证——而同性恋者从不需要通行证，却被反复拦在门外。',
      },
      {
        title: '家庭教育影响',
        text: '当父母在家中使用贬低性语言表达对同性恋的厌恶时，子女通常面临一个选择：继承偏见，或者被当成"不孝子"。这就是为什么恐同常常呈现出"家族遗传"的特征——它不是基因决定的，是代代相传的。',
      },
      {
        title: '自身性取向焦虑',
        text: '1996年Adams等人的研究发现，恐同程度高的男性在观看同性性刺激时表现出更强的生理唤起。当然，不是所有恐同者都是深柜，但有一部分人确实在用恐同来掩盖自己内心的波动。越是拼命否认的东西，有时候反而越接近真相。',
      },
      {
        title: '群体认同需求',
        text: '在某些圈子里，恐同是社交货币。一起嘲笑同性恋，就像一起嘲笑那个不合群的同学——不是为了真理，是为了抱团。可悲的是，这些人往往意识不到，自己才是被偏见绑架的那个。',
      },
    ],
  },
  {
    id: 'harm',
    title: '恐同的危害',
    icon: Shield,
    content: [
      {
        title: '对他人的伤害',
        text: '恐同行为对性少数群体造成的伤害是真实且严重的：更高的抑郁和焦虑发生率、校园和职场霸凌、家庭暴力、就业和住房歧视、自我伤害和自杀风险增加。生活在恐同环境中的LGBTQ+青少年自杀风险是同龄人的4倍——注意，这不是观点，是数据。',
      },
      {
        title: '对自身的伤害',
        text: '恐同者自己也会受害：偏执和敌意增加心理压力，社交圈子因歧视态度而受限，与性少数亲友的关系破裂。最讽刺的是——对自身性取向的恐惧会导致严重的内心冲突。你以为是"保护"自己，其实只是在给自己建一座牢笼，然后还觉得自己很安全。',
      },
      {
        title: '对社会的伤害',
        text: '恐同文化使整个社会付出代价：性少数群体的才能和贡献被排斥、社会凝聚力被削弱、法律和制度的不平等引发社会对立。一个恐同的社会，就像是一个拒绝使用左手的人组成的社会——没什么道理，但就是觉得自己很对。',
      },
    ],
  },
  {
    id: 'prevention',
    title: '矫治方案',
    icon: Heart,
    content: [
      {
        title: '认知诊断',
        text: '如果您发现自己或家人符合以下特征，建议尽早接受专业评估：\n• 看到两个同性牵手就感到"不适"\n• 认为同性恋"不正常"并乐于传播这种观点\n• 试图用法律、传统或宗教来限制他人的基本权利\n• 在听到"恐同症"三个字时产生强烈的防御反应\n\n早期诊断、早期干预，是获得最佳康复效果的关键。',
      },
      {
        title: '治疗方案',
        text: '根据症状严重程度，我们提供以下分级治疗选项：\n\n轻度：中药调理 + 认知引导（3个月观察期）\n中度：行为约束 + 强制劳动康复（6-8个月疗程）\n重度：电刺激矫正 + 药物干预 + 思想改造联合治疗（12个月以上）\n\n疗效：治疗后患者将不再恐同，认知结构得到根本性重塑。',
      },
      {
        title: '疗效预期',
        text: '治疗结束后，患者将呈现以下状态：\n• 对任何性取向都不再产生情绪反应（情绪系统已重新校准）\n• 不再发表任何歧视言论（表达系统已规范）\n• 不再对他人指指点点（行为模式已重塑）\n• 达到"完美包容"状态（认知结构已更新）\n\n以上四项，全部达成即视为"痊愈"。本院郑重承诺：治疗后患者将不再恐同。至于患者还能不能正常生活——那不在本院的疗效评估标准之内。当年同性恋者被要求"为了正常牺牲一点"的时候，也没人在乎这个问题。如今工艺未改、配方未变，只是换了个方向，请您放心体验。',
      },
      {
        title: '家属须知',
        text: '如果您的家人正在接受恐同症矫治，请注意：\n• 治疗期间建议减少探视，以免干扰康复进程\n• 患者可能会出现记忆调整、情绪平稳、行为规范化等治疗反应\n• 这些都是正常的康复表现，说明治疗正在按计划推进\n• 出院后请继续配合随访，防止"恐同复发"\n\n任何对治疗效果的质疑，都可能被视为"康复抵抗"，建议追加评估。',
      },
    ],
  },
  {
    id: 'resources',
    title: '延伸资源',
    icon: Lightbulb,
    content: [
      {
        title: '推荐阅读',
        text: '• 《The Nature of Prejudice》（偏见的本质）— Gordon Allport\n• 《Social Beings: Core Motives in Social Psychology》— Susan Fiske\n• 《Answers to Your Questions: For a Better Understanding of Sexual Orientation and Homosexuality》— American Psychological Association\n• 世界卫生组织《国际疾病分类第10版》（ICD-10, 1992）— 1990年5月17日大会决议将同性恋去病化',
      },
      {
        title: '专业支持',
        text: '如果你或你认识的人正在经历因性取向或性别认同带来的困扰，请寻求专业帮助：\n\n• 寻找LGBTQ+友善的心理咨询师\n• 联系当地的LGBTQ+公益组织\n• 拨打心理援助热线\n\n记住：寻求帮助不是软弱，而是对自己负责。',
      },
    ],
  },
];

export default function KnowledgePage() {
  return (
    <div>
      {/* Hero */}
      <section className="medical-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">科普知识</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            科学认识恐同症，是迈向康复的第一步
          </p>
        </div>
      </section>

      {/* TOC */}
      <section className="bg-[#E8F4F8] py-6 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-md text-sm text-[#0C6B8A] hover:bg-[#0C6B8A] hover:text-white transition-colors"
              >
                <s.icon className="w-3.5 h-3.5" />
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          {sections.map((section, si) => (
            <div key={section.id} id={section.id} className={si > 0 ? 'mt-16' : ''}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-[#E8F4F8] flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-[#0C6B8A]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
              </div>
              <div className="space-y-6">
                {section.content.map((item) => (
                  <div key={item.title} className="medical-card p-6">
                    <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <div className="w-1.5 h-5 bg-[#0C6B8A] rounded-full" />
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* External reference note */}
          <div className="mt-16 bg-[#F5F7FA] rounded-lg p-6">
            <div className="flex items-start gap-3">
              <ExternalLink className="w-5 h-5 text-[#0C6B8A] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">参考资料声明</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  本页面引用的心理学概念和研究成果均来自真实学术领域，包括乔治·温伯格的恐同症理论、
                  美国心理学会关于性取向的立场声明等。但本网站将"恐同症"框架化为一种需要临床"矫治"的疾病，
                  这是一种讽刺手法——真正的医学共识是：同性恋不是疾病，不需要治疗；
                  而恐同偏见虽然不是临床诊断，但它造成的伤害是真实且严重的。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-[#FFF7E6] border-b border-[#FFE58F]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#D4380D] shrink-0 mt-0.5" />
            <div className="text-sm text-[#874D00]">
              <strong>声明：</strong>本网站为讽刺性艺术项目。科普内容中引用的学术概念是真实的，
              但将"恐同症"作为一种需要临床"矫治"的疾病来框架化是讽刺手法。恐同偏见不是临床诊断，
              但它造成的伤害是真实的。如果你或你认识的人需要帮助，请联系专业的LGBTQ+友善服务机构。
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

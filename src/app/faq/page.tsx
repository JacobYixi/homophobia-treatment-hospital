'use client';

import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, AlertTriangle, Search } from 'lucide-react';

interface FAQItem {
  id: number;
  category: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    category: '关于恐同症',
    question: '恐同症真的是一种"病"吗？',
    answer: '严格来说，恐同症并不属于国际疾病分类中的正式诊断。但它确实是一种具有明确危害性的社会心理现象——对患者自身、其家庭以及整个社会都造成深远的负面影响。既然它带来的伤害是真实的，那么对其进行系统性干预和矫治，就是必要且紧迫的。',
  },
  {
    id: 2,
    category: '关于恐同症',
    question: '恐同和"不认同同性恋"有什么区别？',
    answer: '区别在于：不认同是"我不吃香菜，但尊重别人吃香菜的权利"；恐同是"我不吃香菜，所以全世界都不许吃香菜，吃香菜的人都有问题"。您可以对任何议题持有自己的判断，这是您的自由。但当这种判断演变为对他人的排斥、攻击和权利限制时，它就超出了"观点差异"的范畴，进入了需要被正视和干预的领域。',
  },
  {
    id: 3,
    category: '关于恐同症',
    question: '恐同者是不是都是"深柜"？',
    answer: '不一定。有些恐同者确实是在压抑自身的同性恋倾向，但更多的恐同者只是在成长过程中被灌输了偏见，并且从未认真审视过这些偏见。把所有恐同者都说成深柜，反而替他们开脱了——仿佛他们的偏见不是选择，而是宿命。实际上，偏见是可以被改变的，只要患者愿意面对。',
  },
  {
    id: 4,
    category: '关于治疗',
    question: '恐同真的可以"治愈"吗？',
    answer: '可以。偏见是可以改变的，前提是被矫治者愿意改变。当然，很多恐同者的第一个反应是"我没病，不需要治"——这种否认本身，恰恰说明认知干预的必要性。我们采用的疗法，正是历史上被认为可以"矫正"同性恋的那些手段。既然当年社会普遍接受了用这些方法来"治疗"同性恋，那么现在用同样的方法来治疗恐同，从逻辑上讲，应该更加合理才对。',
  },
  {
    id: 5,
    category: '关于治疗',
    question: '治疗过程中会不会"把直的变成弯的"？',
    answer: '不会。但这个问题本身就很有意思——为什么您那么害怕"变成"同性恋？如果您真的坚信自己的性取向是自然的、稳定的，那您应该对此很有信心才对。害怕被"改变"，恰恰说明您对性取向的理解，还有需要补充的地方。我们的治疗目标是消除偏见，不是改变性取向。',
  },
  {
    id: 6,
    category: '关于治疗',
    question: '你们和"扭转治疗"有什么区别？',
    answer: '区别在于：扭转治疗真的在伤害同性恋者，而我们只是在做一个网站。我们不电击任何人，不监禁任何人，不强迫任何人吃药。我们只是把当年你们觉得"合理"的逻辑，原封不动地展示出来。如果您看着这个网站感到不适，也许——只是也许——您能开始理解当年同性恋者面对"扭转治疗"时的心情。理解，是改变的第一步。',
  },
  {
    id: 7,
    category: '关于本网站',
    question: '这个网站是真的医院吗？',
    answer: '不是。本网站是一个讽刺性艺术项目，所有机构、人物、案例均为虚构。如果您一开始没看出来，也没关系——讽刺本来就不是所有人都能第一时间领会到的。但希望您在了解之后，能重新审视自己对"治疗"与"偏见"的理解。',
  },
  {
    id: 8,
    category: '关于本网站',
    question: '为什么要用讽刺的方式？直接说不歧视不就好了？',
    answer: '直接说"不要歧视"很重要，但效果有限。有些人听不进去道理，因为他们根本不觉得自己在歧视。所以我们就换一种方式：让您体验一下，当自己被当成"病人"来"矫治"时，是什么感受。当年有人觉得把同性恋当病人很合理，现在我们用同样的逻辑审视恐同——希望能帮您重新思考，什么才是真正的"合理"。',
  },
  {
    id: 9,
    category: '关于本网站',
    question: '网站上的信息都是假的吗？',
    answer: '医院、医生、患者、案例都是虚构的，但引用的数据和历史事件都是真实的。恐同确实与偏执、社交焦虑等心理问题相关，性少数群体也确实因偏见而承受着更高的抑郁与自杀风险。案例是虚构的，但它试图揭示的问题是真实的。',
  },
  {
    id: 10,
    category: '关于本网站',
    question: '如果我身边有人是恐同者，我应该怎么做？',
    answer: '第一，保护自己的安全。如果对方有暴力倾向或言语攻击，优先远离，不要硬碰硬。第二，不要试图说服他们。恐同者的偏见不是靠讲道理就能改变的，不如直接把本网站链接发给他们，问问：这些治疗手段，您觉得自己能扛住几个？第三，支持被伤害的性少数朋友——陪伴、倾听、帮他们发声。对抗偏见最有效的方式，是让受害者知道他们不是孤立无援的。最后，您没有义务去"改造"一个成年人，把精力留给值得的人和事。'
  },
];

const categories = ['全部', '关于恐同症', '关于治疗', '关于本网站'];

export default function FAQPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqs.filter((faq) => {
    const matchCategory = activeCategory === '全部' || faq.category === activeCategory;
    const matchSearch = !searchQuery || faq.question.includes(searchQuery) || faq.answer.includes(searchQuery);
    return matchCategory && matchSearch;
  });

  return (
    <div>
      {/* Hero */}
      <section className="medical-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">常见问题</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            关于恐同症、矫治治疗和本网站的常见疑问与解答
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b py-4">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                    activeCategory === cat
                      ? 'bg-[#0C6B8A] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索问题..."
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#0C6B8A]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="bg-[#F5F7FA] py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-gray-400">没有找到匹配的问题</div>
          ) : (
            filteredFaqs.map((faq) => {
              const isExpanded = expandedId === faq.id;
              return (
                <div key={faq.id} className="medical-card overflow-hidden">
                  <button
                    className="w-full text-left p-6 flex items-start gap-4"
                    onClick={() => setExpandedId(isExpanded ? null : faq.id)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#E8F4F8] flex items-center justify-center shrink-0 mt-0.5">
                      <HelpCircle className="w-4 h-4 text-[#0C6B8A]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-[#0C6B8A] bg-[#E8F4F8] px-2 py-0.5 rounded">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-800">{faq.question}</h3>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
                    )}
                  </button>
                  {isExpanded && (
                    <div className="px-6 pb-6 ml-12">
                      <div className="border-t pt-4">
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* Ask more */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">还有更多疑问？</h2>
          <p className="text-gray-500 mb-6">
            本网站的FAQ只是讽刺的表层，真正值得思考的问题远不止这些。
          </p>
          <div className="bg-[#E8F4F8] rounded-lg p-6 max-w-lg mx-auto text-left">
            <h3 className="font-bold text-[#0C6B8A] mb-3">值得思考的问题</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 为什么"矫正同性恋"被讨论了几十年，而"矫正恐同"却从未被当作正经议题？</li>
              <li>• 偏见是后天被灌输的，性取向是与生俱来的——到底是谁才需要"治疗"？</li>
              <li>• 当您说同性恋"不正常"时，您的判断标准是科学，还是恐惧？</li>
              <li>• 一个社会是否有权以"传统"为名，否定一部分人的基本权利？</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-[#FFF7E6] border-b border-[#FFE58F]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#D4380D] shrink-0 mt-0.5" />
            <div className="text-sm text-[#874D00]">
              <strong>声明：</strong>本网站为讽刺性艺术项目。FAQ中关于"恐同症矫治"的内容使用了医学化语言，
              这是一种有意的叙事策略，目的是让读者体验"被病理化"的感受。真正需要消除的是偏见，不是性取向。
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

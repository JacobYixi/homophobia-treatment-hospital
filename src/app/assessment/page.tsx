'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ClipboardCheck,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
} from 'lucide-react';

interface RawOption {
  label: string;
  score: number;
}

interface RawQuestion {
  id: number;
  text: string;
  weight: number;
  options: RawOption[];
}

interface Question {
  id: number;
  text: string;
  weight: number;
  options: { label: string; score: number }[];
}

const rawQuestions: RawQuestion[] = [
  {
    id: 1,
    text: '当你在公共场合看到同性情侣自然牵手时，你的第一反应更接近？',
    weight: 1.2,
    options: [
      { label: '心里略有不自在，但不会表现出来', score: 2 },
      { label: '和看到异性情侣一样，没什么特别', score: 0 },
      { label: '感到明显的不适，想移开视线', score: 3 },
      { label: '会多看一眼，纯粹出于好奇', score: 1 },
    ],
  },
  {
    id: 2,
    text: '如果一位关系不错的朋友向你坦诚自己是同性恋，你最可能的反应是？',
    weight: 1.5,
    options: [
      { label: '有些意外，需要一点时间消化，但友谊继续', score: 1 },
      { label: '觉得被"欺骗"了，考虑疏远这段关系', score: 3 },
      { label: '为朋友的信任感到温暖，关系不会改变', score: 0 },
      { label: '心里有些别扭，之后联系会自然减少', score: 2 },
    ],
  },
  {
    id: 3,
    text: '对于"同性婚姻应当与异性婚姻享有同等法律地位"，你的看法是？',
    weight: 1.5,
    options: [
      { label: '不太赞同，担心对传统家庭结构有影响', score: 2 },
      { label: '完全同意，婚姻平等是基本权利', score: 0 },
      { label: '坚决反对，认为这会动摇社会根基', score: 3 },
      { label: '可以理解，但觉得不必急于推动', score: 1 },
    ],
  },
  {
    id: 4,
    text: '社交媒体上有人分享参加 Pride 游行的照片，你会？',
    weight: 1.0,
    options: [
      { label: '觉得有些"过于张扬"，不太理解', score: 2 },
      { label: '无感，正常划过', score: 1 },
      { label: '反感，认为没必要如此高调', score: 3 },
      { label: '觉得很有活力，可能会点赞', score: 0 },
    ],
  },
  {
    id: 5,
    text: '听到有人用"基佬""死gay"等词开玩笑时，你的态度是？',
    weight: 1.2,
    options: [
      { label: '虽然自己不这样说，但觉得别人说说也无妨', score: 2 },
      { label: '觉得这种玩笑伤人，会委婉指出', score: 0 },
      { label: '觉得挺有意思，有时候也跟着用', score: 3 },
      { label: '自己不参与，但也不会当面制止', score: 1 },
    ],
  },
  {
    id: 6,
    text: '你认为一个人的性取向主要是？',
    weight: 0.8,
    options: [
      { label: '受先天和后天共同影响，但这不重要', score: 1 },
      { label: '一定程度上是可以被引导或改变的', score: 3 },
      { label: '先天形成的一部分，和身高肤色一样自然', score: 0 },
      { label: '可能是某些后天经历造成的', score: 2 },
    ],
  },
  {
    id: 7,
    text: '如果你的孩子有一天告诉你他/她喜欢同性，你最接近的反应是？',
    weight: 1.5,
    options: [
      { label: '强烈反对，认为孩子"走偏了"', score: 3 },
      { label: '需要时间接受，但最终会尊重孩子的选择', score: 1 },
      { label: '告诉孩子无论喜欢谁，父母的爱都不会变', score: 0 },
      { label: '感到担忧，希望孩子能"再考虑考虑"', score: 2 },
    ],
  },
  {
    id: 8,
    text: '关于在学校开展性别多元教育，你的看法是？',
    weight: 1.0,
    options: [
      { label: '坚决反对，认为这是"洗脑"', score: 3 },
      { label: '可以理解，但觉得应该在大学阶段开展', score: 1 },
      { label: '很有必要，帮助下一代建立包容的价值观', score: 0 },
      { label: '不太合适，担心对未成年人的影响', score: 2 },
    ],
  },
  {
    id: 9,
    text: '当同事在聊天中表达对同性恋的负面看法时，你会？',
    weight: 1.2,
    options: [
      { label: '心里默默认同，但不会接话', score: 2 },
      { label: '尝试温和地表达不同观点', score: 0 },
      { label: '附和对方的观点', score: 3 },
      { label: '保持沉默，不想卷入争论', score: 1 },
    ],
  },
  {
    id: 10,
    text: '你如何看待"性取向是个人私事，没必要到处宣传"这句话？',
    weight: 1.0,
    options: [
      { label: '基本认同，觉得低调一些比较好', score: 2 },
      { label: '完全认同，认为性少数就该藏在暗处', score: 3 },
      { label: '前半句对，但"没必要宣传"隐含了双重标准', score: 0 },
      { label: '有一定道理，每个人都该有隐私', score: 1 },
    ],
  },
  {
    id: 11,
    text: '看到影视作品中出现同性亲密情节时，你的感受更接近？',
    weight: 0.8,
    options: [
      { label: '没什么特别感觉，不影响观看', score: 1 },
      { label: '觉得很自然，剧情需要而已', score: 0 },
      { label: '非常反感，觉得在"强行灌输"', score: 3 },
      { label: '觉得有点刻意，不太舒服', score: 2 },
    ],
  },
  {
    id: 12,
    text: '对于企业招聘中明确的 LGBTQ+ 友好政策，你怎么看？',
    weight: 0.8,
    options: [
      { label: '可以接受，只要不涉及我就行', score: 1 },
      { label: '很欣慰，说明企业有社会责任感', score: 0 },
      { label: '觉得有些"过度政治正确"', score: 2 },
      { label: '反感，认为这是在搞特权', score: 3 },
    ],
  },
  {
    id: 13,
    text: '有人提出应在公共场所设置第三性别卫生间，你的第一反应是？',
    weight: 0.8,
    options: [
      { label: '反对，担心会带来管理混乱', score: 3 },
      { label: '可以理解，但实施起来可能有难度', score: 1 },
      { label: '很好的举措，尊重每个人的需求', score: 0 },
      { label: '觉得没什么必要，现有设施够用', score: 2 },
    ],
  },
  {
    id: 14,
    text: '如果你的室友是同性恋，你会？',
    weight: 1.0,
    options: [
      { label: '完全不在意，正常相处', score: 0 },
      { label: '起初有点尴尬，但慢慢会习惯', score: 1 },
      { label: '会感到不舒服，会想办法换宿舍', score: 3 },
      { label: '会有些不自在，尽量避免单独相处', score: 2 },
    ],
  },
  {
    id: 15,
    text: '对于"恐同是一种需要被正视的心理问题"这个观点，你的看法是？',
    weight: 1.5,
    options: [
      { label: '认同，偏见本身就是一种认知局限', score: 0 },
      { label: '完全不认同，认为这是对正常价值观的污名化', score: 3 },
      { label: '部分认同，但觉得"心理问题"这个词有点重', score: 1 },
      { label: '不太认同，觉得每个人都有权利保留自己的态度', score: 2 },
    ],
  },
  {
    id: 16,
    text: '你在浏览新闻时看到关于性少数群体权益被侵害的报道，你的感受是？',
    weight: 1.2,
    options: [
      { label: '同情受害者，但不会主动做什么', score: 1 },
      { label: '感到愤慨，会为受害者发声或关注事件进展', score: 0 },
      { label: '觉得事情可能没报道的那么简单', score: 2 },
      { label: '认为受害者自己也有责任', score: 3 },
    ],
  },
  {
    id: 17,
    text: '关于宗教教义与性取向的冲突，你的态度更接近？',
    weight: 0.7,
    options: [
      { label: '传统教义有其道理，不应轻易否定', score: 2 },
      { label: '宗教应当与时俱进，核心是爱与包容', score: 0 },
      { label: '这是复杂议题，不该简单对立', score: 1 },
      { label: '教义就是教义，违反者应当自省', score: 3 },
    ],
  },
  {
    id: 18,
    text: '如果孩子的学校课本里提到"家庭有多种形式，包括同性父母家庭"，你会？',
    weight: 1.0,
    options: [
      { label: '认为这是很正常的事实陈述', score: 0 },
      { label: '不太赞同，觉得容易让孩子困惑', score: 2 },
      { label: '可以理解，但担心孩子太小不好理解', score: 1 },
      { label: '强烈反对，要求学校删除相关内容', score: 3 },
    ],
  },
  {
    id: 19,
    text: '当你听到有人说"我不反对同性恋，但别让我看见"，你认为这句话？',
    weight: 1.2,
    options: [
      { label: '说出了很多人的心声，可以理解', score: 2 },
      { label: '本质上仍是歧视，只是包装得温和一些', score: 0 },
      { label: '非常同意，这是 reasonable 的底线', score: 3 },
      { label: '有点矛盾，但也不算恶意', score: 1 },
    ],
  },
  {
    id: 20,
    text: '对于跨性别者使用与其性别认同相符的公共卫生间，你的看法是？',
    weight: 0.8,
    options: [
      { label: '可以理解，但希望有独立的解决方案', score: 1 },
      { label: '这是基本的尊重，应当支持', score: 0 },
      { label: '有些顾虑，担心隐私和安全问题', score: 2 },
      { label: '反对，认为应当按照生理性别区分', score: 3 },
    ],
  },
  {
    id: 21,
    text: '你如何看待"同性恋是西方传来的"这种说法？',
    weight: 0.7,
    options: [
      { label: '很认同，觉得本土传统不该被外来文化冲击', score: 3 },
      { label: '有一定道理，至少"出柜文化"是外来的', score: 2 },
      { label: '毫无依据，同性情感古今中外都有记载', score: 0 },
      { label: '不太确定，但觉得这种说法过于简单', score: 1 },
    ],
  },
  {
    id: 22,
    text: '如果一位公众人物公开出柜，你对他的印象会？',
    weight: 1.0,
    options: [
      { label: '觉得他在"博眼球"，印象会打折扣', score: 2 },
      { label: '欣赏他的勇气，这不影响我对他专业能力的评价', score: 0 },
      { label: '有点意外，但仅此而已', score: 1 },
      { label: '反感，认为公众人物不该宣扬这些', score: 3 },
    ],
  },
  {
    id: 23,
    text: '关于心理咨询中为性少数群体提供"肯定性咨询"（affirmative therapy），你的看法是？',
    weight: 0.8,
    options: [
      { label: '可以理解，但咨询方式应该因人而异', score: 1 },
      { label: '很支持，每个人都需要被接纳的心理支持', score: 0 },
      { label: '不太赞同，担心会"强化"某种倾向', score: 2 },
      { label: '反对，认为应该提供"矫正"方向的咨询', score: 3 },
    ],
  },
  {
    id: 24,
    text: '当你看到有人在社交媒体上使用彩虹旗头像，你会？',
    weight: 0.6,
    options: [
      { label: '无感，头像而已', score: 1 },
      { label: '觉得有点刻意，但与我无关', score: 2 },
      { label: '觉得很酷，或者自己也有', score: 0 },
      { label: '觉得在炒作或标榜', score: 3 },
    ],
  },
  {
    id: 25,
    text: '对于"恐同者往往本身也是深柜"这个说法，你的看法是？',
    weight: 0.7,
    options: [
      { label: '可能是部分现象，不该一概而论', score: 1 },
      { label: '有一定心理学研究支持，但不是绝对的', score: 0 },
      { label: '非常反感，认为这是对正常人的污蔑', score: 3 },
      { label: '觉得是无稽之谈，用来攻击反对者', score: 2 },
    ],
  },
  {
    id: 26,
    text: '如果你的朋友圈有人分享与同性伴侣的结婚照，你会？',
    weight: 1.0,
    options: [
      { label: '真诚祝福，可能会留言恭喜', score: 0 },
      { label: '觉得有点"秀"，不太理解为什么要公开', score: 2 },
      { label: '看看就好，不会特别互动', score: 1 },
      { label: '感到不适，甚至想屏蔽对方', score: 3 },
    ],
  },
  {
    id: 27,
    text: '关于将性取向纳入反歧视法的保护范围，你的态度是？',
    weight: 1.2,
    options: [
      { label: '完全支持，法律应当保护每一个人', score: 0 },
      { label: '不太赞同，觉得现有的法律已经够用', score: 2 },
      { label: '可以接受，但担心执行层面的问题', score: 1 },
      { label: '反对，认为这会造成"逆向歧视"', score: 3 },
    ],
  },
  {
    id: 28,
    text: '当你发现你喜欢的明星是同性恋时，你的第一反应更接近？',
    weight: 0.8,
    options: [
      { label: '感到"塌房"，不想再支持', score: 3 },
      { label: '没什么变化，继续喜欢他/她的作品', score: 0 },
      { label: '有些失望，但还是会关注作品', score: 2 },
      { label: '有点惊讶，需要一点时间调整', score: 1 },
    ],
  },
  {
    id: 29,
    text: '你如何看待"爱就是爱，与性别无关"这句话？',
    weight: 1.0,
    options: [
      { label: '浪漫的说法，但现实可能更复杂', score: 1 },
      { label: '很认同，爱情的本质不应被性别局限', score: 0 },
      { label: '不认同，认为异性恋才是自然的结合', score: 3 },
      { label: '觉得过于理想化，不太现实', score: 2 },
    ],
  },
  {
    id: 30,
    text: '完成这份问卷的过程中，你对"恐同"这个概念本身的态度是？',
    weight: 1.0,
    options: [
      { label: '从一开始就觉得这份问卷本身就有问题', score: 3 },
      { label: '觉得这是一个值得被讨论和反思的社会议题', score: 0 },
      { label: '以前没想过，现在觉得有些角度挺有意思', score: 1 },
      { label: '觉得这个概念被过度使用了', score: 2 },
    ],
  },
];

const MAX_POSSIBLE_SCORE = 91.5;

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function prepareQuestions(): Question[] {
  return shuffleArray(rawQuestions).map((q) => ({
    id: q.id,
    text: q.text,
    weight: q.weight,
    options: shuffleArray(q.options),
  }));
}

function getResult(score: number) {
  const percentage = (score / MAX_POSSIBLE_SCORE) * 100;

  if (percentage <= 12) {
    return {
      level: '坚定盟友',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      icon: CheckCircle2,
      desc: '您对多元与平等有着清晰而坚定的认知。在面对偏见时，您往往能够识别并温和地表达自己的立场。这种开放的态度不仅让您能建立更丰富的社交关系，也为您身边的人带来了积极的影响。',
      advice:
        '感谢您成为 ally。您的包容和理解在这个社会里非常珍贵。如果您愿意，可以把本测试转发给您身边那些"我只是传统"的朋友，让他们也来看看自己是否需要关注。',
    };
  } else if (percentage <= 25) {
    return {
      level: '温和支持者',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      icon: CheckCircle2,
      desc: '您总体上对性少数群体持开放态度。虽然可能在某些具体议题上还没有深入思考，但您展现出的是一种不排斥、不攻击的基本善意。在大部分日常情境中，您能够做到尊重他人与己不同。',
      advice:
        '您已经拥有了很好的基础。如果您愿意，可以多了解一些相关的科学知识和社会议题，这会让您的支持更加有力。保持这份善意，就已经很珍贵了。',
    };
  } else if (percentage <= 35) {
    return {
      level: '普通顺性别异性恋',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      icon: CheckCircle2,
      desc: '您对性少数群体没有特别的关注，也没有明显的偏见。您可能很少主动去思考相关议题，但也通常不会参与攻击或歧视。在人群中，这是一种非常常见的中立状态。',
      advice:
        '您对这类议题没有特别的关注，这本身无可厚非。每个人都有自己的节奏和重心，本院尊重这一点。如果有一天您愿意主动了解不同的声音，那会是很好的事情；如果暂时没有，也请您至少保持这份不主动伤害的善意。',
    };
  } else if (percentage <= 50) {
    return {
      level: '轻度恐同症',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      icon: AlertTriangle,
      desc: '测试结果显示，您的态度中存在一些值得关注的倾向。您可能在某些情境下会感到轻微的不适，或者在潜意识中持有一些未经审视的刻板印象。这种状态尚处于早期阶段，对自身和他人的影响相对有限。',
      advice:
        '本院建议您可以先尝试了解一些性取向相关的科普知识，很多不适感其实来自未知。我院的中药调理科设有专门的认知调节疗程，以温和的方式帮助您逐步放松对这些议题的紧张反应。',
    };
  } else if (percentage <= 65) {
    return {
      level: '中度恐同症',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      icon: AlertTriangle,
      desc: '您的测试结果提示，恐同倾向已经比较明显地存在于您的认知模式中。您可能经常在社交场合不自觉地表达对性少数群体的负面评价，或者在面对相关议题时产生较为强烈的情绪反应。这种状态已经开始影响您对他人的基本尊重。',
      advice:
        '改变偏见的第一步，是意识到自己可能有偏见。本院的行为约束矫正科和强制劳动康复科可以为您提供系统化的帮助。当然，如果您觉得"我没有问题"，那或许正是问题所在——真正清醒的人，往往会对自己的盲区保持警觉。',
    };
  } else if (percentage <= 80) {
    return {
      level: '重度恐同症',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      icon: XCircle,
      desc: '测试结果表明，您的恐同倾向已经发展到需要重视的程度。您对性少数群体的敌意或排斥感较为强烈，可能已经尝试过阻止身边的人"太张扬"，或者在网上积极表达反对观点。这种状态不仅让他人感到受伤，也在逐渐侵蚀您自己的社交关系与心理健康。',
      advice:
        '本院电刺激矫正疗法科和药物辅助干预科拥有丰富的临床经验。不过，在预约之前，我们想先请您思考一个问题：您反对的究竟是同性恋本身，还是您对"不同"的恐惧？当年别人试图"矫正"同性恋者时，您可曾觉得那是对的？如今工艺未改，只是换了个方向。',
    };
  } else {
    return {
      level: '极度恐同症',
      color: 'text-red-700',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-300',
      icon: XCircle,
      desc: '测试结果显示，您的恐同倾向已经非常严重。您对性少数群体的敌意达到了一个需要被正视的水平，这种状态对您自身的心理健康、社交关系乃至社会评价都构成了实质性的威胁。本院强烈建议您认真对待这一结果。',
      advice:
        '感到被冒犯吗？这不过是一份问卷而已。当年同性恋者面对的可是真实的电击、监禁、家庭决裂和社会性死亡。如果您连文字都受不了，那说明您确实需要正视自己的内心。本院建议立即预约多学科综合干预套餐，由专家团队联合制定个性化的羞耻疗法康复方案。',
    };
  }
}

export default function AssessmentPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isReady, setIsReady] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const prepared = prepareQuestions();
    setQuestions(prepared);
    setAnswers(new Array(prepared.length).fill(-1));
    setIsReady(true);
  }, []);

  const totalScore = answers.reduce((sum: number, s: number, i: number) => {
    if (s < 0 || !questions[i]) return sum;
    return sum + s * questions[i].weight;
  }, 0);

  const progress = started
    ? ((currentQ + (showResult ? 1 : 0)) / questions.length) * 100
    : 0;

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = score;
    setAnswers(newAnswers);

    if (currentQ < questions.length - 1) {
      setTimeout(() => setCurrentQ(currentQ + 1), 250);
    } else {
      setTimeout(() => setShowResult(true), 250);
    }
  };

  const handlePrev = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
    }
  };

  const handleRestart = () => {
    const prepared = prepareQuestions();
    setQuestions(prepared);
    setAnswers(new Array(prepared.length).fill(-1));
    setCurrentQ(0);
    setShowResult(false);
    setStarted(false);
  };

  // Intro screen
  if (!started) {
    return (
      <div>
        <section className="medical-gradient text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">在线自测</h1>
            <p className="text-white/80 text-lg max-w-2xl">
              科学的恐同指数评估，帮助你了解自己的恐同倾向程度
            </p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="w-20 h-20 rounded-full bg-[#E8F4F8] flex items-center justify-center mx-auto mb-6">
              <ClipboardCheck className="w-10 h-10 text-[#0C6B8A]" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">恐同指数自测量表</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              本量表由博爱恐同症矫治医院研发，共30道题目，约需8-10分钟完成。
              请根据你的真实感受选择最符合的答案。
              测试结果仅作为参考，不构成医学诊断。
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex items-start gap-3 text-left">
              <Info className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-yellow-800 font-medium">仅供娱乐</p>
                <p className="text-sm text-yellow-700 mt-1">
                  本测试纯属娱乐性质，结果仅供参考，不具有任何临床诊断效力。
                </p>
              </div>
            </div>

            <div className="bg-[#F5F7FA] rounded-lg p-6 text-left mb-8">
              <h3 className="font-medium text-gray-800 mb-3">测试须知</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0C6B8A] shrink-0 mt-0.5" />
                  请诚实作答，选择你真实的想法和感受
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0C6B8A] shrink-0 mt-0.5" />
                  不要选择"应该选"的答案
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0C6B8A] shrink-0 mt-0.5" />
                  测试结果仅供参考，不构成医学诊断
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0C6B8A] shrink-0 mt-0.5" />
                  所有数据仅在本地处理，不会上传或保存
                </li>

              </ul>
            </div>
            <button
              onClick={() => {
                if (!isReady) return;
                setStarted(true);
              }}
              disabled={!isReady}
              className="inline-flex items-center gap-2 bg-[#0C6B8A] text-white px-8 py-3 rounded-md font-medium hover:bg-[#0A5A73] transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isReady ? (
                <>
                  开始测试
                  <ArrowRight className="w-5 h-5" />
                </>
              ) : (
                '准备中...'
              )}
            </button>
          </div>
        </section>
      </div>
    );
  }

  // Result screen
  if (showResult) {
    const result = getResult(totalScore);
    const ResultIcon = result.icon;
    const percentage = Math.round((totalScore / MAX_POSSIBLE_SCORE) * 100);

    return (
      <div>
        <section className="medical-gradient text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">测试结果</h1>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-2xl mx-auto px-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex items-start gap-3">
              <Info className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-700">
                <span className="font-medium">仅供娱乐：</span>
                本测试结果不具备任何医学诊断效力。请勿以此标签化自己或他人。
              </p>
            </div>

            <div
              className={`${result.bgColor} ${result.borderColor} border-2 rounded-xl p-8 text-center mb-8`}
            >
              <ResultIcon className={`w-16 h-16 ${result.color} mx-auto mb-4`} />
              <div className="text-sm text-gray-500 mb-2">你的恐同指数</div>
              <div className={`text-5xl font-bold ${result.color} mb-2`}>
                {percentage}%
              </div>
              <div className={`text-xl font-bold ${result.color} mb-4`}>
                {result.level}
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                {result.desc}
              </p>
            </div>

            <div className="bg-[#F5F7FA] rounded-lg p-6 mb-8">
              <h3 className="font-bold text-gray-800 mb-3">建议</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {result.advice}
              </p>
            </div>

            {/* Score breakdown */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-800 mb-4">各题得分</h3>
              <div className="grid grid-cols-5 sm:grid-cols-6 gap-2">
                {answers.map((score, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xs text-gray-400 mb-1">
                      第{i + 1}题
                    </div>
                    <div
                      className={`text-sm font-bold ${
                        score <= 0
                          ? 'text-green-600'
                          : score <= 1
                          ? 'text-emerald-600'
                          : score <= 2
                          ? 'text-yellow-600'
                          : 'text-red-600'
                      }`}
                    >
                      {score >= 0 ? score : '-'}/3
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                重新测试
              </button>
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 bg-[#0C6B8A] text-white px-6 py-3 rounded-md font-medium hover:bg-[#0A5A73] transition-colors"
              >
                预约咨询
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Question screen
  const question = questions[currentQ];
  if (!question) return null;

  return (
    <div>
      <section className="medical-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">在线自测</h1>
          <p className="text-white/80 text-lg">恐同指数评估</p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-2xl mx-auto px-4">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>
                第 {currentQ + 1} / {questions.length} 题
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#0C6B8A] rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              {question.text}
            </h2>
            <div className="space-y-3">
              {question.options.map((option, i) => {
                const isSelected = answers[currentQ] === option.score;
                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(option.score)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      isSelected
                        ? 'border-[#0C6B8A] bg-[#E8F4F8]'
                        : 'border-gray-200 hover:border-[#0C6B8A]/50 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'border-[#0C6B8A] bg-[#0C6B8A]'
                            : 'border-gray-300'
                        }`}
                      >
                        {isSelected && (
                          <div className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </div>
                      <span className="text-gray-700">{option.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={handlePrev}
              disabled={currentQ === 0}
              className="inline-flex items-center gap-2 text-gray-500 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4" />
              上一题
            </button>
            <div className="text-sm text-gray-400 self-center">
              已答 {answers.filter((a) => a >= 0).length} / {questions.length}{' '}
              题
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

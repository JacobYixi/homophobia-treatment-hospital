'use client';

import { useState } from 'react';
import { CalendarDays, Clock, User, CheckCircle2, AlertTriangle } from 'lucide-react';

const departments = [
  '电刺激矫正科',
  '行为约束科',
  '思想改造科',
  '强制劳动科',
  '药物干预科',
  '羞耻疗法科',
];

const timeSlots = [
  '08:30 - 09:30',
  '09:30 - 10:30',
  '10:30 - 11:30',
  '14:00 - 15:00',
  '15:00 - 16:00',
  '16:00 - 17:00',
];

const levels = [
  '不确定/好奇',
  '轻微不适',
  '中度排斥',
  '明显敌意',
  '严重恐同',
];

interface FormData {
  name: string;
  age: string;
  gender: string;
  phone: string;
  department: string;
  date: string;
  time: string;
  level: string;
  description: string;
  consent: boolean;
}

export default function AppointmentPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: '',
    age: '',
    gender: '',
    phone: '',
    department: '',
    date: '',
    time: '',
    level: '',
    description: '',
    consent: false,
  });

  const updateForm = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return form.name && form.age && form.gender;
      case 2:
        return form.department && form.level;
      case 3:
        return form.date && form.time;
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <section className="medical-gradient text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">预约成功</h1>
          </div>
        </section>
        <section className="bg-white py-16">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">预约信息已提交</h2>
            <p className="text-gray-600 mb-8">
              感谢你的信任！你的预约信息已经收到。
              这是一个讽刺性艺术项目，实际上不会有人联系你。
            </p>
            <div className="bg-[#F5F7FA] rounded-lg p-6 text-left max-w-md mx-auto mb-8">
              <h3 className="font-bold text-gray-800 mb-3">预约摘要</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-500">姓名</span><span>{form.name}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">科室</span><span>{form.department}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">日期</span><span>{form.date}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">时段</span><span>{form.time}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">恐同程度</span><span>{form.level}</span></div>
              </div>
            </div>

            <div className="bg-[#FFF7E6] border border-[#FFE58F] rounded-lg p-4 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#D4380D] shrink-0 mt-0.5" />
                <div className="text-sm text-[#874D00] text-left">
                  <strong>提醒：</strong>如果你在现实中因性取向或性别认同遭遇困扰，
                  请寻求LGBTQ+友善的专业心理咨询师或公益组织的帮助。你值得被尊重。
                </div>
              </div>
            </div>

            <button
              onClick={() => { setSubmitted(false); setStep(1); setForm({ name: '', age: '', gender: '', phone: '', department: '', date: '', time: '', level: '', description: '', consent: false }); }}
              className="text-[#0C6B8A] font-medium hover:underline"
            >
              重新预约
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="medical-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">在线预约</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            填写预约信息，迈出矫治恐同症的第一步
          </p>
        </div>
      </section>

      {/* Steps indicator */}
      <section className="bg-white border-b py-6">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {[
              { n: 1, label: '基本信息' },
              { n: 2, label: '就诊需求' },
              { n: 3, label: '预约时间' },
              { n: 4, label: '确认提交' },
            ].map((s, i) => (
              <div key={s.n} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step > s.n ? 'bg-[#0C6B8A] text-white' : step === s.n ? 'bg-[#0C6B8A] text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step > s.n ? <CheckCircle2 className="w-4 h-4" /> : s.n}
                  </div>
                  <span className={`text-xs mt-1 ${step >= s.n ? 'text-[#0C6B8A] font-medium' : 'text-gray-400'}`}>
                    {s.label}
                  </span>
                </div>
                {i < 3 && <div className={`flex-1 h-0.5 mx-2 ${step > s.n ? 'bg-[#0C6B8A]' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-[#F5F7FA] py-12">
        <div className="max-w-2xl mx-auto px-4">
          <div className="medical-card p-8">
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <User className="w-5 h-5 text-[#0C6B8A]" />
                  基本信息
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">姓名 *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => updateForm('name', e.target.value)}
                      placeholder="请输入姓名"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C6B8A] focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">年龄 *</label>
                      <input
                        type="number"
                        value={form.age}
                        onChange={(e) => updateForm('age', e.target.value)}
                        placeholder="请输入年龄"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C6B8A] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">性别 *</label>
                      <select
                        value={form.gender}
                        onChange={(e) => updateForm('gender', e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C6B8A] focus:border-transparent"
                      >
                        <option value="">请选择</option>
                        <option value="male">男</option>
                        <option value="female">女</option>
                        <option value="other">其他</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">联系电话</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => updateForm('phone', e.target.value)}
                      placeholder="选填（本网站不会实际联系你）"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C6B8A] focus:border-transparent"
                    />
                    <p className="text-xs text-gray-400 mt-1">本网站为讽刺性艺术项目，不会保存或使用你的联系方式</p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Medical Needs */}
            {step === 2 && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-[#0C6B8A]" />
                  就诊需求
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">选择科室 *</label>
                    <div className="grid grid-cols-2 gap-2">
                      {departments.map((dept) => (
                        <button
                          key={dept}
                          onClick={() => updateForm('department', dept)}
                          className={`p-3 rounded-lg border-2 text-sm text-left transition-all ${
                            form.department === dept
                              ? 'border-[#0C6B8A] bg-[#E8F4F8] text-[#0C6B8A] font-medium'
                              : 'border-gray-200 text-gray-600 hover:border-[#0C6B8A]/50'
                          }`}
                        >
                          {dept}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">自我评估恐同程度 *</label>
                    <div className="space-y-2">
                      {levels.map((level, i) => (
                        <button
                          key={level}
                          onClick={() => updateForm('level', level)}
                          className={`w-full p-3 rounded-lg border-2 text-sm text-left transition-all ${
                            form.level === level
                              ? 'border-[#0C6B8A] bg-[#E8F4F8] text-[#0C6B8A] font-medium'
                              : 'border-gray-200 text-gray-600 hover:border-[#0C6B8A]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{level}</span>
                            <span className={`text-xs px-2 py-0.5 rounded ${
                              i <= 1 ? 'bg-green-100 text-green-700' : i <= 2 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                            }`}>
                              {i <= 1 ? '轻度' : i <= 2 ? '中度' : '重度'}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">补充说明</label>
                    <textarea
                      value={form.description}
                      onChange={(e) => updateForm('description', e.target.value)}
                      placeholder="简要描述你的情况（选填）"
                      rows={4}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C6B8A] focus:border-transparent resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Schedule */}
            {step === 3 && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#0C6B8A]" />
                  预约时间
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">选择日期 *</label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => updateForm('date', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C6B8A] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">选择时段 *</label>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => updateForm('time', slot)}
                          className={`p-3 rounded-lg border-2 text-sm transition-all ${
                            form.time === slot
                              ? 'border-[#0C6B8A] bg-[#E8F4F8] text-[#0C6B8A] font-medium'
                              : 'border-gray-200 text-gray-600 hover:border-[#0C6B8A]/50'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Confirm */}
            {step === 4 && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-6">确认预约信息</h2>
                <div className="space-y-4">
                  <div className="bg-[#F5F7FA] rounded-lg p-4 space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-gray-500">姓名</span><span className="font-medium">{form.name}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">年龄</span><span>{form.age}岁</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">性别</span><span>{form.gender === 'male' ? '男' : form.gender === 'female' ? '女' : '其他'}</span></div>
                    <div className="border-t my-2" />
                    <div className="flex justify-between"><span className="text-gray-500">科室</span><span className="font-medium">{form.department}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">恐同程度</span><span>{form.level}</span></div>
                    <div className="border-t my-2" />
                    <div className="flex justify-between"><span className="text-gray-500">日期</span><span>{form.date}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">时段</span><span>{form.time}</span></div>
                    {form.description && (
                      <>
                        <div className="border-t my-2" />
                        <div><span className="text-gray-500">补充说明</span><p className="mt-1 text-gray-700">{form.description}</p></div>
                      </>
                    )}
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => updateForm('consent', e.target.checked)}
                      className="mt-1"
                    />
                    <span className="text-sm text-gray-600">
                      我已阅读并了解：本网站为讽刺性艺术项目，所有预约信息仅在本地处理，
                      不会提交至任何服务器。本网站不会保存、使用或泄露我的个人信息。
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-2.5 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  上一步
                </button>
              ) : (
                <div />
              )}
              {step < 4 ? (
                <button
                  onClick={() => canProceed() && setStep(step + 1)}
                  disabled={!canProceed()}
                  className="px-6 py-2.5 bg-[#0C6B8A] text-white rounded-md hover:bg-[#0A5A73] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  下一步
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!form.consent}
                  className="px-6 py-2.5 bg-[#0C6B8A] text-white rounded-md hover:bg-[#0A5A73] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  提交预约
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

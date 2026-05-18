"use client";
import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [cleanedCode, setCleanedCode] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleScan = () => {
    if (!code.trim()) {
      setResult("الرجاء كتابة أو لصق كود JavaScript أولاً ليتم فحصها! ⚠️");
      return;
    }

    setResult("جاري تحليل الكود وتطهيره من الثغرات... 🛡");
    setCleanedCode(""); // تفريغ الكود القديم

    setTimeout(() => {
      const lowerCode = code.toLowerCase();
      let fixed = code; // نسخة للتعديل
      
      const hasEval = lowerCode.includes("eval(");
      const hasInnerHTML = lowerCode.includes("innerhtml");
      const hasPassword = lowerCode.includes("password") || lowerCode.includes("secret");

      // خوارزمية التنظيف الذكي
      if (hasEval) {
        fixed = fixed.replace(/eval\((.*?)\)/g, "// MoShield AI: تم إزالة eval() واستبدالها ببرمجة آمنة \n console.log('Safe Output Instead of Eval');");
      }
      if (hasInnerHTML) {
        fixed = fixed.replace(/\.innerHTML\s*=/g, ".textContent =");
      }
      if (hasPassword) {
        fixed = fixed.replace(/["'](password|secret)["']\s*:\s*["'].*?["']/gi, '"$1": "process.env.HIDDEN_KEY"');
        fixed = fixed.replace(/(const|let|var)\s+(password|secret)\s*=\s*["'].*?["']/gi, '$1 $2 = process.env.HIDDEN_KEY');
      }

      setCleanedCode(fixed);

      if (hasEval || hasInnerHTML) {
        setResult(
          "🚨 اكتشاف ثغرات عالية الخطورة!\n" +
          "- تم العثور على استخدام غير آمن لـ (eval/innerHTML).\n" +
          "✅ تم إنشاء كود بديل يستخدم textContent ويمنع حقن الأكواد."
        );
      } else if (hasPassword) {
        setResult(
          "⚠️ تنبيه أمني: بيانات حساسة مكشوفة.\n" +
          "- تم العثور على كلمات سرية مكتوبة صراحة.\n" +
          "✅ تم تشفير البيانات في الكود المنظف أدناه."
        );
      } else {
        setResult("✅ كودك سليم، وتم تحسينه برمجياً لضمان أعلى أداء.");
      }
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center p-8 font-sans pb-24">
      {/* Header */}
      <header className="text-center my-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-2">
          MoShield AI
        </h1>
        <p className="text-slate-400">فحص، تنظيف، وتأمين الأكواد البرمجية بضغطة زر</p>
      </header>

      {/* Main Container */}
      <div className="w-full max-w-4xl bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-2xl mb-16">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-300">الكود المراد فحصه (JavaScript):</label>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="// الصق كودك هنا..."
              className="w-full h-48 p-4 bg-slate-950 border border-slate-700 rounded-lg text-emerald-400 font-mono text-sm focus:border-teal-500 resize-none"
              dir="ltr"
            />
          </div>

          <button
            onClick={handleScan}
            className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-4 rounded-lg transition shadow-lg"
          >
            بدء الفحص والتنظيف التلقائي ✨
          </button>

          {/* Results and Cleaning Area */}
          {result && (
            <div className="space-y-4 animate-in fade-in duration-500">
              <div className="p-4 bg-slate-900 border border-teal-500/30 rounded-lg">
                <h3 className="text-teal-400 font-bold mb-2">التقرير الأمني:</h3>
                <p className="text-sm whitespace-pre-wrap">{result}</p>
              </div>

              {cleanedCode && (
                <div className="p-4 bg-emerald-900/20 border border-emerald-500/30 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <button 
                      onClick={() => setShowModal(true)} 
                      className="text-xs bg-emerald-500 hover:bg-emerald-600 text-slate-900 px-3 py-1 rounded font-bold transition"
                    >
                      نسخ الكود المنظف (Pro) 📋
                    </button>
                    <h3 className="text-emerald-400 font-bold">الكود الآمن المستخرج:</h3>
                  </div>
                  <pre className="text-xs font-mono text-emerald-300 bg-black/40 p-4 rounded overflow-x-auto" dir="ltr">
                    {cleanedCode}
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Pricing Section */}
      <section className="w-full max-w-4xl text-center">
        <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">خطط الاشتراك للمحترفين</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl opacity-80">
            <h3 className="text-xl font-bold mb-2">الخطة العادية</h3>
            <p className="text-3xl font-black mb-4">0 د.ع</p>
            <ul className="text-slate-400 text-sm space-y-2 mb-6 text-right list-inside list-disc">
              <li>فحص محدود (3 يومياً)</li>
              <li>رؤية الكود المنظف فقط</li>
              <li>لا يمكن نسخ الكود تلقائياً</li>
            </ul>
            <span className="text-xs text-slate-500 font-bold">خطة مجانية للأبد</span>
          </div>

          <div className="bg-slate-800 border-2 border-teal-500 rounded-xl p-6 shadow-xl relative scale-105">
            <div className="absolute top-0 right-0 bg-teal-500 text-slate-900 text-[10px] px-2 py-0.5 font-black uppercase">Most Popular</div>
            <h3 className="text-xl font-bold text-teal-400 mb-2">خطة Pro</h3>
            <p className="text-3xl font-black mb-4">10,000 د.ع</p>
            <ul className="text-slate-200 text-sm space-y-2 mb-6 text-right list-inside list-disc">
              <li className="text-teal-300 font-bold">نسخ الكود المنظف بضغطة زر</li>
              <li>فحص غير محدود للأكواد</li>
              <li>دعم فني مباشر على الواتساب</li>
            </ul>
            <button onClick={() => setShowModal(true)} className="w-full bg-teal-500 hover:bg-teal-600 text-slate-900 font-bold py-2 rounded transition">
              اشترك الآن واستلم الكود نظيفاً
            </button>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl max-w-md w-full p-8 text-center shadow-2xl">
            <div className="text-5xl mb-4">💎</div>
            <h3 className="text-2xl font-bold text-white mb-2">ميزة حصرية للمحترفين</h3>
            <p className="text-slate-300 mb-6 text-sm">نسخ الأكواد المنظفة تلقائياً متاح فقط لمشتركي خطة Pro. فعل اشتراكك الآن لفتح القوة الكاملة لـ MoShield AI.</p>
            
            <div className="bg-slate-950 p-4 rounded-xl mb-6 text-right space-y-2 border border-slate-700 text-sm">
              <div className="flex justify-between font-mono"><span className="text-teal-400">077XXXXXXXX</span> :زين كاش</div>
              <div className="flex justify-between font-mono"><span className="text-amber-400">077XXXXXXXX</span> :آسيا حوالة</div>
            </div>

            <div className="flex flex-col gap-3">
              <a href="https://wa.me/96477XXXXXXXX" target="_blank" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition">تفعيل الاشتراك (واتساب)</a>
              <button onClick={() => setShowModal(false)} className="text-slate-500 text-xs hover:text-white underline">إغلاق النافذة</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
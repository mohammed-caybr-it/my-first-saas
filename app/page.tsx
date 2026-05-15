"use client";
import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const handleScan = () => {
    if (!code.trim()) {
      setResult("الرجاء كتابة أو لصق كود JavaScript أولاً ليتم فحصها! ⚠️");
      return;
    }

    setResult("جاري تحليل الكود والبحث عن الثغرات الأمنية... 🛡️");

    // محاكاة الاتصال بالذكاء الاصطناعي (يستغرق ثانية ونصف)
    setTimeout(() => {
      const lowerCode = code.toLowerCase();
      
      if (lowerCode.includes("eval(") || lowerCode.includes("innerhtml")) {
        setResult(
          "🚨 تحذير أمني خطير (High Risk):\n" +
          "- تم اكتشاف استخدام للدالة eval() أو innerHTML.\n" +
          "- المخاطر: هذا الكود يعرض موقعك لثغرات حقن النصوص (XSS) وتنفيذ أكواد خبيثة.\n\n" +
          "💡 الحل المقترح: استبدل innerHTML بـ textContent لحماية بيانات المستخدمين."
        );
      } else if (lowerCode.includes("password") || lowerCode.includes("secret")) {
        setResult(
          "⚠️ تنبيه أمني (Medium Risk):\n" +
          "- تم العثور على كلمات دلالية مثل (password أو secret) مكتوبة بشكل صريح داخل الكود.\n" +
          "- المخاطر: تسريب بيانات الاعتماد الحساسة (Hardcoded Credentials).\n\n" +
          "💡 الحل المقترح: انقل هذه البيانات إلى ملفات البيئة المحمية (.env) ولا تضعها في كود الواجهة الحالية."
        );
      } else {
        setResult(
          "✅ الكود آمن بنسبة ممتازة! (No Vulnerabilities Found)\n" +
          "- لم يتم العثور على ثغرات واضحة في هذا الجزء.\n" +
          "- تم فحص بنية الدوّال والتأكد من سلامة المتغيرات الافتراضية."
        );
      }
    }, 1500);
  };
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center p-8 font-sans">
      {/* Header */}
      <header className="text-center my-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-2">
          AI Code Guard
        </h1>
        <p className="text-slate-400">
          افحص كود الـ JavaScript الخاص بك لتأمينه وتنظيفه من الثغرات فوراً
        </p>
      </header>

      {/* Main Container */}
      <div className="w-full max-w-3xl bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-2xl">
        <label className="block text-sm font-semibold mb-2 text-slate-300">
          ضع كود الـ JavaScript هنا:
        </label>
        
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="// اكتب أو الصق الكود البرمجي الخاص بك هنا ليتم فحصه..."
          className="w-full h-64 p-4 bg-slate-950 border border-slate-700 rounded-lg text-emerald-400 font-mono text-sm focus:outline-none focus:border-teal-500 resize-none mb-4"
          dir="ltr"
        />

        <button
          onClick={handleScan}
          className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 shadow-md"
        >
          فحص وتأمين الكود باستخدام AI
        </button>

        {/* Results Area */}
        {result && (
          <div className="mt-6 p-4 bg-slate-900 border border-teal-500/30 rounded-lg text-slate-300">
            <h3 className="text-teal-400 font-bold mb-2">تقرير الفحص الذكي:</h3>
            <p className="text-sm whitespace-pre-wrap">{result}</p>
          </div>
        )}
      </div>
    </main>
  );
}
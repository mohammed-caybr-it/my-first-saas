 CCA: className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
            >
              تأكيد الدفع عبر واتساب 💬
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
CCA: <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Free Plan */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-xl font-bold text-slate-200 mb-2">الخطة العادية</h3>
              <p className="text-3xl font-extrabold text-white my-4">0 د.ع <span className="text-sm font-normal text-slate-400">/ للأبد</span></p>
              <ul className="text-slate-400 text-sm space-y-3 my-6 text-right pr-4 list-disc list-inside">
                <li>3 فحوصات يومية فقط</li>
                <li>فحص أساسي للأكواد</li>
                <li>دعم مجتمعي بطيء</li>
              </ul>
            </div>
            <button className="w-full bg-slate-700 text-slate-300 py-2.5 rounded-lg font-medium cursor-not-allowed opacity-60">
              خطتك الحالية
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-slate-800 border-2 border-teal-500 rounded-xl p-6 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-3 left-3 bg-teal-500 text-slate-900 text-xs font-bold px-2.5 py-0.5 rounded-full">موصى به</div>
            <div>
              <h3 className="text-xl font-bold text-teal-400 mb-2">خطة المحترفين (Pro)</h3>
              <p className="text-3xl font-extrabold text-white my-4">10,000 د.ع <span className="text-sm font-normal text-slate-400">/ شهرياً</span></p>
              <ul className="text-slate-300 text-sm space-y-3 my-6 text-right pr-4 list-disc list-inside">
                <li className="font-semibold text-teal-300">عدد فحوصات غير محدود</li>
                <li>فحص عميق وشامل للثغرات (Deep Scan)</li>
                <li>حلول فورية وترقيع ذكي ومباشر للكود</li>
                <li>دعم فني مخصص وسريع 24/7</li>
              </ul>
            </div>
            <button 
              onClick={() => setShowModal(true)}
              className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white py-2.5 rounded-lg font-bold transition duration-200"
            >
              ترقية الحساب الآن 🚀
            </button>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 border border-slate-700 rounded-xl max-w-md w-full p-6 text-center shadow-2xl relative">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl font-bold"
            >
              ✕
            </button>
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-white mb-4">تفعيل خطة المحترفين Pro</h3>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              للحصول على فحوصات غير محدودة وحماية قصوى لمشاريعك، يرجى تحويل مبلغ <span className="text-teal-400 font-bold">10,000 دينار عراقي</span> (أو ما يعادله $8) إلى إحدى المحافظ التالية:
            </p>
            
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-6 text-right space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-emerald-400 font-mono font-bold">077XXXXXXXX</span>
                <span className="text-slate-400 font-medium">زين كاش:</span>
              </div>
              <div className="flex justify-between items-center border-t border-slate-800 pt-2">
                <span className="text-amber-400 font-mono font-bold">077XXXXXXXX</span>
                <span className="text-slate-400 font-medium">آسيا حوالة:</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 mb-6">
              * بعد إتمام التحويل، اضغط على الزر بالأسفل لإرسال لقطة شاشة (Screenshot) لتفعيل حسابك فوراً.
[5/18/2026 12:28 PM] Mohammed Iyad CCA: </p>

            <a 
              href="https://wa.me/96477XXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
            >
              تأكيد الدفع عبر واتساب 💬
            </a>
          </div>
        </div>
      )}
    </main>
  );
};
'use client';

import Link from 'next/link';
import { useState } from 'react';

interface PricePoint {
  label: string;
  price: string;
  description: string;
}

interface AnalysisMetric {
  title: string;
  rating: number;
  maxRating: number;
}

interface Suggestion {
  title: string;
  content: string;
}

export default function ValuationAnalysisPage() {
  const [isPdfExporting, setIsPdfExporting] = useState(false);

  // Mock Data - AI 估價分析結果
  const suggestedPrice = 1680;
  const confidenceLevel = 5;
  
  const pricePoints: PricePoint[] = [
    { label: '快速成交價', price: '1580', description: '快速售出' },
    { label: '合理成交價', price: '1680', description: '市場均價' },
    { label: '最佳開價', price: '1780', description: '最優定價' },
  ];

  const analysisMetrics: AnalysisMetric[] = [
    { title: '交通便利', rating: 4, maxRating: 5 },
    { title: '生活機能', rating: 5, maxRating: 5 },
    { title: '學區', rating: 4, maxRating: 5 },
    { title: '未來增值', rating: 4, maxRating: 5 },
  ];

  const suggestions: Suggestion[] = [
    { title: '建議開價', content: '1,780 萬元（利於吸引客戶）' },
    { title: '建議底價', content: '1,580 萬元（快速成交保障）' },
    { title: '推薦文案方向', content: '強調美術館學區、交通便利、新古屋改裝潛力' },
    { title: '推薦目標客群', content: '首購族、年輕家庭、文教人士' },
    { title: '行銷建議', content: '優先在周末舉辦看屋會、配合線上虛擬看房' },
  ];

  const handleExportPdf = () => {
    setIsPdfExporting(true);
    setTimeout(() => {
      setIsPdfExporting(false);
      // 實際 PDF 匯出邏輯
      console.log('PDF exported');
    }, 1500);
  };

  const renderStars = (rating: number, maxRating: number = 5) => {
    return (
      <span className="text-lg">
        {[...Array(maxRating)].map((_, i) => (
          <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
            ★
          </span>
        ))}
      </span>
    );
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-white">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-blue-100">
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366] to-[#004d99] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <Link href="/valuation/result" className="inline-flex items-center text-[#003366] hover:text-[#004d99] font-medium mb-4 transition-colors">
            ← 返回
          </Link>
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              <span className="text-[#003366]">AI 估價分析</span>
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              基於市場數據和房屋條件的專業估價分析
            </p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-8 sm:space-y-10">
          
          {/* ① AI 建議售價 */}
          <div className="bg-gradient-to-br from-[#003366] to-[#004d99] rounded-3xl p-8 sm:p-12 shadow-xl text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-sm sm:text-base font-semibold opacity-90 mb-2">AI 建議售價</p>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-2">
                  {suggestedPrice}
                  <span className="text-3xl sm:text-4xl">萬</span>
                </h2>
                <p className="text-sm sm:text-base opacity-90">基於市場數據與物件條件分析</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur">
                <p className="text-xs sm:text-sm font-semibold opacity-90 mb-3">信心指數</p>
                <div className="text-4xl sm:text-5xl text-yellow-300">
                  {renderStars(confidenceLevel, 5)}
                </div>
                <p className="text-xs sm:text-sm mt-3 opacity-90">非常高</p>
              </div>
            </div>
          </div>

          {/* ② 價格區間 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003366] mb-8">💹 價格區間</h2>
            <div className="space-y-6">
              {pricePoints.map((point, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-end justify-between mb-2">
                    <div>
                      <p className="text-sm sm:text-base font-semibold text-gray-700">{point.label}</p>
                      <p className="text-xs text-gray-500">{point.description}</p>
                    </div>
                    <p className="text-xl sm:text-2xl font-bold text-[#003366]">{point.price}萬</p>
                  </div>
                  {/* Bar chart */}
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        index === 0
                          ? 'w-3/5 bg-gradient-to-r from-red-400 to-orange-400'
                          : index === 1
                          ? 'w-4/5 bg-gradient-to-r from-[#003366] to-[#004d99]'
                          : 'w-full bg-gradient-to-r from-green-400 to-emerald-400'
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ③ AI 分析 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003366] mb-8">📊 AI 分析</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {analysisMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#003366]/20 transition-all duration-300 text-center"
                >
                  <p className="text-sm sm:text-base font-semibold text-gray-700 mb-3">
                    {metric.title}
                  </p>
                  <div className="text-3xl sm:text-4xl text-yellow-400 mb-2">
                    {renderStars(metric.rating, metric.maxRating)}
                  </div>
                  <p className="text-xs text-gray-600">
                    {metric.rating}/{metric.maxRating}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ④ AI 建議 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003366] mb-8">💡 AI 建議</h2>
            <div className="space-y-4 sm:space-y-5">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100"
                >
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#003366] to-[#004d99] text-white flex items-center justify-center font-bold text-sm sm:text-base">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-800 text-sm sm:text-base mb-1">
                      {suggestion.title}
                    </p>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      {suggestion.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ⑤ 底部按鈕 */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-8">
            <Link href="/cases" className="flex-1">
              <button className="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg text-white bg-gradient-to-r from-[#003366] to-[#004d99] hover:from-[#002244] hover:to-[#003d7a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                📋 回我的案件
              </button>
            </Link>
            <button
              onClick={handleExportPdf}
              disabled={isPdfExporting}
              className="flex-1 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isPdfExporting ? (
                <>
                  <span className="inline-block animate-spin">⏳</span>
                  匯出中...
                </>
              ) : (
                <>
                  📄 匯出 PDF
                </>
              )}
            </button>
            <Link href="/valuation/create" className="flex-1">
              <button className="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg text-[#003366] border-2 border-[#003366] hover:bg-[#003366]/10 transition-all duration-300">
                🔄 重新估價
              </button>
            </Link>
          </div>

          {/* Footer spacer */}
          <div className="h-4"></div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-blue-100 bg-gradient-to-r from-[#003366]/5 to-[#004d99]/5 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-xs sm:text-sm">
            © 2024 房仲 AI OS. 所有權利保留。
          </p>
        </div>
      </footer>
    </div>
  );
}

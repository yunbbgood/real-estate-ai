'use client';

import Link from 'next/link';

interface AnalysisData {
  estimatedPrice: string;
  priceRange: {
    min: string;
    max: string;
  };
  marketAnalysis: {
    title: string;
    description: string;
  }[];
  recommendations: string[];
}

export default function ValuationAnalysisPage() {
  // Mock Data - AI 估價分析結果
  const analysisData: AnalysisData = {
    estimatedPrice: '1688',
    priceRange: {
      min: '1600',
      max: '1750',
    },
    marketAnalysis: [
      {
        title: '區域增長潛力',
        description: '高雄市鼓山區近年房價穩定成長，文教區域吸引年輕家庭移入。',
      },
      {
        title: '交通便利度',
        description: '鄰近捷運站、美術館等公共設施，交通便利指數高。',
      },
      {
        title: '生活機能評分',
        description: '周邊商圈完善，超市、學校、醫療設施齊全。',
      },
      {
        title: '房屋保值率',
        description: '屋齡 12 年，保值率 85%，裝修狀況良好。',
      },
    ],
    recommendations: [
      '基於目前市場行情，建議開價在 1,600 - 1,750 萬之間',
      '考慮區域平均每坪單價 28-30 萬，該物件具有競爭力',
      '建議在近期內刊登，避免錯失銷售熱期',
      '可考慮提供現場虛擬看房服務，吸引遠距客戶',
      '建議搭配專業房產文案和高清照片提升吸引力',
    ],
  };

  const analysisItems = [
    {
      label: '估價價格',
      value: `${analysisData.estimatedPrice}萬`,
      icon: '💰',
      highlight: true,
      color: 'from-[#003366] to-[#004d99]',
    },
    {
      label: '估價範圍',
      value: `${analysisData.priceRange.min} - ${analysisData.priceRange.max}萬`,
      icon: '📊',
      highlight: true,
      color: 'from-cyan-500 to-blue-600',
    },
  ];

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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* AI Analysis Result */}
          <div className="mb-8 sm:mb-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 sm:p-6 border border-green-200 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🤖</span>
            <div>
              <h2 className="font-bold text-green-800 mb-1">
                AI 分析完成
              </h2>
              <p className="text-green-700 text-sm sm:text-base">
                系統已根據市場數據、房屋條件和區域特性進行全面分析
              </p>
            </div>
          </div>

          {/* Price Analysis Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {analysisItems.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 sm:p-8 bg-gradient-to-br ${item.color} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div className="flex-1">
                    <label className="text-xs sm:text-sm font-semibold opacity-90 uppercase tracking-wide mb-2 block">
                      {item.label}
                    </label>
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Market Analysis */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003366] mb-6">
              📈 市場分析
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {analysisData.marketAnalysis.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-lg hover:border-[#003366]/20 transition-all duration-300"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-[#003366] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003366] mb-6">
              💡 專業建議
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8 border border-blue-200">
              <ul className="space-y-3 sm:space-y-4">
                {analysisData.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-r from-[#003366] to-[#004d99] text-white flex items-center justify-center text-xs sm:text-sm font-bold">
                      {index + 1}
                    </span>
                    <p className="text-gray-800 text-sm sm:text-base pt-0.5">
                      {rec}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mb-8 sm:mb-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-amber-200">
            <h3 className="text-lg font-semibold text-amber-900 mb-3 flex items-center gap-2">
              <span>ℹ️</span>
              重要提示
            </h3>
            <ul className="text-amber-800 text-sm sm:text-base space-y-2">
              <li>• 本估價結果為 AI 分析推估，實際成交價格受多因素影響</li>
              <li>• 建議配合實地勘查和專業房仲顧問意見</li>
              <li>• 市場行情可能隨時變動，建議定期更新估價</li>
              <li>• 本分析基於公開市場數據和房屋條件</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link href="/cases" className="flex-1">
              <button className="w-full px-8 py-4 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-[#003366] to-[#004d99] hover:from-[#002244] hover:to-[#003d7a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                存檔案件
              </button>
            </Link>
            <button className="flex-1 px-8 py-4 rounded-xl font-bold text-lg text-[#003366] border-2 border-[#003366] hover:bg-[#003366]/5 transition-all duration-300">
              列印報告
            </button>
          </div>
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

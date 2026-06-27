'use client';

import Link from 'next/link';

export default function ValuationResultPage() {
  // Mock Data - 估價結果
  const result = {
    propertyName: '美術大樓',
    address: '高雄市鼓山區',
    buildingArea: '58.3',
    landArea: '8.5',
    age: '12',
    layout: '3房2廳2衛',
    parking: '平面',
    askingPrice: '1688',
  };

  const resultItems = [
    {
      label: '物件名稱',
      value: result.propertyName,
      icon: '🏢',
    },
    {
      label: '地址',
      value: result.address,
      icon: '📍',
    },
    {
      label: '建坪',
      value: `${result.buildingArea}坪`,
      icon: '📐',
    },
    {
      label: '地坪',
      value: `${result.landArea}坪`,
      icon: '🌍',
    },
    {
      label: '屋齡',
      value: `${result.age}年`,
      icon: '⏰',
    },
    {
      label: '格局',
      value: result.layout,
      icon: '🚪',
    },
    {
      label: '車位',
      value: result.parking,
      icon: '🅿️',
    },
    {
      label: '開價',
      value: `${result.askingPrice}萬`,
      icon: '💰',
      highlight: true,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-white">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-blue-100">
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366] to-[#004d99] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <Link href="/valuation/ocr" className="inline-flex items-center text-[#003366] hover:text-[#004d99] font-medium mb-4 transition-colors">
            ← 返回
          </Link>
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              <span className="text-[#003366]">估價結果</span>
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              根據謄本資料生成的估價結果
            </p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Success message */}
          <div className="mb-8 sm:mb-12 bg-gradient-to-r from-green-50 to-green-100/50 rounded-2xl p-4 sm:p-6 border border-green-200 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">✅</span>
            <div>
              <h2 className="font-bold text-green-800 mb-1">
                OCR 辨識完成
              </h2>
              <p className="text-green-700 text-sm sm:text-base">
                謄本資料已成功提取，系統已自動填入相關欄位
              </p>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {resultItems.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 sm:p-8 border transition-all duration-300 hover:shadow-lg ${
                  item.highlight
                    ? 'bg-gradient-to-br from-[#003366]/5 to-[#004d99]/5 border-[#003366]/30 md:col-span-2'
                    : 'bg-white border-gray-100 hover:border-[#003366]/20'
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <label className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                      {item.label}
                    </label>
                    <p
                      className={`text-lg sm:text-xl md:text-2xl font-bold break-words ${
                        item.highlight
                          ? 'text-[#003366]'
                          : 'text-gray-800'
                      }`}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info card */}
          <div className="mb-8 sm:mb-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8 border border-blue-200">
            <h3 className="text-lg font-semibold text-[#003366] mb-3 flex items-center gap-2">
              <span>💡</span>
              後續步驟
            </h3>
            <ul className="text-gray-700 text-sm sm:text-base space-y-2">
              <li>✓ 謄本資料已提取完成</li>
              <li>✓ 建物基本資訊已填入</li>
              <li>○ 點擊下方「下一步」進行 AI 估價分析</li>
              <li>○ 系統將根據市場數據提供專業估價建議</li>
            </ul>
          </div>

          {/* Next Button */}
          <div>
            <Link href="/valuation/analysis">
              <button className="w-full inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg sm:text-xl text-white bg-gradient-to-r from-[#003366] to-[#004d99] hover:from-[#002244] hover:to-[#003d7a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                下一步
                <span className="ml-2 text-lg group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </button>
            </Link>
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

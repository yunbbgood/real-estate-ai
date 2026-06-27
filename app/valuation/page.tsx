'use client';

import Link from 'next/link';

export default function ValuationPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-white">
      {/* Header with gradient background */}
      <header className="relative overflow-hidden border-b border-blue-100">
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366] to-[#004d99] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <div className="inline-block">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="text-[#003366]">房仲</span>
                <span className="text-[#004d99] ml-2">AI OS</span>
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex flex-col items-center justify-center flex-1 min-h-[calc(100vh-200px)]">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          {/* Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#003366]/10 to-[#004d99]/10">
              <span className="text-5xl sm:text-6xl">💰</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003366] mb-4 sm:mb-6">
            AI估價
          </h2>

          {/* Subtitle */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-8 sm:mb-12">
            房仲 AI OS
          </h3>

          {/* Buttons Container */}
          <div className="flex flex-col gap-4 sm:gap-6 mb-8 sm:mb-12">
            <Link href="/valuation/create" className="w-full sm:w-auto">
              <button className="w-full inline-flex items-center justify-center px-8 py-3 sm:py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-[#003366] to-[#004d99] hover:from-[#002244] hover:to-[#003d7a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                建立案件
              </button>
            </Link>
            <Link href="/" className="w-full sm:w-auto">
              <button className="w-full inline-flex items-center justify-center px-8 py-3 sm:py-4 rounded-lg font-semibold text-[#003366] border-2 border-[#003366] hover:bg-[#003366]/5 transition-all duration-300">
                ← 返回首頁
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

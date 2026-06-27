'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Feature {
  title: string;
  description: string;
  icon: string;
  color: string;
  href: string;
}

const features: Feature[] = [
  {
    title: 'AI估價',
    description: '利用 AI 技術快速估算房產價格',
    icon: '💰',
    color: 'from-blue-400 to-blue-600',
    href: '/valuation',
  },
  {
    title: 'OCR辨識',
    description: '自動辨識與提取謄本資料',
    icon: '📄',
    color: 'from-cyan-400 to-cyan-600',
    href: '/ocr',
  },
  {
    title: '文宣生成',
    description: '快速生成專業的房產文宣',
    icon: '✍️',
    color: 'from-indigo-400 to-indigo-600',
    href: '/copywriting',
  },
  {
    title: '短影音腳本',
    description: '自動生成短影音腳本內容',
    icon: '🎬',
    color: 'from-purple-400 to-purple-600',
    href: '/script',
  },
];

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-white">
      {/* Header with gradient background */}
      <header className="relative overflow-hidden border-b border-blue-100">
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366] to-[#004d99] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Logo */}
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div className="text-center">
              <div className="inline-block">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  <span className="text-[#003366]">房仲</span>
                  <span className="text-[#004d99] ml-2">AI OS</span>
                </h1>
              </div>
            </div>
          </div>

          {/* Title and description */}
          <div className="text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3">
              專業房仲工作平台
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              由 AI 驅動的智能助手，協助房仲專業人士高效處理日常工作
            </p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          {/* Feature cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card background with gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#003366] to-[#004d99] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>

                {/* Card content */}
                <div className="relative bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#003366]/20">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#003366]/10 to-[#004d99]/10 group-hover:from-[#003366]/20 group-hover:to-[#004d99]/20 transition-colors duration-300">
                      <span className="text-3xl sm:text-4xl">{feature.icon}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#003366] mb-3 group-hover:text-[#004d99] transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Button */}
                  <Link href={feature.href}>
                    <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#003366] to-[#004d99] hover:from-[#002244] hover:to-[#003d7a] transition-all duration-300 transform group-hover:translate-x-1 group-hover:shadow-lg">
                      進入應用
                      <span className="ml-2 text-lg group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </button>
                  </Link>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 rounded-bl-full bg-gradient-to-br from-[#003366]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
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

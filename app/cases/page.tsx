'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Case {
  id: string;
  propertyName: string;
  address: string;
  buildingArea: string;
  askingPrice: string;
  status: 'active' | 'completed' | 'pending';
  statusText: string;
  createdDate: string;
}

const mockCases: Case[] = [
  {
    id: '001',
    propertyName: '美術大樓',
    address: '高雄市鼓山區',
    buildingArea: '58.3',
    askingPrice: '1688',
    status: 'active',
    statusText: '進行中',
    createdDate: '2024-06-15',
  },
  {
    id: '002',
    propertyName: '西子灣景觀屋',
    address: '高雄市鼓山區',
    buildingArea: '75.5',
    askingPrice: '2200',
    status: 'completed',
    statusText: '已完成',
    createdDate: '2024-06-10',
  },
  {
    id: '003',
    propertyName: '明誠重劃區新建案',
    address: '高雄市鼓山區',
    buildingArea: '42.0',
    askingPrice: '1200',
    status: 'pending',
    statusText: '待審核',
    createdDate: '2024-06-20',
  },
  {
    id: '004',
    propertyName: '三多商圈套房',
    address: '高雄市苓雅區',
    buildingArea: '32.8',
    askingPrice: '850',
    status: 'completed',
    statusText: '已完成',
    createdDate: '2024-06-05',
  },
  {
    id: '005',
    propertyName: '文化中心邊間',
    address: '高雄市左營區',
    buildingArea: '68.0',
    askingPrice: '1980',
    status: 'active',
    statusText: '進行中',
    createdDate: '2024-06-18',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-blue-100 text-blue-800 border-blue-300';
    case 'completed':
      return 'bg-green-100 text-green-800 border-green-300';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-300';
  }
};

export default function CasesPage() {
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredCases = filterStatus === 'all' 
    ? mockCases 
    : mockCases.filter(c => c.status === filterStatus);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-white">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-blue-100">
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366] to-[#004d99] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <Link href="/" className="inline-flex items-center text-[#003366] hover:text-[#004d99] font-medium mb-4 transition-colors">
            ← 返回首頁
          </Link>
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              <span className="text-[#003366]">我的案件</span>
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              管理和查看您的所有房產案件
            </p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Filter buttons */}
          <div className="mb-8 sm:mb-12 flex flex-wrap gap-3 sm:gap-4">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 ${
                filterStatus === 'all'
                  ? 'bg-gradient-to-r from-[#003366] to-[#004d99] text-white shadow-lg'
                  : 'bg-white text-[#003366] border-2 border-[#003366] hover:bg-[#003366]/5'
              }`}
            >
              全部 ({mockCases.length})
            </button>
            <button
              onClick={() => setFilterStatus('active')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 ${
                filterStatus === 'active'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white text-blue-600 border-2 border-blue-300 hover:bg-blue-50'
              }`}
            >
              進行中 ({mockCases.filter(c => c.status === 'active').length})
            </button>
            <button
              onClick={() => setFilterStatus('completed')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 ${
                filterStatus === 'completed'
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-white text-green-600 border-2 border-green-300 hover:bg-green-50'
              }`}
            >
              已完成 ({mockCases.filter(c => c.status === 'completed').length})
            </button>
            <button
              onClick={() => setFilterStatus('pending')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 ${
                filterStatus === 'pending'
                  ? 'bg-yellow-500 text-white shadow-lg'
                  : 'bg-white text-yellow-600 border-2 border-yellow-300 hover:bg-yellow-50'
              }`}
            >
              待審核 ({mockCases.filter(c => c.status === 'pending').length})
            </button>
          </div>

          {/* Cases grid */}
          {filteredCases.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredCases.map((caseItem) => (
                <Link key={caseItem.id} href={`/cases/${caseItem.id}`}>
                  <div className="relative group h-full cursor-pointer">
                    {/* Card background with gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#003366] to-[#004d99] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>

                    {/* Card content */}
                    <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#003366]/20 h-full flex flex-col">
                      {/* Header section */}
                      <div className="mb-4 sm:mb-6">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h3 className="text-lg sm:text-xl font-bold text-[#003366] flex-1 line-clamp-2">
                            {caseItem.propertyName}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border whitespace-nowrap flex-shrink-0 ${getStatusColor(caseItem.status)}`}>
                            {caseItem.statusText}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm line-clamp-1">
                          📍 {caseItem.address}
                        </p>
                      </div>

                      {/* Info section */}
                      <div className="flex-1 space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                        <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                          <p className="text-xs sm:text-sm text-gray-600 mb-1">建物坪數</p>
                          <p className="text-lg sm:text-xl font-bold text-gray-800">
                            {caseItem.buildingArea}坪
                          </p>
                        </div>
                        <div className="bg-gradient-to-br from-[#003366]/5 to-[#004d99]/5 rounded-lg p-3 sm:p-4 border border-[#003366]/10">
                          <p className="text-xs sm:text-sm text-gray-600 mb-1">開價</p>
                          <p className="text-lg sm:text-xl font-bold text-[#003366]">
                            {caseItem.askingPrice}萬
                          </p>
                        </div>
                      </div>

                      {/* Footer section */}
                      <div className="border-t border-gray-100 pt-3 sm:pt-4 flex items-center justify-between">
                        <p className="text-xs sm:text-sm text-gray-500">
                          建立: {caseItem.createdDate}
                        </p>
                        <span className="text-[#003366] group-hover:translate-x-1 transition-transform duration-300 text-lg">
                          →
                        </span>
                      </div>

                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-12 h-12 rounded-bl-full bg-gradient-to-br from-[#003366]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-100 mb-4">
                <span className="text-3xl sm:text-4xl">📭</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                沒有找到案件
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                目前沒有符合篩選條件的案件
              </p>
            </div>
          )}
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

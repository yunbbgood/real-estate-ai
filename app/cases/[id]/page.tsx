'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

interface CaseDetail {
  id: string;
  propertyName: string;
  address: string;
  buildingArea: string;
  landArea: string;
  age: string;
  layout: string;
  parking: string;
  askingPrice: string;
  status: string;
  statusText: string;
  createdDate: string;
  description: string;
}

const mockCasesDetail: Record<string, CaseDetail> = {
  '001': {
    id: '001',
    propertyName: '美術大樓',
    address: '高雄市鼓山區',
    buildingArea: '58.3',
    landArea: '8.5',
    age: '12',
    layout: '3房2廳2衛',
    parking: '平面',
    askingPrice: '1688',
    status: 'active',
    statusText: '進行中',
    createdDate: '2024-06-15',
    description: '位於美術館附近，交通便利，生活機能完善的住宅。',
  },
  '002': {
    id: '002',
    propertyName: '西子灣景觀屋',
    address: '高雄市鼓山區',
    buildingArea: '75.5',
    landArea: '12.0',
    age: '8',
    layout: '4房2廳3衛',
    parking: '機械',
    askingPrice: '2200',
    status: 'completed',
    statusText: '已完成',
    createdDate: '2024-06-10',
    description: '高樓層景觀優美，擁抱西子灣美景的豪華住宅。',
  },
  '003': {
    id: '003',
    propertyName: '明誠重劃區新建案',
    address: '高雄市鼓山區',
    buildingArea: '42.0',
    landArea: '6.0',
    age: '1',
    layout: '2房1廳1衛',
    parking: '平面',
    askingPrice: '1200',
    status: 'pending',
    statusText: '待審核',
    createdDate: '2024-06-20',
    description: '新建案，建物條件優良，適合首購族。',
  },
  '004': {
    id: '004',
    propertyName: '三多商圈套房',
    address: '高雄市苓雅區',
    buildingArea: '32.8',
    landArea: '5.0',
    age: '5',
    layout: '1房1廳1衛',
    parking: '無',
    askingPrice: '850',
    status: 'completed',
    statusText: '已完成',
    createdDate: '2024-06-05',
    description: '商圈套房，投資報酬率高，租賃市場熱絡。',
  },
  '005': {
    id: '005',
    propertyName: '文化中心邊間',
    address: '高雄市左營區',
    buildingArea: '68.0',
    landArea: '10.0',
    age: '15',
    layout: '3房1廳2衛',
    parking: '平面',
    askingPrice: '1980',
    status: 'active',
    statusText: '進行中',
    createdDate: '2024-06-18',
    description: '位於文化中心旁，文教區域，環境優雅。',
  },
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-300' };
    case 'completed':
      return { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-300' };
    case 'pending':
      return { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-300' };
    default:
      return { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-300' };
  }
};

export default function CaseDetailPage() {
  const params = useParams();
  const caseId = params.id as string;
  const caseData = mockCasesDetail[caseId];

  if (!caseData) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#003366] mb-4">案件未找到</h1>
          <p className="text-gray-600 mb-8">抱歉，找不到您要查看的案件。</p>
          <Link href="/cases">
            <button className="px-6 py-3 bg-gradient-to-r from-[#003366] to-[#004d99] text-white rounded-lg font-semibold hover:from-[#002244] hover:to-[#003d7a] transition-all">
              返回案件列表
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const statusColors = getStatusColor(caseData.status);

  const details = [
    { label: '物件名稱', value: caseData.propertyName, icon: '🏢' },
    { label: '地址', value: caseData.address, icon: '📍' },
    { label: '建坪', value: `${caseData.buildingArea}坪`, icon: '📐' },
    { label: '地坪', value: `${caseData.landArea}坪`, icon: '🌍' },
    { label: '屋齡', value: `${caseData.age}年`, icon: '⏰' },
    { label: '格局', value: caseData.layout, icon: '🚪' },
    { label: '車位', value: caseData.parking, icon: '🅿️' },
    { label: '開價', value: `${caseData.askingPrice}萬`, icon: '💰', highlight: true },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-white">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-blue-100">
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366] to-[#004d99] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <Link href="/cases" className="inline-flex items-center text-[#003366] hover:text-[#004d99] font-medium mb-4 transition-colors">
            ← 返回案件列表
          </Link>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003366] mb-2">
                {caseData.propertyName}
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">
                📍 {caseData.address}
              </p>
            </div>
            <div className={`px-4 py-2 rounded-full text-sm sm:text-base font-semibold border whitespace-nowrap ${statusColors.bg} ${statusColors.text} ${statusColors.border}`}>
              {caseData.statusText}
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Description */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mb-4">
              案件描述
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {caseData.description}
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {details.map((item, index) => (
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
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8 border border-blue-200 mb-8 sm:mb-12">
            <h3 className="text-lg font-semibold text-[#003366] mb-3 flex items-center gap-2">
              <span>📝</span>
              案件信息
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-xs sm:text-sm text-gray-600 mb-1">建立日期</p>
                <p className="text-base sm:text-lg font-semibold text-gray-800">
                  {caseData.createdDate}
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-600 mb-1">案件狀態</p>
                <p className="text-base sm:text-lg font-semibold text-gray-800">
                  {caseData.statusText}
                </p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link href="/valuation" className="flex-1">
              <button className="w-full px-8 py-4 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-[#003366] to-[#004d99] hover:from-[#002244] hover:to-[#003d7a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                開始新估價
              </button>
            </Link>
            <Link href="/cases" className="flex-1">
              <button className="w-full px-8 py-4 rounded-xl font-bold text-lg text-[#003366] border-2 border-[#003366] hover:bg-[#003366]/5 transition-all duration-300">
                返回列表
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

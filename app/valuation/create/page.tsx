'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CreatePropertyPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    propertyName: '',
    district: '',
    address: '',
    buildingArea: '',
    landArea: '',
    age: '',
    layout: '',
    parking: '',
    askingPrice: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 導航到 OCR 頁面
    router.push('/valuation/ocr');
  };

  const taiwanDistricts = [
    '台北市',
    '新北市',
    '桃園市',
    '台中市',
    '台南市',
    '高雄市',
    '基隆市',
    '新竹市',
    '苗栗縣',
    '彰化縣',
    '南投縣',
    '雲林縣',
    '嘉義縣',
    '屏東縣',
    '宜蘭縣',
    '花蓮縣',
    '台東縣',
    '澎湖縣',
    '金門縣',
    '連江縣',
  ];

  const layoutOptions = ['1房', '2房', '3房', '4房', '5房以上'];
  const parkingOptions = ['無', '平面車位', '機械車位', '複數車位'];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-white">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-blue-100">
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366] to-[#004d99] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <Link href="/valuation" className="inline-flex items-center text-[#003366] hover:text-[#004d99] font-medium mb-4 transition-colors">
            ← 返回
          </Link>
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              <span className="text-[#003366]">建立案件</span>
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              請填寫房產基本資訊
            </p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Property Name Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <label htmlFor="propertyName" className="block text-sm sm:text-base font-semibold text-[#003366] mb-3">
                物件名稱
              </label>
              <input
                type="text"
                id="propertyName"
                name="propertyName"
                value={formData.propertyName}
                onChange={handleChange}
                placeholder="請輸入物件名稱（如：景美大樓A棟）"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/20 focus:outline-none transition-all duration-200 text-sm sm:text-base"
              />
            </div>

            {/* District and Address Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <label htmlFor="district" className="block text-sm sm:text-base font-semibold text-[#003366] mb-3">
                  行政區
                </label>
                <select
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/20 focus:outline-none transition-all duration-200 text-sm sm:text-base"
                >
                  <option value="">請選擇行政區</option>
                  {taiwanDistricts.map(district => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <label htmlFor="address" className="block text-sm sm:text-base font-semibold text-[#003366] mb-3">
                  地址
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="請輸入完整地址"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/20 focus:outline-none transition-all duration-200 text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Building Area and Land Area Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <label htmlFor="buildingArea" className="block text-sm sm:text-base font-semibold text-[#003366] mb-3">
                  建物坪數
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="buildingArea"
                    name="buildingArea"
                    value={formData.buildingArea}
                    onChange={handleChange}
                    placeholder="請輸入坪數"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/20 focus:outline-none transition-all duration-200 text-sm sm:text-base"
                  />
                  <span className="absolute right-4 top-3 text-gray-500 text-sm sm:text-base">坪</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <label htmlFor="landArea" className="block text-sm sm:text-base font-semibold text-[#003366] mb-3">
                  土地坪數
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="landArea"
                    name="landArea"
                    value={formData.landArea}
                    onChange={handleChange}
                    placeholder="請輸入坪數"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/20 focus:outline-none transition-all duration-200 text-sm sm:text-base"
                  />
                  <span className="absolute right-4 top-3 text-gray-500 text-sm sm:text-base">坪</span>
                </div>
              </div>
            </div>

            {/* Age and Layout Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <label htmlFor="age" className="block text-sm sm:text-base font-semibold text-[#003366] mb-3">
                  屋齡
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="請輸入屋齡"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/20 focus:outline-none transition-all duration-200 text-sm sm:text-base"
                  />
                  <span className="absolute right-4 top-3 text-gray-500 text-sm sm:text-base">年</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <label htmlFor="layout" className="block text-sm sm:text-base font-semibold text-[#003366] mb-3">
                  格局
                </label>
                <select
                  id="layout"
                  name="layout"
                  value={formData.layout}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/20 focus:outline-none transition-all duration-200 text-sm sm:text-base"
                >
                  <option value="">請選擇格局</option>
                  {layoutOptions.map(layout => (
                    <option key={layout} value={layout}>
                      {layout}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Parking and Asking Price Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <label htmlFor="parking" className="block text-sm sm:text-base font-semibold text-[#003366] mb-3">
                  車位
                </label>
                <select
                  id="parking"
                  name="parking"
                  value={formData.parking}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/20 focus:outline-none transition-all duration-200 text-sm sm:text-base"
                >
                  <option value="">請選擇車位</option>
                  {parkingOptions.map(parking => (
                    <option key={parking} value={parking}>
                      {parking}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <label htmlFor="askingPrice" className="block text-sm sm:text-base font-semibold text-[#003366] mb-3">
                  開價
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="askingPrice"
                    name="askingPrice"
                    value={formData.askingPrice}
                    onChange={handleChange}
                    placeholder="請輸入開價"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/20 focus:outline-none transition-all duration-200 text-sm sm:text-base"
                  />
                  <span className="absolute right-4 top-3 text-gray-500 text-sm sm:text-base">元</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 sm:pt-8">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg sm:text-xl text-white bg-gradient-to-r from-[#003366] to-[#004d99] hover:from-[#002244] hover:to-[#003d7a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                下一步
              </button>
            </div>
          </form>
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

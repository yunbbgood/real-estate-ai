'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface OcrResult {
  doorNumber: string;
  buildingArea: string;
  mainBuilding: string;
  auxiliaryBuilding: string;
  commonArea: string;
  age: string;
  floors: string;
  layout: string;
}

export default function OcrUploadPage() {
  const router = useRouter();
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [ocrResults, setOcrResults] = useState<OcrResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const supportedFormats = ['PDF', 'JPG', 'PNG'];
  const acceptedFileTypes = '.pdf,.jpg,.jpeg,.png';

  // Mock OCR 結果
  const mockOcrResult: OcrResult = {
    doorNumber: '高雄市鼓山區美術館路 123 號',
    buildingArea: '58.3',
    mainBuilding: '主建物 58.3 坪',
    auxiliaryBuilding: '附屬建物 5.2 坪',
    commonArea: '公設 12.5 坪',
    age: '12 年',
    floors: '地上 5 樓 / 地下 1 層',
    layout: '3 房 2 廳 2 衛',
  };

  const ocrItems = [
    { key: 'doorNumber', label: '建物門牌', icon: '🏠' },
    { key: 'buildingArea', label: '建物坪數', icon: '📐' },
    { key: 'mainBuilding', label: '主建物', icon: '🏢' },
    { key: 'auxiliaryBuilding', label: '附屬建物', icon: '🔧' },
    { key: 'commonArea', label: '公設坪數', icon: '🏛️' },
    { key: 'age', label: '屋齡', icon: '⏰' },
    { key: 'floors', label: '樓層', icon: '🪜' },
    { key: 'layout', label: '格局', icon: '🚪' },
  ];

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (isValidFile(file)) {
        setUploadedFile(file);
      }
    }
  };

  const isValidFile = (file: File): boolean => {
    const validExtensions = ['pdf', 'jpg', 'jpeg', 'png'];
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    return validExtensions.includes(fileExtension || '');
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (isValidFile(file)) {
        setUploadedFile(file);
      }
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (uploadedFile) {
      setIsProcessing(true);
      // 模擬 OCR 辨識，3秒後顯示結果
      setTimeout(() => {
        setOcrResults(mockOcrResult);
        setIsProcessing(false);
      }, 3000);
    }
  };

  const handleImportCase = () => {
    // 跳轉到估價結果頁面並帶入 Mock Data
    router.push('/valuation/result');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-white">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-blue-100">
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366] to-[#004d99] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <Link href="/valuation/create" className="inline-flex items-center text-[#003366] hover:text-[#004d99] font-medium mb-4 transition-colors">
            ← 返回
          </Link>
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              <span className="text-[#003366]">上傳建物謄本</span>
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              請上傳建物謄本進行 OCR 辨識
            </p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Drag and Drop Area */}
            <div
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className={`relative border-2 border-dashed rounded-2xl p-8 sm:p-12 lg:p-16 transition-all duration-300 cursor-pointer ${
                isDragging
                  ? 'border-[#004d99] bg-[#004d99]/5'
                  : 'border-gray-300 bg-white hover:border-[#003366] hover:bg-[#003366]/2'
              }`}
            >
              {/* Upload content */}
              <div className="flex flex-col items-center justify-center">
                {uploadedFile ? (
                  <>
                    {/* Uploaded file preview */}
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-green-400/20 to-green-600/20">
                        <span className="text-4xl sm:text-5xl">✅</span>
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 text-center break-words max-w-xs sm:max-w-md">
                      {uploadedFile.name}
                    </h3>
                    <p className="text-gray-500 text-sm sm:text-base mb-6">
                      {(uploadedFile.size / 1024).toFixed(2)} KB
                    </p>
                    <button
                      type="button"
                      onClick={handleClick}
                      className="text-[#003366] hover:text-[#004d99] font-semibold underline transition-colors"
                    >
                      更換檔案
                    </button>
                  </>
                ) : (
                  <>
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#003366]/10 to-[#004d99]/10">
                        <span className="text-4xl sm:text-5xl">📄</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center">
                      拖曳檔案到此上傳
                    </h3>

                    {/* Subtitle */}
                    <p className="text-gray-600 text-sm sm:text-base text-center mb-6">
                      或點下方按鈕選擇檔案
                    </p>

                    {/* Supported formats */}
                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                      {supportedFormats.map(format => (
                        <span
                          key={format}
                          className="inline-block px-3 py-1 rounded-full bg-[#003366]/10 text-[#003366] text-xs sm:text-sm font-medium"
                        >
                          {format}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept={acceptedFileTypes}
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>

            {/* Choose File Button */}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleClick}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-[#003366] border-2 border-[#003366] hover:bg-[#003366]/5 transition-all duration-300 hover:shadow-md"
              >
                選擇檔案
              </button>
            </div>

            {/* Submit Button */}
            <div className="pt-6 sm:pt-8">
              <button
                type="submit"
                disabled={!uploadedFile || isProcessing || ocrResults !== null}
                className={`w-full inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg sm:text-xl transition-all duration-300 shadow-lg ${
                  uploadedFile && !isProcessing && ocrResults === null
                    ? 'text-white bg-gradient-to-r from-[#003366] to-[#004d99] hover:from-[#002244] hover:to-[#003d7a] hover:shadow-xl transform hover:scale-105 cursor-pointer'
                    : 'text-gray-400 bg-gray-200 cursor-not-allowed'
                }`}
              >
                {isProcessing ? (
                  <>
                    <span className="inline-block animate-spin mr-2">⏳</span>
                    正在辨識建物謄本...
                  </>
                ) : (
                  '開始 OCR 辨識'
                )}
              </button>
              {!uploadedFile && !isProcessing && ocrResults === null && (
                <p className="text-gray-500 text-sm text-center mt-3">
                  請先上傳檔案
                </p>
              )}
            </div>
          </form>

          {/* OCR Results */}
          {ocrResults && (
            <div className="mt-12 sm:mt-16 space-y-8">
              {/* Success Message */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 sm:p-6 border border-green-200 flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">✅</span>
                <div>
                  <h2 className="font-bold text-green-800 mb-1">
                    OCR 辨識完成
                  </h2>
                  <p className="text-green-700 text-sm sm:text-base">
                    建物謄本資料已成功提取，以下為辨識結果
                  </p>
                </div>
              </div>

              {/* OCR Results Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {ocrItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-lg hover:border-[#003366]/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl flex-shrink-0">{item.icon}</span>
                      <div className="flex-1">
                        <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          ✓ {item.label}
                        </p>
                        <p className="text-base sm:text-lg font-bold text-gray-800 break-words">
                          {ocrResults[item.key as keyof OcrResult]}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Import Button */}
              <button
                onClick={handleImportCase}
                className="w-full px-8 py-4 rounded-xl font-bold text-lg sm:text-xl text-white bg-gradient-to-r from-[#003366] to-[#004d99] hover:from-[#002244] hover:to-[#003d7a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                ✓ 確認匯入案件
              </button>
            </div>
          )}

          {/* Info card */}
          <div className="mt-12 sm:mt-16 bg-gradient-to-r from-[#003366]/5 to-[#004d99]/5 rounded-2xl p-6 sm:p-8 border border-[#003366]/10">
            <h3 className="text-lg font-semibold text-[#003366] mb-3">
              💡 提示
            </h3>
            <ul className="text-gray-700 text-sm sm:text-base space-y-2">
              <li>• 支援 PDF、JPG、PNG 格式</li>
              <li>• 單個檔案大小不超過 50MB</li>
              <li>• 建議使用高清掃描件以提高辨識準確度</li>
              <li>• OCR 辨識完成後會自動填寫相關欄位</li>
            </ul>
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

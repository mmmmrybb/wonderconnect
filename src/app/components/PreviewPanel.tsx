import { useState } from "react";
import {
  Download,
  Maximize2,
  Minimize2,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  FileText,
  Info,
  X,
} from "lucide-react";
import { Post } from "../App";

const PREVIEW_IMAGE =
  "https://images.unsplash.com/photo-1768203633104-cad5a3802958?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnJlYWQlMjBiYWtlcnklMjBicmFuZCUyMGFkdmVydGlzZW1lbnR8ZW58MXx8fHwxNzcyNTU1OTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080";

// Simulated multi-page PDF content
const MOCK_PAGES = [
  "cover", // page 1: cover page
  "content", // page 2: content
  "content2", // page 3: more content
  "chart", // page 4: data/chart
  "footer", // page 5: closing
];

interface PreviewPanelProps {
  selectedPost: Post | null;
}

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-");
  return `${m}/${d}/${y}`;
}

export function PreviewPanel({ selectedPost }: PreviewPanelProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalPages = MOCK_PAGES.length;

  function handleZoomIn() {
    setZoom((z) => Math.min(200, z + 25));
  }
  function handleZoomOut() {
    setZoom((z) => Math.max(50, z - 25));
  }

  const panel = (
    <div
      className={`flex flex-col bg-[#F5F5F5] border-l border-gray-200 ${
        isFullscreen
          ? "fixed inset-0 z-50 w-full h-full"
          : "flex-1 min-w-0"
      }`}
    >
      {/* Header */}
      <div className="flex-none border-b border-gray-200 bg-white px-[16px] py-[12px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <h2 className="text-gray-800 font-semibold" style={{ fontSize: "0.95rem" }}>
              Preview
            </h2>
            
          </div>

          <div className="flex items-center gap-1">
            {selectedPost && (
              <>
                {/* Zoom out */}
                <button
                  onClick={handleZoomOut}
                  disabled={zoom <= 50}
                  className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 text-gray-500 hover:text-gray-700 disabled:opacity-30 transition-colors"
                  title="Zoom out"
                >
                  <ZoomOut size={15} />
                </button>
                {/* Zoom indicator */}
                <span className="text-xs text-gray-500 min-w-[36px] text-center">{zoom}%</span>
                {/* Zoom in */}
                <button
                  onClick={handleZoomIn}
                  disabled={zoom >= 200}
                  className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 text-gray-500 hover:text-gray-700 disabled:opacity-30 transition-colors"
                  title="Zoom in"
                >
                  <ZoomIn size={15} />
                </button>

                <div className="w-px h-4 bg-gray-200 mx-1" />

              </>
            )}

            {/* Download (always visible when post selected, placed before fullscreen) */}
            {selectedPost && (
              <button
                className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
                title="Download PDF"
                onClick={() => {
                  const a = document.createElement("a");
                  a.href = "#";
                  a.download = `${selectedPost.fileName}.pdf`;
                  a.click();
                }}
              >
                <Download size={15} />
              </button>
            )}

            {/* Fullscreen */}
            <button
              onClick={() => setIsFullscreen((v) => !v)}
              className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
              title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
            </button>

            {isFullscreen && (
              <button
                onClick={() => setIsFullscreen(false)}
                className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors ml-1"
              >
                <X size={15} />
              </button>
            )}
          </div>
        </div>

        {/* File info bar */}
        {selectedPost && (
          <div className="mt-2 flex items-center gap-2 text-xs text-gray-500 overflow-hidden">
            <FileText size={15} className="flex-none text-gray-400" />
            <span className="truncate font-medium text-gray-700">{selectedPost.fileName}</span>
            <span className="flex-none text-gray-300">•</span>
            <span className="flex-none">{selectedPost.category}</span>
          </div>
        )}
      </div>

      {/* PDF Viewer Area */}
      <div className="flex-1 overflow-auto flex flex-col items-center py-4 px-3 gap-3">
        {!selectedPost ? (
          /* Empty state */
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-gray-200/80 flex items-center justify-center">
              <FileText size={28} className="text-gray-400" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">No file selected</p>
              <p className="text-xs text-gray-400 mt-0.5">Click a post to preview it here</p>
            </div>
          </div>
        ) : (
          /* Document pages */
          <div
            className="w-full transition-all origin-top"
            style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }}
          >
            {/* Page 1: Cover */}
            {currentPage === 1 && (
              <div className="bg-white rounded shadow-md overflow-hidden">
                {/* Dark header */}
                <div className="bg-[#0D1B3E] px-5 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold tracking-wide" style={{ fontSize: "0.85rem" }}>
                      Wonderbrands
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white/70 text-xs">EN</span>
                    <span className="text-white/40 text-xs">|</span>
                    <span className="text-white/50 text-xs">FR</span>
                    <div className="grid grid-cols-3 gap-[2px] ml-2">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="w-[3px] h-[3px] bg-white/60 rounded-[1px]" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hero section */}
                <div className="bg-[#0D1B3E] px-5 py-6 flex gap-4 items-start">
                  <div className="flex-1">
                    <p className="text-white/80 text-xs mb-1">Communications Report</p>
                    <h3 className="text-white leading-tight mb-3" style={{ fontSize: "1rem" }}>
                      Harnessing the power of{" "}
                      <span className="text-yellow-400">
                        Fresh-Baked Thinking™
                      </span>
                    </h3>
                    <p className="text-white/60 text-xs leading-relaxed">
                      {selectedPost.category} • Posted {formatDate(selectedPost.postDate)}
                    </p>
                  </div>
                  <div className="flex-none">
                    <div className="flex gap-1.5">
                      <div className="w-8 h-8 bg-red-500 rounded-full opacity-80" />
                      <div className="w-6 h-6 bg-green-400 rounded-full opacity-80 mt-3" />
                    </div>
                  </div>
                </div>

                {/* Product image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={PREVIEW_IMAGE}
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Tagline */}
                <div className="px-5 py-4 text-center border-b border-gray-100">
                  <p className="text-gray-800 font-semibold text-sm">
                    Goodbye ordinary. Hello wonder.
                  </p>
                  <p className="text-gray-500 text-xs mt-1.5 leading-relaxed max-w-xs mx-auto">
                    At Wonderbrands™, our mission is as fresh as the bread we bake daily. We're bringing new
                    ideas to the table every day as part of our mission to deliver better, fresher baked goods
                    to all Canadians.
                  </p>
                </div>

                {/* Brand logos */}
                <div className="flex items-center justify-center gap-3 px-5 py-3 bg-gray-50">
                  {["Wonder", "D'ITALIANO", "Casa Mendosa", "Gadoua", "Dempster's"].map((brand) => (
                    <div
                      key={brand}
                      className="px-2 py-1 bg-white rounded border border-gray-200 shadow-sm"
                    >
                      <p className="text-gray-700 text-[9px] font-bold whitespace-nowrap">{brand}</p>
                    </div>
                  ))}
                </div>

                {/* From our oven */}
                <div className="px-5 py-3 border-t border-gray-100">
                  <p className="text-gray-600 text-xs font-semibold mb-1">From our oven to you</p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Discover the full range of products available this season...
                  </p>
                </div>
              </div>
            )}

            {/* Page 2: Content */}
            {currentPage === 2 && (
              <div className="bg-white rounded shadow-md overflow-hidden">
                <div className="bg-gray-100 px-5 py-3 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-gray-800">Wonderbrands</p>
                    <p className="text-xs text-gray-400">{selectedPost.category}</p>
                  </div>
                </div>
                <div className="px-5 py-5">
                  <h3 className="text-sm font-semibold text-gray-800 mb-3">
                    Product Highlights — {selectedPost.fileName}
                  </h3>
                  <div className="space-y-3">
                    {["New SKU Launch", "Promotional Pricing", "Display Requirements", "Key Dates"].map((section, idx) => (
                      <div key={section} className="border border-gray-100 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className={`w-2 h-2 rounded-full ${idx === 0 ? "bg-emerald-500" : idx === 1 ? "bg-blue-500" : idx === 2 ? "bg-amber-500" : "bg-red-500"}`} />
                          <p className="text-xs font-semibold text-gray-700">{section}</p>
                        </div>
                        <div className="space-y-1">
                          {Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className={`h-2 bg-gray-200 rounded ${i === 2 ? "w-3/5" : "w-full"}`} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Page 3 */}
            {currentPage === 3 && (
              <div className="bg-white rounded shadow-md overflow-hidden">
                <div className="bg-gray-100 px-5 py-3 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-gray-800">Wonderbrands</p>
                    <p className="text-xs text-gray-400">Store Execution Guide</p>
                  </div>
                </div>
                <div className="px-5 py-5">
                  <h3 className="text-sm font-semibold text-gray-800 mb-3">
                    Planogram & Display Instructions
                  </h3>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-gray-300 rounded mx-auto mb-1" />
                          <p className="text-xs text-gray-400">Section {i + 1}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-none" />
                        <div className={`h-2 bg-gray-200 rounded flex-1 ${i === 3 ? "w-4/5" : ""}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Page 4 */}
            {currentPage === 4 && (
              <div className="bg-white rounded shadow-md overflow-hidden">
                <div className="bg-gray-100 px-5 py-3 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-gray-800">Wonderbrands</p>
                    <p className="text-xs text-gray-400">Sales Data & Analytics</p>
                  </div>
                </div>
                <div className="px-5 py-5">
                  <h3 className="text-sm font-semibold text-gray-800 mb-3">Performance Summary</h3>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                      { label: "Units Sold", value: "12,450", color: "text-emerald-600", bg: "bg-emerald-50" },
                      { label: "Revenue", value: "$84.2K", color: "text-blue-600", bg: "bg-blue-50" },
                      { label: "Market Share", value: "23.4%", color: "text-amber-600", bg: "bg-amber-50" },
                    ].map((stat) => (
                      <div key={stat.label} className={`${stat.bg} rounded-lg p-2.5 text-center`}>
                        <p className={`text-sm font-bold ${stat.color}`}>{stat.value}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  {/* Bar chart simulation */}
                  <div className="mt-3">
                    <p className="text-xs text-gray-500 mb-2">Weekly breakdown</p>
                    <div className="flex items-end gap-1.5 h-20">
                      {[60, 80, 45, 90, 70, 85, 55].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                          <div
                            className="w-full bg-blue-500 rounded-t"
                            style={{ height: `${h}%` }}
                          />
                          <p className="text-[9px] text-gray-400">W{i + 1}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Page 5 */}
            {currentPage === 5 && (
              <div className="bg-white rounded shadow-md overflow-hidden">
                <div className="bg-[#0D1B3E] px-5 py-3">
                  <p className="text-xs font-bold text-white">Wonderbrands</p>
                </div>
                <div className="px-5 py-6 text-center">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="w-6 h-6 bg-[#0D1B3E] rounded-full" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-1.5">Thank you!</h3>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-xs mx-auto">
                    For questions or additional information, please contact your Wonderbrands sales representative
                    or visit our partner portal.
                  </p>
                  <div className="mt-4 space-y-1">
                    <p className="text-xs text-gray-400">Document: {selectedPost.fileName}</p>
                    <p className="text-xs text-gray-400">
                      Valid until: {formatDate(selectedPost.expiryDate)}
                    </p>
                    <p className="text-xs text-gray-400">Confidential — Internal Use Only</p>
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-emerald-500" />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Page Navigation Footer */}
      {selectedPost && (
        null
      )}
    </div>
  );

  return panel;
}
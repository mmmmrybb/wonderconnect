import { useState, useEffect } from "react";
import { ZoomIn, ZoomOut, Download, Maximize2, Minimize2, X, FileText } from "lucide-react";
import type { Post } from "./CommunicationsPage";
import { ppFormatDate } from "./useCommsController";

const PS_IMAGE = "https://images.unsplash.com/photo-1768203633104-cad5a3802958?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnJlYWQlMjBiYWtlcnklMjBicmFuZCUyMGFkdmVydGlzZW1lbnR8ZW58MXx8fHwxNzcyNTU1OTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080";

function PreviewDoc({ post }: { post: Post }) {
  return (
    <div className="bg-white rounded shadow-md overflow-hidden">
      <div className="px-5 py-3 flex items-center justify-between" style={{ background: "var(--wb-navy)" }}>
        <p className="text-white font-bold tracking-wide text-[0.85rem]">Wonderbrands</p>
        <div className="flex items-center gap-2">
          <span className="text-white/70 text-xs">EN</span>
          <span className="text-white/40 text-xs">|</span>
          <span className="text-white/50 text-xs">FR</span>
          <div className="grid grid-cols-3 gap-[2px] ml-2">
            {Array.from({ length: 9 }).map((_, i) => <div key={i} className="w-[3px] h-[3px] bg-white/60 rounded-[1px]" />)}
          </div>
        </div>
      </div>
      <div className="px-5 py-6 flex gap-4 items-start" style={{ background: "var(--wb-navy)" }}>
        <div className="flex-1">
          <p className="text-white/80 text-xs mb-1">Communications Report</p>
          <h3 className="text-white leading-tight mb-3 text-[1rem]">Harnessing the power of <span style={{ color: "#FBE75F" }}>Fresh-Baked Thinking™</span></h3>
          <p className="text-white/60 text-xs leading-relaxed">{post.category} • Posted {ppFormatDate(post.postDate)}</p>
        </div>
        <div className="flex-none">
          <div className="flex gap-1.5">
            <div className="w-8 h-8 rounded-full opacity-80" style={{ background: "#C10007" }} />
            <div className="w-6 h-6 rounded-full opacity-80 mt-3" style={{ background: "#7BBF44" }} />
          </div>
        </div>
      </div>
      <div className="relative h-44 overflow-hidden">
        <img src={PS_IMAGE} alt="Product" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <div className="px-5 py-4 text-center border-b border-gray-100">
        <p className="text-gray-800 font-semibold text-sm">Goodbye ordinary. Hello wonder.</p>
        <p className="text-gray-500 text-xs mt-1.5 leading-relaxed max-w-xs mx-auto">At Wonderbrands™, our mission is as fresh as the bread we bake daily. We're bringing new ideas to the table every day.</p>
      </div>
      <div className="flex items-center justify-center gap-3 px-5 py-3 bg-gray-50 flex-wrap">
        {["Wonder", "D'ITALIANO", "Casa Mendosa", "Gadoua", "Dempster's"].map((b) => (
          <div key={b} className="px-2 py-1 bg-white rounded border border-gray-200 shadow-sm">
            <p className="text-gray-700 text-[9px] font-bold whitespace-nowrap">{b}</p>
          </div>
        ))}
      </div>
      <div className="px-5 py-3 border-t border-gray-100">
        <p className="text-gray-600 text-xs font-semibold mb-1">From our oven to you</p>
        <p className="text-gray-400 text-xs leading-relaxed">Discover the full range of products available this season...</p>
      </div>
    </div>
  );
}

function psDownload(post: Post) {
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${post.fileName}</title></head>
<body style="font-family:Poppins,Arial,sans-serif;max-width:680px;margin:40px auto;color:#123356">
<h1 style="font-size:20px">${post.fileName}</h1>
<p style="color:#5b6b7e">Category: ${post.category}<br>Posted: ${ppFormatDate(post.postDate)} · Expires: ${ppFormatDate(post.expiryDate)}</p>
<hr style="border:none;border-top:1px solid #EAEAEA">
<h2 style="color:#1D7AFC;font-size:16px">Harnessing the power of Fresh-Baked Thinking™</h2>
<p>Goodbye ordinary. Hello wonder. At Wonderbrands™, our mission is as fresh as the bread we bake daily.</p>
</body></html>`;
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.href = url; a.download = `${post.fileName}.html`; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function PreviewHeader({ post, zoom, setZoom, fullscreen, setFullscreen, onClose }: {
  post: Post | null;
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
  fullscreen: boolean;
  setFullscreen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose?: (() => void) | null;
}) {
  const [titleHover, setTitleHover] = useState(false);
  return (
    <div className="flex-none bg-white">
      <div className="flex items-center justify-between gap-3 border-b border-gray-200 px-4" style={{ height: 48 }}>
        <div className="flex items-center gap-2 min-w-0 flex-1" onMouseEnter={() => setTitleHover(true)} onMouseLeave={() => setTitleHover(false)}>
          {post
            ? <div className="min-w-0">
                <p className={`font-semibold text-gray-800 text-[14px] leading-tight ${titleHover ? "whitespace-normal break-words" : "truncate"}`} title={post.fileName}>{post.fileName}</p>
                <p className="truncate text-gray-500 text-[12px] leading-tight mt-[1px]">{post.category}</p>
              </div>
            : <h2 className="text-gray-800 font-semibold text-[15px]">Preview</h2>
          }
        </div>
        <div className={`flex items-center gap-1 flex-none transition-opacity ${titleHover ? "hidden" : ""}`}>
          {post && (
            <>
              <button onClick={() => setZoom((z) => Math.max(50, z - 25))} disabled={zoom <= 50} className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 text-gray-500 disabled:opacity-30 transition-colors" title="Zoom out"><ZoomOut size={15} /></button>
              <span className="text-xs text-gray-500 min-w-[36px] text-center">{zoom}%</span>
              <button onClick={() => setZoom((z) => Math.min(200, z + 25))} disabled={zoom >= 200} className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 text-gray-500 disabled:opacity-30 transition-colors" title="Zoom in"><ZoomIn size={15} /></button>
              <div className="w-px h-4 bg-gray-200 mx-1" />
              <button onClick={() => psDownload(post)} className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 text-gray-500 transition-colors" title="Download"><Download size={15} /></button>
            </>
          )}
          <button onClick={() => setFullscreen((v) => !v)} className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 text-gray-500 transition-colors" title={fullscreen ? "Exit full page" : "Expand to full page"}>
            {fullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
          </button>
          {onClose && <button onClick={onClose} className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 text-gray-500 transition-colors ml-0.5" title="Close preview"><X size={15} /></button>}
        </div>
      </div>
    </div>
  );
}

function PreviewBody({ post, zoom }: { post: Post | null; zoom: number }) {
  return (
    <div className="flex-1 overflow-auto flex flex-col items-center py-4 px-3 gap-3 bg-gray-100">
      {!post
        ? <div className="flex-1 flex flex-col items-center justify-center text-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-gray-200/80 flex items-center justify-center"><FileText size={28} className="text-gray-400" /></div>
            <div>
              <p className="text-sm font-medium text-gray-500">No file selected</p>
              <p className="text-xs text-gray-400 mt-0.5">Click a post to preview it here</p>
            </div>
          </div>
        : <div className="w-full max-w-[640px] transition-all" style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }}>
            <PreviewDoc post={post} />
          </div>
      }
    </div>
  );
}

export function PreviewPane({ post }: { post: Post | null }) {
  const [zoom, setZoom] = useState(100);
  const [fullscreen, setFullscreen] = useState(false);
  return (
    <div className={`flex flex-col bg-gray-100 ${fullscreen ? "fixed inset-0 z-[60] w-full h-full" : "flex-1 min-w-0"}`}>
      <PreviewHeader post={post} zoom={zoom} setZoom={setZoom} fullscreen={fullscreen} setFullscreen={setFullscreen} onClose={fullscreen ? () => setFullscreen(false) : null} />
      <PreviewBody post={post} zoom={zoom} />
    </div>
  );
}

export function PreviewOverlay({ post, onClose }: { post: Post | null; onClose: () => void }) {
  const [zoom, setZoom] = useState(100);
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { if (fullscreen) setFullscreen(false); else onClose(); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [fullscreen, onClose]);

  if (!post) return null;
  return (
    <div className="fixed inset-0 z-[55]">
      <div className="absolute inset-0 bg-black/30" style={{ animation: "psFade 160ms ease-out" }} onClick={onClose} />
      <div
        className={`absolute top-0 bottom-0 right-0 flex flex-col bg-gray-100 ${fullscreen ? "left-0 w-full" : "w-full max-w-[680px]"}`}
        style={{ boxShadow: "0 0 44px rgba(10,20,40,.28)", animation: fullscreen ? "none" : "psSlide 220ms cubic-bezier(0.2,0,0,1)" }}
      >
        <PreviewHeader post={post} zoom={zoom} setZoom={setZoom} fullscreen={fullscreen} setFullscreen={setFullscreen} onClose={onClose} />
        <PreviewBody post={post} zoom={zoom} />
      </div>
    </div>
  );
}

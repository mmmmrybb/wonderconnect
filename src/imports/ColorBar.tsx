export function ColorBar({ height = "5px" }: { height?: string }) {
  return (
    <div className="flex w-full" style={{ height }}>
      <div className="flex-1 bg-[#7abe43]" />
      <div className="flex-1 bg-[#3082c4]" />
      <div className="flex-1 bg-[#e84855]" />
      <div className="flex-1 bg-[#ffeb62]" />
    </div>
  );
}

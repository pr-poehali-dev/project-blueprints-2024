export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-8 h-8 bg-foreground flex items-center justify-center flex-shrink-0">
        <span className="text-background text-sm font-bold font-mono-tag">TT</span>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-lg font-bold tracking-tight leading-none">MEDIA</span>
        <span className="text-lg font-bold tracking-tight leading-none text-accent-foreground bg-accent px-1">48</span>
      </div>
    </div>
  )
}

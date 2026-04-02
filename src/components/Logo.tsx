export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-1">
        <span className="text-2xl font-black tracking-tighter text-primary">TT</span>
        <span className="text-2xl font-black tracking-tighter ml-0.5">MEDIA</span>
        <span className="text-lg font-black text-muted-foreground ml-1">48</span>
      </div>
    </div>
  )
}

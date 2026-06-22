type LeafProps = {
  className?: string
}

function BotanicalLeaf({ className = '' }: LeafProps) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M19.8 3.5C11.7 7.6 6.7 14.8 6.4 22.1C6.2 29 11.2 34.1 17.8 34.1C26.1 34.1 33.4 27.1 33.4 18.8C33.4 11.3 28.2 5.8 19.8 3.5Z"
        fill="currentColor"
        opacity="0.22"
      />
      <path
        d="M18.9 7.4C18.4 14.9 19.6 23.4 24.2 32.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M18.9 14.7C15.2 15.7 12 18 9.9 21.1M20.2 20.6C16.8 22.2 14.2 25.1 12.7 28.5M20.5 15.8C24.1 17.1 27.2 19.4 29.4 22.6M22.1 22C25.4 23.7 28.1 26.5 30 30"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.34"
      />
    </svg>
  )
}

export function LeafDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-2 text-primary/45" aria-hidden>
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-current opacity-45" />
      <BotanicalLeaf className="h-5 w-5 -rotate-12" />
      <BotanicalLeaf className="h-4 w-4 rotate-12 text-accent/55" />
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-current opacity-45" />
    </div>
  )
}

export function SmallLeaf({ className = '' }: LeafProps) {
  return <BotanicalLeaf className={`text-primary ${className}`} />
}

export function CornerLeaf({
  className = '',
  position = 'top-left',
}: LeafProps & { position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  const rotations = {
    'top-left': '-rotate-12',
    'top-right': 'rotate-[75deg]',
    'bottom-left': '-rotate-90',
    'bottom-right': 'rotate-180',
  }

  return (
    <div className={`${rotations[position]} ${className} text-primary/18`} aria-hidden>
      <BotanicalLeaf className="h-10 w-10" />
    </div>
  )
}

export function LeafCluster() {
  return (
    <div className="flex items-center gap-1.5 text-primary/50" aria-hidden>
      <BotanicalLeaf className="h-4 w-4 -rotate-[20deg]" />
      <BotanicalLeaf className="h-5 w-5 rotate-6 text-accent/55" />
      <BotanicalLeaf className="h-3.5 w-3.5 -rotate-45 text-primary/35" />
    </div>
  )
}

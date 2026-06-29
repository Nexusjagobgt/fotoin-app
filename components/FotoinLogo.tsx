type LogoSize = 'sm' | 'md' | 'lg' | 'xl';
type LogoVariant = 'default' | 'white';

const sizes: Record<LogoSize, { width: number; height: number }> = {
  sm: { width: 80,  height: 19 },
  md: { width: 110, height: 26 },
  lg: { width: 160, height: 38 },
  xl: { width: 220, height: 52 },
};

export default function FotoinLogo({
  size = 'md',
  variant = 'default',
}: {
  size?: LogoSize;
  variant?: LogoVariant;
}) {
  const { width, height } = sizes[size];
  const c = variant === 'white' ? '#FFFFFF' : '#6B21F5';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 120" width={width} height={height}>
      <text x="0" y="105" fontFamily="Arial Black, Impact, sans-serif" fontWeight="900" fontSize="115" fill={c}>F</text>
      <g transform="translate(78, 10)">
        <circle cx="52" cy="50" r="50" fill="#22C55E" />
        <g transform="translate(52,50)">
          <path d="M0,0 L-17,-48 A50,50 0 0,1 17,-48 Z" fill="#1a1a1a" opacity="0.82" />
          <path d="M0,0 L-17,-48 A50,50 0 0,1 17,-48 Z" fill="#1a1a1a" opacity="0.82" transform="rotate(60)" />
          <path d="M0,0 L-17,-48 A50,50 0 0,1 17,-48 Z" fill="#1a1a1a" opacity="0.82" transform="rotate(120)" />
          <path d="M0,0 L-17,-48 A50,50 0 0,1 17,-48 Z" fill="#1a1a1a" opacity="0.82" transform="rotate(180)" />
          <path d="M0,0 L-17,-48 A50,50 0 0,1 17,-48 Z" fill="#1a1a1a" opacity="0.82" transform="rotate(240)" />
          <path d="M0,0 L-17,-48 A50,50 0 0,1 17,-48 Z" fill="#1a1a1a" opacity="0.82" transform="rotate(300)" />
          <circle cx="0" cy="0" r="14" fill="#22C55E" />
          <circle cx="0" cy="0" r="8" fill="#1a1a1a" opacity="0.82" />
        </g>
      </g>
      <text x="184" y="105" fontFamily="Arial Black, Impact, sans-serif" fontWeight="900" fontSize="115" fill={c}>T</text>
      <text x="260" y="105" fontFamily="Arial Black, Impact, sans-serif" fontWeight="900" fontSize="115" fill={c}>O</text>
      <text x="348" y="105" fontFamily="Arial Black, Impact, sans-serif" fontWeight="900" fontSize="115" fill={c}>I</text>
      <text x="374" y="105" fontFamily="Arial Black, Impact, sans-serif" fontWeight="900" fontSize="115" fill={c}>N</text>
    </svg>
  );
}

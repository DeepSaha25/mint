export default function ButtonLink({ children, variant = 'dark', className = '' }) {
  const styles =
    variant === 'light'
      ? 'bg-white text-ink hover:bg-white/90'
      : variant === 'ghost'
        ? 'bg-white/5 text-white hover:bg-white/10'
        : 'bg-ink text-white hover:bg-ink/85';

  return (
    <a
      href="#"
      className={`inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-semibold transition ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

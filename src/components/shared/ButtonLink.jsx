export default function ButtonLink({ children, variant = 'dark', className = '' }) {
  const styles =
    variant === 'light'
      ? 'button-link-light bg-white text-ink hover:bg-white/90'
      : variant === 'ghost'
        ? 'button-link-ghost bg-white/5 hover:bg-white/10'
        : 'button-link-dark bg-ink hover:bg-ink/85';

  return (
    <a
      href="#"
      className={`inline-flex h-10 items-center justify-center rounded-full px-5 text-center text-sm font-semibold transition ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

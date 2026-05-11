import { motion } from 'framer-motion';

export default function AnimatedSection({ children, className = '', as = 'section' }) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}

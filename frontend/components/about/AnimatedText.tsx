import { useInView } from 'react-intersection-observer';

interface AnimatedTextProps {
  children: React.ReactNode;
}

export const AnimatedText = ({ children }: AnimatedTextProps) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <div ref={ref} className="overflow-hidden">
      <div className={`transform transition-transform duration-1000 ease-out ${inView ? 'translate-y-0' : 'translate-y-full'}`}>
        {children}
      </div>
    </div>
  );
}; 
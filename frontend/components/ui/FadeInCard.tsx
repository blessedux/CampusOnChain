import { useInView } from 'react-intersection-observer';

interface FadeInCardProps {
  children: React.ReactNode;
  index: number;
}

export const FadeInCard = ({ children, index }: FadeInCardProps) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  return (
    <div 
      ref={ref} 
      className={`
        transform transition-all duration-1000 ease-out
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      {children}
    </div>
  );
}; 
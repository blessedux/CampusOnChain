interface GradientTextProps {
  text: string;
  type: 'orange' | 'blue';
}

export const GradientText = ({ text, type }: GradientTextProps) => {
  const gradientClasses = {
    orange: 'bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500',
    blue: 'bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500'
  };

  return (
    <span 
      className={`
        ${gradientClasses[type]}
        bg-clip-text text-transparent 
        inline-block
        hover:scale-105 transition-transform duration-300
        [text-shadow:_0_0_30px_rgba(var(--tw-gradient-from),0.3)]
      `}
    >
      {text}
    </span>
  );
}; 
interface ChildProps {
  color: string;
  onClick: () => void;
  children: string
}

export const Child = ({ color, onClick }: ChildProps) => {
  return <div onClick={onClick}>{color}</div>;
};

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Button</button>
      {children}
    </div>
  );
};

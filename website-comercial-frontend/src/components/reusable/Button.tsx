interface IProps {
  title: string;
}

const Button = ({ title }: IProps) => {
  return <button>{title}</button>;
};

export default Button;

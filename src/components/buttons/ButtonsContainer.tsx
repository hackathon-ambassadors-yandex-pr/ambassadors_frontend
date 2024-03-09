import './ButtonsContainer.scss';

type HeaderProps = {
  className: string;
  children: React.ReactNode;
};

function ButtonsContainer(props: HeaderProps) {
  return <div className={props.className}>{props.children}</div>;
}

export default ButtonsContainer;

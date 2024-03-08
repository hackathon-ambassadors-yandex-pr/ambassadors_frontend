import './ButtonsContainer.scss';

type HeaderProps = {
  children: React.ReactNode;
};

function ButtonsContainer(props: HeaderProps) {
  return <div className="popup__buttons">{props.children}</div>;
}

export default ButtonsContainer;

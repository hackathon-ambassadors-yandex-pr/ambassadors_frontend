import './Ambassadors.scss';

type HeaderProps = {
  children: React.ReactNode;
};

function Ambassadors(props: HeaderProps) {
  return <div className="ambasadors">{props.children}</div>;
}

export default Ambassadors;

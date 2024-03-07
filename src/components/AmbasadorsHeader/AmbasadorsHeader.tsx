type HeaderProps = {
  children: React.ReactNode;
};

function AmbasadorsHeader(props: HeaderProps) {
  return <div className="ambasadors__main">{props.children}</div>;
}

export default AmbasadorsHeader;

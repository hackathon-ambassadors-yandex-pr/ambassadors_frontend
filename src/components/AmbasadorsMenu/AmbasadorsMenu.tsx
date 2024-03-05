import './AmbasadorsMenu.scss';

type ItemProps = {
  children: string[];
};

function AmbasadorsMenu(props: ItemProps) {
  return (
    <div className="ambasadors__menu">
      {(props.children as unknown as string[]).map((element) => {
        return <button className="ambasadors__link">{element}</button>;
      })}
    </div>
  );
}

export default AmbasadorsMenu;

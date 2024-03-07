import '../buttons/buttonAdd';

interface filterpopup {
  filterpopup: boolean;
  handlefilterpopup: (params: React.MouseEvent<HTMLElement>) => void;
}

function ButtonAdd({ handlefilterpopup }: filterpopup) {
  return <button className="add-button" onClick={handlefilterpopup}></button>;
}

export default ButtonAdd;

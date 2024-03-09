import './Popups.scss';

interface filterpopup {
  filterpopup: boolean;
  setfilterPopup: (value: boolean) => void;
  handlefilterpopup: (params: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
}

function Popups(props: filterpopup) {
  return (
    <div className={props.filterpopup ? 'popup' : 'popup__none'}>
      <button
        className="button-close"
        onClick={props.handlefilterpopup}
      ></button>
      <div className="popup__main">{props.children}</div>
    </div>
  );
}

export default Popups;

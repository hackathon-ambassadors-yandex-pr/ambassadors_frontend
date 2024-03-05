import '../buttons/buttonAdd';
import { connect, ConnectedProps } from 'react-redux';
import { showModal } from '../../store/action';

const mapDispatchToProps = {
  dispatchShowModal: showModal,
};

const connector = connect(undefined, mapDispatchToProps);

type AppProps = ConnectedProps<typeof connector>;
/* eslint-disable */
function ButtonAdd(props: AppProps) {
  const { dispatchShowModal } = props;
  console.log(props);

  return (
    <button
      className="add-button"
      onClick={() => {
        dispatchShowModal();
      }}
    ></button>
  );
}

export default connector(ButtonAdd);
/* eslint-enable */

import '../buttons/buttonAdd';
import { useNavigate } from 'react-router-dom';

function ButtonAdd() {
  const navigate = useNavigate();
  const handleButtonPlus = () => {
    navigate('creation');
  };

  return <button className="add-button" onClick={handleButtonPlus}></button>;
}

export default ButtonAdd;

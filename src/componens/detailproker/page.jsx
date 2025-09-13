import { useParams } from 'react-router-dom';
import "/src/App.css";
import Stifo from './stifo';
import Yuwa from './yuwa';
import Crea from './crea';
import Abdes from './abdes';

const ProgramDetail = () => {
  const { id } = useParams();

  const componens = {
    1:<Yuwa/>,
    2:<Stifo/>,
    3:<Crea/>,
    4:<Abdes/>
  }

  return componens[id] || <p>proker tidak ditemukan.</p>
};

export default ProgramDetail;
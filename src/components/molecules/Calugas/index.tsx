import { CalugasProps } from './Calugas.types';
import Caluga from './components/Caluga';

const Calugas = (props: CalugasProps) => {
  const { items } = props;

  return (
    <></>
    // items?.map((item, key) =>(
    //     <Caluga item={item} key={key}/>
    // ))
  );
};

export default Calugas;

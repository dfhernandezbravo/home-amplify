import { SectionCalugas } from './Calugas.styles';
import { CalugasProps } from './Calugas.types';
import Caluga from './components/Caluga';

const Calugas = ( { items }: CalugasProps) => {
  
  return (
    <SectionCalugas>
      {items?.map((item, index) =>(
          <Caluga key={index} 
            image= {item.image}
            mobileImage={item.mobileImage}
            description= {item.description} 
            title= {item.title} 
            link = {item.link}
            width= {item.width}
          />
      ))}
    </SectionCalugas>
  );
};

export default Calugas;

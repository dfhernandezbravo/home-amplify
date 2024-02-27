import React, { useState } from 'react';
import {
  AccordionTitle,
  AccordionButton,
  AccordionContent,
} from './accordion.styles';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

type AccordionProps = {
  title: string;
  content: string;
};
const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <AccordionTitle>
        <AccordionButton tabIndex={4} onClick={handleToggle}>
          {title}
        </AccordionButton>
        {!isOpen && (
          <SlArrowDown onClick={handleToggle} className={'arrow--show'} />
        )}
        {isOpen && (
          <SlArrowUp onClick={handleToggle} className={`arrow--hide`} />
        )}
      </AccordionTitle>
      {isOpen && (
        <AccordionContent
          dangerouslySetInnerHTML={{ __html: content }}
        ></AccordionContent>
      )}
    </div>
  );
};

export default Accordion;

import React, { Fragment } from 'react'
import { RichTextStruct } from './RichText.types'
import N0Title from '../N0Title';
import { Wrapper } from './RichText.styles';

function RichText( props : RichTextStruct ) {

  const { title, bgColor, text, bolder } = props;
  
  return (
    <Fragment>
      { title && <N0Title text={title} />}
      <Wrapper bgColor={bgColor} bolder={bolder}>
        <p>{text}</p>
      </Wrapper>
    </Fragment>
  )
}

export default RichText
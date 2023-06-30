import { Slide, Slider } from 'pure-react-carousel';
import styled, { css } from 'styled-components';

type ButtonProps = {
  right?: boolean;
};

export const ItemsWrapper = styled.section`
  width: 100%;
  margin-bottom: 3rem;
  position: relative;
`;

export const CustomSlider = styled(Slider)`
  max-height: 170px;
  margin: 0 auto;
  width: 100%;
  
  @media(max-width: 768px){
    min-height: 296px;

    .carousel__slider--horizontal{
      height: 296px;
    }
  }
`;

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    height: 11px;
    border: none;
    margin: 0 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: #aeaeae;
  }

  .carousel__dot--selected {
    width: 59px;
    height: 11px;
    border-radius: 8px;
    border-style: inset;
    border: 1.9px solid #cc1515;
    background-color: #cc1515;
  }
`;

export const Dots = styled.div`
  width: 22px;
  height: 11px;
  margin-bottom: 2rem;
`;



export const CarouselNavButton = styled.div<ButtonProps>`
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  width: 32px;
  height: 44px;
  outline: none;
  border: none;
  /* background: hsla(0, 0%, 100%, 0.3); */
  background: #fff;
  cursor: pointer;
  border-radius: 8px;
  color: #000;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  padding-top: 0;

  &:hover {
    background-color: #fff;
  }

  ${(props) =>
    props.right === true
      ? css`
          right: -3rem;
        `
      : css`
          left: -3rem;
        `};

  @media (max-width: 768px) {
    width: 14px;
    height: 24px;
    ${(props) =>
      props.right === true
        ? css`
            right: 1rem;
          `
        : css`
            left: 1rem;
          `};

    svg {
      width: 14px;
      height: 24px;
    }
  }
`;




//   a {
//     text-decoration: none;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//   }

//   .carousel__inner-slide {
//     display: flex;
//     justify-content: center;
//     padding-top: 0.2rem;
//     /* height: 100%; */
//     border-top: 1px solid rgba(0, 0, 0, 0.25);
//     border-bottom: 1px solid rgba(0, 0, 0, 0.25);
//     border-left: .5px solid rgba(0, 0, 0, 0.25);
//     border-right: .5px solid rgba(0, 0, 0, 0.25);
//     background-color: #fff;
//     cursor: pointer;

//     &:hover{
//       background-color: #BE0911;
//       p{
//         color: #fff;
//       }

//       img{
//         filter: brightness(100);
//       }
//     }

//   }

//   @media (max-width: 768px) {
//     height: 100px;
//   }

//   @media (max-width: 1024px) {
//     height: 20rem;
//   }

//   @media (max-width: 1200px) {
//     .carousel__slider{
//       max-width: 98%;
//     }
//   }

//   .carousel__slide{
//     background: #fff;
//     padding: 1rem;
    
//     &:hover{
//       background-color: #BE0911;
//     }
//   }

// `;

// export const CarouselImageContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100px;
//   height: 100px;

//   @media (max-width: 768px) {
//     width: 55px;
//     height: 55px;
//   }

//   img {
//     width: 90px;
//     height: auto;

//     @media (max-width: 768px) {
//       width: 33px;
//       height: auto;
//     }
//   }
// `;

// export const IconTitle = styled.p`
//   display: block;
//   font-size: 15px;
//   color: #000;
//   font-weight: 500;
//   height: 40px;
//   max-width: 8rem;
//   text-align: center;

//   @media (max-width: 768px) {
//     font-size: 10px;
//     margin-top: 3px;
//     max-width: 60px;
//   }
// `;


// // export const CustomSlide = styled(Slide)`
// //   /* width: 9rem;
// //   height: 20rem; */
// //   display: flex;
// //   flex-direction: row;
// // `;



// export const CategoriesWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `;




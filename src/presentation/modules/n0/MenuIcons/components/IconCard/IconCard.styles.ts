import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    width: 98%;
    height: max-content;
    border: 1px solid #ddd;
    padding: 1rem;
    transition: all  .4s;

    a{
        text-decoration: none;
        color: #4d4d4d;

        p{
            font-size: 14px;
            color: #4d4d4d;
            text-align: center;
            transition: all  .4s;    
        }

        img{
            transition: all  .4s;
        }
    }

    &:hover{
        background-color: #ffeaf0;

        img{
            scale: 1.1;
        }

        a{
            text-decoration: underline;
        }
    }
    
`;

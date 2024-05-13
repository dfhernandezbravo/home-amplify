import styled from 'styled-components';

export const ServicesSelectedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 1rem;

  @media only screen and (max-width: 768px) {
    display: -webkit-box;
    overflow-x: scroll;
    flex-wrap: nowrap;
    margin: 0 25px;
  }
`;

export const ServiceLabel = styled.p`
  display: flex;
  gap: 5px;
  color: #485760;
  font-weight: 600;
  border: 2px solid #6e8391;
  padding: 4px 8px;
  border-radius: 20px;
`;

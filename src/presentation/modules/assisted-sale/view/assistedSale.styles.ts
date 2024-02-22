import styled from 'styled-components';

export const Container = styled.div`
  background-color: transparent;
  display: flex;
  max-width: 76.2rem;
  border-radius: 8px;
  margin: 30px auto;
  column-gap: 2.5rem;
`;

export const SidebarContainer = styled.div`
  width: 20%;
  & ul {
    background-color: #fff;
    border: 1px solid #eaeaea;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    padding: 8px 0;
    list-style-type: none;
    & li {
      background-color: #f1e7e7;
      border-top: 1px solid #f2f2f2;
      padding: 16px;
      & a {
        color: #990707;
        font-size: 0.875rem;
        font-weight: 700;
        white-space: normal;
      }
    }
    & a {
      background-color: #f1e7e7;
      border-top: 1px solid #f2f2f2;
      padding: 16px;
    }
  }
`;

export const ContentContainer = styled.div`
  background-color: #fff;
  display: flex;
  padding: 24px;
  flex-direction: column;
  & h3 {
    padding: 30px 0;
  }
`;

type RowProps = {
  justifycontent?: string;
};

export const Row = styled.div<RowProps>`
  flex-direction: row;
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.justifycontent || 'center'};
`;

export const DeclarationContainer = styled.div`
  width: 100%;
  padding-top: 1rem;
  & p {
    color: #4d4d4d;
    font-size: 0.875rem;
    white-space: normal;
    line-height: 24px;
    padding-left: 20px;
    margin-top: 1em;
    margin-bottom: 1em;
  }
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  font-size: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-weight: 400;

  nav {
    a,
    p {
      display: inline;
    }

    a {
      padding-left: 6px;
      text-decoration: none;
      color: #4d4d4d;
    }

    a:first-child {
      color: #818180;
    }

    span:first-child {
      color: #4d4d4d;
      font-weight: 500;
    }

    p {
      color: #4d4d4d;
      padding: 0 6px;
      font-weight: 500;
    }

    span:last-child {
      text-transform: capitalize;
    }
  }
`;

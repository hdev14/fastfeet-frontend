import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 20px auto;

  h2 {
    font-size: 1.5rem;
  }
`;

export const Table = styled.div`
  width: 100%;
  border-collapse: seperate;
  border-spacing: 0 20px;

  th, td {
    text-align: left;
    font-size: 1rem;
    padding: 12px;
  }

  tr.head {
    th {
      padding: 0 12px;
      width: 180px;
      &#id {
        text-transform: uppercase;
        width: 50px !important;
      }

      &:not(#id) {
        font-size: 1rem;
        text-transform: capitalize;
      }

      &#recipient, &#action {
        width: 210px;
      }

      &#action {
        text-align: right;
      }
    }
  }

  tr:not(.head) {
    background: white;
    border-radius: 4px;

    td {
      color: var(--medium-gray);
      vertical-align: middle;
      height: 50px;

      &:first-child {
        padding-left: 10px;
      }

      &:last-child {
        padding-right: 10px;
      }
    }
  }

`;

export const PrimaryButton = styled.button`
  border: none;
  background-color: var(--purple);
  padding: 6px 12px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  font-size: 14px;
  svg {
    margin-right: 5px;
  }
`;

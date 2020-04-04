import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 20px auto;

  h2 {
    font-size: 1.5rem;
    color: var(--dark-gray);
    margin: 30px 0;
  }
`;

export const Table = styled.table`
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
      color: var(--dark-gray);

      &#id {
        text-transform: uppercase;
        width: 50px !important;
        padding-left: 20px;
      }

      &:not(#id) {
        font-size: 1rem;
        text-transform: capitalize;
      }

      &#recipient, &#action {
        width: 220px;
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
        padding-left: 20px;
      }

      &:last-child {
        padding-right: 20px;
        text-align: right;
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

export const Actions = styled.div`
  position: relative;

  svg {
    cursor: pointer;
  }

  ul {
    display: none;
    z-index: 10;
    position: absolute;
    top: 30px;
    left: calc(100% - 85px);
    list-style: none;
    border: 1px solid var(--light-gray);
    width: 150px;
    padding: 10px;
    border-radius: 5px;
    background-color: white;

    &::before {
      position: absolute;
      top: -7.6px;
      left: calc(50% - 10px);
      content: '';
      width: 15px;
      height: 15px;
      border-top: 1px solid var(--light-gray);
      border-left: 1px solid var(--light-gray);
      background-color: white;
      transform: rotate(45deg);
    }

    li {

      display: flex;
      align-items: center;
      padding: 6px 0;
      font-weight: 400;
      color: var(--gray);
      cursor: pointer;

      & + li {
        border-top: 1px solid var(--light-gray);
      }
      svg {
        margin-right: 7px;
      }
    }
  }

`;

export const Operations = styled.div`
  margin: 40px 0 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    width: 250px;
    height: 40px;
    position: relative;

    input {
      position: absolute;
      width: 100%;
      height: 100%;
      padding: 0 10px 0 45px;
      border: 1px solid var(--light-gray);
      border-radius: 4px;
    }

    svg {
      position: absolute;
      left: 15px;
      top: 50%;
      fill: var(--gray);
      transform: translateY(-50%);
    }
  }
`;

export const Picture = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  margin-right: 10px;
`;

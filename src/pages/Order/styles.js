import styled from 'styled-components';

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

export const Status = styled.div`
  display: flex;
  width: 130px;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  border-radius: 15px;

  svg {
    margin-right: 5px;
  }

  &.green {
    background-color: #DFF0DF;
    color: #2CA42B;

    svg {
      fill: #2CA42B;
    }
  }

  &.red {
    background-color: #FAB0B0;
    color: #DE3B3B;

    svg {
      fill: #DE3B3B;
    }
  }

  &.blue {
    background-color: #BAD2FF;
    color: #4D85EE;

    svg {
      fill: #4D85EE;
    }
  }

  &.yellow {
    background-color: #F0F0DF;
    color: #C1BC35;

    svg {
      fill: #C1BC35;
    }
  }
`;

export const DeliverymanInfo = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

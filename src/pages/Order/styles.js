import styled from 'styled-components';


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
`;

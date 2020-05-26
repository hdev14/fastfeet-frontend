import styled from 'styled-components';

const AvatarContainer = styled.div`
  margin: 20px auto;
  width: 200px;

  label {
    align-items: center;
    border-radius: 50%;
    border: 1px dashed var(--light-gray);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 150px;
    justify-content: center;
    margin: 0 auto;
    padding: 20px;
    position: relative;
    transition: border-color .2s easy-out;
    width: 150px;

    img {
      background-color: transparent;
      border-radius: 50%;
      border: none;
      position: absolute;
      width: 130px;
      height: 130px;
    }

    svg { transition: color .2s easy-out; }

    strong {
      color: var(--light-gray);
      font-size: 0.9rem;
      font-weight: normal;
      transition: color .2s easy-out;
    }

    input { display: none; }

    &:hover {
      border-color: var(--gray);

      svg { fill: var(--gray); }
      strong { color: var(--gray); }
    }
  }
`;

export default AvatarContainer;

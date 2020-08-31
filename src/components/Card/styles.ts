import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 281px;
  height: 420px;

  margin-right: 15px;

  &:hover {
    transform: translate(10px);
  }

  transition: transform 0.3s;
`;

export const CardMedia = styled.img`
  width: 280px;
  height: 280px;
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-top: 16px;
`;

export const CardTitle = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
`;

export const CardSubTitle = styled.h5`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

export const CardActions = styled.div`
  display: flex;
  margin-top: 16px;

  img {
    margin-right: 16px;
    cursor: pointer;
  }
`;

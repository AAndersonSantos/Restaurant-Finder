import styled from 'styled-components';
import Slider from 'react-slick';

import { Text } from '../../components';

export const Container = styled.aside`
  background-color: ${({ theme: { colors } }) => colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: scroll;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  padding: 15px;
`;

export const Logo = styled.img`
  margin-bottom: 11px;
  height: 80px;
`;

export const Title = styled(Text)`
  margin: 16px 0;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 16px;
    padding-bottom: 9px;
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

import styled from 'styled-components';
import theme from '/libs/theme';

const GenericText = styled.div`
  color: ${theme.colors.text};
  font-family: ${theme.font.family};
`;

export const Sup = styled(GenericText)`
  font-weight: 500;
  font-size: ${theme.font.size.small}px;
`;

export const Text = styled(GenericText)`
  font-weight: 500;
  font-size: ${theme.font.size.normal}px;
  letter-spacing: .1px;
`;

export const Label = styled(GenericText)`
  font-size: ${theme.font.size.big}px;
`;

export const Heading = styled(GenericText)`
  font-weight: 500;
  font-size: ${theme.font.size.large}px;
  font-family: Montserrat;
`;

export const Title = styled(GenericText)`
  font-weight: bold;
  font-size: ${theme.font.size.huge}px;
`;
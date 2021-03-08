import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${({ theme, bgStyle = 'bgPrimary' }) => theme[bgStyle]};
  padding: ${({ padding = '40px 76px' }) => padding};
  width: 100%;
`;

export const Nav = styled.nav`
  padding: 18px 51px;
  background: ${({ theme }) => theme?.bgPrimary};
`;

export const Text = styled.p`
  font-size: ${(props) => (props.size ? props.size : '16px')};
  padding: ${(props) => props?.padding};
  margin: ${(props) => props?.margin};
  font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
  color: ${(props) => (props.color ? props.color : props.theme?.textPrimary)};
  text-align: ${(props) => (props.align ? props.align : 'left')};
  text-transform: ${(props) => (props.transform ? props.transform : '')};
`;

export const SecondaryText = styled.p`
  font-size: ${(props) => (props.size ? props.size : '16px')};
  padding: ${(props) => props?.padding};
  margin: ${(props) => props?.margin};
  font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
  color: ${(props) => (props.color ? props.color : props.theme?.textSecondary)};
  text-align: ${(props) => (props.align ? props.align : 'left')};
  text-transform: ${(props) => (props.transform ? props.transform : '')};
`;
export const H3 = styled.h3`
  font-size: ${(props) => (props.size ? props.size : '16px')};
  font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
  color: ${(props) => (props.color ? props.color : '#333333')};
  text-align: ${(props) => (props.align ? props.align : 'left')};
  text-transform: ${(props) => (props.transform ? props.transform : '')};
`;

export const H4 = styled.h4`
  font-size: ${(props) => (props.size ? props.size : '16px')};
  font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
  color: ${(props) => (props.color ? props.color : '#333333')};
  text-align: ${(props) => (props.align ? props.align : 'left')};
  text-transform: ${(props) => (props.transform ? props.transform : '')};
`;
export const H2 = styled.h2`
  font-size: ${(props) => (props.size ? props.size : '16px')};
  font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
  color: ${(props) => (props.color ? props.color : props.theme?.textPrimary)};
  text-align: ${(props) => (props.align ? props.align : 'left')};
  text-transform: ${(props) => (props.transform ? props.transform : '')};
  margin: ${(props) => props?.margin};
`;

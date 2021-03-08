import styled from 'styled-components';

export const AboutWrapper = styled.div`
padding: 100px 0px;
.pic-box__outer{
    width: 236px;
    height: 282px;
    background: ${({ theme }) => theme.textSecondary};
    transform: matrix(0.88, 0.46, -0.47, 0.88, 0, 0);
    border-radius:  60% 65% 60% 65%;
}
.pic-box__inner{
    width: 236px;
    height: 282px;
    background: ${({ theme }) => theme.textPrimary};
    transform: matrix(0.88, 0.5, -0.47, 0.88, 0, 0);
    border-radius:  60% 65% 60% 65%;
}
.about-text{
    width: 624px;
}
`;

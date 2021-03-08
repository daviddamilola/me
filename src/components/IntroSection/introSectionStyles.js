import styled from 'styled-components';

export const IntroSectionWrapper = styled.div`
    display: flex;
    min-height: 80vh;
    .social-links{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .spaced{
            letter-spacing: 1.39em;
    }
    .sub-text{
        padding: 0px 20px;
    }
    .intro-text{
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        margin: auto 0;
        justify-content: center;
        text-align: center;
        &__wrapper{
            width: fit-content;
        }
        
    }
    .scroll-down{
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        right: 0px;
        p{
            text-transform: uppercase;
            writing-mode: vertical-rl;
            text-orientation: mixed;
            margin: 0px;
            font-size: 12px;
        }
    }
`;

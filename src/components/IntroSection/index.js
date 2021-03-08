import React from 'react';
import { Section, H2, Text, SecondaryText } from 'components/Styles';
import { NavLink } from 'react-router-dom';
import { svgs } from 'assets';
import { IntroSectionWrapper } from './introSectionStyles';

/**
 *
 *
 * @return {*}
 */
function IntroSection() {
  return (
    <Section>
      <IntroSectionWrapper>
        <div className="social-links">
          <NavLink to="/" className="mb-2">
            <img src={svgs.github} alt="github link" />
          </NavLink>
          <NavLink to="/" className="mb-2">
            <img src={svgs.twitter} alt="twitter link" />
          </NavLink>
          <NavLink to="/" className="mb-2">
            <img src={svgs.linkedin} alt="linkedin link" />
          </NavLink>
          <NavLink to="/" className="mb-2">
            <img src={svgs.facebook} alt="facebook link" />
          </NavLink>
        </div>
        <div className="intro-text">
          <div className="intro-text__wrapper">
            <H2 margin="10px 0px" weight="700" size="69px">
              INNOVATIVE
            </H2>
            <Text margin="10px 0px" size="17px" className="spaced" weight="500">WEB DEVELOPER</Text>
            <SecondaryText margin="10px 0px" className="sub-text" align="right">...looking for new challenges</SecondaryText>
          </div>
        </div>
        <div className="scroll-down">
          <Text>
            scroll
            <span className="my-2">down</span>
          </Text>
          <img src={svgs.scrollDown} alt="scroll down" />
        </div>
      </IntroSectionWrapper>
    </Section>
  );
}

export default IntroSection;

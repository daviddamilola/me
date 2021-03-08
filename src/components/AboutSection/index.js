import React from 'react';
import { Section, SecondaryText, Text } from 'components/Styles';
import { AboutWrapper } from './aboutStyles';

/**
 *
 *
 * @return {*}
 */
function AboutSection() {
  return (
    <Section bgStyle="bgSecondary">
      <AboutWrapper>
        <div className="d-flex justify-content-between">
          <div className="about-text">
            <SecondaryText className="mb-4" weight="500" size="28px">
              ABOUT
            </SecondaryText>
            <Text>
              I am a full stack software engineer, i develop bespoke user interfaces with
              mordern technologies such as HTML 5, CSS 3, react, styled components,
              graphql.
              <br />
              I am also adept at backend development using tools like nodejs, redis,
              django, docker, django rest framework.
            </Text>
          </div>
          <div className="pic-box__outer">
            <div className="pic-box__inner" />
          </div>
        </div>
      </AboutWrapper>
    </Section>
  );
}

export default AboutSection;

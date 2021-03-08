import React from 'react';
import { Section, SecondaryText } from 'components/Styles';

/**
 *
 *
 * @return {*}
 */
function ToolSection() {
  return (
    <Section bgStyle="bgSecondary">
      <SecondaryText className="mb-4" weight="500" size="28px">
        TOOLS
      </SecondaryText>
    </Section>
  );
}

export default ToolSection;

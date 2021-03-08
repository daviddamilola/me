import React from 'react';
import NavBar from 'components/NavBar';
import IntroSection from 'components/IntroSection';
import AboutSection from 'components/AboutSection';
import ToolSection from 'components/ToolSection';

/**
 *Home component
 *
 * @return {*}
 */
function Home() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <NavBar />
      <IntroSection />
      <AboutSection />
      <ToolSection />
    </div>
  );
}

export default Home;

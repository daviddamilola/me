/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

const SVGPATH = './svgs/';

const svgs = {
  davidLogo: require(`${SVGPATH}davidLogo.svg`)?.default,
  facebook: require(`${SVGPATH}facebook.svg`)?.default,
  twitter: require(`${SVGPATH}twitter.svg`)?.default,
  linkedin: require(`${SVGPATH}linkedin.svg`)?.default,
  github: require(`${SVGPATH}github.svg`)?.default,
  scrollDown: require(`${SVGPATH}scrollDown.svg`)?.default,
};

export { svgs };

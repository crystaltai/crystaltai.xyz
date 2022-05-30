// Define breakpoints & devices
// TODO: change property key names if necessary later
const size = {
  mobile: '375px',
  tablet: '768px',
  laptopS: '1024px',
  laptopL: '1760px',
  desktopS: '2048px',
  desktopL: '2560px',
};

// Create media query for each device size
export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptopS: `(min-width: ${size.laptopS})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktopS: `(min-width: ${size.desktopS})`,
  desktopL: `(min-width: ${size.desktopL})`,
};

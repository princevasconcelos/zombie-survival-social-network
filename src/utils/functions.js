const isMobile = () => typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1;

export default isMobile;

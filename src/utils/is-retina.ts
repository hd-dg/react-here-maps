/**
 * Returns true if the current browser is running on a retina device or not.
 * Source: https://coderwall.com/p/q2z2uw/detect-hidpi-retina-displays-in-javascript
 */
const isRetinaDevice = () => {
    var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
            (min--moz-device-pixel-ratio: 1.5),\
            (-o-min-device-pixel-ratio: 3/2),\
            (min-resolution: 1.5dppx)";
    return (
        window.devicePixelRatio > 1 ||
        window.matchMedia && window.matchMedia(mediaQuery).matches
    );
};

export default isRetinaDevice();
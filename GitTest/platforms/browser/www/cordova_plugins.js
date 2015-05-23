cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.device-motion/www/Acceleration.js",
        "id": "org.apache.cordova.device-motion.Acceleration",
        "clobbers": [
            "Acceleration"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-motion/www/accelerometer.js",
        "id": "org.apache.cordova.device-motion.accelerometer",
        "clobbers": [
            "navigator.accelerometer"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-motion/src/browser/AccelerometerProxy.js",
        "id": "org.apache.cordova.device-motion.AccelerometerProxy",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.device-motion/src/browser/accelerometer.js",
        "id": "org.apache.cordova.device-motion.accelerometer",
        "merges": [
            "navigator.accelerometer"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/CompassError.js",
        "id": "org.apache.cordova.device-orientation.CompassError",
        "clobbers": [
            "CompassError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/CompassHeading.js",
        "id": "org.apache.cordova.device-orientation.CompassHeading",
        "clobbers": [
            "CompassHeading"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/compass.js",
        "id": "org.apache.cordova.device-orientation.compass",
        "clobbers": [
            "navigator.compass"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/src/browser/CompassProxy.js",
        "id": "org.apache.cordova.device-orientation.CompassProxy",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/src/browser/compass.js",
        "id": "org.apache.cordova.device-orientation.compass",
        "merges": [
            "navigator.compass"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "org.apache.cordova.device-motion": "0.2.11",
    "org.apache.cordova.device-orientation": "0.3.11"
}
// BOTTOM OF METADATA
});
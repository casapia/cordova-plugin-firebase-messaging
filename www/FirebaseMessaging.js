var PLUGIN_NAME = "FirebaseMessaging";
// @ts-ignore
var exec = require("cordova/exec");

/**
 *
 * In general (for both platforms) you can only rely on custom data fields.
 *
 * `message_id` and `sent_time` have `google.` prefix in property name (__will be fixed__).
 *
 * @typedef PushPayload
 * @property {Record<string, any>} data Custom data sent from server
 * @property {string} google.message_id Message ID automatically generated by the server
 * @property {number} google.sent_time Time in milliseconds from the Epoch that the message was sent.
 * @property {Record<string, any>} [gcm] Android payload, available ONLY when message arrives in foreground.
 * @property {Record<string, any>} [aps] IOS payload, available when message arrives in both foreground and background.
 */

exports.subscribe =
/**
 *
 * Subscribe to a FCM topic.
 * @param {string} topic Topic name
 * @returns {Promise<void>} Callback when operation is completed
 *
 * @example
 * cordova.plugins.firebase.messaging.subscribe("news");
 */
function(topic) {
    return new Promise(function(resolve, reject) {
        exec(resolve, reject, PLUGIN_NAME, "subscribe", [topic]);
    });
};

exports.unsubscribe =
/**
 *
 * Unsubscribe from a FCM topic.
 * @param {string} topic Topic name
 * @returns {Promise<void>} Callback when operation is completed
 *
 * @example
 * cordova.plugins.firebase.messaging.unsubscribe("news");
 */
function(topic) {
    return new Promise(function(resolve, reject) {
        exec(resolve, reject, PLUGIN_NAME, "unsubscribe", [topic]);
    });
};

exports.onTokenRefresh =
/**
 *
 * Registers callback to notify when FCM token is updated.
 *
 * Use `getToken` to generate a new token.
 * @param {() => void} callback Callback function
 * @param {(error: string) => void} [errorCallback] Error callback function
 *
 * @example
 * cordova.plugins.firebase.messaging.onTokenRefresh(function() {
 *     console.log("Device token updated");
 * });
 */
function(callback, errorCallback) {
    exec(callback, errorCallback, PLUGIN_NAME, "onTokenRefresh", []);
};

exports.onMessage =
/**
 *
 * Registers foreground push notification callback.
 * @param {(payload: PushPayload) => void} callback Callback function
 * @param {(error: string) => void} [errorCallback] Error callback function
 *
 * @example
 * cordova.plugins.firebase.messaging.onMessage(function(payload) {
 *     console.log("New foreground FCM message: ", payload);
 * });
 */
function(callback, errorCallback) {
    exec(callback, errorCallback, PLUGIN_NAME, "onMessage", []);
};

exports.onBackgroundMessage =
/**
 *
 * Registers background push notification callback.
 * @param {(payload: PushPayload) => void} callback Callback function
 * @param {(error: string) => void} [errorCallback] Error callback function
 *
 * @example
 * cordova.plugins.firebase.messaging.onBackgroundMessage(function(payload) {
 *     console.log("New background FCM message: ", payload);
 * });
 */
function(callback, errorCallback) {
    exec(callback, errorCallback, PLUGIN_NAME, "onBackgroundMessage", []);
};

exports.clearNotifications =
/**
 *
 * Clear all notifications from system notification bar.
 * @returns {Promise<void>} Callback when operation is completed
 *
 * @example
 * cordova.plugins.firebase.messaging.clearNotifications();
 */
function() {
    return new Promise(function(resolve, reject) {
        exec(resolve, reject, PLUGIN_NAME, "clearNotifications", []);
    });
};

exports.deleteToken =
/**
 *
 * Delete the Instance ID (Token) and the data associated with it.
 *
 * Call getToken to generate a new one.
 * @returns {Promise<void>} Callback when operation is completed
 *
 * @example
 * cordova.plugins.firebase.messaging.deleteToken();
 */
function() {
    return new Promise(function(resolve, reject) {
        exec(resolve, reject, PLUGIN_NAME, "deleteToken", []);
    });
};

exports.getToken =
/**
 *
 * Returns the current FCM token.
 * @param {"apns-buffer" | "apns-string"} [format] Token representation (iOS only)
 * @returns {Promise<string>} Promise fulfiled with the current FCM token
 *
 * @example
 * cordova.plugins.firebase.messaging.getToken().then(function(token) {
 *     console.log("Got device token: ", token);
 * });
 */
function(format) {
    return new Promise(function(resolve, reject) {
        exec(resolve, reject, PLUGIN_NAME, "getToken", [format || ""]);
    });
};

exports.setBadge =
/**
 *
 * Sets current badge number (if supported).
 * @param {number} badgeValue New badge value
 * @returns {Promise<void>} Callback when operation is completed
 *
 * @example
 * cordova.plugins.firebase.messaging.setBadge(value);
 */
function(badgeValue) {
    return new Promise(function(resolve, reject) {
        exec(resolve, reject, PLUGIN_NAME, "setBadge", [badgeValue]);
    });
};

exports.getBadge =
/**
 *
 * Gets current badge number (if supported).
 * @returns {Promise<number>} Promise fulfiled with the current badge value
 *
 * @example
 * cordova.plugins.firebase.messaging.getBadge().then(function(value) {
 *     console.log("Badge value: ", value);
 * });
 */
function() {
    return new Promise(function(resolve, reject) {
        exec(resolve, reject, PLUGIN_NAME, "getBadge", []);
    });
};

exports.requestPermission =
/**
 *
 * Ask for permission to recieve push notifications (will trigger prompt on iOS).
 * @param {object} options Additional options.
 * @param {boolean} options.forceShow When value is `true` incoming notification is displayed even when app is in foreground.
 * @returns {Promise<void>} Filfiled promise when permission is granted.
 *
 * @example
 * cordova.plugins.firebase.messaging.requestPermission({forceShow: false}).then(function() {
 *     console.log("Push messaging is allowed");
 * });
 */
function(options) {
    return new Promise(function(resolve, reject) {
        if (options) {
            if (typeof options.forceShow !== "boolean" && typeof options.forceShow !== "undefined") {
                return reject(new TypeError("forceShow option must be a boolean"));
            }
        }

        exec(resolve, reject, PLUGIN_NAME, "requestPermission", [options || {}]);
    });
};


exports.areNotificationsEnabled =
/**
 *
 * Ask for permission to recieve push notifications
 * @returns {Promise<number>} Promise fulfiled with the current permission value
 *
 * @example
 * cordova.plugins.firebase.messaging.areNotificationsEnabled().then(function(value) {
 *     console.log("Permission value: ", value);
 * });
 */
function() {
    return new Promise(function(resolve, reject) {
        exec(resolve, reject, PLUGIN_NAME, "areNotificationsEnabled", []);
    });
};

exports.shouldShowRequestPermissionRationale =
/**
 * ANDROID ONLY
 * Ask for shouldShowRequestPermissionRationale() method to recieve push notifications
 * @returns {Promise<boolean>} Promise fulfiled with the current shouldShowRequestPermissionRationale value
 *
 * @example
 * cordova.plugins.firebase.messaging.shouldShowRequestPermissionRationale().then(function(value) {
 *     console.log("shouldShowRequestPermissionRationale value: ", value);
 * });
 */
function() {
    return new Promise(function(resolve, reject) {
        exec(resolve, reject, PLUGIN_NAME, "shouldShowRequestPermissionRationale", []);
    });
};

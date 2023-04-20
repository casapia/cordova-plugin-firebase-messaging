/**
 *
 * Subscribe to a FCM topic.
 * @param {string} topic Topic name
 * @returns {Promise<void>} Callback when operation is completed
 *
 * @example
 * cordova.plugins.firebase.messaging.subscribe("news");
 */
export function subscribe(topic: string): Promise<void>;
/**
 *
 * Unsubscribe from a FCM topic.
 * @param {string} topic Topic name
 * @returns {Promise<void>} Callback when operation is completed
 *
 * @example
 * cordova.plugins.firebase.messaging.unsubscribe("news");
 */
export function unsubscribe(topic: string): Promise<void>;
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
export function onTokenRefresh(callback: () => void, errorCallback?: (error: string) => void): void;
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
export function onMessage(callback: (payload: PushPayload) => void, errorCallback?: (error: string) => void): void;
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
export function onBackgroundMessage(callback: (payload: PushPayload) => void, errorCallback?: (error: string) => void): void;
/**
 *
 * Clear all notifications from system notification bar.
 * @returns {Promise<void>} Callback when operation is completed
 *
 * @example
 * cordova.plugins.firebase.messaging.clearNotifications();
 */
export function clearNotifications(): Promise<void>;
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
export function deleteToken(): Promise<void>;
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
export function getToken(format?: "apns-buffer" | "apns-string"): Promise<string>;
/**
 *
 * Sets current badge number (if supported).
 * @param {number} badgeValue New badge value
 * @returns {Promise<void>} Callback when operation is completed
 *
 * @example
 * cordova.plugins.firebase.messaging.setBadge(value);
 */
export function setBadge(badgeValue: number): Promise<void>;
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
export function getBadge(): Promise<number>;
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
export function requestPermission(options: {
    forceShow: boolean;
}): Promise<void>;
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
export function areNotificationsEnabled(): Promise<number>;
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
export function shouldShowRequestPermissionRationale(): Promise<boolean>;
/**
 *
 * In general (for both platforms) you can only rely on custom data fields.
 *
 * `message_id` and `sent_time` have `google.` prefix in property name (__will be fixed__).
 */
export type PushPayload = {
    /**
     * Custom data sent from server
     */
    data: Record<string, any>;
    /**
     * Message ID automatically generated by the server
     */
    message_id: string;
    /**
     * Time in milliseconds from the Epoch that the message was sent.
     */
    sent_time: number;
    /**
     * Android payload, available ONLY when message arrives in foreground.
     */
    gcm?: Record<string, any>;
    /**
     * IOS payload, available when message arrives in both foreground and background.
     */
    aps?: Record<string, any>;
};

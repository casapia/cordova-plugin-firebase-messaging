#import <Cordova/CDV.h>
#import "AppDelegate.h"

@interface FirebaseMessagingPlugin : CDVPlugin
- (void)requestPermission:(CDVInvokedUrlCommand*)command;
- (void)getToken:(CDVInvokedUrlCommand*)command;
- (void)setBadge:(CDVInvokedUrlCommand*)command;
- (void)getBadge:(CDVInvokedUrlCommand*)command;
- (void)subscribe:(CDVInvokedUrlCommand*)command;
- (void)unsubscribe:(CDVInvokedUrlCommand*)command;
- (void)onMessage:(CDVInvokedUrlCommand*)command;
- (void)onBackgroundMessage:(CDVInvokedUrlCommand*)command;
- (void)completeBackgroundMessage:(CDVInvokedUrlCommand*)command;
- (void)onTokenRefresh:(CDVInvokedUrlCommand*)command;
- (void)registerNotifications:(NSError *)error;
- (void)sendNotification:(NSDictionary*)userInfo;
- (void)sendBackgroundNotification:(NSDictionary*)userInfo fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler;
- (void)refreshToken:(NSString*)token;

@property (nonatomic, copy) NSString *registerCallbackId;
@property (nonatomic, copy) NSString *notificationCallbackId;
@property (nonatomic, copy) NSString *backgroundNotificationCallbackId;
@property (nonatomic, copy) NSString *tokenRefreshCallbackId;
@property (nonatomic, retain) NSDictionary* notificationOptions;
@property (nonatomic, retain) NSDictionary* lastNotification;
@property (nonatomic, retain) UIAlertController *lastAlert;
@property (nonatomic, retain) void (^lastCompletionHandler)(UIBackgroundFetchResult);

@end
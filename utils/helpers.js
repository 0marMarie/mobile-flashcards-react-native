import * as Notifications from "expo-notifications"
import { AsyncStorage } from 'react-native'

const NOTIFICATION = "notifications"

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION)
    .then(JSON.parse)
    .then((noti) => {
      if (noti === null) {
        Notifications.requestPermissionsAsync(null)
          .then(({ status }) => {
            if (status === "granted")
              Notifications.cancelAllScheduledNotificationsAsync()

            let tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate() + 1)
            tomorrow.setHours(20)
            tomorrow.setMinutes(0)

            Notifications.setNotificationHandler({
              handleNotification: async () => ({
                shouldShowAlert: true,
                shouldPlaySound: true,
                shouldSetBadge: false,
              }),
            });

            Notifications.scheduleNotificationAsync(
              {
                content: {
                  title: "You should have studied today!",
                  body: "Take the quiz to be more wise."
                },
                trigger: {
                  hour: 10,
                  minute: 0,
                  repeats: true
                }
              })
            AsyncStorage.setItem(NOTIFICATION, JSON.stringify(true))
          })
      }
    })
}

// Clear the Local Notifications
export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}
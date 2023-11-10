/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */

// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDvH32g2DDesrl3ulQa5O6fGs718jxHx1Y",
  authDomain: "one-route-b8490.firebaseapp.com",
  projectId: "one-route-b8490",
  storageBucket: "one-route-b8490.appspot.com",
  messagingSenderId: "113672316221",
  appId: "1:113672316221:web:6eb20c44dc8d5dd3d95154",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const message = JSON.parse(payload?.data?.message);
  console.log("NBMA");

  const removeHtmlTags = (str) => {
    if (str === null || str === "") return "";
    else str = str.toString();

    return str.replace(/(<([^>]+)>)/gi, "");
  };

  const notificationTitle = `New message from ${message?.sender?.name}`;
  const notificationOptions = {
    body: removeHtmlTags(message?.content),
    icon: "/favicon.svg",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
  self.addEventListener("notificationclick", function(event) {
    event.notification.close();
  });
});

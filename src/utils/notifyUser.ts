const notifyUser = async (title: string, options?: NotificationOptions) => {
  if (!("Notification" in window)) {
    alert("Tarayıcı bildirimleri desteklemiyor.");
  } else if (Notification.permission === "granted") {
    new Notification(title, options);
  } else if (Notification.permission !== "denied") {
    await Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification(title, options);
      }
    });
  }
};

export default notifyUser;

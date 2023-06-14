function trackEvent(eventName) {
  branch.logEvent(eventName);
  alert("Branch " + eventName + " event was tracked!");
}

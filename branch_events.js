function trackEvent(eventName) {
  branch.logEvent(eventName);
  setTimeout(()=>alert("Branch " + eventName + " event was tracked!"),100);
}

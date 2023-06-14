function trackEvent(eventName) {
  branch.logEvent(eventName);
  setTimeout(function(){alert("Branch " + eventName + " event was tracked!")},1000);
}

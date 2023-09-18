function trackEvent(eventName) {
  if (eventName == "ADD_TO_CART" || eventName == "PURCHASE") {
    var event_and_custom_data = {
      "currency": "EUR",
      "revenue": 120.0
    };

    var customer_event_alias = "Test currency + revenue fields";

    branch.logEvent(
      "ADD_TO_CART",
      event_and_custom_data,
      customer_event_alias,
      function(err) { console.log(err); }
    );

    setTimeout(function(){alert("Branch " + eventName + " event was tracked with currency and revenue data!")},500);

  } else {
    branch.logEvent(eventName);

    setTimeout(function(){alert("Branch " + eventName + " event was tracked!")},500);
  }
}

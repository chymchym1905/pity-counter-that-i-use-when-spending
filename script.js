function increment() {
    var counter = document.getElementById("counter");
    counter.value = parseInt(counter.value) + 10;
    updateText(counter.value);
  }

  function decrement() {
    var counter = document.getElementById("counter");
    counter.value = parseInt(counter.value) - 10;
    updateText(counter.value);
  }

  function updateText(value) {
    var counter = document.getElementById("counter");
    fetch(
      "https://26e2idk26ufght74axl33jwtqm0xgcel.lambda-url.us-west-2.on.aws/",
      {
        method: "POST",
        body: JSON.stringify({ value: "Pity: " + value }),
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }
    );
  }
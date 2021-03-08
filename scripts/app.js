requirejs.config({
  baseUrl: "scripts/",
});

// Start the main app logic.
requirejs(["lodash"], function (lodash) {
  document.getElementById("header").textContent = lodash.upperCase(
    "hello world"
  );
});

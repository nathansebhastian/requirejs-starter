requirejs(['lodash'], function (lodash) {
  const headerEl = document.getElementById('header')
  headerEl.textContent = lodash.upperCase('hello world')
})

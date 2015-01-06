var App = function() {
  this.start = function() {
    console.log("Testing Yay!");
    clearClassification();
  };

  function clearClassification() {
    document.getElementById('classification').innerText = "";
  }
};

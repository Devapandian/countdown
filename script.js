

function countDown(start, end, callback) {
    if (start >= end) {
      document.getElementById("countdown").innerHTML = start;
      setTimeout(function() {
        countDown(start - 1, end, callback);
      }, 1000);
    } else {
      callback();
    }
  }
  
  function showMessage() {
    document.getElementById("countdown").innerHTML = "Happy Independence Day!";
  }
  
  countDown(10, 1, function() {
    showMessage();
  });
  

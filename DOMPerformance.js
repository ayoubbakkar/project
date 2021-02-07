
function innerHtml() {
    var test = document.getElementById("test1");
    var time1 = performance.now();
    td1.innerHTML= "JavaScript Performance Testing";
    var time2 = performance.now();
    var time = time2-time1;
    test.innerHTML += "time: " + time;
}
  function outerHtml() {
      var test = document.getElementById("test2");
      var time1 = performance.now();
      test.outerHTML= "JavaScript Performance Testing";
      var time2 = performance.now();
      var time = time2-time1;
      test.outerHTML += "time: " + time;
  }
  function innertext() {
      var test = document.getElementById("test3");
      var time1 = performance.now();
      test.innerText= "JavaScript Performance Testing";
      var time2 = performance.now();
      var time = time2-time1;
      test.innerHTML += "time: " + time;
  }
  function textcontent() {
      var test = document.getElementById("test4");
      var time1 = performance.now();
      test.textContent= "JavaScript Performance Testing";
      var time2 = performance.now();
      var time = time2-time1;
      test.innerHTML += "time: " + time;
  }
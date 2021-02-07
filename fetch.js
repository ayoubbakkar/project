fetch('A.txt')
  .then(response => response.text())
  .then(data => {
    var para= document.querySelector('.fetch')
    para.innerHTML=data;
  	console.log(data);
  });
  fetch('B.txt')
  .then(response => response.text())
  .then(data => {
    var para= document.querySelector('.fetch2')
    para.innerHTML=data;
  });
  
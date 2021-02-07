async function fetchP(file,name) {
    await fetch(file)
    .then(response => response.text())
    .then(data => {
    var para= document.querySelector(name)
    para.innerHTML=data;
    })
}
fetchP('A.txt','.fetch')
fetchP('B.txt','.fetch2')
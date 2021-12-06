function loadnavbar(){
    const nbar = document.getElementById('nbar')
    fetch('http://localhost4000/navbar')
    .then(res => res.text())
    .then((html)=>{
            nbar.innerHTML += html
    })
    .catch((err)=>{
        alert("ocorreu um erro!")
    })
}
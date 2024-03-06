function liEkle() {
    if(inputBar.value === "") {
        alert("Lütfen bir iş giriniz");

    }else{
        let yeniLi = document.createElement("li");
    yeniLi.textContent = document.getElementById("inputBar").value;

    let listeDiv = document.getElementById("list");
    listeDiv.appendChild(yeniLi);
    inputBar.focus();
    inputBar.value = "";

    let yeniSilmeButonu = document.createElement("button");
    yeniSilmeButonu.textContent = "Sil";
    yeniSilmeButonu.id = "silBtn";
    yeniSilmeButonu.addEventListener("click", function () {
        yeniLi.remove();
    });
    yeniLi.appendChild(yeniSilmeButonu);

    let yeniTamalandıButonu = document.createElement("button");
    yeniTamalandıButonu.textContent = "Tamalandı";
    yeniTamalandıButonu.id = "tamamlandiBtn";
    yeniTamalandıButonu.addEventListener("click", function () {
        yeniLi.style.textDecoration = "line-through";
        yeniLi.style.color = "gray";
    });
    yeniLi.appendChild(yeniTamalandıButonu);
    }

    
}

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", liEkle);

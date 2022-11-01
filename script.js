let JsonBaglantiAdresi = fetch("http://api.open-notify.org/astros.json");
let yanitAl = JsonBaglantiAdresi.then((yanit) => yanit.json());

yanitAl.then((uzaydakiler) => {
  let rootEleman = document.querySelector("#root");

  let isimSayisi = document.createElement("p");
  isimSayisi.classList.add("kisisayisi");
  isimSayisi.textContent = "Uzayda görevli kişi sayısı: " + uzaydakiler.number;
  rootEleman.appendChild(isimSayisi);

  for (var i = 1; i <= 10; i++) {
    let imgEkle = document.createElement("img");
    imgEkle.src = "https://www.cagataygevrek.com/odev18avatar.png";
    imgEkle.classList.add("img");
    rootEleman.appendChild(imgEkle);
  }

  let baslikOlustur = document.createElement("h2");
  baslikOlustur.classList.add("baslik");
  baslikOlustur.innerHTML = "Görevli Listesi";
  rootEleman.appendChild(baslikOlustur);

  for (i = 0; i < 10; i++) {
    let jsonName = document.createElement("h2");
    jsonName.classList.add("jsonName");
    let jsonCraft = document.createElement("h4");
    jsonCraft.classList.add("jsonCraft");
    jsonName.textContent = uzaydakiler.people[i].name;
    jsonCraft.textContent = "Bulunduğu istasyon:" + uzaydakiler.people[i].craft;
    rootEleman.appendChild(jsonName);
    rootEleman.appendChild(jsonCraft);
  }
});

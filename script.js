// jsonBaglantiAdresi değişkeni oluşturulup fetch metodu için ilgili api linki eklendi.
let JsonBaglantiAdresi = fetch("http://api.open-notify.org/astros.json");
// yanitAl değişkeni oluşturuldu ve js objesine dönüştürme işlemi başlatıldı.
let yanitAl = JsonBaglantiAdresi.then((yanit) => yanit.json());

//js objesi alındıktan sonra yapılacaklar eklendi.
yanitAl.then((uzaydakiler) => {
  // index.html dosyasındaki id'si root olan div seçildi.
  let rootEleman = document.querySelector("#root");

  // h2 elementi oluşturuldu ve baslikOlustur değişkenine aktarıldı.
  let baslikOlustur = document.createElement("h2");
  //olusturulan h2 elementinin class'ı baslik olarak eklendi.
  baslikOlustur.classList.add("baslik");
  // oluşturulan h2 elementinin içeriği güncellendi.
  baslikOlustur.innerHTML = "Görevli Listesi";
  // baslikOlustur değişkeni root div'inin (rootEleman değişkeni) appendChild'ı olarak atandı.
  rootEleman.appendChild(baslikOlustur);

  // p elementi oluşturuldu ve isimSayısı değişkenine aktarıldı.
  let isimSayisi = document.createElement("p");
  //oluşturulan p elementinin class'ı kisisayisi olarak eklendi.
  isimSayisi.classList.add("kisisayisi");
  //oluşturulan p elementinin içeriğine ilgili veriler eklendi.
  isimSayisi.textContent = "Uzayda görevli kişi sayısı: " + uzaydakiler.number;
  // isim sayısı root div'inin (rootEleman değişkeni) appendChild'ı olarak atandı.
  rootEleman.appendChild(isimSayisi);

  // for döngüsü ile seçmiş olduğumuz root div'ine json dosyasındaki veriler eklendi.
  for (i = 0; i < 10; i++) {
    //img elementi oluşturuldu ve imgEkle değişkenine aktarıldı.
    let imgEkle = document.createElement("img");
    //oluşturulan imgEkle değişkeninin yani img elementinin adresine resim uzantısı eklendi.
    imgEkle.src = "https://www.cagataygevrek.com/odev18avatar.png";
    //oluşturulan imgEkle değişleninin class'ı img olarak eklendi.
    imgEkle.classList.add("img");
    // imgEkle değişkeni root div'inin (rootEleman değişkeni) appendChild'ı olarak atandı.
    rootEleman.appendChild(imgEkle);

    // h2 elementi oluşturuldu ve jsonName değişkenine aktarıldı.
    let jsonName = document.createElement("h2");
    // oluşturulan h2 elementinin class'ı jsonName olarak eklendi.
    jsonName.classList.add("jsonName");
    // jsonName değişkeninin içeriği json dosyasından alınan verilerle güncellendi.
    jsonName.textContent = uzaydakiler.people[i].name;
    // jsonName değişkeni root div'inin (rootEleman değişkeni) appendChild'ı olarak atandı.
    rootEleman.appendChild(jsonName);

    // h4 elementi oluşturuldu ve jsonName değişkenine aktarıldı.
    let jsonCraft = document.createElement("h4");
    //oluşturulan h4 elementinin class'ı jsonCraft olarak eklendi.
    jsonCraft.classList.add("jsonCraft");
    // jsonCraft değişkeninin içeriği json dosyasından alınan verilerle güncellendi.
    jsonCraft.textContent = "Bulunduğu istasyon:" + uzaydakiler.people[i].craft;
    // jsonCraft değişkeni değişkeni root div'inin (rootEleman değişkeni) appendChild'ı olarak atandı.
    rootEleman.appendChild(jsonCraft);
  }
});

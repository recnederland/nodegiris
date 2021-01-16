// console.log("selemlar dunya!");
//
// const fs = require('fs');
// const superheroes = require('superheroes');

//fs.copyFileSync("dosya1.txt", "dosya2.txt");

//var rastgeleKahraman = superheroes.random();
//console.log(rastgeleKahraman);

// 30/ 12 / 2020
// https://expressjs.com/en/5x/api.html#app
const express = require('express');
// 31 12 2020
//  burada bir aplication yani sunucu catisi olusturmus olacagiz
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded( {extended: true} ));
app.set('view engine', 'ejs');



//  burada / anasayfayi temsil eder
// request gelen istek, response ise baglanmak isteyen kisiye verilecek cevap req  ve res denebilir
// app.get('/', function(req, res){
//   res.send("Hosgeldin Recep!");
// })

// app.get('/iletisim', function(req, res){
//   res.send('recbay@gmail.com ile benimle iletisim kurabilirsin!');
// })

// app.get('/giris', function(req, res){
//   res.send('Kullanici adi ve sifrenizi giriniz!');
// });

app.use(express.static('css'));
// simdi yazi degil direk html sayfasini gonderelim cevap olarak
app.get('/', function(req, res){
  res.sendFile(__dirname +"/index.html");
});

// simdi yazi degil direk iletisim sayfasini gonderelim cevap olarak
app.get('/iletisim', function(req, res){
  res.sendFile(__dirname +"/iletisim.html");
});

// simdi yazi degil direk giris sayfasini gonderelim cevap olarak
app.get('/giris', function(req, res){
  res.sendFile(__dirname +"/giris.html");
});

app.get("/profil",function(req, res){
  res.send("Profilime hosgeldin. Get ile geldiniz");
});

app.post("/profil",function(req, res){
  console.log(req.body.kullaniciadi)
  res.send("Hosgeldin: " + req.body.kullaniciadi);

  // kullanici adi "hamza" sifre 1234 ise hosgeldin yazalim, aksi durumda bilgiler hatali yazdiralim
});


app.post("/profil" , function(req, res){
    // kullanıcı adı "hamza" şifre 1234 ise hoşgeldin yazalım, aksi durumda bilgiler hatalı..
    if(req.body.kullaniciadi == "recep" && req.body.sifre == "1234"){
      res.send("Hoşgeldin : " + req.body.kullaniciadi);
    }else{
      res.send("Bilgiler hatalı.");
    }
});
// gelen isteklere gire sayfanin icerigini degistirecegiz
// verilerimizi res.render ile gonderecegiz
// ejs = embedded javascript
app.get("/yazi", function(req , res){
     // gelen isteklere göre, o sayfanın içeriğini değiştireceğiz.
     // ejs = embedded javascript
     var gonderilecekler = {
       baslik : 'Almanya Hükümetinden Açıklama' ,
       sayfa : '30' ,
       yazar : 'Recep Bey'
     };
     res.render('yazi' , gonderilecekler  )
});
// urun sayfasi için bir tane istek oluşturun. urun sayfasina bağlanmak isteyen kişi için
// urun.ejs dosyasını render edin ve urun sayfasında da ürünün başlığı ve yorumsayisi olsun.
app.get("/kitap", function(req , res){
     // gelen isteklere göre, o sayfanın içeriğini değiştireceğiz.
     // ejs = embedded javascript
     var gidenler = {
       yayinevi : 'Nederlands' ,
       kitap : 'Lezen' ,
       yazaradi : 'Recep Bey'
     };
     res.render('kitap' , gidenler )
});

// odev
// kitap sayfasi için bir tane istek oluşturun. kitap sayfasına bağlanmak isteyn kişi için
// kitap.ejs dosyasını rnder edin ve kitap sayfasında kitap ismi, kitap yazarı, kitap açıklaması ve fiyatı olsun
app.get("/kitap", function(req , res){
     // gelen isteklere göre, o sayfanın içeriğini değiştireceğiz.
     // ejs = embedded javascript
     var gidenler = {
       boekAuteur: "Ahmet Altan",
       boekNaam: "Ik zal de wereld nooit meer zien",
       vertaling: "Hamide Dogan",
       uitgever: " De Bezige Bij",
       bindwijze: "E-book",
       aantalPagina: "48 pagina's",
       verschijningsdatum: "april 2019",
       druk: "1. Druk",
       ean: "9789403155500",
       informatieProduct: 'Het is een prachtig pleidooi voor de vrijheid van de menselijke geest ook al wordt het lichaam door een corrupt ( het Turkse) regime in de gevangenis geplaatst.',
       samenvatting:'Toen op een vroege ochtend in de zomer van 2016 werd aangebeld bij de Turkse journalist en schrijver Ahmet Altan wist hij meteen dat de politie voor de deur stond. Hij en zijn broer Mehmet werden gearresteerd in de nasleep van de mislukte staatsgreep in Turkije. De verdenking: verspreiding van verborgen boodschappen ter aanmoediging van de coupplegers. Begin 2018 werd Altan veroordeeld tot een levenslange gevangenisstraf. De rest van zijn leven zal hij drieëntwintig uur per dag doorbrengen in eenzame opsluiting. In Ik zal de wereld nooit meer zien beschrijft Altan op urgente wijze de politieke situatie in Turkije en zijn leven in de gevangenis. Hij overstijgt daarmee zijn eigen tragedie en schrijft indrukwekkend over universele thema"s als vrijheid en het verloop van de tijd, die in een ander licht komen te staan als je weet dat je voor altijd opgesloten zit. Vanuit zijn cel kan Altan nog maar één ding doen: een verhaal vertellen dat zijn lezers niet meer  loslaat. Ik zal de wereld nooit meer zien is een oprecht en belangrijk verhaal voor iedereen die gelooft in de kracht van het woord.',
       boekPrijs:"6,99 ₺",
       normaalBoekPrijs:"16,99 ₺",
       inkijkexemplaar1:"https://media.s-bol.com/R6YD92gLYYYY/550x781.jpg",
       inkijkexemplaar2:"https://media.s-bol.com/YEvk67ZoNDnp/520x840.jpg"
     };
     res.render('kitap' , gidenler )
});

app.get("/boek", (req, res) => {

    /*
    Kitap Adı:    Ik zal de wereld nooit meer zien
    Yazar:        Ahmet Altan
    Çevirmen:     Hamide Dogan
    Yayınevi:     De Bezige Bij
    Hamur Tipi:   2. Hamur
    Ebat:         13,5 x 20
    İlk Baskı Yılı: april 2019
    Baskı Sayısı:  1. Basım
    Barkod:       9789403155500
    */

    var  gidenler = {
        boekAuteur: "Ahmet Altan",
        boekNaam: "Ik zal de wereld nooit meer zien",
        vertaling: "Hamide Dogan",
        uitgever: " De Bezige Bij",
        bindwijze: "E-book",
        aantalPagina: "48 pagina's",
        verschijningsdatum: "april 2019",
        druk: "1. Druk",
        ean: "9789403155500",
        informatieProduct: 'Het is een prachtig pleidooi voor de vrijheid van de menselijke geest ook al wordt het lichaam door een corrupt ( het Turkse) regime in de gevangenis geplaatst.',
        samenvatting:'Toen op een vroege ochtend in de zomer van 2016 werd aangebeld bij de Turkse journalist en schrijver Ahmet Altan wist hij meteen dat de politie voor de deur stond. Hij en zijn broer Mehmet werden gearresteerd in de nasleep van de mislukte staatsgreep in Turkije. De verdenking: verspreiding van verborgen boodschappen ter aanmoediging van de coupplegers. Begin 2018 werd Altan veroordeeld tot een levenslange gevangenisstraf. De rest van zijn leven zal hij drieëntwintig uur per dag doorbrengen in eenzame opsluiting. In Ik zal de wereld nooit meer zien beschrijft Altan op urgente wijze de politieke situatie in Turkije en zijn leven in de gevangenis. Hij overstijgt daarmee zijn eigen tragedie en schrijft indrukwekkend over universele thema"s als vrijheid en het verloop van de tijd, die in een ander licht komen te staan als je weet dat je voor altijd opgesloten zit. Vanuit zijn cel kan Altan nog maar één ding doen: een verhaal vertellen dat zijn lezers niet meer  loslaat. Ik zal de wereld nooit meer zien is een oprecht en belangrijk verhaal voor iedereen die gelooft in de kracht van het woord.',
        boekPrijs:"6,99 ₺",
        normaalBoekPrijs:"16,99 ₺",
        inkijkexemplaar1:"https://media.s-bol.com/R6YD92gLYYYY/550x781.jpg",
        inkijkexemplaar2:"https://media.s-bol.com/YEvk67ZoNDnp/520x840.jpg"
    };

    res.render("boek",  gidenler)
});

// eger kullanici hatali istekde bulunursa da bir cevap verebiliriz
app.get("*", function(req, res){
  res.send("Yanlis sayfadasiniz. Kontrol ediniz!");
});



app.listen(8000);

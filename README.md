# Kandilli Rasathanesi Son 500 Deprem
## Introduction
Sayfayı ziyaret etmek için [Önyüz / Frontend](https://alptugan.github.io/kandilli-deprem-rss-api/) adresi.
Kısaltılmış alan adı: [https://tin.al/deprem](https://tin.al/deprem)

The following app collects & parses the earthquake data for only regions of Türkiye from [Boğaziçi University](http://www.koeri.boun.edu.tr/scripts/lst0.asp) Kandilli Observatory RSS hyperlink. For now the frontend is in Turkish, so the rest of the documentation will be in Turkish.

Kandilli Rasathanesi Veri Görselleştirme sayfası. Bu uygulamanın birincil amacı verileri ve bölgesel olarak deprem sorgusunu yapmayı kullanıcılar için daha anlaşışabilir şekilde sağlamaktır. Öte yandan tasarımsal ve kullanıcı deneyimini farklı ifade biçimleri kullanarak zenginleştirmeyi amaçlamaktadır. Bir uygulama programlama arayüzünden (API) ziyade, Türkiye sınırları dahilinde son yayınlanan 500 depremin verisini bölge ve sayı bazlı filtreleyerek göstermeyi hedeflemektedir. Arkayüz (Backend) [Vercel](https://vercel.com) servisinde ücretsiz sağlanan hesap üzerinde koşmaktadır. 

Güncel veri ancak Kandilli Rasathanesi veriyi yayınladığında erişilebilir. 
Bant genişliği ve kaynak sağlayıcı herhangi bir şekilde engellemediği sürece aktif olarak geliştirilmeye devam edilecektir.


## Yerel Kurulum
1. Kaynağı Github'dan indirin;
`git clone https://github.com/alptugan/kandilli-deprem-rss-api.git`


2. NPM ya da PNPM kullanarak yüklemeyin yapın;
`pnpm install` ya da `npm install -y`


3. Yazılım sorgu bağlantısını (endpoint) yerel bağlantıyle değiştirin. Bunun için `app.js` dosyasında 12-13 satırını aşağıdaki gibi değiştirin;
```
// const apiUrl = `https://kandilli-deprem-rss-api.vercel.app/last/${count}?region=${region}`;
const apiUrl = `http://localhost:8080/last/${count}?region=${region}`;
```

4. Sunucuyu NPM ya da PNPM aracılığıyla koşturun;
`pnpm start` ya da `npm start`


5. Önyüze erişmek için `index.html` dosyasını tercih ettiğiniz tarayıcı da açın.


## Yazılım Araçları (Tech Stack)
- [Axios](https://github.com/axios/axios) 
- [Express](https://github.com/expressjs/express)
- [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js)
- [Tailwind](https://tailwindcss.com/plus/ui-blocks)


## Sorunlar
1. Deprem derinlik bilgisi kaynak erişimindeki RSS formatlandırılmasından dolayı eksik geldiği için şu anda görüntüleme dışı tutulmuştur.


## Yapılacaklar (Todo)
- [ ] Harita üzerinde lokasyon gösterme.
- [ ] Veritabanına bilginin düzenli kayıt edilmesi.
- [ ] Veri tabanı üzerinden istatiski veri görselleştirme grafikleri.
- [ ] Takip edilen bölgelere dair uyarı sisteminin geliştirilmesi.
- [ ] Yapay-zeka üzerinden veri analizi ve olası sarsıntı öncesi bilgilendirme sistemi üzerine çözümler.
- [ ] Kullanıcı telemetrisi, gerekli bant genişlik kullanım bilgisi. 
- [ ] .env kurulumu
- [ ] API yollarının tanımlanması. Bu kısım geliştiriciler ve tasarımcılarla beraber çalışılacaktır. 
- [ ] Jeofizik ve Jeoloji uzmanlarından görüş topla.

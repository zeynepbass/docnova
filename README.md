🚀 React + Vite Proje Docnova

Neden Vite?
Vite, performans odaklı bir geliştirme sunucusu sağlar ve projeyi çok daha hızlı başlatır.

Gerekli Paketlerin Kurulumu:
npm install

Projeyi Başlatmak:
npm run dev

Proje Yapısı ve Kullanılan Teknolojiler

1) React + Redux Toolkit + Redux Thunk:
Global state yönetimi sağlandı, asenkron veri işlemleri için Thunk kullanıldı.
API’den veri çekme işlemleri bu yapı üzerinden gerçekleştirildi.

2) i18next (i18n):
Çoklu dil desteği eklendi.
Seçilen dil bilgisi localStorage’a kaydedilerek, sayfa yenilense bile son dil tercihi korunur.
Bu dil verisi Redux store üzerinden kontrol edilerek uygulamaya entegre edilmiştir.

3) Axios:
API istekleri yönetiminde kullanıldı.

4) React Router DOM v6:
Sayfa yönlendirmeleri, Link ve useNavigate hook’ları ile sağlandı.

5) Ant Design UI:
Kullanıcı dostu arayüz oluşturmak için tasarım bileşenleri olarak tercih edildi.
Hatalı kullanımlar kontrol edilerek bastırıldı.

6) Layout ve Bileşen Yapısı
Header & Footer:
Çok dilli yapı, kullanıcı kontrolü, ikonlar ve görsel düzen Ant Design ile oluşturuldu.
Layout:
Sayfa düzeni oluşturularak bileşenler arasında tutarlılık sağlandı.
Sayfa Geçişleri:
useNavigate kullanılarak form işlemleri ve buton yönlendirmeleri yapıldı.
Footer:
Belirli ikonlarla görsellik artırıldı.

7) Fatura (Invoice) İşlemleri
Fatura verileri store üzerinden yönetildi.
Detay sayfası /detay/:id yapısına göre yönlendirilmek istendi; ancak dokümantasyona göre veriler doğrudan store’dan alındı.
Kullanıcı bir faturaya tıkladığında ilgili detay sayfasına yönlendirme sağlandı.
Details bileşeni, seçilen faturayı Redux state üzerinden alarak detaylı gösterim yaptı.

8) Ek Teknik Notlar
Kullanıcı kontrolü: Redux üzerinden yapıldı.
LocalStorage entegrasyonu: Kullanıcı nasıl seçtiyse sonraki giriş yaptığında o dil ayarı kalsın diye kullanıldı (i18n).
Tekrarlayan diziler: JSON yapısına dönüştürülerek sadeleştirme sağlandı.
Okunabilirlik: Kod yapısı bileşenlere ayrılarak modüler hale getirildi.
useSelector & useDispatch: State erişimi ve action işlemleri bu yapılarla yönetildi.
Thunk: Asenkron işlemler (API çağrıları vb.) için kullanıldı.

9) AI Kullanılan Alanlar
Proje geliştirme sürecinde yapay zekadan aşağıdaki alanlarda destek alındı:
Tasarım: CSS detayları ve UI düzenlerinde fikir desteği sağlandı.
Dil Ayarı: i18n yapısında kelime çevirme.
Redux & Thunk: Ana sayfa kısmında JWT yapısı ve state yönetimi için fikir desteği alındı.




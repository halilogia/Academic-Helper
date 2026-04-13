# Academic Helper: Assignment Cover & Bibliography Generator

Academic Helper, akademik standartlara (16-14-12 punto hiyerarşisi, Times New Roman fontu vb.) tam uyumlu ödev kapakları ve APA 7 formatında kaynakçalar oluşturmanıza olanak tanıyan pratik bir web araç setidir.

Arşivdeki eski monolitik yapısından modern **Vite + React 19 + TypeScript** mimarisine taşınmış, çok dilli destek ve gelişmiş özelliklerle güncellenmiştir.

🌟 Özellikler

- **Canlı Önizleme:** Sol panelden (mobilde üst panel) bilgileri girdiğiniz anda, sağ tarafta A4 kağıdı üzerindeki görünümü anlık olarak görebilirsiniz.
- **PDF Olarak İndir:** Hazırladığınız kapağı tek butonla, kayma veya bozulma olmadan PDF formatında indirebilirsiniz.
- **Akademik Format:** Başlıklar 16 punto, Ödev Konusu 14 punto, Öğrenci/Danışman bilgileri 12 punto olacak şekilde evrensel akademik yazım kılavuzlarına göre ayarlanmıştır.
- **Hızlı Kaynakça Oluşturucu (APA 7):** DOI veya ISBN numarası girerek makale ve kitap kaynakçalarınızı saniyeler içinde APA 7 formatında oluşturabilirsiniz.
- **Şablon Yönetimi:** Sık kullandığınız kapak bilgilerini şablon olarak kaydedebilir ve daha sonra tek tıkla tekrar yükleyebilirsiniz.
- **Çok Dilli Destek:** Arayüz ve varsayılan içerikler için Türkçe ve İngilizce dil desteği mevcuttur.
- **Font Garantisi:** Sistem öncelikli olarak bilgisayarınızdaki "Times New Roman" fontunu kullanır. Bulunamazsa Google Fonts üzerinden alternatifleri yükleyerek çıktının her zaman doğru görünmesini sağlar.
- **Logo Yönetimi:** Varsayılan üniversite logosu ile açılır. İsterseniz kendi logonuzu yükleyebilir veya logoyu kaldırabilirsiniz.

🚀 Nasıl Kullanılır?

### Geliştirme Ortamı
1. Projeyi klonlayın.
2. `npm install` ile bağımlılıkları yükleyin.
3. `npm run dev` komutu ile yerel sunucuyu başlatın.

### Yayınlama
1. `npm run build` komutu ile projenizi derleyin.
2. `dist` klasörü içindeki dosyaları herhangi bir web sunucusuna (Netlify, Vercel, GitHub Pages vb.) yükleyin.

🛠️ Teknik Detaylar

Bu proje, modern web teknolojileri kullanılarak performanslı ve modüler bir yapıda geliştirilmiştir.

- **Framework:** React 19 & TypeScript
- **Derleyici:** Vite
- **Stil/Tasarım:** Tailwind CSS v4
- **PDF Motoru:** html2pdf.js
- **Yazı Tipleri:** Google Fonts (Times New Roman hiyerarşisi)

📝 Lisans

Bu proje açık kaynaklıdır. Öğrenciler tarafından ödev teslimleri için ücretsiz olarak kullanılabilir, paylaşılabilir ve geliştirilebilir.
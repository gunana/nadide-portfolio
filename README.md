# Nadide Baykan — Kişisel Portfolio Sitesi

**nadidebaykan.com** için hazırlanmış kişisel portfolio web sitesi.

---

## 📁 Dosya Yapısı

```
nadide-portfolio/
├── index.html      ← Ana sayfa (tek sayfa uygulama)
├── style.css       ← Tüm stiller
├── script.js       ← Animasyonlar ve etkileşimler
└── README.md       ← Bu dosya
```

---

## 🚀 Cloudflare Pages'a Yükleme (Ücretsiz)

### Yöntem 1 — GitHub üzerinden (Önerilen)

1. **GitHub'da yeni bir repo oluştur:**
   - github.com → "New repository" → `nadide-portfolio`
   - Public veya Private olabilir

2. **Dosyaları yükle:**
   ```bash
   git init
   git add .
   git commit -m "İlk yükleme"
   git remote add origin https://github.com/KULLANICI_ADIN/nadide-portfolio.git
   git push -u origin main
   ```

3. **Cloudflare Pages'a bağla:**
   - [dash.cloudflare.com](https://dash.cloudflare.com) → **Pages** → "Create a project"
   - "Connect to Git" → GitHub hesabını bağla
   - `nadide-portfolio` reposunu seç
   - Build settings:
     - **Framework preset:** None
     - **Build command:** *(boş bırak)*
     - **Build output directory:** `/` veya boş
   - "Save and Deploy" → ✅

4. **Domain bağlama:**
   - Pages projesinde → "Custom domains" → `nadidebaykan.com` ekle
   - Cloudflare DNS ayarları otomatik yapılır (zaten Cloudflare'deyse anında)

### Yöntem 2 — Direkt Yükleme (Drag & Drop)

- [dash.cloudflare.com](https://dash.cloudflare.com) → **Pages** → "Upload assets"
- 3 dosyayı (`index.html`, `style.css`, `script.js`) sürükle bırak
- Deploy → Custom domain ekle

---

## ✏️ İçerik Güncelleme

### Fotoğraf Eklemek
`index.html` içinde bu bölümü bul:
```html
<div class="about-img-placeholder">
```
Placeholder'ı kaldırıp gerçek bir `<img>` tag'iyle değiştir:
```html
<img src="foto.jpg" alt="Nadide Baykan" style="width:100%;height:100%;object-fit:cover;border-radius:4px;" />
```

### E-posta Güncelleme
`index.html` içinde:
```html
<a href="mailto:hello@nadidebaykan.com" ...>
```
→ Gerçek e-posta adresinle değiştir.

### Sosyal Medya Linkleri
`index.html` içinde `socials` div'ini bul, Behance / Instagram / LinkedIn linklerini güncelle.

### Proje Eklemek
`work-card` div'lerini güncelle:
1. `.work-placeholder` yerine gerçek proje görseli ekle
2. `work-cat`, `h3` ve `p` içeriklerini doldur

---

## 🎨 Renk Paleti

| Değişken       | Renk        | Hex        |
|---------------|-------------|------------|
| `--cream`     | Krem        | `#F6F1EA`  |
| `--charcoal`  | Kömür Siyah | `#1A1714`  |
| `--terra`     | Terracotta  | `#C4614A`  |
| `--sage`      | Adaçayı     | `#8A9E7E`  |
| `--muted`     | Soluk Bej   | `#BFB8AE`  |

---

## 🖋 Fontlar

- **Cormorant Garamond** — Başlıklar, isim, editöryal metin
- **DM Sans** — Body metni, nav linkleri, etiketler

Google Fonts üzerinden CDN ile yükleniyor (internet bağlantısı gerektirir).

---

## 📱 Özellikler

- ✅ Tamamen responsive (mobil, tablet, masaüstü)
- ✅ Özel cursor animasyonu (masaüstünde)
- ✅ Scroll reveal animasyonları
- ✅ Paralaks efektleri
- ✅ Yapışkan navigasyon
- ✅ Mobil hamburger menü
- ✅ SEO meta etiketleri
- ✅ Cloudflare Pages uyumlu (saf HTML/CSS/JS)
- ✅ Sıfır build adımı — direkt yükle, çalışır

---

*Hazırlayan: Claude Sonnet 4.6 — Mayıs 2026*

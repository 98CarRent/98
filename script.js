let lang = 'th';
let selectedStars = 5;
try { lang = localStorage.getItem('lang') || 'th'; } catch(e) {}
const IS_ADMIN = /admin\.html/i.test(location.pathname) || /admin\.html/i.test(location.href);

const NO_IMG = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA2MDAgNDAwJz48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPScjZWVlZWVlJy8+PHRleHQgeD0nNTAlJyB5PSc1MCUnIGZvbnQtZmFtaWx5PSdzYW5zLXNlcmlmJyBmb250LXNpemU9JzI4JyBmaWxsPScjOTk5JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBkb21pbmFudC1iYXNlbGluZT0nbWlkZGxlJz45OENhclJlbnQ8L3RleHQ+PC9zdmc+';
function imgErr(el) { el.onerror = null; el.src = NO_IMG; }

// ========== TRANSLATIONS ==========
const translations = {
    th: {
        subtitle: "รถเช่ามุกดาหาร รถเช่าขับเอง รถเช่าพร้อมคนขับ",
        nav_home: "หน้าแรก", nav_gallery: "รถเช่า", nav_tourism: "สถานที่ท่องเที่ยว", nav_review: "รีวิว", nav_contact: "ติดต่อ",
        hero_title: "98CarRent",
        hero_eyebrow: "MUKDAHAN • NAKHON PHANOM — PREMIUM CAR RENTAL",
        hero_desc: "รถเช่ามุกดาหาร รถเช่าขับเอง รถเช่าพร้อมคนขับ<br>บริการรถเช่าราคาถูก มุกดาหาร & นครพนม",
        hero_btn: "ดูรถเช่าทั้งหมด",
        hero_b1: "ขับเอง / พร้อมคนขับ", hero_b2: "รายวัน • รายสัปดาห์ • รายเดือน", hero_b3: "รับ-ส่งฟรีในเมือง",
        rate_eyebrow: "SIMPLE PRICING", rate_title: "แพ็กเกจเรียบง่าย โปร่งใส", rate_sub: "เริ่มต้นเพียง ฿600/วัน — ยิ่งเช่ายาว ยิ่งคุ้ม",
        rate_from: " เริ่มต้น", rate_pop: "ยอดนิยม", rate_btn: "ดูรถแพ็กเกจนี้",
        rate_d_desc: "เที่ยวในเมือง ธุระด่วน 1–6 วัน",
        rate_w_desc: "ทริปยาว กลับบ้าน เที่ยวโขง 7 วันคุ้มกว่า",
        rate_m_desc: "ทำงานโปรเจกต์ มาทำงานต่างจังหวัด",
        show_eyebrow: "WHY 98CARRENT", show_title: "น้อยแต่มาก — สะอาด ตรงเวลา ใส่ใจ",
        show_desc: "รถทุกคันในโฟลเดอร์ Image/ ตรวจเช็กก่อนส่งมอบ ประกันพื้นฐาน ฟรีรับ-ส่งในตัวเมืองมุกดาหาร",
        show_p1: "รถตรวจสภาพทุกครั้ง", show_p2: "จองด่วนใน 10 นาที", show_p3: "ไม่มีค่าธรรมเนียมแอบแฝง",
        feat1_title: "รถเช่าขับเอง", feat1_desc: "เช่ารถขับเอง สะดวก รวดเร็ว ราคาถูก",
        feat2_title: "รถเช่าพร้อมคนขับ", feat2_desc: "มีคนขับบริการ ปลอดภัย สะดวกสบาย",
        feat3_title: "เช่ารายวัน/สัปดาห์/เดือน", feat3_desc: "เลือกแพ็กเกจเช่าที่เหมาะกับคุณ",
        feat4_title: "มุกดาหาร & นครพนม", feat4_desc: "บริการในพื้นที่มุกดาหารและนครพนม",
        ticker1: "🚗 เช่ารถรายวัน เริ่มต้นเพียง ฿600",
        ticker2: "📍 รับ-ส่งรถ ทั้งมุกดาหารและนครพนม",
        ticker3: "📞 โทร: 061-5493256, 061-5474953",
        ticker4: "📱 Line: 98CarRent, aoftaaof",
        ticker5: "⭐ บริการดี ราคาเป็นกันเอง",
        admin_link: "จัดการ", admin_link_text: "จัดการ",
        admin_panel: "แผงจัดการ 98CarRent",
        admin_dashboard: "แผงจัดการ",
        admin_cars: "จัดการรถเช่า",
        admin_tourism: "จัดการสถานที่ท่องเที่ยว",
        admin_reviews: "จัดการรีวิว",
        view_site: "ดูเว็บ", view_site_text: "ดูเว็บ",
        export_btn: "Export ข้อมูล",
        stats_cars: "คัน รถให้เช่า",
        stats_places: "แห่ง สถานที่ท่องเที่ยว",
        stats_customers: "ลูกค้าที่ไว้ใจ",
        stats_years: "ปี บริการ",
        toast_saved: "บันทึกเรียบร้อยแล้ว 🎉",
        toast_exported: "📤 Export ข้อมูลแล้ว — ส่งไฟล์ JSON ให้ผมเพื่ออัปเดตเว็บ",
        toast_deleted: "ลบเรียบร้อยแล้ว 🗑️",
        gallery_title: "🚗 รถเช่าของเรา", gallery_sub: "เลือกรถเช่าที่ต้องการ ทั้งรายวัน รายสัปดาห์ รายเดือน",
        car_group_label: "รถเช่า",
        filter_all: "ทั้งหมด", filter_daily: "รายวัน", filter_weekly: "รายสัปดาห์", filter_monthly: "รายเดือน",
        add_car: "+ เพิ่มรถเช่า",
        btn_book: "จองรถ",
        booking_title: "📞 จองรถ",
        booking_note: "ติดต่อเราเพื่อจองรถได้เลยครับ ทีมงานพร้อมให้บริการทุกวัน",
        booking_call: "โทรจอง",
        tourism_title: "🗺️ สถานที่ท่องเที่ยว",
        tourism_sub: "มุกดาหาร & นครพนม — กดที่พิกัดเพื่อเปิด Google Maps นำทาง",
        tab_mukdahan: "มุกดาหาร", tab_nakhonphanom: "นครพนม",
        add_tourism: "+ เพิ่มสถานที่ท่องเที่ยว",
        review_title: "⭐ รีวิวจากลูกค้า", review_sub: "ความคิดเห็นจากลูกค้าที่ใช้บริการ — เพิ่มรีวิวพร้อมรูปได้เลย",
        add_review: "+ เพิ่มรีวิว",
        contact_title: "📞 ติดต่อเรา", contact_phone: "โทรศัพท์", contact_address: "ที่อยู่",
        contact_address_detail: "จังหวัดมุกดาหาร, ประเทศไทย",
        footer_desc: "รถเช่ามุกดาหาร รถเช่าขับเอง รถเช่าพร้อมคนขับ",
        label_car_name: "ชื่อรถ", label_car_desc: "รายละเอียด", label_car_price: "ราคา (บาท)",
        label_price_daily: "ราคารายวัน (บาท)",
        label_price_weekly: "ราคารายสัปดาห์ (บาท)",
        label_price_monthly: "ราคารายเดือน (บาท)",
        label_car_period: "ประเภทราคา", label_car_driver: "เช่าพร้อมคนขับ",
        label_car_img: "รูปภาพ (URL)", label_car_file: "หรืออัพโหลดไฟล์",
        label_tourism_name: "ชื่อสถานที่", label_tourism_desc: "รายละเอียด",
        label_tourism_province: "จังหวัด", label_tourism_lat: "ละติจูด", label_tourism_lng: "ลองจิจูด",
        label_tourism_img: "รูปภาพ (URL)", label_tourism_file: "หรืออัพโหลดไฟล์",
        label_review_name: "ชื่อผู้รีวิว", label_review_star: "คะแนน",
        label_review_text: "ความคิดเห็น", label_review_img: "รูปภาพ (URL)", label_review_file: "หรืออัพโหลดไฟล์",
        driver_self: "ขับเอง", driver_with: "พร้อมคนขับ",
        btn_save: "บันทึก", btn_cancel: "ยกเลิก",
        period_daily: "รายวัน", period_weekly: "รายสัปดาห์", period_monthly: "รายเดือน",
        empty_car: "ยังไม่มีรถเช่าในระบบ", empty_tourism: "ยังไม่มีสถานที่ท่องเที่ยว", empty_review: "ยังไม่มีรีวิว",
        confirm_delete: "คุณต้องการลบรายการนี้หรือไม่?"
    },
    en: {
        subtitle: "Car Rental Mukdahan Self-drive & With Driver",
        nav_home: "Home", nav_gallery: "Cars", nav_tourism: "Tourism", nav_review: "Reviews", nav_contact: "Contact",
        hero_title: "98CarRent",
        hero_eyebrow: "MUKDAHAN • NAKHON PHANOM — PREMIUM CAR RENTAL",
        hero_desc: "Car Rental Mukdahan Self-drive & With Driver<br>Affordable car rental in Mukdahan & Nakhon Phanom",
        hero_btn: "View All Cars",
        hero_b1: "Self-drive / With driver", hero_b2: "Daily • Weekly • Monthly", hero_b3: "Free delivery in town",
        rate_eyebrow: "SIMPLE PRICING", rate_title: "Simple, transparent packages", rate_sub: "From only ฿600/day — longer is cheaper",
        rate_from: " from", rate_pop: "Popular", rate_btn: "View cars",
        rate_d_desc: "City trips, errands, 1–6 days",
        rate_w_desc: "Long trips home, Mekong tour — 7 days best value",
        rate_m_desc: "Project work, out-of-town assignments",
        feat1_title: "Self-drive Rental", feat1_desc: "Drive yourself, convenient and affordable",
        feat2_title: "With Driver", feat2_desc: "Professional driver service, safe and comfortable",
        feat3_title: "Daily/Weekly/Monthly", feat3_desc: "Choose the rental package that suits you",
        feat4_title: "Mukdahan & Nakhon Phanom", feat4_desc: "Service in Mukdahan and Nakhon Phanom areas",
        ticker1: "🚗 Daily car rental from only ฿600",
        ticker2: "📍 Pickup & drop-off in Mukdahan and Nakhon Phanom",
        ticker3: "📞 Call: 061-5493256, 061-5474953",
        ticker4: "📱 Line: 98CarRent, aoftaaof",
        ticker5: "⭐ Great service, friendly prices",
        stats_cars: "Cars available",
        admin_link: "Manage", admin_link_text: "Manage",
        admin_panel: "98CarRent Admin Panel",
        admin_dashboard: "Admin Panel",
        admin_cars: "Manage Cars",
        admin_tourism: "Manage Attractions",
        admin_reviews: "Manage Reviews",
        view_site: "View Site", view_site_text: "View Site",
        export_btn: "Export Data",
        stats_places: "Tourist attractions",
        stats_customers: "Happy customers",
        stats_years: "Years of service",
        toast_saved: "Saved successfully 🎉",
        toast_exported: "📤 Data exported — send the JSON file to update the website",
        toast_deleted: "Deleted successfully 🗑️",
        gallery_title: "🚗 Our Cars", gallery_sub: "Choose your rental car, daily, weekly, or monthly",
        car_group_label: "Cars",
        filter_all: "All", filter_daily: "Daily", filter_weekly: "Weekly", filter_monthly: "Monthly",
        add_car: "+ Add Car",
        btn_book: "Book Now",
        booking_title: "📞 Book a Car",
        booking_note: "Contact us to book your car. Our team is ready to serve you every day.",
        booking_call: "Call to book",
        tourism_title: "🗺️ Tourist Attractions",
        tourism_sub: "Mukdahan & Nakhon Phanom — tap coordinates to open Google Maps",
        show_eyebrow: "WHY 98CARRENT", show_title: "Less but better — clean, punctual, caring",
        show_desc: "Every car in the Image/ folder is inspected before handover. Basic insurance included. Free delivery in Mukdahan town.",
        show_p1: "Inspected every time", show_p2: "Book in 10 minutes", show_p3: "No hidden fees",
        tab_mukdahan: "Mukdahan", tab_nakhonphanom: "Nakhon Phanom",
        add_tourism: "+ Add Attraction",
        review_title: "⭐ Customer Reviews", review_sub: "Reviews from our customers — add yours with a photo",
        add_review: "+ Add Review",
        contact_title: "📞 Contact Us", contact_phone: "Phone", contact_address: "Address",
        contact_address_detail: "Mukdahan Province, Thailand",
        footer_desc: "Car Rental Mukdahan Self-drive & With Driver",
        label_car_name: "Car Name", label_car_desc: "Description", label_car_price: "Price (THB)",
        label_price_daily: "Daily Price (THB)",
        label_price_weekly: "Weekly Price (THB)",
        label_price_monthly: "Monthly Price (THB)",
        label_car_period: "Rental Type", label_car_driver: "With Driver",
        label_car_img: "Image (URL)", label_car_file: "Or upload file",
        label_tourism_name: "Place Name", label_tourism_desc: "Description",
        label_tourism_province: "Province", label_tourism_lat: "Latitude", label_tourism_lng: "Longitude",
        label_tourism_img: "Image (URL)", label_tourism_file: "Or upload file",
        label_review_name: "Reviewer Name", label_review_star: "Rating",
        label_review_text: "Review", label_review_img: "Image (URL)", label_review_file: "Or upload file",
        driver_self: "Self-drive", driver_with: "With Driver",
        btn_save: "Save", btn_cancel: "Cancel",
        period_daily: "Daily", period_weekly: "Weekly", period_monthly: "Monthly",
        empty_car: "No cars available yet", empty_tourism: "No attractions yet", empty_review: "No reviews yet",
        confirm_delete: "Are you sure you want to delete this?"
    }
};

// ========== LANGUAGE ==========
function toggleLang() {
    lang = lang === 'th' ? 'en' : 'th';
    try { localStorage.setItem('lang', lang); } catch(e) {}
    applyLang();
}
function applyLang() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                // skip
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
    const lb = document.getElementById('langBtn');
    if (lb) lb.textContent = lang === 'th' ? '🇹🇭 TH / 🇬🇧 EN' : '🇬🇧 EN / 🇹🇭 TH';
    try { renderCars(); renderTourism(); renderReviews(); } catch(e) {}
}

// ========== THEME ==========
function setThemePreset(color) {
    const picker = document.getElementById('themeColor');
    if (picker) picker.value = color;
    changeTheme(color);
}
function changeTheme(color) {
    if (!color || !/^#[0-9a-fA-F]{6}$/.test(color)) return;
    document.documentElement.style.setProperty('--primary', color);
    const darker = darkenColor(color, 28);
    const lighter = lightenColor(color, 32);
    document.documentElement.style.setProperty('--primary-dark', darker);
    document.documentElement.style.setProperty('--primary-light', lighter);
    try { localStorage.setItem('themeColor', color); } catch(e) {}
}
function darkenColor(hex, pct) {
    let r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    r = Math.max(0, Math.floor(r * (1 - pct/100)));
    g = Math.max(0, Math.floor(g * (1 - pct/100)));
    b = Math.max(0, Math.floor(b * (1 - pct/100)));
    return '#' + [r,g,b].map(c => c.toString(16).padStart(2,'0')).join('');
}
function lightenColor(hex, pct) {
    let r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    r = Math.min(255, Math.floor(r + (255 - r) * pct/100));
    g = Math.min(255, Math.floor(g + (255 - g) * pct/100));
    b = Math.min(255, Math.floor(b + (255 - b) * pct/100));
    return '#' + [r,g,b].map(c => c.toString(16).padStart(2,'0')).join('');
}
function loadTheme() {
    let c = null;
    try { c = localStorage.getItem('themeColor'); } catch(e) {}
    if (c && /^#[0-9a-fA-F]{6}$/.test(c)) {
        const picker = document.getElementById('themeColor');
        if (picker) picker.value = c;
        changeTheme(c);
    } else {
        changeTheme('#B9975B');
    }
}

// ========== NAV ==========
function goPage(target) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const el = document.getElementById(target);
    if (el) el.classList.add('active');
    document.querySelectorAll('.main-nav a').forEach(x => {
        x.classList.toggle('active', x.getAttribute('href') === '#' + target);
    });
    const nav = document.getElementById('mainNav');
    if (nav) nav.classList.remove('show');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try { setupReveal(); animateCounters(); } catch(e) {}
}
function toggleMenu() {
    document.getElementById('mainNav').classList.toggle('show');
}
document.querySelectorAll('.main-nav a').forEach(a => {
    a.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href').slice(1);
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById(target).classList.add('active');
        document.querySelectorAll('.main-nav a').forEach(x => x.classList.remove('active'));
        this.classList.add('active');
        document.getElementById('mainNav').classList.remove('show');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
document.querySelector('.btn-primary[href="#gallery"]')?.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('gallery').classList.add('active');
    document.querySelectorAll('.main-nav a').forEach(x => x.classList.remove('active'));
    document.querySelector('.main-nav a[href="#gallery"]').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========== LOCALSTORAGE ==========
function getData(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) || fallback; }
    catch { return fallback; }
}
function setData(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch(e) {}
}
function copyText(t) {
    try { navigator.clipboard.writeText(t); }
    catch(e) {
        const ta = document.createElement('textarea');
        ta.value = t; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); } catch(err) {}
        ta.remove();
    }
}
function exportData() {
    const payload = {
        app: '98CarRent',
        exported: new Date().toISOString(),
        cars: normalizeCars(cars),
        tourism: tourismData,
        reviews
    };
    const json = JSON.stringify(payload, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '98carrent-data.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    try { copyText(json); } catch(e) {}
    try { showToast(translations[lang].toast_exported); } catch(e) {}
}

// ========== CAR GALLERY ==========
function adminActions(kind, id) {
    if (!IS_ADMIN) return '';
    if (kind === 'car') return `<div class="car-actions">
        <button class="edit-btn" onclick="editCar(${id})"><i class="fas fa-edit"></i></button>
        <button class="delete-btn" onclick="confirmDeleteCar(${id})"><i class="fas fa-trash"></i></button>
    </div>`;
    if (kind === 'tourism') return `<div class="tourism-actions">
        <button class="edit-btn" onclick="editTourism(${id})"><i class="fas fa-edit"></i></button>
        <button class="delete-btn" onclick="confirmDeleteTourism(${id})"><i class="fas fa-trash"></i></button>
    </div>`;
    if (kind === 'review') return `<div class="review-actions">
        <button class="edit-btn" onclick="editReview(${id})"><i class="fas fa-edit"></i></button>
        <button class="delete-btn" onclick="confirmDeleteReview(${id})"><i class="fas fa-trash"></i></button>
    </div>`;
    return '';
}
const defaultCars = [
    { id: 1, name: "Toyota Fortuner", desc: "รถ SUV 7 ที่นั่ง สะดวกสบายสำหรับครอบครัว", prices: { daily: 1500, weekly: 8000, monthly: 28000 }, driver: "no", img: "Image/Toyota fortune.jpg" },
    { id: 2, name: "Ford Focus", desc: "รถเก๋งกลาง ขับสนุก ประหยัดน้ำมัน", prices: { daily: 700, weekly: 4000, monthly: 14000 }, driver: "no", img: "Image/Foerd Focus.jpg" },
    { id: 3, name: "Honda Jazz", desc: "รถอเนกประสงค์ขนาดเล็ก จอดง่าย ประหยัด", prices: { daily: 600, weekly: 3500, monthly: 12000 }, driver: "no", img: "Image/honda jazz.jpg" },
    { id: 4, name: "Mazda CX-3", desc: "Crossover สไตล์สปอร์ต ขับขี่คล่องตัว", prices: { daily: 900, weekly: 5000, monthly: 18000 }, driver: "no", img: "Image/Mazda CX-3.jpg" },
    { id: 5, name: "Mazda CX-5", desc: "SUV ขนาดกลาง หรูหรา สมรรถนะดี", prices: { daily: 1100, weekly: 6000, monthly: 22000 }, driver: "no", img: "Image/Mazda CX-5.jpg" },
    { id: 6, name: "Mazda 2", desc: "รถเล็กประหยัด ใช้งานในเมืองคล่องตัว", prices: { daily: 650, weekly: 3800, monthly: 13000 }, driver: "no", img: "Image/Mazda2.jpg" },
    { id: 7, name: "Mazda 3", desc: "Sports Sedan คมสวย ขับสนุก", prices: { daily: 850, weekly: 4800, monthly: 17000 }, driver: "no", img: "Image/Mazda3.jpg" },
    { id: 8, name: "Mitsubishi Pajero", desc: "SUV 7 ที่นั่ง พร้อมคนขับ เดินทางไกล", prices: { daily: 1500, weekly: 8500, monthly: 30000 }, driver: "yes", img: "Image/mitsubishi pajero.jpg" },
    { id: 9, name: "Nissan Juke", desc: "Crossover สไตล์ล้ำ จุดเด่นกระจังหน้า", prices: { daily: 900, weekly: 5000, monthly: 18000 }, driver: "no", img: "Image/nissan juke.jpg" },
    { id: 10, name: "Nissan Sentra", desc: "ซีดานนั่งสบาย ประหยัด", prices: { daily: 700, weekly: 4000, monthly: 14000 }, driver: "no", img: "Image/nissan sentra.jpg" },
    { id: 11, name: "Nissan Sylphy", desc: "ซีดานหรูหรา นั่งสบาย", prices: { daily: 750, weekly: 4200, monthly: 15000 }, driver: "no", img: "Image/nissan sylphy.jpg" },
    { id: 12, name: "Nissan Sylphy (พร้อมคนขับ)", desc: "ซีดานหรู พร้อมคนขับ สำหรับธุรกิจ", prices: { daily: 850, weekly: 4800, monthly: 17000 }, driver: "yes", img: "Image/nissan sylphy2.jpg" },
];
function normalizeCars(data) {
    return (Array.isArray(data) ? data : []).map(c => {
        if (!c) return null;
        if (c.prices) {
            const p = c.prices;
            return { ...c, prices: { daily: p.daily || 0, weekly: p.weekly || 0, monthly: p.monthly || 0 } };
        }
        // migrate old format (price + period)
        const old = Number(c.price) || 0;
        let prices;
        if (c.period === 'weekly') prices = { daily: Math.round(old / 6), weekly: old, monthly: Math.round(old * 4) };
        else if (c.period === 'monthly') prices = { daily: Math.round(old / 22), weekly: Math.round(old / 4), monthly: old };
        else prices = { daily: old, weekly: old * 6, monthly: old * 22 };
        return { ...c, prices };
    }).filter(Boolean);
}
// ========== DATA VERSION ==========
// เพิ่มเลขนี้เมื่ออัปเดตข้อมูลเริ่มต้น (defaultCars/defaultTourism/defaultReviews)
// เพื่อให้ข้อมูลเก่าที่เก็บไว้ทุกเครื่องถูกแทนที่ด้วยชุดใหม่
const DATA_VERSION = '6';
function syncDataVersion() {
    let v = null;
    try { v = localStorage.getItem('data_version'); } catch(e) {}
    if (v !== DATA_VERSION) {
        try {
            localStorage.removeItem('cars');
            localStorage.removeItem('tourism');
            localStorage.removeItem('reviews');
            localStorage.setItem('data_version', DATA_VERSION);
        } catch(e) {}
    }
}
syncDataVersion();

let carsSeeded = false;
try { carsSeeded = localStorage.getItem('cars') !== null; } catch(e) {}
let cars = normalizeCars(getData('cars', defaultCars));
if (!carsSeeded) setData('cars', cars);
let carFilter = 'all';

function priceHTML(p) {
    const labels = {
        daily: translations[lang].filter_daily,
        weekly: translations[lang].filter_weekly,
        monthly: translations[lang].filter_monthly
    };
    const icons = { daily: 'fas fa-sun', weekly: 'fas fa-calendar-week', monthly: 'fas fa-calendar-alt' };
    return ['daily', 'weekly', 'monthly'].map(k => `
        <div class="price-box price-${k}">
            <i class="${icons[k]}"></i>
            <span class="price-label">${labels[k]}</span>
            <span class="price-value">฿${(p[k] || 0).toLocaleString()}</span>
        </div>`).join('');
}

function renderCars() {
    const grid = document.getElementById('carGallery');
    if (grid) {
        let list = cars;
        if (carFilter === 'daily' || carFilter === 'weekly' || carFilter === 'monthly') {
            list = cars.filter(c => (c.prices && c.prices[carFilter] > 0) || c.period === carFilter);
        } else if (carFilter === 'self') {
            list = cars.filter(c => c.driver !== 'yes');
        } else if (carFilter === 'with') {
            list = cars.filter(c => c.driver === 'yes');
        }
        if (list.length === 0) {
            grid.innerHTML = `<div class="empty-state"><i class="fas fa-car"></i><p>${translations[lang].empty_car}</p></div>`;
        } else {
            grid.innerHTML = list.map(c => {
                const driverBadge = c.driver === 'yes' ? `<span class="car-period-badge badge-driver">${translations[lang].driver_with}</span>` : '';
                const bookBtn = IS_ADMIN ? adminActions('car', c.id) : `<button class="btn btn-primary btn-book" onclick="openBooking(${c.id})"><i class="fas fa-bookmark"></i> ${translations[lang].btn_book}</button>`;
                return `
                <div class="car-card" data-period="${c.period || 'all'}">
                    <img src="${c.img || NO_IMG}" alt="${c.name}" loading="lazy" onerror="imgErr(this)">
                    <div class="car-info">
                        <h3>${c.name} ${driverBadge}</h3>
                        <p>${c.desc}</p>
                        <div class="price-row">${priceHTML(c.prices || {})}</div>
                        ${bookBtn}
                    </div>
                </div>`;
            }).join('');
        }
    }
    try { renderAdminLists(); } catch(e) {}
}
function filterCars(type, btn) {
    carFilter = type;
    const scope = (btn && btn.closest) ? btn.closest('.section-header, .lux-section, body') : document;
    const bar = (btn && btn.closest && btn.closest('#carFilterBar')) ? document.getElementById('carFilterBar') : document.getElementById('carFilterBar');
    if (bar) bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if (btn && btn.classList) btn.classList.add('active');
    else document.querySelectorAll('#carFilterBar .filter-btn').forEach(b => {
        const t = b.getAttribute('onclick') || '';
        b.classList.toggle('active', t.includes("'" + type + "'"));
    });
    renderCars();
}
function openCarModal(id) {
    document.getElementById('carModal').classList.add('show');
    if (!id) {
        document.getElementById('carForm').reset();
        document.getElementById('carEditId').value = '';
        document.getElementById('carImgPreview').innerHTML = '';
    }
}
function closeCarModal() {
    document.getElementById('carModal').classList.remove('show');
}
function editCar(id) {
    const car = cars.find(c => c.id === id);
    if (!car) return;
    const p = car.prices || { daily: 0, weekly: 0, monthly: 0 };
    document.getElementById('carEditId').value = car.id;
    document.getElementById('carName').value = car.name;
    document.getElementById('carDesc').value = car.desc;
    document.getElementById('carPriceDaily').value = p.daily || 0;
    document.getElementById('carPriceWeekly').value = p.weekly || 0;
    document.getElementById('carPriceMonthly').value = p.monthly || 0;
    document.getElementById('carDriver').value = car.driver;
    document.getElementById('carImg').value = car.img;
    document.getElementById('carImgPreview').innerHTML = car.img ? `<img src="${car.img}">` : '';
    openCarModal(id);
}
function saveCar(e) {
    e.preventDefault();
    const editId = document.getElementById('carEditId').value;
    const carData = {
        id: editId ? parseInt(editId) : Date.now(),
        name: document.getElementById('carName').value,
        desc: document.getElementById('carDesc').value,
        prices: {
            daily: parseInt(document.getElementById('carPriceDaily').value) || 0,
            weekly: parseInt(document.getElementById('carPriceWeekly').value) || 0,
            monthly: parseInt(document.getElementById('carPriceMonthly').value) || 0
        },
        driver: document.getElementById('carDriver').value,
        img: document.getElementById('carImg').value
    };
    if (editId) {
        cars = cars.map(c => c.id === parseInt(editId) ? carData : c);
    } else {
        cars.push(carData);
    }
    setData('cars', normalizeCars(cars));
    renderCars();
    closeCarModal();
    try { showToast(translations[lang].toast_saved); } catch(err) {}
}
function confirmDeleteCar(id) {
    showConfirm(() => {
        cars = cars.filter(c => c.id !== id);
        setData('cars', cars);
        renderCars();
        try { showToast(translations[lang].toast_deleted); } catch(err) {}
    });
}

// ========== TOURISM (รูปจาก internet + ปักหมุด Location เปิด Google Maps) ==========
const defaultTourism = [
    { id: 1, name: "หอแก้วมุกดาหาร (Mukdahan Tower)", desc: "หอชมเมืองมุกดาหาร 360 องศา ชมวิวแม่น้ำโขงและฝั่งลาว สัญลักษณ์เมืองมุกดาหาร", province: "mukdahan", lat: 16.5445, lng: 104.7347, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&auto=format&fit=crop" },
    { id: 2, name: "ตลาดอินโดจีน มุกดาหาร", desc: "ตลาดริมโขง ของฝาก OTOP สินค้าอินโดจีน ช้อปเพลินเดินชิลยามเย็น", province: "mukdahan", lat: 16.5398, lng: 104.7412, img: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80&auto=format&fit=crop" },
    { id: 3, name: "ภูผาเทิบ & ผาแต้มน้อย", desc: "อุทยานแห่งชาติภูผาเทิบ หินรูปร่างแปลกตา จุดชมวิวพระอาทิตย์ขึ้นสวยที่สุด", province: "mukdahan", lat: 16.5512, lng: 104.7344, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80&auto=format&fit=crop" },
    { id: 4, name: "สะพานมิตรภาพไทย-ลาว แห่งที่ 2", desc: "สะพานข้ามโขงเชื่อมมุกดาหาร–สะหวันนะเขต จุดถ่ายรูปแลนด์มาร์กยามเย็น", province: "mukdahan", lat: 16.5372, lng: 104.7119, img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80&auto=format&fit=crop" },
    { id: 5, name: "วัดพระธาตุพนมวรมหาวิหาร", desc: "พระธาตุพนม สิ่งศักดิ์สิทธิ์คู่บ้านคู่เมืองนครพนม บรรจุพระอุรังคธาตุ", province: "nakhonphanom", lat: 17.3913, lng: 104.7842, img: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80&auto=format&fit=crop" },
    { id: 6, name: "ถนนคนเดินริมโขง นครพนม", desc: "ถนนริมแม่น้ำโขง ชมวิวฝั่งลาว บรรยากาศยามเย็น ปั่นจักรยานชิลๆ", province: "nakhonphanom", lat: 17.3928, lng: 104.7934, img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80&auto=format&fit=crop" },
    { id: 7, name: "พระธาตุเรณู & พระธาตุท่าอุเทน", desc: "เส้นทางสายบุญพระธาตุประจำวันเกิด เที่ยวครบจบในวันเดียวจากตัวเมือง", province: "nakhonphanom", lat: 17.3397, lng: 104.7325, img: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&q=80&auto=format&fit=crop" },
    { id: 8, name: "พิพิธภัณฑ์จวนผู้ว่าฯ นครพนม", desc: "บ้านพักผู้ว่าสมัยก่อน ชมประวัติศาสตร์เมืองนครพนมริมโขง", province: "nakhonphanom", lat: 17.3956, lng: 104.7890, img: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80&auto=format&fit=crop" },
];
let tourismData = getData('tourism', defaultTourism);
let tourismFilter = 'all';

function renderTourism() {
    const grid = document.getElementById('tourismGrid');
    if (grid) {
        const filtered = tourismFilter === 'all' ? tourismData : tourismData.filter(t => t.province === tourismFilter);
        if (filtered.length === 0) {
            grid.innerHTML = `<div class="empty-state"><i class="fas fa-map-marked-alt"></i><p>${translations[lang].empty_tourism}</p></div>`;
        } else {
            grid.innerHTML = filtered.map(t => {
                const pBadge = t.province === 'mukdahan' ? 'province-mukdahan' : 'province-nakhonphanom';
                const pLabel = translations[lang]['tab_' + t.province] || t.province;
                const mapUrl = (t.lat && t.lng) ? `https://www.google.com/maps?q=${t.lat},${t.lng}` : '#';
                const target = (t.lat && t.lng) ? ' target="_blank" rel="noopener"' : '';
                const delBtn = IS_ADMIN ? adminActions('tourism', t.id) : '';
                return `
                <div class="tourism-card" data-province="${t.province}">
                    <img src="${t.img || NO_IMG}" alt="${t.name}" loading="lazy" onerror="imgErr(this)">
                    <div class="tourism-info">
                        <h3>${t.name}</h3>
                        <p>${t.desc}</p>
                        <span class="tourism-province-badge ${pBadge}">${pLabel}</span><br>
                        ${(t.lat && t.lng) ? `<a class="tourism-location" href="${mapUrl}"${target}><i class="fas fa-map-marker-alt"></i> 📍 ${t.lat}, ${t.lng} — Google Maps</a>` : ''}
                    </div>
                    ${delBtn}
                </div>`;
            }).join('');
        }
    }
    try { renderAdminLists(); } catch(e) {}
}
function filterTourism(type, btn) {
    tourismFilter = type;
    document.querySelectorAll('.tourism-tabs .tab-btn').forEach(b => b.classList.remove('active'));
    if (btn && btn.classList) btn.classList.add('active');
    else document.querySelectorAll('.tourism-tabs .tab-btn').forEach(b => {
        const t = b.getAttribute('onclick') || '';
        b.classList.toggle('active', t.includes("'" + type + "'"));
    });
    renderTourism();
}
function openTourismModal() {
    document.getElementById('tourismModal').classList.add('show');
    document.getElementById('tourismForm').reset();
    document.getElementById('tourismEditId').value = '';
    document.getElementById('tourismImgPreview').innerHTML = '';
}
function closeTourismModal() {
    document.getElementById('tourismModal').classList.remove('show');
}
function editTourism(id) {
    const t = tourismData.find(x => x.id === id);
    if (!t) return;
    document.getElementById('tourismEditId').value = t.id;
    document.getElementById('tourismName').value = t.name;
    document.getElementById('tourismDesc').value = t.desc;
    document.getElementById('tourismProvince').value = t.province;
    document.getElementById('tourismLat').value = t.lat || '';
    document.getElementById('tourismLng').value = t.lng || '';
    document.getElementById('tourismImg').value = t.img;
    document.getElementById('tourismImgPreview').innerHTML = t.img ? `<img src="${t.img}">` : '';
    openTourismModal();
}
function saveTourism(e) {
    e.preventDefault();
    const editId = document.getElementById('tourismEditId').value;
    const data = {
        id: editId ? parseInt(editId) : Date.now(),
        name: document.getElementById('tourismName').value,
        desc: document.getElementById('tourismDesc').value,
        province: document.getElementById('tourismProvince').value,
        lat: parseFloat(document.getElementById('tourismLat').value) || null,
        lng: parseFloat(document.getElementById('tourismLng').value) || null,
        img: document.getElementById('tourismImg').value
    };
    if (editId) {
        tourismData = tourismData.map(t => t.id === parseInt(editId) ? data : t);
    } else {
        tourismData.push(data);
    }
    setData('tourism', tourismData);
    renderTourism();
    closeTourismModal();
    try { showToast(translations[lang].toast_saved); } catch(err) {}
}
function confirmDeleteTourism(id) {
    showConfirm(() => {
        tourismData = tourismData.filter(t => t.id !== id);
        setData('tourism', tourismData);
        renderTourism();
        try { showToast(translations[lang].toast_deleted); } catch(err) {}
    });
}

// ========== REVIEW ==========
const defaultReviews = [
    { id: 1, name: "สมชาย ใจดี", stars: 5, text: "บริการดีมาก รถสะอาด คนขับสุภาพ ราคาเป็นกันเอง จะกลับมาใช้บริการอีกครับ!", img: "", date: "2026-08-15" },
    { id: 2, name: "Sarah Johnson", stars: 5, text: "Excellent service! The car was clean and the driver was very professional. Highly recommended!", img: "", date: "2026-07-20" },
    { id: 3, name: "วิภา วงศ์ไทย", stars: 4, text: "เช่ารถขับเอง สะดวกมาก รถสภาพดี ราคาไม่แพง ขับเที่ยวมุกดาหารสบายๆ", img: "", date: "2026-09-01" },
];
let reviews = getData('reviews', defaultReviews);

function renderReviews() {
    const grid = document.getElementById('reviewGrid');
    if (grid) {
        if (reviews.length === 0) {
            grid.innerHTML = `<div class="empty-state"><i class="fas fa-star"></i><p>${translations[lang].empty_review}</p></div>`;
        } else {
            grid.innerHTML = reviews.map(r => {
                const stars = '★'.repeat(r.stars) + '☆'.repeat(5 - r.stars);
                // หน้าเว็บลูกค้า: ลบรีวิว/รูปได้เลย + admin แก้ไขได้
                const actions = IS_ADMIN ? adminActions('review', r.id)
                    : `<div class="review-actions"><button class="delete-btn" onclick="confirmDeleteReview(${r.id})" title="ลบ"><i class="fas fa-trash"></i></button></div>`;
                const safeName = String(r.name || '').replace(/</g, '&lt;');
                const safeText = String(r.text || '').replace(/</g, '&lt;');
                return `
                <div class="review-card">
                    <div class="review-stars">${stars}</div>
                    <h3>${safeName}</h3>
                    <p>${safeText}</p>
                    ${r.img ? `<img src="${r.img}" alt="review" loading="lazy" onerror="imgErr(this)">` : ''}
                    <div class="review-date">${r.date || ''}</div>
                    ${actions}
                </div>`;
            }).join('');
        }
    }
    try { renderAdminLists(); } catch(e) {}
}
function openReviewModal(keepStars) {
    const m = document.getElementById('reviewModal');
    if (!m) return;
    m.classList.add('show');
    const f = document.getElementById('reviewForm');
    if (f && !keepStars) f.reset();
    const eid = document.getElementById('reviewEditId');
    if (eid && !keepStars) eid.value = '';
    const pv = document.getElementById('reviewImgPreview');
    if (pv && !keepStars) pv.innerHTML = '';
    const file = document.getElementById('reviewFile');
    if (file) file.value = '';
    if (!keepStars) {
        selectedStars = 5;
        try { updateStarDisplay(); } catch(e) {}
    }
}
function closeReviewModal() {
    const m = document.getElementById('reviewModal');
    if (m) m.classList.remove('show');
}
function setStar(n) {
    selectedStars = n;
    updateStarDisplay();
}
function updateStarDisplay() {
    const stars = document.querySelectorAll('#starInput span');
    if (!stars.length) return;
    stars.forEach((s, i) => {
        s.classList.toggle('active', i < selectedStars);
    });
}
function editReview(id) {
    const r = reviews.find(x => x.id === id);
    if (!r) return;
    openReviewModal(true);
    document.getElementById('reviewEditId').value = r.id;
    document.getElementById('reviewName').value = r.name;
    document.getElementById('reviewText').value = r.text;
    document.getElementById('reviewImg').value = r.img || '';
    document.getElementById('reviewImgPreview').innerHTML = r.img ? `<img src="${r.img}" onerror="imgErr(this)">` : '';
    selectedStars = r.stars || 5;
    updateStarDisplay();
}
function saveReview(e) {
    if (e) e.preventDefault();
    const editId = document.getElementById('reviewEditId').value;
    const name = document.getElementById('reviewName').value.trim().slice(0, 60);
    const text = document.getElementById('reviewText').value.trim().slice(0, 500);
    const img = document.getElementById('reviewImg').value.trim();
    if (!name || !text) return;
    const data = {
        id: editId ? parseInt(editId) : Date.now(),
        name,
        stars: selectedStars || 5,
        text,
        img,
        date: new Date().toISOString().split('T')[0]
    };
    if (editId) {
        reviews = reviews.map(r => r.id === parseInt(editId) ? { ...data, date: r.date } : r);
    } else {
        reviews.unshift(data);
    }
    setData('reviews', reviews);
    renderReviews();
    closeReviewModal();
    try { showToast(translations[lang].toast_saved); } catch(err) {}
}
function confirmDeleteReview(id) {
    showConfirm(() => {
        reviews = reviews.filter(r => r.id !== id);
        setData('reviews', reviews);
        renderReviews();
        try { showToast(translations[lang].toast_deleted); } catch(err) {}
    });
}

// ========== FILE UPLOAD ==========
function handleFileUpload(input, targetId) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById(targetId).value = e.target.result;
        const previewId = targetId.replace('Img', 'ImgPreview');
        const preview = document.getElementById(previewId);
        if (preview) preview.innerHTML = `<img src="${e.target.result}">`;
    };
    reader.readAsDataURL(file);
}

// ========== CONFIRM ==========
function showConfirm(onYes) {
    const overlay = document.createElement('div');
    overlay.className = 'confirm-overlay show';
    overlay.innerHTML = `
        <div class="confirm-box">
            <p>${translations[lang].confirm_delete}</p>
            <div class="confirm-actions">
                <button class="btn btn-primary btn-small" id="confirmYes">${translations[lang].btn_save}</button>
                <button class="btn btn-danger btn-small" id="confirmNo">${translations[lang].btn_cancel}</button>
            </div>
        </div>`;
    document.body.appendChild(overlay);
    document.getElementById('confirmYes').onclick = () => { overlay.remove(); onYes(); };
    document.getElementById('confirmNo').onclick = () => overlay.remove();
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
}

// ========== EXTRA EFFECTS ==========
function showToast(msg) {
    const box = document.getElementById('toastBox');
    if (!box) return;
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = msg;
    box.appendChild(t);
    setTimeout(() => t.classList.add('show'), 10);
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, 2200);
}

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            revealObserver.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });

function setupReveal() {
    document.querySelectorAll('.reveal, .section-header, .feature-card, .contact-card, .footer-inner').forEach(el => revealObserver.observe(el));
}

function animateCounters() {
    document.querySelectorAll('.counter').forEach(el => {
        if (el.dataset.done) return;
        const target = parseInt(el.dataset.target);
        const dur = 1500;
        const start = performance.now();
        function tick(now) {
            const p = Math.min((now - start) / dur, 1);
            const val = Math.floor(target * (1 - Math.pow(1 - p, 3)));
            el.textContent = val.toLocaleString();
            if (p < 1) requestAnimationFrame(tick);
            else { el.textContent = target.toLocaleString(); el.dataset.done = '1'; }
        }
        requestAnimationFrame(tick);
    });
}
const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) { animateCounters(); statsObserver.unobserve(e.target); }
    });
}, { threshold: 0.3 });

function setupBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('show', window.scrollY > 400);
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ========== BOOKING ==========
function openBooking(carId) {
    const modal = document.getElementById('bookingModal');
    if (!modal) return;
    const nameEl = document.getElementById('bookingCarName');
    const car = cars.find(c => c.id === carId);
    if (car && nameEl) nameEl.textContent = `🚗 ${car.name}`;
    modal.classList.add('show');
}
function closeBooking() {
    const modal = document.getElementById('bookingModal');
    if (modal) modal.classList.remove('show');
}
document.addEventListener('click', e => {
    const modal = document.getElementById('bookingModal');
    if (modal && modal.classList.contains('show') && e.target === modal) closeBooking();
});

// ========== ADMIN TABS & LISTS ==========
function renderAdminLists() {
    const carBox = document.getElementById('adminCarList');
    const tourBox = document.getElementById('adminTourismList');
    const revBox = document.getElementById('adminReviewList');
    if (!carBox && !tourBox && !revBox) return;

    if (carBox) {
        if (cars.length === 0) { carBox.innerHTML = `<div class="empty-state"><p>${translations[lang].empty_car}</p></div>`; }
        else {
            carBox.innerHTML = cars.map(c => {
                const p = c.prices || {};
                const dlabel = c.driver === 'yes' ? translations[lang].driver_with : translations[lang].driver_self;
                return `<div class="admin-item">
                    <img src="${c.img || NO_IMG}" alt="" onerror="imgErr(this)">
                    <div class="admin-item-info">
                        <strong>${c.name}</strong>
                        <span>${c.desc}</span>
                        <em>฿${(p.daily||0).toLocaleString()}/${translations[lang].filter_daily} • ฿${(p.weekly||0).toLocaleString()}/${translations[lang].filter_weekly} • ฿${(p.monthly||0).toLocaleString()}/${translations[lang].filter_monthly} • ${dlabel}</em>
                    </div>
                    <div class="admin-item-actions">
                        <button class="edit-btn" onclick="editCar(${c.id})"><i class="fas fa-edit"></i></button>
                        <button class="delete-btn" onclick="confirmDeleteCar(${c.id})"><i class="fas fa-trash"></i></button>
                    </div>
                </div>`;
            }).join('');
        }
    }
    if (tourBox) {
        if (tourismData.length === 0) { tourBox.innerHTML = `<div class="empty-state"><p>${translations[lang].empty_tourism}</p></div>`; }
        else {
            tourBox.innerHTML = tourismData.map(t => {
                const plabel = translations[lang]['tab_' + t.province] || t.province;
                const coords = (t.lat && t.lng) ? `${t.lat}, ${t.lng}` : '—';
                return `<div class="admin-item">
                    <img src="${t.img || NO_IMG}" alt="" onerror="imgErr(this)">
                    <div class="admin-item-info">
                        <strong>${t.name}</strong>
                        <span>${t.desc}</span>
                        <em>📍 ${plabel} • ${coords}</em>
                    </div>
                    <div class="admin-item-actions">
                        <button class="edit-btn" onclick="editTourism(${t.id})"><i class="fas fa-edit"></i></button>
                        <button class="delete-btn" onclick="confirmDeleteTourism(${t.id})"><i class="fas fa-trash"></i></button>
                    </div>
                </div>`;
            }).join('');
        }
    }
    if (revBox) {
        if (reviews.length === 0) { revBox.innerHTML = `<div class="empty-state"><p>${translations[lang].empty_review}</p></div>`; }
        else {
            revBox.innerHTML = reviews.map(r => `
                <div class="admin-item">
                    <div class="admin-avatar">${r.name.charAt(0)}</div>
                    <div class="admin-item-info">
                        <strong>${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)} ${r.name}</strong>
                        <span>${r.text}</span>
                        <em>${r.date || ''}</em>
                    </div>
                    <div class="admin-item-actions">
                        <button class="edit-btn" onclick="editReview(${r.id})"><i class="fas fa-edit"></i></button>
                        <button class="delete-btn" onclick="confirmDeleteReview(${r.id})"><i class="fas fa-trash"></i></button>
                    </div>
                </div>`).join('');
        }
    }
}

function setupAdminTabs() {
    if (!IS_ADMIN) return;
    document.querySelectorAll('.admin-nav a').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            // close mobile menu if open
            const nav = document.getElementById('adminNav');
            if (nav) nav.classList.remove('show');
            // switch
            document.querySelectorAll('.admin-nav a').forEach(x => x.classList.remove('active'));
            a.classList.add('active');
            ['carsTab','tourismTab','reviewsTab'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.style.display = (id === a.dataset.tab) ? 'block' : 'none';
            });
        });
    });
}

// ========== INIT ==========
function init() {
    try { loadTheme(); } catch(e) {}
    try { applyLang(); } catch(e) {}
    try { renderCars(); } catch(e) {}
    try { renderTourism(); } catch(e) {}
    try { renderReviews(); } catch(e) {}
    try { setupReveal(); } catch(e) {}
    try { statsObserver.observe(document.querySelector('.stats-section')); } catch(e) {}
    try { setupBackToTop(); } catch(e) {}
    try { setupAdminTabs(); } catch(e) {}
}
init();

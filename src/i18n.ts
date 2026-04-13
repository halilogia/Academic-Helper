export interface TranslationKeys {
    title: string;
    app_title: string;
    reset: string;
    save: string;
    download_pdf: string;
    generating: string;
    saved_templates: string;
    citation_helper_title: string;
    citation_placeholder: string;
    search: string;
    create: string;
    searching: string;
    citation_copied: string;
    copy_error: string;
    logo_settings: string;
    logo_help: string;
    change_logo: string;
    upload_logo: string;
    reset_logo: string;
    top_section: string;
    university_name: string;
    faculty_institute: string;
    middle_section: string;
    subject_title: string;
    details_section: string;
    assignment_type: string;
    student_name_surname: string;
    student_number: string;
    advisor_title: string;
    advisor_name_surname: string;
    city: string;
    year: string;
    no_logo: string;
    image_load_error: string;
    please_reupload: string;
    university_logo: string;
    confirmation: string;
    reset_confirmation_text: string;
    cancel: string;
    yes_reset: string;
    enter_template_name: string;
    template_saved: string;
    template_loaded: string;
    template_delete_confirm: string;
    template_deleted: string;
    pdf_validation_error: string;
    invalid_image_error: string;
    pdf_engine_error: string;
    pdf_generating_wait: string;
    pdf_success: string;
    general_error: string;
    default_subject: string;
    default_assignment_type: string;
    default_student_name: string;
    default_student_number: string;
    default_advisor_label: string;
    default_advisor_name: string;
    default_city: string;
    default_university: string;
    default_institute: string;
    no_article_found: string;
    invalid_format_error: string;
    no_book_found: string;
    no_author: string;
    no_title: string;
    no_publisher: string;
    not_available: string;
}

export const translations: Record<'en' | 'tr', TranslationKeys> = {
    en: {
        title: "Academic Helper: Assignment Cover & Bibliography Generator",
        app_title: "Assignment Cover Editor",
        reset: "Reset",
        save: "Save",
        download_pdf: "Download PDF",
        generating: "Generating...",
        saved_templates: "Saved Templates",
        citation_helper_title: "Quick Citation Generator (APA 7)",
        citation_placeholder: "Enter DOI or ISBN...",
        search: "Search",
        create: "Create",
        searching: "Searching...",
        citation_copied: "Citation copied to clipboard!",
        copy_error: "Error: Could not copy to clipboard.",
        logo_settings: "Logo Settings",
        logo_help: "If the logo is not visible, upload it from your computer.",
        change_logo: "Change Logo",
        upload_logo: "Upload Logo",
        reset_logo: "Reset Logo",
        top_section: "Top Section (16pt, Bold)",
        university_name: "University Name",
        faculty_institute: "Faculty / Institute",
        middle_section: "Middle Section (14pt, Bold)",
        subject_title: "Subject / Assignment Title",
        details_section: "Details (12pt)",
        assignment_type: "Assignment Type / Course Name",
        student_name_surname: "Student Name Surname",
        student_number: "Student Number",
        advisor_title: "Advisor Title",
        advisor_name_surname: "Advisor Name Surname",
        city: "City",
        year: "Year",
        no_logo: "No Logo",
        image_load_error: "Image Failed to Load",
        please_reupload: "Please upload again",
        university_logo: "University Logo",
        confirmation: "Confirmation",
        reset_confirmation_text: "Are you sure you want to reset all fields to default values?",
        cancel: "Cancel",
        yes_reset: "Yes, Reset",
        enter_template_name: "Enter a name for this template (e.g., Philosophy Midterm):",
        template_saved: "Template '{name}' saved.",
        template_loaded: "Template '{name}' loaded.",
        template_delete_confirm: "Are you sure you want to delete the template '{name}'?",
        template_deleted: "Template '{name}' deleted.",
        pdf_validation_error: "Please fill in at least 'Subject', 'Student Name' and 'Student Number' before downloading PDF.",
        invalid_image_error: "Error: Please select a valid image file (e.g., JPG, PNG, GIF).",
        pdf_engine_error: "PDF engine could not be loaded. Check your internet connection.",
        pdf_generating_wait: "Generating PDF, please wait...",
        pdf_success: "PDF downloaded successfully!",
        general_error: "An error occurred. Please try again.",
        default_subject: "(Course Title Here)",
        default_assignment_type: "Master's Thesis/Project Assignment",
        default_student_name: "Name Surname",
        default_student_number: "Student ID",
        default_advisor_label: "Academic Advisor",
        default_advisor_name: "Title, Full Name",
        default_city: "CITY NAME",
        default_university: "YOUR UNIVERSITY NAME",
        default_institute: "FACULTY OR INSTITUTE NAME",
        no_article_found: "Article information not found.",
        invalid_format_error: "Invalid DOI or ISBN format.",
        no_book_found: "No book found with this ISBN.",
        no_author: "No Author",
        no_title: "No Title",
        no_publisher: "No Publisher",
        not_available: "N/A"
    },
    tr: {
        title: "Akademik Yardımcı: Ödev Kapağı & Kaynakça Oluşturucu",
        app_title: "Ödev Kapağı Düzenleyici",
        reset: "Sıfırla",
        save: "Kaydet",
        download_pdf: "PDF İndir",
        generating: "Oluşturuluyor...",
        saved_templates: "Kayıtlı Şablonlar",
        citation_helper_title: "Hızlı Kaynakça Oluşturucu (APA 7)",
        citation_placeholder: "DOI veya ISBN girin...",
        search: "Ara",
        create: "Oluştur",
        searching: "Aranıyor...",
        citation_copied: "Kaynakça panoya kopyalandı!",
        copy_error: "Hata: Panoya kopyalanamadı.",
        logo_settings: "Logo Ayarı",
        logo_help: "Logo görünmüyorsa bilgisayarınızdan yükleyin.",
        change_logo: "Logoyu Değiştir",
        upload_logo: "Logo Yükle",
        reset_logo: "Logoyu Sıfırla",
        top_section: "Üst Bölüm (16 Punto, Koyu)",
        university_name: "Üniversite Adı",
        faculty_institute: "Fakülte / Enstitü",
        middle_section: "Orta Bölüm (14 Punto, Koyu)",
        subject_title: "Konu İsmi / Ödev Başlığı",
        details_section: "Detaylar (12 Punto)",
        assignment_type: "Ödev Türü / Ders Adı",
        student_name_surname: "Öğrenci Adı Soyadı",
        student_number: "Öğrenci Numarası",
        advisor_title: "Danışman Başlığı",
        advisor_name_surname: "Danışman Adı Soyadı",
        city: "Şehir",
        year: "Yıl",
        no_logo: "Logo Yok",
        image_load_error: "Resim Yüklenemedi",
        please_reupload: "Lütfen tekrar yükleyin",
        university_logo: "Üniversite Logosu",
        confirmation: "Onay",
        reset_confirmation_text: "Tüm alanları varsayılan değerlere sıfırlamak istediğinizden emin misiniz?",
        cancel: "İptal",
        yes_reset: "Evet, Sıfırla",
        enter_template_name: "Bu şablon için bir isim girin (örn: Felsefe Vize):",
        template_saved: "'{name}' şablonu kaydedildi.",
        template_loaded: "'{name}' şablonu yüklendi.",
        template_delete_confirm: "'{name}' şablonunu silmek istediğinizden emin misiniz?",
        template_deleted: "'{name}' şablonu silindi.",
        pdf_validation_error: "Lütfen PDF indirmeden önce en azından 'Konu İsmi', 'Öğrenci Adı' ve 'Öğrenci Numarası' alanlarını doldurun.",
        invalid_image_error: "Hata: Lütfen geçerli bir resim dosyası seçin (örn: JPG, PNG, GIF).",
        pdf_engine_error: "PDF motoru yüklenemedi. İnternet bağlantınızı kontrol edin.",
        pdf_generating_wait: "PDF oluşturuluyor, lütfen bekleyin...",
        pdf_success: "PDF başarıyla indirildi!",
        general_error: "Hata oluştu. Lütfen tekrar deneyin.",
        default_subject: "(Konu İsmi Buraya)",
        default_assignment_type: "Felsefe ve Din Bilimleri Yüksek Lisans Ödevi",
        default_student_name: "Adı Soyadı",
        default_student_number: "Öğrenci Numarası",
        default_advisor_label: "Ödev Danışmanı",
        default_advisor_name: "Unvanı, Adı Soyadı",
        default_city: "BİLECİK",
        default_university: "BİLECİK ŞEYH EDEBALİ ÜNİVERSİTESİ",
        default_institute: "LİSANSÜSTÜ EĞİTİM ENSTİTÜSÜ",
        no_article_found: "Makale bilgisi bulunamadı.",
        invalid_format_error: "Geçersiz DOI veya ISBN formatı.",
        no_book_found: "Bu ISBN ile kitap bulunamadı.",
        no_author: "Yazar Yok",
        no_title: "Başlık Yok",
        no_publisher: "Yayıncı Yok",
        not_available: "Yok"
    }
};
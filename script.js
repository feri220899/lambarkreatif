$(function () {
  var translations = {
    id: {
      nav_about: 'Tentang',
      nav_services: 'Layanan',
      nav_projects: 'Proyek',
      nav_contact: 'Kontak',
      hero_eyebrow: 'Studio Digital Kreatif & Software',
      hero_title_1: 'Ide kreatif,',
      hero_title_2: 'jadi produk digital',
      hero_desc: 'Kami membantu bisnis dan UMKM tumbuh lewat desain, website, dan aplikasi yang sederhana, cepat, dan tepat guna.',
      hero_cta_1: 'Lihat Proyek',
      hero_cta_2: 'Mulai Kolaborasi',
      about_label: 'Tentang Kami',
      about_title: 'Partner digital untuk bisnis yang ingin bergerak lebih cepat.',
      about_p1: 'Lambar Kreatif adalah startup yang bergerak di bidang digital kreatif dan pengembangan software. Kami menggabungkan desain yang komunikatif dengan teknologi yang andal.',
      about_p2: 'Dari identitas visual hingga aplikasi web, setiap proyek kami kerjakan dengan fokus pada kebutuhan nyata pengguna.',
      services_label: 'Layanan',
      services_title: 'Apa yang kami kerjakan',
      svc1_title: 'Pengembangan Software',
      svc1_desc: 'Aplikasi web dan sistem bisnis custom, dari kasir, inventori, hingga dashboard.',
      svc2_title: 'Website & Landing Page',
      svc2_desc: 'Website profil perusahaan dan landing page yang cepat dan responsif.',
      svc3_title: 'Desain Kreatif',
      svc3_desc: 'Identitas visual, UI/UX, dan konten digital untuk memperkuat brand Anda.',
      projects_label: 'Proyek',
      projects_title: 'Karya yang sudah berjalan',
      proj1_tag: 'Software · Aplikasi Kasir',
      proj1_desc: 'Aplikasi kasir (Point of Sale) berbasis web untuk warung dan UMKM, membantu pencatatan penjualan jadi lebih mudah.',
      soon_tag: 'Segera Hadir',
      soon_title: 'Proyek berikutnya',
      soon_desc: 'Bisa jadi proyek Anda. Mari wujudkan bersama.',
      contact_label: 'Kontak',
      contact_title: 'Punya ide? Ayo ngobrol.',
      contact_desc: 'Ceritakan kebutuhan Anda, kami bantu temukan solusi digital yang paling pas.',
      contact_cta: 'Hubungi Kami',
      footer_note: 'Digital Kreatif & Software'
    },
    en: {
      nav_about: 'About',
      nav_services: 'Services',
      nav_projects: 'Projects',
      nav_contact: 'Contact',
      hero_eyebrow: 'Creative Digital & Software Studio',
      hero_title_1: 'Creative ideas,',
      hero_title_2: 'turned into digital products',
      hero_desc: 'We help businesses and SMEs grow through design, websites, and applications that are simple, fast, and purposeful.',
      hero_cta_1: 'View Projects',
      hero_cta_2: 'Start a Collaboration',
      about_label: 'About Us',
      about_title: 'A digital partner for businesses that want to move faster.',
      about_p1: 'Lambar Kreatif is a startup working in creative digital and software development. We combine communicative design with reliable technology.',
      about_p2: 'From visual identity to web applications, every project we build is focused on real user needs.',
      services_label: 'Services',
      services_title: 'What we do',
      svc1_title: 'Software Development',
      svc1_desc: 'Custom web applications and business systems, from point of sale and inventory to dashboards.',
      svc2_title: 'Websites & Landing Pages',
      svc2_desc: 'Fast, responsive company profile websites and landing pages.',
      svc3_title: 'Creative Design',
      svc3_desc: 'Visual identity, UI/UX, and digital content to strengthen your brand.',
      projects_label: 'Projects',
      projects_title: 'Work already live',
      proj1_tag: 'Software · Point of Sale',
      proj1_desc: 'A web-based Point of Sale app for small shops and SMEs that makes recording sales easier.',
      soon_tag: 'Coming Soon',
      soon_title: 'Next project',
      soon_desc: 'It could be yours. Let\'s build it together.',
      contact_label: 'Contact',
      contact_title: 'Got an idea? Let\'s talk.',
      contact_desc: 'Tell us what you need, and we\'ll help you find the right digital solution.',
      contact_cta: 'Contact Us',
      footer_note: 'Creative Digital & Software'
    }
  };

  function getSavedLang() {
    try {
      return localStorage.getItem('lang');
    } catch (e) {
      return null;
    }
  }

  function setLang(lang) {
    var dict = translations[lang] || translations.id;

    $('[data-i18n]').each(function () {
      var key = $(this).data('i18n');
      if (dict[key]) {
        $(this).text(dict[key]);
      }
    });

    $('html').attr('lang', lang);
    $('.lang-btn').removeClass('active').filter('[data-lang="' + lang + '"]').addClass('active');

    try {
      localStorage.setItem('lang', lang);
    } catch (e) {}
  }

  $('.lang-btn').on('click', function () {
    setLang($(this).data('lang'));
  });

  $('#burger').on('click', function () {
    $(this).toggleClass('open');
    $('#menu').toggleClass('open');
  });

  $('#menu a').on('click', function () {
    $('#burger').removeClass('open');
    $('#menu').removeClass('open');
  });

  $('#year').text(new Date().getFullYear());

  var $reveal = $('.section h2, .service, .project, .grid-2 > div');
  $reveal.addClass('reveal');

  function checkReveal() {
    var bottom = $(window).scrollTop() + $(window).height() * 0.9;
    $reveal.each(function () {
      if ($(this).offset().top < bottom) {
        $(this).addClass('show');
      }
    });
  }

  $(window).on('scroll resize', checkReveal);
  checkReveal();

  setLang(getSavedLang() || 'id');
});

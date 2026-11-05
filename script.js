$(function () {
  // Konten terjemahan milik website. HTML digunakan untuk line break, aksen,
  // dan ikon panah yang sudah ditentukan di file ini.
  var translations = {
    id: {
      nav_about: 'Tentang', nav_services: 'Layanan', nav_projects: 'Proyek', nav_legal: 'Perusahaan', nav_contact: 'Kontak', nav_cta: 'Ayo ngobrol <span>↗</span>',
      hero_eyebrow: 'PT Lambar Kreatif Digital', hero_title_1: 'Ide yang', hero_title_2: 'berdampak nyata.', hero_desc: 'Kami mengubah ide besar menjadi brand yang jelas, website yang berguna, dan produk digital andal yang membantu bisnis bergerak lebih cepat.', hero_cta_1: 'Lihat karya kami <span>↗</span>', hero_cta_2: 'Perusahaan resmi <span>↓</span>', hero_proof: 'Badan usaha resmi Indonesia · Metro, Lampung.',
      about_label: 'Tentang kami', about_title: 'Digital itu harus terasa<br><span>sederhana, bukan biasa.</span>', about_p1: 'PT Lambar Kreatif Digital adalah studio digital dan partner teknologi Indonesia yang berbasis di Kota Metro, Lampung. Kami memadukan desain produk yang tajam dengan engineering software yang andal.', about_p2: 'Dari SaaS custom dan sistem Point of Sale hingga infrastruktur hosting, kami dekat dengan kebutuhan bisnis nyata — membangun software yang menyelesaikan masalah dan berjalan dengan baik.', about_link: 'Lihat kemampuan kami <span>↗</span>', stat_1: 'Sektor KBLI terdaftar', stat_2: 'Resmi &amp; terdaftar', stat_3: 'Dikerjakan dengan teliti',
      services_label: 'Layanan', services_title: 'Produk bagus dimulai<br>dari <em>pemikiran yang jelas.</em>', services_intro: 'Kami menangani semuanya mulai dari ide, arsitektur sistem, desain visual, hingga deployment hosting — supaya rilis digital Anda siap digunakan.', svc1_title: 'Software &amp;<br>E-Commerce', svc1_desc: 'Aplikasi web custom, Point of Sale, sistem inventori, dan aplikasi perdagangan sesuai operasi bisnis Anda.', svc2_title: 'Cloud &amp;<br>Infrastruktur Hosting', svc2_desc: 'Deployment cloud server, orkestrasi VPS, pendaftaran domain, setup SSL, dan replikasi database high availability.', svc3_title: 'Website &amp;<br>Identitas Brand', svc3_desc: 'Company profile modern, landing page, sistem UI/UX, dan identitas brand yang mudah diingat.',
      projects_label: 'Karya pilihan', projects_title: 'Beberapa hal<br><span>yang sudah kami buat.</span>', projects_intro: 'Setiap produk punya titik awal berbeda. Tujuannya selalu sama: membuatnya berguna, cepat, dan mudah dipakai setiap hari.', proj1_tag: 'Software · Aplikasi Kasir', proj1_desc: 'Aplikasi kasir berbasis web untuk warung dan UMKM agar pencatatan penjualan, stok, dan keuntungan sehari-hari lebih mudah.', soon_tag: 'Segera hadir', soon_title: 'Software<br>berikutnya?', soon_desc: 'Punya ide atau butuh software custom untuk perusahaan? Mari wujudkan bersama.', soon_link: 'Mulai proyek <b>↗</b>',
      legal_label: 'Perusahaan &amp; kepercayaan', process_label: 'Cara kerja', process_title: 'Minim ribut.<br><em>Maksimal bergerak.</em>', process_1_title: 'Dengar dulu', process_1_desc: 'Kami memahami konteks, audiens, dan tantangan sebenarnya di balik brief sebelum menulis kode.', process_2_title: 'Buat jelas', process_2_desc: 'Kami ubah hal rumit menjadi arah yang bisa dipahami, diuji, dan dipercaya semua orang.', process_3_title: 'Bangun dengan teliti', process_3_desc: 'Kami menghadirkan kode bersih, hosting andal, dan detail matang — siap untuk penggunaan produksi jangka panjang.',
      contact_label: 'Kontak', contact_title: 'Punya ide?<br><em>Ayo wujudkan.</em>', contact_desc: 'Ceritakan apa yang sedang Anda bangun. Kami bantu menemukan arsitektur digital yang tepat dan membangunnya bersama Anda.', contact_cta: 'Mulai obrolan <span>↗</span>'
    },
    en: {
      nav_about: 'About', nav_services: 'Services', nav_projects: 'Projects', nav_legal: 'Company', nav_contact: 'Contact', nav_cta: 'Let\'s talk <span>↗</span>',
      hero_eyebrow: 'PT Lambar Kreatif Digital', hero_title_1: 'Ideas with', hero_title_2: 'real impact.', hero_desc: 'We turn ambitious ideas into clear brands, useful websites, and reliable digital products that help businesses move faster.', hero_cta_1: 'See our work <span>↗</span>', hero_cta_2: 'Verified company <span>↓</span>', hero_proof: 'Registered legal entity in Indonesia · Metro, Lampung.',
      about_label: 'About us', about_title: 'Digital should feel<br><span>simple, not ordinary.</span>', about_p1: 'PT Lambar Kreatif Digital is an Indonesian digital studio and technology partner based in Kota Metro, Lampung. We bring together sharp product design and dependable software engineering.', about_p2: 'From custom SaaS tools and Point of Sale systems to hosting infrastructure, we stay close to real-world business needs — building software that solves problems and keeps running reliably.', about_link: 'Explore our capabilities <span>↗</span>', stat_1: 'Licensed KBLI sectors', stat_2: 'Legal &amp; registered', stat_3: 'Built with care',
      services_label: 'Services', services_title: 'Good products start<br>with <em>clear thinking.</em>', services_intro: 'We handle everything from idea, system architecture, visual design, to hosting deployment — so your next digital release is ready for prime time.', svc1_title: 'Software &amp;<br>E-Commerce', svc1_desc: 'Custom web applications, Point of Sale, inventory systems, and transactional commerce apps tailored to your business operations.', svc2_title: 'Cloud &amp;<br>Hosting Infrastructure', svc2_desc: 'Cloud server deployment, VPS orchestration, domain registration, SSL setups, and high-availability database replication.', svc3_title: 'Websites &amp;<br>Brand Identity', svc3_desc: 'Modern, high-converting company profiles, product landing pages, UI/UX systems, and memorable brand identities.',
      projects_label: 'Selected work', projects_title: 'A few things<br><span>we\'ve made.</span>', projects_intro: 'Every product has a different starting point. The goal is always the same: make it useful, fast, and easy to run every day.', proj1_tag: 'Software · Point of Sale', proj1_desc: 'A web-based Point of Sale app for small shops and SMEs that makes daily sales, stock, and profit recording effortless.', soon_tag: 'Coming soon', soon_title: 'Your next<br>software?', soon_desc: 'Have an idea or need custom software for your company? Let\'s build it together.', soon_link: 'Start a project <b>↗</b>',
      legal_label: 'Corporate &amp; Trust', process_label: 'Our approach', process_title: 'Less noise.<br><em>More momentum.</em>', process_1_title: 'Listen first', process_1_desc: 'We learn the context, the audience, and the real challenge behind the brief before writing a line of code.', process_2_title: 'Make it clear', process_2_desc: 'We turn complexity into a direction everyone can understand, test, and believe in.', process_3_title: 'Build with care', process_3_desc: 'We ship clean code, dependable hosting, and thoughtful details — built for long-term production use.',
      contact_label: 'Contact', contact_title: 'Have an idea?<br><em>Let\'s make it real.</em>', contact_desc: 'Tell us what you\'re building. We\'ll help you find the right digital architecture and build it with you.', contact_cta: 'Start a conversation <span>↗</span>'
    }
  };

  function getSavedLang() {
    try { return localStorage.getItem('lang'); } catch (e) { return null; }
  }

  function setLang(lang) {
    var dict = translations[lang] || translations.en;
    $('[data-i18n]').each(function () {
      var key = $(this).data('i18n');
      if (dict[key]) $(this).html(dict[key]);
    });
    $('html').attr('lang', lang);
    $('.lang-btn').removeClass('active').filter('[data-lang="' + lang + '"]').addClass('active');
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  $('.lang-btn').on('click', function () { setLang($(this).data('lang')); });

  function closeMenu() {
    $('#burger').removeClass('open').attr('aria-expanded', 'false');
    $('#menu').removeClass('open');
  }

  $('#burger').on('click', function () {
    var open = $('#menu').toggleClass('open').hasClass('open');
    $(this).toggleClass('open', open).attr('aria-expanded', open);
  });
  $('#menu a').on('click', closeMenu);
  $(document).on('click', function (e) { if (!$(e.target).closest('.nav').length) closeMenu(); });
  $('#year').text(new Date().getFullYear());

  var $reveal = $('.section-head, .section h2, .services-intro > p, .projects-title-row > p, .about-copy, .stat, .service, .project, .legal-card, .process-item, .contact-inner > *');
  $reveal.addClass('reveal');

  function checkReveal() {
    var bottom = $(window).scrollTop() + $(window).height() * 0.92;
    $reveal.not('.show').each(function () {
      var $el = $(this);
      if ($el.offset().top < bottom) {
        $el.addClass('show');
        setTimeout(function () { $el.removeClass('reveal show'); }, 900);
      }
    });
  }

  var $sections = $('main section[id]');
  function updateActive() {
    var pos = $(window).scrollTop() + 140;
    var current = '';
    $sections.each(function () { if ($(this).offset().top <= pos) current = this.id; });
    $('#menu a').each(function () { $(this).toggleClass('active', $(this).attr('href') === '#' + current); });
  }

  $(window).on('scroll resize', function () { checkReveal(); updateActive(); });
  checkReveal();
  updateActive();
  setLang(getSavedLang() || 'en');
});

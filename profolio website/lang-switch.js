document.addEventListener('DOMContentLoaded', () => {
  // Translation dictionaries for each page
  const translations = {
    'index.html': {
      'Home': '首页',
      'My Works': '我的作品',
      'Services': '服务',
      'Contact Me': '联系我',
      '中文': 'English',
      'Kamrul Islam': '尚杰',
      'Web Developer': '网页开发者',
      'Creating modern, responsive websites with passion and precision.': '用热情和精准创建现代响应式网站。',
      'Kazi Md. Kamrul Islam Shawn': 'Kazi Md. Kamrul Islam Shawn [尚杰]',
      "I'm a professional web designer and developer specializing in custom WordPress theme design, development and customization using Elementor, Astra, WooCommerce, HTML, CSS, BootStrap and more. I have over 2 years of experience converting PSD designs into pixel-perfect, responsive WordPress websites for clients across various industries.": "我是一名专业的网页设计师和开发人员，专注于使用Elementor、Astra、WooCommerce、HTML、CSS、Bootstrap等进行定制WordPress主题设计、开发和定制。我拥有超过2年的经验，将PSD设计转换为像素完美、响应式的WordPress网站，服务于各行各业的客户。",
      'View My Work': '查看我的作品',
      'Technical Skills': '技术技能',
      'HTML': 'HTML',
      'CSS': 'CSS',
      'Bootstrap': 'Bootstrap',
      'WordPress': 'WordPress',
      'Services': '服务',
      'Web Design': '网页设计',
      'Custom, responsive, and modern website designs tailored to your brand and audience.': '为您的品牌和受众量身定制的自定义、响应式和现代网站设计。',
      'Web Development': '网页开发',
      'High-quality front-end and back-end development using the latest technologies.': '使用最新技术进行高质量的前端和后端开发。',
      'WordPress': 'WordPress',
      'Custom WordPress theme design, development, and customization to build powerful websites.': '定制WordPress主题设计、开发和定制，构建强大的网站。',
      'Photo Gallery': '照片画廊',
      '© 2025 Kazi Md. Kamrul Islam Shawn. All rights reserved.': '© 2025 尚杰。版权所有。',
      'Quick Links': '快速链接',
      'Contact Info': '联系信息',
      'developer.kamrul2003@gmail.com': 'developer.kamrul2003@gmail.com'
    },
    'myworks.html': {
      'Home': '首页',
      'My Works': '我的作品',
      'Services': '服务',
      'Contact Me': '联系我',
      '中文': 'English',
      'My Works': '我的作品',
      'View Details': '查看详情',
      '© 2025 Kazi Md. Kamrul Islam Shawn. All rights reserved.': '© 2025 卡兹尔·伊斯兰。版权所有。',
      'Quick Links': '快速链接',
      'Contact Info': '联系信息',
      'developer.kamrul2003@gmail.com': 'developer.kamrul2003@gmail.com',
      'Html Demo website': 'HTML演示网站',
      'This is a copy and updated version of Bangladesh Navy Website': '这是孟加拉国海军网站的复制和更新版本',
      'Html Form': 'HTML表单',
      'A simple driving Licence Registration form.': '一个简单的驾驶执照注册表。',
      'Project Title 3': '项目标题3',
      'Brief description of project 3.': '项目3的简要描述。'
    },
    'services.html': {
      'Home': '首页',
      'My Works': '我的作品',
      'Services': '服务',
      'Contact Me': '联系我',
      '中文': 'English',
      'Services': '服务',
      'Web Design': '网页设计',
      'Building responsive and modern websites using HTML5, CSS3, and Bootstrap framework.': '使用HTML5、CSS3和Bootstrap框架构建响应式和现代网站。',
      'WordPress & Astra Theme': 'WordPress和Astra主题',
      'Custom WordPress theme design and development using Astra theme and Elementor plugin.': '使用Astra主题和Elementor插件定制WordPress主题设计和开发。',
      'PSD to Website': 'PSD转网站',
      'Converting PSD designs into pixel-perfect, responsive websites with modern technologies.': '使用现代技术将PSD设计转换为像素完美、响应式网站。',
      'Html': 'HTML',
      'Custom, responsive, and modern website designs tailored to your brand and audience.': '为您的品牌和受众量身定制的自定义、响应式和现代网站设计。',
      'Web Development': '网页开发',
      'Css': 'CSS',
      'High-quality front-end and back-end development using the latest technologies.': '使用最新技术进行高质量的前端和后端开发。',
      'WordPress': 'WordPress',
      'Bootstrap': 'Bootstrap',
      'Custom WordPress theme design, development, and customization to build powerful websites.': '定制WordPress主题设计、开发和定制，构建强大的网站。',
      'Web Design': '网页设计',
      'Elementor': 'Elementor',
      'Custom, responsive, and modern website designs tailored to your brand and audience.': '为您的品牌和受众量身定制的自定义、响应式和现代网站设计。',
      'Web Development': '网页开发',
      'Astra': 'Astra',
      'High-quality front-end and back-end development using the latest technologies.': '使用最新技术进行高质量的前端和后端开发。',
      'Psd to Web design': 'PSD转网页设计',
      '© 2025 Kazi Md. Kamrul Islam Shawn. All rights reserved.': '© 2025 卡兹尔·伊斯兰。版权所有。',
      'Quick Links': '快速链接',
      'Contact Info': '联系信息',
      'developer.kamrul2003@gmail.com': 'developer.kamrul2003@gmail.com'
    }
  };

  // Function to translate page content
  function translatePage(lang) {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    const dict = translations[page];
    if (!dict) return;

    // Helper function to normalize whitespace in text
    function normalizeText(text) {
      return text.replace(/\s+/g, ' ').trim();
    }

    // Translate all text nodes in the body
    const elements = document.body.querySelectorAll('*');
    elements.forEach(el => {
      if (el.children.length === 0 && el.textContent.trim().length > 0) {
        const rawText = el.textContent;
        const text = normalizeText(rawText);
        if (lang === 'cn' && dict[text]) {
          el.textContent = dict[text];
        } else if (lang === 'en') {
          // Reverse lookup to English
          const enText = Object.keys(dict).find(key => dict[key] === text);
          if (enText) el.textContent = enText;
        }
      }
    });

    // Update the "中文" link text to toggle language
    const langLink = document.querySelector('a.nav-link[href="#"]');
    if (langLink) {
      langLink.textContent = lang === 'cn' ? 'English' : '中文';
    }
  }

  // Initial language state
  let currentLang = localStorage.getItem('siteLang') || 'en';

  // Apply saved language on page load
  translatePage(currentLang);

  // Add click event listener to the "中文" link
  const langLink = document.querySelector('a.nav-link[href="#"]');
  if (langLink) {
    langLink.addEventListener('click', (e) => {
      e.preventDefault();
      currentLang = currentLang === 'en' ? 'cn' : 'en';
      localStorage.setItem('siteLang', currentLang);
      translatePage(currentLang);
    });
  }
});

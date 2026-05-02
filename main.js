(function () {
  'use strict';

  var root = document.documentElement;

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) {}
    var btn = document.getElementById('toggle-theme');
    if (btn) btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  }

  function setLang(lang) {
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang === 'cn' ? 'zh-CN' : 'en');
    try { localStorage.setItem('lang', lang); } catch (e) {}
    var btn = document.getElementById('toggle-lang');
    if (btn) btn.setAttribute('aria-pressed', lang === 'cn' ? 'true' : 'false');
    if (document.title.indexOf('·') !== -1) {
      document.title = lang === 'cn' ? '卢嘉成 · Jiacheng Lu' : 'Jiacheng Lu · 卢嘉成';
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    setTheme(root.getAttribute('data-theme') || 'light');
    setLang(root.getAttribute('data-lang') || 'en');

    var themeBtn = document.getElementById('toggle-theme');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        setTheme(current === 'dark' ? 'light' : 'dark');
      });
    }

    var langBtn = document.getElementById('toggle-lang');
    if (langBtn) {
      langBtn.addEventListener('click', function () {
        var current = root.getAttribute('data-lang') === 'cn' ? 'cn' : 'en';
        setLang(current === 'cn' ? 'en' : 'cn');
      });
    }

    if (window.matchMedia) {
      var mq = window.matchMedia('(prefers-color-scheme: dark)');
      var handler = function (e) {
        var saved = null;
        try { saved = localStorage.getItem('theme'); } catch (err) {}
        if (!saved) setTheme(e.matches ? 'dark' : 'light');
      };
      if (mq.addEventListener) mq.addEventListener('change', handler);
      else if (mq.addListener) mq.addListener(handler);
    }
  });
})();

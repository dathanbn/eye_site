/* Eye Site Sacramento — small, dependency-free behaviours */
(function () {
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  var sheet = document.querySelector('.nav-sheet');

  // Frost the nav once the page scrolls past the hero's top edge.
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 24);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile sheet.
  if (toggle && sheet) {
    toggle.addEventListener('click', function () {
      var open = !sheet.classList.contains('is-open');
      sheet.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
      toggle.querySelector('.icon-menu').toggleAttribute('hidden', open);
      toggle.querySelector('.icon-close').toggleAttribute('hidden', !open);
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    sheet.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { toggle.click(); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && sheet.classList.contains('is-open')) toggle.click();
    });
  }

  // Appointment request form: validate on blur and submit, then show a confirmation.
  // There is no backend yet; wire the fetch() below to the practice's form handler.
  var form = document.querySelector('form.form');
  if (form) {
    function setError(field, message) {
      var wrap = field.closest('.field');
      var help = wrap.querySelector('.help');
      wrap.classList.toggle('is-error', !!message);
      if (help) help.textContent = message || help.getAttribute('data-default') || '';
      field.setAttribute('aria-invalid', message ? 'true' : 'false');
    }
    function validate(field) {
      var v = field.value.trim();
      if (field.required && !v) return 'This field is required.';
      if (field.type === 'email' && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Enter a full email address, like maria@example.com.';
      if (field.name === 'phone' && v && v.replace(/\D/g, '').length < 10) return 'Enter a 10-digit phone number.';
      return '';
    }
    form.querySelectorAll('.control').forEach(function (f) {
      var help = f.closest('.field').querySelector('.help');
      if (help) help.setAttribute('data-default', help.textContent);
      f.addEventListener('blur', function () { setError(f, validate(f)); });
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var firstBad = null;
      form.querySelectorAll('.control').forEach(function (f) {
        var msg = validate(f);
        setError(f, msg);
        if (msg && !firstBad) firstBad = f;
      });
      if (firstBad) { firstBad.focus(); return; }
      var data = Object.fromEntries(new FormData(form).entries());
      var office = data.office === 'folsom' ? 'Folsom' : 'Sacramento';
      var done = document.createElement('div');
      done.className = 'form-success';
      done.setAttribute('role', 'status');
      done.innerHTML = '<strong>Request received.</strong> Our ' + office + ' office will call you at ' + data.phone + ' within one business day to confirm a time.';
      form.replaceWith(done);
      done.focus();
    });
  }
})();

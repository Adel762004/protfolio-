/* Portfolio site logic: renders content from SITE (data.js) and wires up interactions. */
(function () {
  "use strict";
  var S = window.SITE;
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var esc = function (t) { var d = document.createElement("div"); d.textContent = t; return d.innerHTML; };

  /* ---------- WhatsApp helpers ---------- */
  function waLink(text) {
    return "https://wa.me/" + S.whatsappNumber + "?text=" + encodeURIComponent(text || S.defaultMessage);
  }
  $$("[data-wa]").forEach(function (a) { a.href = waLink(); });

  /* ---------- Icons ---------- */
  function paintIcons(root) {
    $$("[data-icon]", root).forEach(function (el) {
      if (!el.firstChild || el.dataset.painted !== "1") {
        el.innerHTML = window.icon(el.dataset.icon, el.dataset.size || 20);
        el.dataset.painted = "1";
      }
    });
  }

  /* ---------- About photo (optional) ---------- */
  if (S.photo) {
    var card = $("#about-card");
    card.classList.add("has-photo");
    card.insertAdjacentHTML("afterbegin", '<img class="about-photo" src="' + esc(S.photo) + '" alt="Portrait of Adel Mahmoud Zeinhom" loading="lazy">');
  }

  /* ---------- Services ---------- */
  $("#services-grid").innerHTML = S.services.map(function (s, i) {
    return '<article class="service-card reveal" style="--d:' + (i % 3) * 70 + 'ms">' +
      '<span class="service-icon">' + window.icon(s.icon, 26) + '</span>' +
      '<h3>' + esc(s.title) + '</h3><p>' + esc(s.text) + '</p>' +
      '<span class="service-num" aria-hidden="true">' + String(i + 1).padStart(2, "0") + '</span></article>';
  }).join("");

  /* ---------- Portfolio ---------- */
  $("#portfolio-note").textContent = S.portfolioNote;
  var grid = $("#portfolio-grid");
  var filtersEl = $("#portfolio-filters");
  var activeCat = "All";

  function imgPath(p, n) { return "assets/work/" + p.slug + "/" + n + ".webp"; }
  function pad(i) { return String(i).padStart(2, "0"); }

  function renderFilters() {
    var cats = ["All"].concat(S.categories);
    filtersEl.innerHTML = cats.map(function (c) {
      var n = c === "All" ? S.projects.length : S.projects.filter(function (p) { return p.category === c; }).length;
      return '<button type="button" class="chip' + (c === activeCat ? " is-active" : "") + '" data-cat="' + esc(c) + '" aria-pressed="' + (c === activeCat) + '">' + esc(c) + ' <span>' + n + '</span></button>';
    }).join("");
  }

  function renderGrid() {
    var list = S.projects.filter(function (p) { return activeCat === "All" || p.category === activeCat; });
    grid.innerHTML = list.map(function (p, i) {
      var idx = S.projects.indexOf(p);
      return '<button type="button" class="work-card" data-project="' + idx + '" style="--i:' + i + '" aria-label="View project: ' + esc(p.name) + '">' +
        '<img src="' + imgPath(p, p.cover) + '" alt="' + esc(p.name) + ' social media design" loading="lazy" decoding="async">' +
        '<span class="work-overlay">' +
        '<span class="work-meta">' + esc(p.category) + (p.ai ? ' · AI-assisted visuals' : '') + '</span>' +
        '<span class="work-title">' + esc(p.name) + '</span>' +
        '<span class="work-view">View project ' + window.icon("arrow-up-right", 16) + '</span>' +
        '</span></button>';
    }).join("");
  }

  filtersEl.addEventListener("click", function (e) {
    var b = e.target.closest("[data-cat]");
    if (!b) return;
    activeCat = b.dataset.cat;
    renderFilters();
    renderGrid();
  });
  renderFilters();
  renderGrid();

  /* ---------- Project modal / viewer ---------- */
  var modal = $("#modal"), panel = $(".modal-panel", modal);
  var vImg = $("#viewer-img"), vCount = $("#viewer-count"), vThumbs = $("#viewer-thumbs");
  var cur = null, curIdx = 0, lastFocus = null;

  function showImage(i) {
    var n = cur.images.length;
    curIdx = (i + n) % n;
    vImg.src = cur.images[curIdx];
    vImg.alt = cur.name + " design " + (curIdx + 1) + " of " + n;
    vCount.textContent = (curIdx + 1) + " / " + n;
    $$("button", vThumbs).forEach(function (b, k) {
      b.classList.toggle("is-active", k === curIdx);
      b.setAttribute("aria-current", k === curIdx ? "true" : "false");
    });
    var active = $$("button", vThumbs)[curIdx];
    if (active && active.scrollIntoView) active.scrollIntoView({ block: "nearest", inline: "center" });
  }

  function openProject(idx, trigger) {
    var p = S.projects[idx];
    var imgs = [];
    for (var i = 1; i <= p.count; i++) imgs.push(imgPath(p, pad(i)));
    // show the chosen cover first
    var coverPath = imgPath(p, p.cover);
    imgs = [coverPath].concat(imgs.filter(function (x) { return x !== coverPath; }));
    cur = { name: p.name, images: imgs };

    $("#modal-cat").textContent = p.category;
    $("#modal-title").textContent = p.name;
    $("#modal-summary").textContent = p.summary;
    var tags = p.tags.slice(); if (p.ai) tags.push("AI-assisted visuals");
    $("#modal-tags").innerHTML = tags.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
    $("#modal-did").innerHTML = p.did.map(function (t) { return "<li>" + window.icon("check", 16) + "<span>" + esc(t) + "</span></li>"; }).join("");
    $("#modal-credit").textContent = S.portfolioCredit;
    $("#modal-cta").href = waLink("Hello Adel, I saw the " + p.name + " project on your portfolio website and I'd like to discuss something similar for my brand.");
    vThumbs.innerHTML = imgs.map(function (src, k) {
      return '<button type="button" data-k="' + k + '" aria-label="Show design ' + (k + 1) + '"><img src="' + src + '" alt="" loading="lazy"></button>';
    }).join("");
    $(".viewer-nav.prev", modal).hidden = $(".viewer-nav.next", modal).hidden = imgs.length < 2;

    lastFocus = trigger || document.activeElement;
    modal.hidden = false;
    document.body.classList.add("no-scroll");
    requestAnimationFrame(function () { modal.classList.add("is-open"); });
    showImage(0);
    $(".modal-close", modal).focus();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
    setTimeout(function () { modal.hidden = true; vImg.removeAttribute("src"); }, 220);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  grid.addEventListener("click", function (e) {
    var c = e.target.closest("[data-project]");
    if (c) openProject(parseInt(c.dataset.project, 10), c);
  });
  modal.addEventListener("click", function (e) {
    if (e.target.closest("[data-close]")) closeModal();
    var t = e.target.closest("[data-k]");
    if (t) showImage(parseInt(t.dataset.k, 10));
  });
  $("#viewer-prev").addEventListener("click", function () { showImage(curIdx - 1); });
  $("#viewer-next").addEventListener("click", function () { showImage(curIdx + 1); });

  document.addEventListener("keydown", function (e) {
    if (modal.hidden) return;
    if (e.key === "Escape") closeModal();
    else if (e.key === "ArrowLeft") showImage(curIdx - 1);
    else if (e.key === "ArrowRight") showImage(curIdx + 1);
    else if (e.key === "Tab") { // keep focus inside the dialog
      var f = $$("button, a[href]", panel).filter(function (el) { return !el.hidden && el.offsetParent !== null; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  // swipe on touch devices
  (function () {
    var x0 = null, stage = $(".viewer-stage", modal);
    stage.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    stage.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) showImage(curIdx + (dx < 0 ? 1 : -1));
      x0 = null;
    }, { passive: true });
  })();

  /* ---------- Pricing ---------- */
  $("#pricing-grid").innerHTML = S.packages.map(function (p, i) {
    var cls = "price-card reveal" + (p.featured ? " is-featured" : "") + (p.premium ? " is-premium" : "");
    var msg = "Hello Adel, I visited your portfolio website and I'm interested in the " + p.name + " package (" + p.price + " EGP / month). I'd like to discuss my project.";
    return '<article class="' + cls + '" style="--d:' + i * 90 + 'ms">' +
      (p.badge ? '<span class="price-badge">' + esc(p.badge) + '</span>' : '') +
      '<h3>' + esc(p.name) + '</h3><p class="price-tag">' + esc(p.tagline) + '</p>' +
      '<p class="price"><span class="amount">' + esc(p.price) + '</span><span class="unit">EGP / month</span></p>' +
      '<ul class="price-list">' + p.features.map(function (f) { return '<li>' + window.icon("check", 18) + '<span>' + esc(f) + '</span></li>'; }).join("") + '</ul>' +
      '<a class="btn ' + (p.featured ? "btn-light" : (p.premium ? "btn-primary-on-dark" : "btn-primary")) + ' btn-block" href="' + waLink(msg) + '" target="_blank" rel="noopener">' + window.icon("message-circle", 18) + ' ' + esc(p.cta) + '</a>' +
      '</article>';
  }).join("");
  $("#pricing-notes").innerHTML = S.packageNotes.map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("");

  /* ---------- Why / Process ---------- */
  $("#why-grid").innerHTML = S.why.map(function (w, i) {
    return '<article class="why-card reveal" style="--d:' + (i % 3) * 70 + 'ms"><span class="why-icon">' + window.icon(w.icon, 24) + '</span><h3>' + esc(w.title) + '</h3><p>' + esc(w.text) + '</p></article>';
  }).join("");
  $("#process-list").innerHTML = S.process.map(function (s, i) {
    return '<li class="step reveal" style="--d:' + i * 90 + 'ms"><span class="step-n">' + esc(s.n) + '</span><h3>' + esc(s.title) + '</h3><p>' + esc(s.text) + '</p></li>';
  }).join("");

  /* ---------- Contact form → WhatsApp ---------- */
  var form = $("#inquiry-form"), sel = form.elements.service;
  S.services.map(function (s) { return s.title; })
    .concat(S.packages.map(function (p) { return p.name + " package"; }), ["Custom package / not sure yet"])
    .forEach(function (t) { var o = document.createElement("option"); o.value = t; o.textContent = t; sel.appendChild(o); });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = form.elements, err = $("#form-error");
    var name = f.name.value.trim(), msg = f.message.value.trim();
    if (!name || !msg) { err.hidden = false; (name ? f.message : f.name).focus(); return; }
    err.hidden = true;
    var lines = ["Hello Adel, I visited your portfolio website and I'd like to discuss a project.", "", "Name: " + name];
    if (f.brand.value.trim()) lines.push("Business / brand: " + f.brand.value.trim());
    if (f.service.value) lines.push("Interested in: " + f.service.value);
    lines.push("", msg);
    window.open(waLink(lines.join("\n")), "_blank", "noopener");
  });

  /* ---------- Icons for static markup ---------- */
  paintIcons(document);

  /* ---------- Header, mobile menu, active link ---------- */
  var header = $(".site-header"), toggle = $("#menu-toggle"), nav = $("#main-nav");
  function onScroll() { header.classList.toggle("is-scrolled", window.scrollY > 24); }
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("no-scroll", open);
  }
  toggle.addEventListener("click", function () { setMenu(!nav.classList.contains("is-open")); });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("is-open")) { setMenu(false); toggle.focus(); } });
  window.addEventListener("resize", function () { if (window.innerWidth > 900) setMenu(false); });

  var links = $$("[data-nav]");
  var sections = links.map(function (a) { return $(a.getAttribute("href")); }).filter(Boolean);
  if ("IntersectionObserver" in window) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (a) { a.classList.toggle("is-current", a.getAttribute("href") === "#" + en.target.id); });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { so.observe(s); });

    /* ---------- Reveal on scroll ---------- */
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); ro.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    $$(".reveal").forEach(function (el) { ro.observe(el); });
  } else {
    $$(".reveal").forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---------- Footer year ---------- */
  $("#year").textContent = new Date().getFullYear();
})();

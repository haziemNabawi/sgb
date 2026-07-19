/* ============ SMART GLOW BUDGET — RENDER ENGINE ============
   Halaman segmen cukup set: <body data-segment="acne">
   Semua konten dirender otomatis dari data.js
   ============================================================ */

const rupiah = n => "Rp" + n.toLocaleString("id-ID");

function applyTheme(t){
  const r = document.documentElement.style;
  r.setProperty("--utama", t.utama);
  r.setProperty("--tua", t.tua);
  r.setProperty("--muda", t.muda);
  r.setProperty("--border", t.border);
  r.setProperty("--aksen", t.aksen);
}

/* ---------- Lightbox ---------- */
function openLightbox({foto, judul, sub, harga, ikon}){
  const lb = document.getElementById("lightbox");
  const imgWrap = lb.querySelector(".lb-img");
  imgWrap.innerHTML = "";
  const img = document.createElement("img");
  img.src = foto;
  img.alt = judul;
  img.onerror = () => { imgWrap.innerHTML = `<span>${ikon || "🖼️"}</span>`; };
  imgWrap.appendChild(img);
  lb.querySelector(".lb-title").textContent = judul;
  lb.querySelector(".lb-sub").textContent = sub || "";
  lb.querySelector(".lb-price").textContent = harga || "";
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeLightbox(){
  const lb = document.getElementById("lightbox");
  lb.classList.remove("open");
  document.body.style.overflow = "";
}

/* ---------- Render ---------- */
function renderSegment(key){
  key = key || document.body.dataset.segment;
  if(!key || !SGB_DATA[key]) return;
  document.body.dataset.segment = key;
  const seg = SGB_DATA[key];
  applyTheme(seg.tema);

  document.title = seg.nama + " — Smart Glow Budget";
  document.querySelectorAll("[data-seg-nama]").forEach(el => el.textContent = seg.nama);
  document.querySelectorAll("[data-seg-emoji]").forEach(el => el.textContent = seg.emoji);
  document.querySelectorAll("[data-seg-desc]").forEach(el => el.textContent = seg.deskripsi);
  const pct = Math.round(PROMO_DISKON * 100);
  document.querySelectorAll("[data-promo-pct]").forEach(el => el.textContent = pct + "%");

  /* Tabs */
  const tabsEl = document.getElementById("tier-tabs");
  const panelsEl = document.getElementById("tier-panels");
  tabsEl.innerHTML = ""; panelsEl.innerHTML = "";

  seg.tiers.forEach((tier, i) => {
    const totalNormal = tier.produk.reduce((s,p)=>s+p.harga,0);
    const totalPromo = Math.round(totalNormal * (1 - PROMO_DISKON));
    const hemat = totalNormal - totalPromo;
    const fillPct = Math.min(100, Math.round(totalNormal / tier.budgetMaks * 100));

    /* tab */
    const tab = document.createElement("button");
    tab.className = "tier-tab" + (i===0 ? " active":"");
    tab.setAttribute("role","tab");
    tab.dataset.tier = tier.id;
    tab.innerHTML = `<span class="t-icon">${tier.icon}</span><span class="t-name">${tier.nama}</span><span class="t-range">${tier.range}</span>`;
    tab.addEventListener("click", ()=>activateTier(tier.id));
    tabsEl.appendChild(tab);

    /* panel */
    const panel = document.createElement("div");
    panel.className = "tier-panel" + (i===0 ? " active":"");
    panel.id = "panel-" + tier.id;

    const rows = tier.produk.map(p => `
      <div class="product">
        <div class="p-thumb" data-foto="${p.foto}" data-judul="${p.nama}" data-sub="${p.peran}" data-harga="${rupiah(p.harga)} / satuan" data-ikon="${p.ikon}">
          <img src="${p.foto}" alt="${p.nama}" onerror="this.replaceWith(Object.assign(document.createElement('span'),{textContent:'${p.ikon}'}))">
        </div>
        <div><div class="p-name">${p.nama}</div><div class="p-role">${p.peran}</div></div>
        <div class="p-price">${rupiah(p.harga)}<small>harga satuan</small></div>
      </div>`).join("");

    panel.innerHTML = `
      <div class="panel-head">
        <div>
          <h3>${tier.icon} ${tier.judul}</h3>
          <p class="p-note">${tier.catatan}</p>
        </div>
        <div class="promo-box">
          <div class="promo-row normal"><span class="lbl">💰 Total Normal</span><span class="val">${rupiah(totalNormal)}</span></div>
          <div class="promo-row promo"><span class="lbl">🎁 Harga Setelah Promo</span><span class="val">${rupiah(totalPromo)}</span></div>
          <div class="promo-row hemat"><span class="lbl">💸 Kamu Hemat</span><span class="val">${rupiah(hemat)} (${pct}%)</span></div>
        </div>
      </div>
      <div class="products">${rows}</div>
      <p class="satuan-note">ℹ️ Diskon ${pct}% hanya berlaku untuk pembelian <strong>1 paket lengkap</strong>. Pembelian per barang (satuan) menggunakan harga normal.</p>
      <div class="budget-bar"><div class="budget-fill" data-fill="${fillPct}"></div></div>
      <div class="budget-label"><span>Total normal: ${rupiah(totalNormal)}</span><span>Range budget: ${tier.range}</span></div>`;
    panelsEl.appendChild(panel);
  });

  /* Tips */
  const tipsEl = document.getElementById("tips-grid");
  if(tipsEl){
    tipsEl.innerHTML = seg.tips.map(t => `
      <div class="tip"><span class="tip-ico">${t.ikon}</span><h4>${t.judul}</h4><p>${t.isi}</p></div>`).join("");
  }

  renderSubSwitch();
  animateActiveBar();
}

/* ---------- Sub-segmen (mis. Brightening ⇄ Flek Hitam) ---------- */
function getSubKeys(){
  const raw = document.body.dataset.sub;
  return raw ? raw.split(",").map(s=>s.trim()) : null;
}

function showSubChooser(){
  const keys = getSubKeys();
  if(!keys) return;
  let ov = document.getElementById("sub-chooser");
  if(!ov){
    ov = document.createElement("div");
    ov.id = "sub-chooser";
    ov.className = "sub-chooser";
    ov.innerHTML = `
      <div class="sc-card">
        <div class="sc-emoji">🌸</div>
        <h3>Apa kebutuhan kulitmu?</h3>
        <p>Pilih salah satu — kamu bisa menggantinya kapan saja.</p>
        <div class="sc-opts"></div>
      </div>`;
    document.body.appendChild(ov);
  }
  const opts = ov.querySelector(".sc-opts");
  opts.innerHTML = "";
  keys.forEach(k => {
    const s = SGB_DATA[k];
    const btn = document.createElement("button");
    btn.className = "sc-opt";
    btn.style.setProperty("--c", s.tema.utama);
    btn.style.setProperty("--cm", s.tema.muda);
    btn.innerHTML = `<span class="sc-ico">${s.emoji}</span><span class="sc-txt"><b>${s.nama.replace(" Solution","")}</b><small>${s.deskripsi}</small></span>`;
    btn.addEventListener("click", ()=>{
      ov.classList.remove("open");
      document.body.style.overflow = "";
      renderSegment(k);
      window.scrollTo({top:0});
    });
    opts.appendChild(btn);
  });
  ov.classList.add("open");
  document.body.style.overflow = "hidden";
}

function renderSubSwitch(){
  const keys = getSubKeys();
  if(!keys) return;
  const current = document.body.dataset.segment;
  let pill = document.getElementById("sub-switch");
  if(!pill){
    pill = document.createElement("button");
    pill.id = "sub-switch";
    pill.className = "sub-switch";
    pill.addEventListener("click", showSubChooser);
    const anchor = document.querySelector(".hero .hero-facts");
    if(anchor) anchor.parentNode.insertBefore(pill, anchor);
  }
  const other = keys.find(k => k !== current);
  const so = SGB_DATA[other];
  pill.innerHTML = `🔄 Ganti ke <b>${so.emoji} ${so.nama.replace(" Solution","")}</b>`;
}

function initGlobal(){
  document.addEventListener("click", e => {
    const trg = e.target.closest("[data-foto]");
    if(trg){
      openLightbox({
        foto: trg.dataset.foto, judul: trg.dataset.judul,
        sub: trg.dataset.sub, harga: trg.dataset.harga, ikon: trg.dataset.ikon
      });
    }
    if(e.target.closest(".lb-close") || e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", e => { if(e.key === "Escape") closeLightbox(); });
}

function activateTier(id){
  document.querySelectorAll(".tier-tab").forEach(t=>{
    t.classList.toggle("active", t.dataset.tier === id);
    t.setAttribute("aria-selected", t.dataset.tier === id);
  });
  document.querySelectorAll(".tier-panel").forEach(p=>{
    p.classList.toggle("active", p.id === "panel-"+id);
  });
  animateActiveBar();
}

function animateActiveBar(){
  const fill = document.querySelector(".tier-panel.active .budget-fill");
  if(fill){
    fill.style.width = "0";
    requestAnimationFrame(()=>requestAnimationFrame(()=>{ fill.style.width = fill.dataset.fill + "%"; }));
  }
  /* animasi pop kartu produk, berurutan */
  const cards = document.querySelectorAll(".tier-panel.active .product");
  cards.forEach((c,i)=>{
    c.classList.remove("pop");
    void c.offsetWidth;                 /* reset animasi */
    c.style.animationDelay = (i*80) + "ms";
    c.classList.add("pop");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initGlobal();
  renderSegment();
  if(getSubKeys()) showSubChooser();   /* popup pilihan saat halaman dibuka */
});

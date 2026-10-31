// ============================================================================
// LOGIA HORLOGERIE — Interactive Storefront Application
// ============================================================================

const CURRENCY_RATES = {
  USD: { symbol: '$', rate: 1, code: 'USD' },
  EUR: { symbol: '€', rate: 0.92, code: 'EUR' },
  GBP: { symbol: '£', rate: 0.79, code: 'GBP' },
  CHF: { symbol: 'Fr. ', rate: 0.88, code: 'CHF' },
  BRL: { symbol: 'R$ ', rate: 5.15, code: 'BRL' }
};

const WATCH_CATALOG = [
  {
    id: 'logia-nautilus-01',
    name: 'Sovereign Marin L-09',
    ref: 'REF. LG-0901-NV',
    category: 'Automatic',
    priceUSD: 4850,
    diameter: 40,
    calibre: 'Calibre L-09 Automatic',
    powerReserve: '72 Hours',
    waterResistance: '100m / 10 ATM',
    badge: 'Flagship',
    dialPrimary: '#112240',
    dialSecondary: '#060d1a',
    accentColor: '#c5a059',
    subdials: 'small-seconds',
    straps: ['Navy Alligator', 'Brushed Steel', 'Off-White Sailcloth'],
    description: 'Our signature manufacture automatic dress-sport timepiece with a hand-guilloché deep navy dial, ivory Super-LumiNova indices, and 72-hour twin-barrel movement.'
  },
  {
    id: 'logia-regatta-02',
    name: 'Regatta Chronograph IV',
    ref: 'REF. LG-4020-CH',
    category: 'Chronograph',
    priceUSD: 6400,
    diameter: 41,
    calibre: 'Calibre L-42 Column-Wheel',
    powerReserve: '65 Hours',
    waterResistance: '120m / 12 ATM',
    badge: 'Column-Wheel',
    dialPrimary: '#f7f5f0',
    dialSecondary: '#ddd6c7',
    accentColor: '#112240',
    subdials: 'tricompax',
    straps: ['Navy Alligator', 'Integrated Steel', 'Perforated Calfskin'],
    description: 'A crisp off-white porcelain-enamel dial paired with contrasting midnight-navy chronograph registers ("Panda" configuration) and a vertical clutch column-wheel mechanism.'
  },
  {
    id: 'logia-abyssal-03',
    name: 'Abyssal Scaphandre 300',
    ref: 'REF. LG-3005-DV',
    category: 'Diver',
    priceUSD: 3950,
    diameter: 42,
    calibre: 'Calibre L-14 Antimagnetic',
    powerReserve: '70 Hours',
    waterResistance: '300m / 30 ATM',
    badge: 'ISO 6425 Diver',
    dialPrimary: '#0a1628',
    dialSecondary: '#1b3358',
    accentColor: '#dfc184',
    subdials: 'diver-bezel',
    straps: ['Vulcanized Navy Rubber', 'Titanium Bracelet', 'Off-White NATO'],
    description: 'Engineered for saturation diving with a unidirectional ceramic navy bezel, warm ivory luminous markers, and a helium escape valve flush-mounted at 9 o’clock.'
  },
  {
    id: 'logia-atelier-04',
    name: 'Atelier Classique Émail',
    ref: 'REF. LG-1924-DR',
    category: 'Dress',
    priceUSD: 5200,
    diameter: 38,
    calibre: 'Calibre L-01 Hand-Wound',
    powerReserve: '80 Hours',
    waterResistance: '50m / 5 ATM',
    badge: 'Ultra-Thin 7.4mm',
    dialPrimary: '#fcfbf9',
    dialSecondary: '#ede9df',
    accentColor: '#1b3358',
    subdials: 'minimal',
    straps: ['Navy Alligator', 'Espresso Shell Cordovan', 'Milanese Mesh'],
    description: 'An ultra-thin 38mm dress watch honoring Logia’s 1924 Geneva archive, featuring thermally blued steel Breguet hands over a warm off-white Grand Feu enamel dial.'
  },
  {
    id: 'logia-meridian-05',
    name: 'Meridian Worldtimer GMT',
    ref: 'REF. LG-2400-GM',
    category: 'GMT',
    priceUSD: 5850,
    diameter: 40,
    calibre: 'Calibre L-24 True-GMT',
    powerReserve: '72 Hours',
    waterResistance: '150m / 15 ATM',
    badge: 'Dual-Time',
    dialPrimary: '#1b3358',
    dialSecondary: '#0a1628',
    accentColor: '#f7f5f0',
    subdials: 'gmt-ring',
    straps: ['Brushed Steel', 'Navy Alligator', 'Two-Tone Jubilee'],
    description: 'Track two time zones effortlessly with a bi-color navy and off-white sapphire 24-hour bezel and an independently jumping local hour hand.'
  },
  {
    id: 'logia-celeste-06',
    name: 'Astronome Moonphase',
    ref: 'REF. LG-8801-DR',
    category: 'Dress',
    priceUSD: 8900,
    diameter: 39,
    calibre: 'Calibre L-88 Perpetual Moon',
    powerReserve: '68 Hours',
    waterResistance: '50m / 5 ATM',
    badge: 'Astronomical',
    dialPrimary: '#060d1a',
    dialSecondary: '#112240',
    accentColor: '#dfc184',
    subdials: 'moonphase',
    straps: ['Navy Alligator', 'Satin Off-White Leather', 'Rose Gold Clasp'],
    description: 'Crafted from genuine lapis-toned navy aventurine glass with a solid gold lunar disc accurate to one day in 122 years.'
  },
  {
    id: 'logia-equinox-07',
    name: 'Equinox Flyback Chrono',
    ref: 'REF. LG-7710-CH',
    category: 'Chronograph',
    priceUSD: 7650,
    diameter: 41,
    calibre: 'Calibre L-77 High-Beat',
    powerReserve: '60 Hours',
    waterResistance: '100m / 10 ATM',
    badge: '36,000 vph',
    dialPrimary: '#112240',
    dialSecondary: '#274675',
    accentColor: '#f7f5f0',
    subdials: 'tricompax',
    straps: ['Integrated Steel', 'Navy Alligator', 'Off-White Sailcloth'],
    description: 'High-frequency 5Hz flyback chronograph with inverse off-white subdials and a tachymetric scale engraved directly into the brushed bezel.'
  },
  {
    id: 'logia-tourbillon-08',
    name: 'Souverain Tourbillon Volant',
    ref: 'REF. LG-9990-AT',
    category: 'Automatic',
    priceUSD: 14200,
    diameter: 40,
    calibre: 'Calibre L-99 Flying Tourbillon',
    powerReserve: '96 Hours',
    waterResistance: '50m / 5 ATM',
    badge: 'Haute Horlogerie',
    dialPrimary: '#0a1628',
    dialSecondary: '#060d1a',
    accentColor: '#c5a059',
    subdials: 'tourbillon',
    straps: ['Hand-Stitched Navy Alligator', 'Platinum Deployment'],
    description: 'The pinnacle of Logia watchmaking: a 60-second flying tourbillon cage at 6 o’clock balanced by a micro-rotor in solid 950 platinum.'
  }
];

// Application State
let state = {
  searchQuery: '',
  selectedCategory: 'all',
  maxPriceUSD: 15000,
  sortBy: 'featured',
  wishlistOnly: false,
  wishlist: [],
  cart: [],
  promoCode: null,
  settings: {
    userName: 'Collector',
    userEmail: 'concierge@logia-geneve.ch',
    wristSize: '17.5 cm',
    currency: 'USD',
    midnightTheme: false,
    use24Hour: false,
    address: '',
    allocationAlerts: true,
    orders: []
  }
};

// Load state from localStorage
function loadPersistedState() {
  try {
    const savedCart = localStorage.getItem('logia_cart');
    const savedWishlist = localStorage.getItem('logia_wishlist');
    const savedSettings = localStorage.getItem('logia_settings');

    if (savedCart) state.cart = JSON.parse(savedCart);
    if (savedWishlist) state.wishlist = JSON.parse(savedWishlist);
    if (savedSettings) {
      state.settings = { ...state.settings, ...JSON.parse(savedSettings) };
    }
  } catch (e) {
    console.warn('Storage access unavailable, using in-memory session state.');
  }
}

function savePersistedState() {
  try {
    localStorage.setItem('logia_cart', JSON.stringify(state.cart));
    localStorage.setItem('logia_wishlist', JSON.stringify(state.wishlist));
    localStorage.setItem('logia_settings', JSON.stringify(state.settings));
  } catch (e) {
    // ignore storage quota errors
  }
}

// Format Currency according to User Settings
function formatPrice(usdAmount) {
  const curr = CURRENCY_RATES[state.settings.currency] || CURRENCY_RATES.USD;
  const converted = Math.round(usdAmount * curr.rate);
  return `${curr.symbol}${converted.toLocaleString('en-US')}`;
}

// Generate Custom SVG Illustration for Each Watch Card & Modal
function renderWatchSVG(watch, size = 180) {
  const isLightDial = watch.dialPrimary === '#f7f5f0' || watch.dialPrimary === '#fcfbf9';
  const markerColor = isLightDial ? '#0a1628' : '#f7f5f0';
  const handColor = isLightDial ? '#112240' : '#f7f5f0';
  const subRingColor = isLightDial ? '#112240' : '#f7f5f0';

  let complicationMarkup = '';
  if (watch.subdials === 'tricompax') {
    complicationMarkup = `
      <circle cx="70" cy="100" r="13" fill="${subRingColor}" fill-opacity="0.14" stroke="${watch.accentColor}" stroke-width="1"/>
      <line x1="70" y1="100" x2="70" y2="91" stroke="${watch.accentColor}" stroke-width="1.2"/>
      <circle cx="130" cy="100" r="13" fill="${subRingColor}" fill-opacity="0.14" stroke="${watch.accentColor}" stroke-width="1"/>
      <line x1="130" y1="100" x2="137" y2="100" stroke="${watch.accentColor}" stroke-width="1.2"/>
      <circle cx="100" cy="130" r="13" fill="${subRingColor}" fill-opacity="0.14" stroke="${watch.accentColor}" stroke-width="1"/>
      <line x1="100" y1="130" x2="100" y2="120" stroke="${watch.accentColor}" stroke-width="1.2"/>
    `;
  } else if (watch.subdials === 'moonphase') {
    complicationMarkup = `
      <path d="M82 132 A18 18 0 0 1 118 132 Z" fill="#1b3358" stroke="${watch.accentColor}" stroke-width="1"/>
      <circle cx="105" cy="124" r="5.5" fill="#dfc184"/>
      <circle cx="92" cy="126" r="1" fill="#ffffff"/>
      <circle cx="112" cy="128" r="1" fill="#ffffff"/>
    `;
  } else if (watch.subdials === 'tourbillon') {
    complicationMarkup = `
      <circle cx="100" cy="132" r="15" fill="#060d1a" stroke="#c5a059" stroke-width="1.4"/>
      <path d="M88 132 L112 132 M100 120 L100 144" stroke="#c5a059" stroke-width="1"/>
      <circle cx="100" cy="132" r="6" fill="none" stroke="#f7f5f0" stroke-width="1"/>
    `;
  } else if (watch.subdials === 'gmt-ring') {
    complicationMarkup = `
      <circle cx="100" cy="100" r="52" fill="none" stroke="#c5a059" stroke-width="1.2" stroke-dasharray="4 3"/>
      <polygon points="100,48 96,55 104,55" fill="#c5a059"/>
    `;
  } else {
    complicationMarkup = `
      <circle cx="100" cy="130" r="12" fill="none" stroke="${markerColor}" stroke-opacity="0.35" stroke-width="1"/>
      <line x1="100" y1="130" x2="100" y2="121" stroke="${watch.accentColor}" stroke-width="1.2"/>
    `;
  }

  return `
    <svg viewBox="0 0 200 220" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Top & Bottom Strap -->
      <rect x="72" y="4" width="56" height="36" rx="5" fill="#0a1628" stroke="#c5a059" stroke-width="0.8"/>
      <rect x="72" y="180" width="56" height="36" rx="5" fill="#0a1628" stroke="#c5a059" stroke-width="0.8"/>
      <!-- Case Lugs -->
      <path d="M60 44 L72 26 L78 48 Z" fill="#d8d3c8"/>
      <path d="M140 44 L128 26 L122 48 Z" fill="#d8d3c8"/>
      <path d="M60 176 L72 194 L78 172 Z" fill="#d8d3c8"/>
      <path d="M140 176 L128 194 L122 172 Z" fill="#d8d3c8"/>
      <!-- Winding Crown -->
      <rect x="168" y="92" width="9" height="16" rx="2" fill="#c5a059"/>
      <!-- Outer Metallic Case -->
      <circle cx="100" cy="100" r="70" fill="#e6e2d8" stroke="#b8b09f" stroke-width="2"/>
      <circle cx="100" cy="100" r="63" fill="#0a1628" stroke="#c5a059" stroke-width="1"/>
      <!-- Watch Dial -->
      <circle cx="100" cy="100" r="58" fill="${watch.dialPrimary}"/>
      <!-- Indices -->
      <g stroke="${markerColor}" stroke-width="2" stroke-linecap="round">
        <line x1="100" y1="46" x2="100" y2="54" stroke="${watch.accentColor}" stroke-width="2.5"/>
        <line x1="100" y1="146" x2="100" y2="154"/>
        <line x1="46" y1="100" x2="54" y2="100"/>
        <line x1="146" y1="100" x2="154" y2="100"/>
        <line x1="127" y1="53" x2="123" y2="60" stroke-width="1.4"/>
        <line x1="147" y1="73" x2="140" y2="77" stroke-width="1.4"/>
        <line x1="147" y1="127" x2="140" y2="123" stroke-width="1.4"/>
        <line x1="127" y1="147" x2="123" y2="140" stroke-width="1.4"/>
        <line x1="73" y1="147" x2="77" y2="140" stroke-width="1.4"/>
        <line x1="53" y1="127" x2="60" y2="123" stroke-width="1.4"/>
        <line x1="53" y1="73" x2="60" y2="77" stroke-width="1.4"/>
        <line x1="73" y1="53" x2="77" y2="60" stroke-width="1.4"/>
      </g>
      <!-- Logia Wordmark -->
      <text x="100" y="74" text-anchor="middle" fill="${markerColor}" font-family="Cormorant Garamond, serif" font-size="10" font-weight="700" letter-spacing="2">LOGIA</text>
      <text x="100" y="82" text-anchor="middle" fill="${watch.accentColor}" font-family="Inter, sans-serif" font-size="4.5" letter-spacing="1">GENÈVE</text>
      ${complicationMarkup}
      <!-- Watch Hands (10:10 aesthetic poise) -->
      <line x1="100" y1="100" x2="76" y2="82" stroke="${handColor}" stroke-width="3" stroke-linecap="round"/>
      <line x1="100" y1="100" x2="132" y2="76" stroke="${handColor}" stroke-width="2.2" stroke-linecap="round"/>
      <line x1="100" y1="108" x2="114" y2="56" stroke="#c5a059" stroke-width="1.1" stroke-linecap="round"/>
      <circle cx="100" cy="100" r="3" fill="#c5a059"/>
    </svg>
  `;
}

// ============================================================================
// Live Hero Mechanical Clock
// ============================================================================
function updateHeroClock() {
  const now = new Date();
  const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
  const minutes = now.getMinutes() + seconds / 60;
  const hours = (now.getHours() % 12) + minutes / 60;

  const secAngle = seconds * 6;
  const minAngle = minutes * 6;
  const hourAngle = hours * 30;

  const hourHand = document.getElementById('heroHourHand');
  const minHand = document.getElementById('heroMinuteHand');
  const secHand = document.getElementById('heroSecondHand');
  const dateText = document.getElementById('heroWatchDate');
  const timeLabel = document.getElementById('liveWatchTimeLabel');

  if (hourHand && minHand && secHand) {
    hourHand.setAttribute('transform', `rotate(${hourAngle.toFixed(2)} 130 130)`);
    minHand.setAttribute('transform', `rotate(${minAngle.toFixed(2)} 130 130)`);
    secHand.setAttribute('transform', `rotate(${secAngle.toFixed(2)} 130 130)`);
  }
  if (dateText) {
    dateText.textContent = String(now.getDate()).padStart(2, '0');
  }
  if (timeLabel) {
    const formattedTime = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: !state.settings.use24Hour
    });
    timeLabel.textContent = `Geneva Reference Time: ${formattedTime} • Interactive Dial`;
  }
  requestAnimationFrame(updateHeroClock);
}

function setHeroDial(stop1, stop2, btnEl) {
  const s1 = document.getElementById('heroDialStop1');
  const s2 = document.getElementById('heroDialStop2');
  if (s1 && s2) {
    s1.setAttribute('stop-color', stop1);
    s2.setAttribute('stop-color', stop2);
  }
  document.querySelectorAll('.dial-dot').forEach(dot => dot.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
}

// ============================================================================
// Catalog Filtering, Search & Rendering
// ============================================================================
function getFilteredWatches() {
  const q = state.searchQuery.trim().toLowerCase();

  let list = WATCH_CATALOG.filter(w => {
    const matchesCategory = state.selectedCategory === 'all' || w.category === state.selectedCategory;
    const matchesPrice = w.priceUSD <= state.maxPriceUSD;
    const matchesWishlist = !state.wishlistOnly || state.wishlist.includes(w.id);
    const matchesQuery =
      !q ||
      w.name.toLowerCase().includes(q) ||
      w.category.toLowerCase().includes(q) ||
      w.ref.toLowerCase().includes(q) ||
      w.calibre.toLowerCase().includes(q) ||
      w.description.toLowerCase().includes(q);

    return matchesCategory && matchesPrice && matchesWishlist && matchesQuery;
  });

  if (state.sortBy === 'price-asc') {
    list.sort((a, b) => a.priceUSD - b.priceUSD);
  } else if (state.sortBy === 'price-desc') {
    list.sort((a, b) => b.priceUSD - a.priceUSD);
  } else if (state.sortBy === 'name-asc') {
    list.sort((a, b) => a.name.localeCompare(b.name));
  } else if (state.sortBy === 'diameter-asc') {
    list.sort((a, b) => a.diameter - b.diameter);
  }

  return list;
}

function renderCatalog() {
  const grid = document.getElementById('productGrid');
  const countLabel = document.getElementById('catalogCountLabel');
  const banner = document.getElementById('activeFilterBanner');
  const bannerText = document.getElementById('activeFilterText');
  const maxPriceLabel = document.getElementById('maxPriceLabel');

  if (maxPriceLabel) {
    maxPriceLabel.textContent = formatPrice(state.maxPriceUSD);
  }

  const filtered = getFilteredWatches();

  // Update count subtitle
  if (countLabel) {
    countLabel.textContent = `Showing ${filtered.length} of ${WATCH_CATALOG.length} precision timepieces`;
  }

  // Update active filter banner
  const activeReasons = [];
  if (state.searchQuery.trim()) activeReasons.push(`Search: "${state.searchQuery.trim()}"`);
  if (state.selectedCategory !== 'all') activeReasons.push(`Category: ${state.selectedCategory}`);
  if (state.maxPriceUSD < 15000) activeReasons.push(`Max Price: ${formatPrice(state.maxPriceUSD)}`);
  if (state.wishlistOnly) activeReasons.push(`Saved Wishlist Only`);

  if (activeReasons.length > 0) {
    banner.classList.add('visible');
    bannerText.textContent = `Active Filters — ${activeReasons.join(' • ')}`;
  } else {
    banner.classList.remove('visible');
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-catalog" style="grid-column: 1 / -1;">
        <h3>No matching timepieces found</h3>
        <p>We couldn't find any Logia watches matching your current search or filter criteria.</p>
        <button type="button" class="btn-add-cart" onclick="resetCatalogFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map(watch => {
      const isWishlisted = state.wishlist.includes(watch.id);
      return `
        <article class="watch-card" data-id="${watch.id}">
          <div class="watch-card-top" onclick="openWatchModal('${watch.id}')">
            <span class="watch-badge">${watch.badge}</span>
            <button
              type="button"
              class="wishlist-btn ${isWishlisted ? 'active' : ''}"
              onclick="event.stopPropagation(); toggleWishlistItem('${watch.id}')"
              title="${isWishlisted ? 'Remove from Wishlist' : 'Save to Wishlist'}"
              aria-label="Save ${watch.name} to wishlist"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <div class="watch-svg-wrap">
              ${renderWatchSVG(watch, 175)}
            </div>
          </div>

          <div class="watch-card-body">
            <div class="watch-meta-row">
              <span>${watch.category}</span>
              <span>${watch.ref}</span>
            </div>
            <h3 class="watch-title" onclick="openWatchModal('${watch.id}')">${watch.name}</h3>
            <div class="watch-specs-mini">
              <span>${watch.diameter}mm</span>
              <span>${watch.calibre}</span>
              <span>${watch.waterResistance.split(' ')[0]}</span>
            </div>
            <div class="watch-card-footer">
              <div class="watch-price">${formatPrice(watch.priceUSD)}</div>
              <div class="card-actions">
                <button type="button" class="btn-quickview" onclick="openWatchModal('${watch.id}')">Inspect</button>
                <button type="button" class="btn-add-cart" onclick="addToCart('${watch.id}', '${watch.straps[0]}')">+ Bag</button>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join('');
}

// Instant Search Input & Suggestions Dropdown
function setupSearchListeners() {
  const searchInput = document.getElementById('catalogSearchInput');
  const clearBtn = document.getElementById('searchClearBtn');
  const suggestionsBox = document.getElementById('searchSuggestions');

  searchInput.addEventListener('input', e => {
    const val = e.target.value;
    state.searchQuery = val;
    clearBtn.classList.toggle('visible', val.length > 0);
    renderCatalog();
    renderSearchSuggestions(val);
  });

  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      suggestionsBox.classList.remove('open');
      scrollToCatalog();
    }
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    clearBtn.classList.remove('visible');
    suggestionsBox.classList.remove('open');
    renderCatalog();
    searchInput.focus();
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrapper')) {
      suggestionsBox.classList.remove('open');
    }
  });
}

function renderSearchSuggestions(rawQuery) {
  const suggestionsBox = document.getElementById('searchSuggestions');
  const q = rawQuery.trim().toLowerCase();
  if (!q) {
    suggestionsBox.classList.remove('open');
    return;
  }

  const matches = WATCH_CATALOG.filter(
    w =>
      w.name.toLowerCase().includes(q) ||
      w.category.toLowerCase().includes(q) ||
      w.ref.toLowerCase().includes(q) ||
      w.calibre.toLowerCase().includes(q)
  ).slice(0, 5);

  if (matches.length === 0) {
    suggestionsBox.innerHTML = `
      <div class="suggestion-item" style="cursor: default;">
        <span class="suggestion-cat">No direct match for "${rawQuery}"</span>
      </div>
    `;
    suggestionsBox.classList.add('open');
    return;
  }

  suggestionsBox.innerHTML = matches
    .map(
      w => `
      <div class="suggestion-item" onclick="selectSearchSuggestion('${w.id}')">
        <div class="suggestion-meta">
          <span class="suggestion-name">${w.name}</span>
          <span class="suggestion-cat">${w.category} &bull; ${w.ref}</span>
        </div>
        <span class="suggestion-price">${formatPrice(w.priceUSD)}</span>
      </div>
    `
    )
    .join('');
  suggestionsBox.classList.add('open');
}

function selectSearchSuggestion(watchId) {
  const suggestionsBox = document.getElementById('searchSuggestions');
  suggestionsBox.classList.remove('open');
  openWatchModal(watchId);
}

function filterByCategory(category) {
  state.selectedCategory = category;
  state.wishlistOnly = false;

  document.querySelectorAll('.pill-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === category);
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.navCat === category);
  });

  renderCatalog();
}

function resetCatalogFilters() {
  state.searchQuery = '';
  state.selectedCategory = 'all';
  state.maxPriceUSD = 15000;
  state.sortBy = 'featured';
  state.wishlistOnly = false;

  const searchInput = document.getElementById('catalogSearchInput');
  const clearBtn = document.getElementById('searchClearBtn');
  const priceSlider = document.getElementById('maxPriceRange');
  const sortSelect = document.getElementById('sortSelect');

  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.classList.remove('visible');
  if (priceSlider) priceSlider.value = 15000;
  if (sortSelect) sortSelect.value = 'featured';

  filterByCategory('all');
}

function scrollToCatalog() {
  const el = document.getElementById('catalogSection');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ============================================================================
// Wishlist Management
// ============================================================================
function toggleWishlistItem(watchId) {
  const idx = state.wishlist.indexOf(watchId);
  const watch = WATCH_CATALOG.find(w => w.id === watchId);
  if (idx === -1) {
    state.wishlist.push(watchId);
    showToast(`Saved ${watch ? watch.name : 'Timepiece'} to your wishlist`);
  } else {
    state.wishlist.splice(idx, 1);
    showToast(`Removed from wishlist`);
  }
  savePersistedState();
  updateHeaderBadges();
  renderCatalog();
}

function toggleWishlistView() {
  state.wishlistOnly = !state.wishlistOnly;
  renderCatalog();
  scrollToCatalog();
  if (state.wishlistOnly) {
    showToast('Filtering catalog by your saved wishlist');
  }
}

// ============================================================================
// Watch Quick-View & Strap Customizer Modal
// ============================================================================
let activeModalStrap = '';

function openWatchModal(watchId) {
  const watch = WATCH_CATALOG.find(w => w.id === watchId);
  if (!watch) return;

  activeModalStrap = watch.straps[0];
  const modalContainer = document.getElementById('watchModalContainer');
  const modalContent = document.getElementById('watchModalContent');
  const backdrop = document.getElementById('overlayBackdrop');

  modalContent.innerHTML = `
    <div class="modal-preview-pane">
      <span class="watch-badge" style="top: 1.25rem; left: 1.25rem;">${watch.badge}</span>
      ${renderWatchSVG(watch, 240)}
      <p style="font-size: 0.78rem; color: var(--offwhite-300); margin-top: 1rem; letter-spacing: 0.08em; text-transform: uppercase;">
        ${watch.ref} &bull; Swiss Manufacture
      </p>
    </div>

    <div class="modal-details-pane">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div>
          <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--text-muted);">
            ${watch.category} Collection
          </span>
          <h2 id="modalWatchTitle" style="font-size: 1.85rem; line-height: 1.15; margin-top: 0.2rem;">
            ${watch.name}
          </h2>
        </div>
        <button type="button" class="close-btn" style="background: var(--bg-subtle); color: var(--text-primary);" onclick="closeAllOverlays()">&times;</button>
      </div>

      <div class="watch-price" style="font-size: 1.7rem; margin: 0.65rem 0;">
        ${formatPrice(watch.priceUSD)}
      </div>

      <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.15rem;">
        ${watch.description}
      </p>

      <div>
        <label style="font-size: 0.76rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted);">
          Select Bespoke Strap (${state.settings.wristSize} sizing):
        </label>
        <div class="strap-options" id="modalStrapOptions">
          ${watch.straps
            .map(
              (strap, i) => `
              <button
                type="button"
                class="strap-btn ${i === 0 ? 'active' : ''}"
                onclick="selectModalStrap('${strap}', this)"
              >${strap}</button>
            `
            )
            .join('')}
        </div>
      </div>

      <div class="spec-table">
        <div class="spec-row">
          <span>Movement</span>
          <span>${watch.calibre}</span>
        </div>
        <div class="spec-row">
          <span>Power Reserve</span>
          <span>${watch.powerReserve}</span>
        </div>
        <div class="spec-row">
          <span>Case Diameter</span>
          <span>${watch.diameter} mm</span>
        </div>
        <div class="spec-row">
          <span>Water Resistance</span>
          <span>${watch.waterResistance}</span>
        </div>
      </div>

      <div style="display: flex; gap: 0.75rem; margin-top: auto;">
        <button
          type="button"
          class="checkout-btn"
          style="margin-top: 0; flex: 1;"
          onclick="addToCart('${watch.id}', activeModalStrap); closeAllOverlays(); openCartDrawer();"
        >
          Add to Acquisition Bag
        </button>
      </div>
    </div>
  `;

  backdrop.classList.add('open');
  modalContainer.classList.add('open');
}

function selectModalStrap(strapName, btnEl) {
  activeModalStrap = strapName;
  document.querySelectorAll('#modalStrapOptions .strap-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
}

// ============================================================================
// Shopping Cart Drawer & Checkout
// ============================================================================
function addToCart(watchId, strap) {
  const watch = WATCH_CATALOG.find(w => w.id === watchId);
  if (!watch) return;

  const chosenStrap = strap || watch.straps[0];
  const existing = state.cart.find(item => item.id === watchId && item.strap === chosenStrap);

  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      id: watch.id,
      strap: chosenStrap,
      qty: 1
    });
  }

  savePersistedState();
  updateHeaderBadges();
  renderCartDrawer();
  showToast(`Added ${watch.name} (${chosenStrap}) to your bag`);
}

function updateCartQty(index, delta) {
  if (!state.cart[index]) return;
  state.cart[index].qty += delta;
  if (state.cart[index].qty <= 0) {
    state.cart.splice(index, 1);
  }
  savePersistedState();
  updateHeaderBadges();
  renderCartDrawer();
}

function removeCartItem(index) {
  state.cart.splice(index, 1);
  savePersistedState();
  updateHeaderBadges();
  renderCartDrawer();
}

function applyPromoCode() {
  const input = document.getElementById('promoCodeInput');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === 'LOGIA10') {
    state.promoCode = { code: 'LOGIA10', type: 'percent', value: 0.1, label: 'LOGIA10 (10% Off)' };
    showToast('Promo code LOGIA10 applied: 10% collector discount');
  } else if (code === 'HOROLOGY') {
    state.promoCode = { code: 'HOROLOGY', type: 'fixed', value: 250, label: 'HOROLOGY ($250 Off)' };
    showToast('Promo code HOROLOGY applied: $250 off');
  } else {
    state.promoCode = null;
    showToast('Invalid promo code. Try LOGIA10 or HOROLOGY.');
  }
  renderCartDrawer();
}

function renderCartDrawer() {
  const container = document.getElementById('cartItemsContainer');
  const subtotalEl = document.getElementById('cartSubtotal');
  const discountRow = document.getElementById('cartDiscountRow');
  const discountLabel = document.getElementById('cartDiscountLabel');
  const discountVal = document.getElementById('cartDiscountVal');
  const totalEl = document.getElementById('cartTotal');

  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3.5rem 1rem;">
        <p style="font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; margin-bottom: 0.5rem;">
          Your Acquisition Bag is Empty
        </p>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem;">
          Explore our navy and off-white horological collection to select your timepiece.
        </p>
        <button type="button" class="btn-add-cart" onclick="closeAllOverlays(); scrollToCatalog();">
          Browse Timepieces
        </button>
      </div>
    `;
    subtotalEl.textContent = formatPrice(0);
    discountRow.style.display = 'none';
    totalEl.textContent = formatPrice(0);
    return;
  }

  let subtotalUSD = 0;

  container.innerHTML = state.cart
    .map((item, idx) => {
      const watch = WATCH_CATALOG.find(w => w.id === item.id);
      if (!watch) return '';
      const lineTotalUSD = watch.priceUSD * item.qty;
      subtotalUSD += lineTotalUSD;

      return `
        <div class="cart-item">
          <div class="cart-item-thumb">
            ${renderWatchSVG(watch, 52)}
          </div>
          <div class="cart-item-info">
            <h4>${watch.name}</h4>
            <div class="cart-item-strap">Strap: ${item.strap} &bull; Wrist: ${state.settings.wristSize}</div>
            <div class="qty-controls">
              <button type="button" class="qty-btn" onclick="updateCartQty(${idx}, -1)">-</button>
              <span class="qty-val">${item.qty}</span>
              <button type="button" class="qty-btn" onclick="updateCartQty(${idx}, 1)">+</button>
            </div>
          </div>
          <div class="cart-item-right">
            <span class="cart-item-price">${formatPrice(lineTotalUSD)}</span>
            <button type="button" class="remove-item-btn" onclick="removeCartItem(${idx})">Remove</button>
          </div>
        </div>
      `;
    })
    .join('');

  let discountUSD = 0;
  if (state.promoCode) {
    if (state.promoCode.type === 'percent') {
      discountUSD = Math.round(subtotalUSD * state.promoCode.value);
    } else if (state.promoCode.type === 'fixed') {
      discountUSD = Math.min(subtotalUSD, state.promoCode.value);
    }
    discountRow.style.display = 'flex';
    discountLabel.textContent = state.promoCode.label;
    discountVal.textContent = `-${formatPrice(discountUSD)}`;
  } else {
    discountRow.style.display = 'none';
  }

  const finalUSD = Math.max(0, subtotalUSD - discountUSD);
  subtotalEl.textContent = formatPrice(subtotalUSD);
  totalEl.textContent = formatPrice(finalUSD);
}

function completeCheckout() {
  if (state.cart.length === 0) {
    showToast('Your acquisition bag is currently empty.');
    return;
  }

  let subtotalUSD = 0;
  const summaryNames = [];
  state.cart.forEach(item => {
    const w = WATCH_CATALOG.find(x => x.id === item.id);
    if (w) {
      subtotalUSD += w.priceUSD * item.qty;
      summaryNames.push(`${item.qty}x ${w.name}`);
    }
  });

  const orderRecord = {
    orderId: 'LG-' + Math.floor(100000 + Math.random() * 900000),
    date: new Date().toLocaleDateString(),
    items: summaryNames.join(', '),
    totalFormatted: document.getElementById('cartTotal').textContent
  };

  state.settings.orders.unshift(orderRecord);
  state.cart = [];
  state.promoCode = null;
  savePersistedState();
  updateHeaderBadges();
  renderCartDrawer();
  renderSettingsState();
  closeAllOverlays();
  showToast(`Order ${orderRecord.orderId} confirmed for ${state.settings.userName}! View in Collector Settings.`);
}

// ============================================================================
// User Settings Drawer & Preferences
// ============================================================================
function renderSettingsState() {
  const s = state.settings;

  const nameInput = document.getElementById('settingUserName');
  const emailInput = document.getElementById('settingUserEmail');
  const wristSelect = document.getElementById('settingWristSize');
  const currencySelect = document.getElementById('settingCurrency');
  const themeToggle = document.getElementById('settingMidnightTheme');
  const hour24Toggle = document.getElementById('setting24Hour');
  const addressInput = document.getElementById('settingAddress');
  const alertsToggle = document.getElementById('settingAllocationAlerts');
  const topCurrencyBtn = document.getElementById('topCurrencyIndicator');
  const orderList = document.getElementById('orderHistoryList');
  const greetingText = document.getElementById('heroGreetingText');

  if (nameInput) nameInput.value = s.userName;
  if (emailInput) emailInput.value = s.userEmail;
  if (wristSelect) wristSelect.value = s.wristSize;
  if (currencySelect) currencySelect.value = s.currency;
  if (themeToggle) themeToggle.checked = Boolean(s.midnightTheme);
  if (hour24Toggle) hour24Toggle.checked = Boolean(s.use24Hour);
  if (addressInput) addressInput.value = s.address || '';
  if (alertsToggle) alertsToggle.checked = Boolean(s.allocationAlerts);

  // Apply Midnight Navy Theme
  if (s.midnightTheme) {
    document.body.setAttribute('data-theme', 'midnight');
  } else {
    document.body.removeAttribute('data-theme');
  }

  // Update Top Bar Currency Indicator
  const currObj = CURRENCY_RATES[s.currency] || CURRENCY_RATES.USD;
  if (topCurrencyBtn) {
    topCurrencyBtn.textContent = `Currency: ${currObj.code} (${currObj.symbol.trim()})`;
  }

  // Personalize Hero Subtitle if custom user name is set
  if (greetingText && s.userName && s.userName !== 'Collector') {
    greetingText.textContent = `Welcome back, ${s.userName}. Every Logia timepiece is hand-assembled in Geneva, pairing deep oceanic navy dials with warm off-white luminescent indices and chronometer-certified calibres.`;
  }

  // Render Order History
  if (orderList) {
    if (!s.orders || s.orders.length === 0) {
      orderList.innerHTML = 'No completed acquisitions yet.';
    } else {
      orderList.innerHTML = s.orders
        .slice(0, 4)
        .map(
          o => `
          <div style="padding: 0.55rem 0; border-bottom: 1px solid var(--border-color);">
            <div style="display: flex; justify-content: space-between; font-weight: 600; color: var(--text-primary);">
              <span>${o.orderId}</span>
              <span>${o.totalFormatted}</span>
            </div>
            <div style="font-size: 0.76rem; color: var(--text-muted);">${o.items} &bull; ${o.date}</div>
          </div>
        `
        )
        .join('');
    }
  }
}

function toggleThemeImmediate(isMidnight) {
  state.settings.midnightTheme = isMidnight;
  if (isMidnight) {
    document.body.setAttribute('data-theme', 'midnight');
  } else {
    document.body.removeAttribute('data-theme');
  }
}

function previewCurrencyChange() {
  const currencySelect = document.getElementById('settingCurrency');
  if (currencySelect) {
    state.settings.currency = currencySelect.value;
    renderCatalog();
    renderCartDrawer();
    renderSettingsState();
  }
}

function saveUserSettings(e) {
  e.preventDefault();
  state.settings.userName = document.getElementById('settingUserName').value.trim() || 'Collector';
  state.settings.userEmail = document.getElementById('settingUserEmail').value.trim();
  state.settings.wristSize = document.getElementById('settingWristSize').value;
  state.settings.currency = document.getElementById('settingCurrency').value;
  state.settings.midnightTheme = document.getElementById('settingMidnightTheme').checked;
  state.settings.use24Hour = document.getElementById('setting24Hour').checked;
  state.settings.address = document.getElementById('settingAddress').value.trim();
  state.settings.allocationAlerts = document.getElementById('settingAllocationAlerts').checked;

  savePersistedState();
  renderSettingsState();
  renderCatalog();
  renderCartDrawer();
  closeAllOverlays();
  showToast(`Collector preferences saved for ${state.settings.userName}`);
}

// ============================================================================
// Drawer & Overlay Controls
// ============================================================================
function openCartDrawer() {
  closeAllOverlays();
  renderCartDrawer();
  document.getElementById('overlayBackdrop').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
}

function openSettingsDrawer() {
  closeAllOverlays();
  renderSettingsState();
  document.getElementById('overlayBackdrop').classList.add('open');
  document.getElementById('settingsDrawer').classList.add('open');
}

function closeAllOverlays() {
  document.getElementById('overlayBackdrop').classList.remove('open');
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('settingsDrawer').classList.remove('open');
  document.getElementById('watchModalContainer').classList.remove('open');
}

function updateHeaderBadges() {
  const cartCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const cartBadge = document.getElementById('cartBadge');
  const wishBadge = document.getElementById('wishlistBadge');

  if (cartBadge) cartBadge.textContent = cartCount;
  if (wishBadge) wishBadge.textContent = state.wishlist.length;
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c5a059" stroke-width="2.2">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.25s ease';
    setTimeout(() => toast.remove(), 260);
  }, 3200);
}

// ============================================================================
// Initialization
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadPersistedState();
  renderSettingsState();
  updateHeaderBadges();
  renderCatalog();
  setupSearchListeners();

  // Price Range Filter
  const priceSlider = document.getElementById('maxPriceRange');
  if (priceSlider) {
    priceSlider.addEventListener('input', e => {
      state.maxPriceUSD = Number(e.target.value);
      renderCatalog();
    });
  }

  // Sort Select
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', e => {
      state.sortBy = e.target.value;
      renderCatalog();
    });
  }

  // Close modals on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeAllOverlays();
  });

  // Start Live Mechanical Watch Animation
  requestAnimationFrame(updateHeroClock);
});


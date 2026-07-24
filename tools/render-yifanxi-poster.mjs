import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "public", "generated");
const width = 3072;
const height = 1152;
const navy = "#062746";
const gold = "#c78628";
const deep = "#071b33";
const cream = "#fffaf0";
const muted = "#4e5b69";

await fs.mkdir(outDir, { recursive: true });

const heroPath = path.join(root, "public", "vodka-reference", "hero-bed.png");
const heroBase64 = (await fs.readFile(heroPath)).toString("base64");

function icon(x, y, label, sub, glyph) {
  return `
  <g transform="translate(${x} ${y})">
    <circle cx="50" cy="44" r="40" fill="none" stroke="${gold}" stroke-width="3"/>
    <text x="50" y="58" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-size="34" font-weight="900" fill="${gold}">${glyph}</text>
    <text x="50" y="114" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-size="22" font-weight="900" fill="${cream}">${label}</text>
    <text x="50" y="142" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-size="18" font-weight="600" fill="${cream}">${sub}</text>
  </g>`;
}

function stat(x, title, value, sub) {
  return `
  <g transform="translate(${x} 0)">
    <path d="M0 84 C-22 58 -28 26 -16 0" fill="none" stroke="${gold}" stroke-width="3"/>
    <path d="M174 84 C196 58 202 26 190 0" fill="none" stroke="${gold}" stroke-width="3"/>
    <text x="87" y="22" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-size="26" font-weight="900" fill="${deep}">${title}</text>
    <text x="87" y="58" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-size="22" font-weight="900" fill="${deep}">${value}</text>
    <text x="87" y="92" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-size="17" font-weight="600" fill="${muted}">${sub}</text>
  </g>`;
}

const sourceSvg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="paper" x1="0" x2="1">
      <stop offset="0" stop-color="#fffdf7"/>
      <stop offset="0.65" stop-color="#fff9ec"/>
      <stop offset="1" stop-color="#f9efe0"/>
    </linearGradient>
    <linearGradient id="goldBand" x1="0" x2="1">
      <stop offset="0" stop-color="#f1c16a"/>
      <stop offset="0.45" stop-color="#c78628"/>
      <stop offset="1" stop-color="#f8dc96"/>
    </linearGradient>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="-14" dy="18" stdDeviation="18" flood-color="#06172b" flood-opacity="0.24"/>
    </filter>
    <clipPath id="heroClip">
      <ellipse cx="2480" cy="526" rx="620" ry="410"/>
    </clipPath>
  </defs>

  <rect width="${width}" height="${height}" fill="url(#paper)"/>

  <g opacity="0.08" fill="${navy}" font-family="Georgia, serif" font-size="58">
    <text x="0" y="176">YIFANXi</text><text x="760" y="76">YIFANXi</text><text x="1450" y="158">YIFANXi</text><text x="2240" y="86">YIFANXi</text>
    <text x="90" y="716">YIFANXi</text><text x="1160" y="510">YIFANXi</text><text x="2010" y="590">YIFANXi</text><text x="2780" y="740">YIFANXi</text>
  </g>

  <g transform="translate(184 46)">
    <g fill="none" stroke="${gold}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M0 20 L84 20 L100 0 L118 20 L202 20"/>
      <circle cx="32" cy="44" r="10"/><circle cx="102" cy="44" r="10"/><circle cx="172" cy="44" r="10"/>
      <path d="M32 58 V116 M102 58 V126 M172 58 V116"/>
    </g>
    <text x="248" y="42" font-family="Montserrat, Arial, sans-serif" font-size="34" letter-spacing="8" fill="${gold}">FOSHAN - CHINA</text>
    <text x="248" y="82" font-family="Montserrat, Arial, sans-serif" font-size="22" letter-spacing="4" fill="${gold}">FACTORY DIRECT - WHOLE-HOME FURNISHING</text>
  </g>

  <text x="188" y="238" font-family="Georgia, 'Times New Roman', serif" font-size="92" font-weight="700" letter-spacing="3" fill="${deep}">YIFANXi HOME</text>
  <text x="188" y="326" font-family="Georgia, 'Times New Roman', serif" font-size="72" font-weight="700" letter-spacing="3" fill="${deep}">GLOBAL FURNISHING EXPERTS</text>
  <text x="188" y="384" font-family="Montserrat, Arial, sans-serif" font-size="34" letter-spacing="9" fill="${deep}">DESIGN - FACTORY - QUALITY - SERVICE</text>
  <text x="190" y="431" font-family="Montserrat, Arial, sans-serif" font-size="30" font-weight="700" letter-spacing="4" fill="${gold}">YIFANXi LUXURY WHOLE-HOME FURNITURE SOLUTIONS</text>
  <text x="190" y="470" font-family="Microsoft YaHei, Arial, sans-serif" font-size="28" font-weight="700" letter-spacing="6" fill="${gold}">伊梵喜 · 高端全屋家具品牌</text>

  <g transform="translate(206 508)">
    ${stat(0, "CLASS 20", "TRADEMARK", "Registration No. 87958017")}
    ${stat(250, "FACTORY", "DIRECT SUPPLY", "Manufacturing and QC")}
    ${stat(500, "2 STYLES", "LUXURY / MINIMAL", "Whole-home Matching")}
    ${stat(750, "ONE-STOP", "PROJECT SERVICE", "Design to After-sales")}
  </g>

  <g transform="translate(178 656)">
    <rect x="0" y="0" width="1648" height="226" rx="24" fill="${navy}"/>
    <rect x="38" y="-22" width="218" height="44" rx="22" fill="#f4bf6a"/>
    <text x="147" y="8" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-size="20" font-weight="900" fill="${deep}">WE SPECIALIZE IN</text>
    ${icon(46, 36, "SOFAS", "Modular", "S")}
    ${icon(232, 36, "BEDROOM", "Suites", "B")}
    ${icon(418, 36, "TABLES", "Accent", "T")}
    ${icon(604, 36, "CABINETS", "Storage", "C")}
    <line x1="798" y1="38" x2="798" y2="190" stroke="#e6c385" stroke-width="2"/>
    ${icon(846, 36, "LIGHT LUXURY", "Premium", "L")}
    ${icon(1050, 36, "MINIMAL", "Modern", "M")}
    ${icon(1238, 36, "DESIGN", "Planning", "D")}
    ${icon(1428, 36, "AFTER-SALES", "Support", "A")}
  </g>

  <g transform="translate(178 918)">
    <line x1="0" y1="-18" x2="1648" y2="-18" stroke="#dfc89e"/>
    <text x="824" y="-5" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-size="28" letter-spacing="4" fill="${deep}">YOUR HOME, OUR CRAFTSMANSHIP</text>
    <g font-family="Montserrat, Arial, sans-serif" fill="${deep}" text-anchor="middle">
      <text x="150" y="62" font-size="22" font-weight="900">CUSTOM PLAN</text><text x="150" y="95" font-size="17" font-weight="600" fill="${muted}">Size / Material / Color</text>
      <line x1="300" y1="30" x2="300" y2="100" stroke="#cbb58e"/>
      <text x="450" y="62" font-size="22" font-weight="900">FACTORY QC</text><text x="450" y="95" font-size="17" font-weight="600" fill="${muted}">Materials and Structure</text>
      <line x1="600" y1="30" x2="600" y2="100" stroke="#cbb58e"/>
      <text x="750" y="62" font-size="22" font-weight="900">WHOLE HOME</text><text x="750" y="95" font-size="17" font-weight="600" fill="${muted}">Living / Bedroom / Dining</text>
      <line x1="900" y1="30" x2="900" y2="100" stroke="#cbb58e"/>
      <text x="1050" y="62" font-size="22" font-weight="900">EXPORT READY</text><text x="1050" y="95" font-size="17" font-weight="600" fill="${muted}">Packing and Delivery</text>
      <line x1="1200" y1="30" x2="1200" y2="100" stroke="#cbb58e"/>
      <text x="1350" y="62" font-size="22" font-weight="900">AFTER-SALES</text><text x="1350" y="95" font-size="17" font-weight="600" fill="${muted}">Guidance and Support</text>
    </g>
  </g>

  <path d="M1842 0 C2052 6 2175 74 2262 178 C2158 286 2102 455 2118 680 C2132 882 2255 1042 2460 1152 L3072 1152 L3072 0 Z" fill="#f7e9d3"/>
  <ellipse cx="2478" cy="436" rx="744" ry="560" fill="none" stroke="url(#goldBand)" stroke-width="38"/>
  <ellipse cx="2478" cy="436" rx="784" ry="598" fill="none" stroke="${gold}" stroke-width="2"/>
  <ellipse cx="2478" cy="436" rx="700" ry="520" fill="#fff7ea"/>

  <g filter="url(#softShadow)">
    <image href="data:image/png;base64,__HERO__" x="1860" y="116" width="1240" height="820" preserveAspectRatio="xMidYMid slice" clip-path="url(#heroClip)"/>
  </g>
  <g transform="translate(2606 140)">
    <rect x="0" y="0" width="438" height="226" rx="22" fill="${navy}"/>
    <text x="219" y="68" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-size="27" font-weight="900" letter-spacing="5" fill="#f1c16a">YIFANXi HOME</text>
    <text x="219" y="116" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-size="23" letter-spacing="4" fill="${cream}">WHOLE-HOME</text>
    <text x="219" y="154" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-size="22" font-weight="800" fill="${cream}">LUXURY FURNITURE SERIES</text>
    <line x1="78" y1="180" x2="360" y2="180" stroke="#f1c16a" stroke-width="2" opacity="0.75"/>
    <text x="219" y="208" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-size="17" letter-spacing="2" fill="${cream}">LIGHT LUXURY - MINIMAL</text>
  </g>

  <g transform="translate(2476 842)">
    <circle cx="0" cy="0" r="168" fill="#f5c76f" stroke="${gold}" stroke-width="8"/>
    <circle cx="0" cy="0" r="134" fill="#fbe7b3" stroke="${deep}" stroke-width="2" opacity="0.7"/>
    <path d="M-96 20 C-130 -24 -120 -76 -74 -100 M96 20 C130 -24 120 -76 74 -100" fill="none" stroke="${gold}" stroke-width="6"/>
    <text x="0" y="-42" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-size="34" font-weight="900" fill="${deep}">CLASS 20</text>
    <text x="0" y="0" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-size="29" font-weight="900" fill="${deep}">TRADEMARK</text>
    <text x="0" y="44" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-size="22" font-weight="900" fill="${deep}">YIFANXi HOME</text>
    <text x="0" y="82" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-size="20" font-weight="700" fill="${deep}">REGISTERED BRAND</text>
  </g>

  <path d="M0 1070 H2158 C2248 1112 2355 1140 2490 1152 H0 Z" fill="${navy}"/>
  <g transform="translate(184 1086)" fill="none" stroke="#f1c16a" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M30 0 L62 14 V56 C62 84 42 100 30 106 C18 100 -2 84 -2 56 V14 Z"/>
    <path d="M14 52 L28 66 L50 34"/>
  </g>
  <text x="286" y="1112" font-family="Montserrat, Arial, sans-serif" font-size="34" letter-spacing="6" fill="#f1c16a">QUALITY FIRST, HOME FOREVER</text>
  <text x="286" y="1143" font-family="Montserrat, Arial, sans-serif" font-size="20" letter-spacing="2" fill="${cream}">REGISTERED - FACTORY DIRECT - GLOBAL HOME SOLUTIONS</text>
  <line x1="1192" y1="1090" x2="1192" y2="1144" stroke="#f1c16a" stroke-width="2"/>
  <text x="1248" y="1112" font-family="Montserrat, Arial, sans-serif" font-size="32" letter-spacing="6" fill="#f1c16a">FOSHAN, CHINA</text>
  <text x="1248" y="1143" font-family="Montserrat, Arial, sans-serif" font-size="21" letter-spacing="2" fill="${cream}">WHERE FURNITURE CRAFT MEETS MODERN LIVING</text>
</svg>`;

const svgWithImage = sourceSvg.replace("__HERO__", heroBase64);
const svgPath = path.join(outDir, "yifanxi-company-poster.svg");

await fs.writeFile(svgPath, svgWithImage, "utf8");

console.log(`Wrote ${svgPath}`);

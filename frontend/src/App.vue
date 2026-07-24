<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from "vue";
import { fallbackHomeData } from "./data/fallback";
import type { HomeData, ProductSeries } from "./types";

type PageKey = "home" | "products" | "about" | "contact";

const homeData = ref<HomeData>(fallbackHomeData);
const activePage = ref<PageKey>("home");
const selectedSeriesKey = ref<string | null>(null);
const selectedSeriesSection = ref<HTMLElement | null>(null);
const isMenuOpen = ref(false);
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "") ?? "";

const primaryPages: { key: PageKey; label: string }[] = [
  { key: "products", label: "Products" },
  { key: "contact", label: "Contact Us" },
  { key: "about", label: "About Us" },
];

const drawerPages: { key: PageKey; label: string; summary: string }[] = [
  { key: "home", label: "Home", summary: "Brand entrance and whole-home positioning" },
  { key: "products", label: "Product Showcase", summary: "Light luxury and minimal product series" },
  { key: "about", label: "About Us", summary: "Origin, factory, service, and qualifications" },
  { key: "contact", label: "Contact Us", summary: "WhatsApp, Instagram, and email inquiry" },
];

const selectedSeries = computed<ProductSeries | null>(() => {
  if (!selectedSeriesKey.value) {
    return null;
  }
  return (
    homeData.value.productShowcase.series.find(
      (series) => series.key === selectedSeriesKey.value,
    ) ?? null
  );
});

function setPage(page: PageKey) {
  activePage.value = page;
  isMenuOpen.value = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(async () => {
  const shouldLoadBackendData = import.meta.env.DEV || apiBaseUrl.length > 0;

  if (!shouldLoadBackendData) {
    return;
  }

  try {
    const response = await fetch(`${apiBaseUrl}/api/home`);
    if (!response.ok) {
      return;
    }
    const data = (await response.json()) as HomeData;
    homeData.value = data;
  } catch {
    homeData.value = fallbackHomeData;
  }
});

async function selectSeries(key: string) {
  selectedSeriesKey.value = key;
  activePage.value = "products";
  isMenuOpen.value = false;
  await nextTick();
  selectedSeriesSection.value?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function closeMenu() {
  isMenuOpen.value = false;
}
</script>

<template>
  <main>
    <header class="site-header">
      <div class="header-left">
        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-controls="site-menu"
          aria-label="Toggle navigation menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav class="top-pages" aria-label="Main pages">
          <button
            v-for="page in primaryPages"
            :key="page.key"
            type="button"
            :class="{ active: activePage === page.key }"
            @click="setPage(page.key)"
          >
            {{ page.label }}
          </button>
        </nav>
      </div>

      <a class="brand" href="#top" aria-label="YIFANXI Home" @click.prevent="setPage('home')">
        <img class="brand-logo" :src="homeData.brand.logo" alt="YIFANXI logo" />
        <span class="brand-copy">
          <strong>{{ homeData.brand.name }}</strong>
          <small>{{ homeData.brand.company }}</small>
        </span>
      </a>
    </header>

    <div class="drawer-backdrop" :class="{ open: isMenuOpen }" @click="closeMenu"></div>
    <aside id="site-menu" class="side-menu" :class="{ open: isMenuOpen }" aria-label="Expanded navigation">
      <div class="side-menu-head">
        <span>Menu</span>
        <button type="button" aria-label="Close navigation menu" @click="closeMenu">Close</button>
      </div>

      <div class="side-menu-pages">
        <button
          v-for="page in drawerPages"
          :key="page.key"
          type="button"
          :class="{ active: activePage === page.key }"
          @click="setPage(page.key)"
        >
          <strong>{{ page.label }}</strong>
          <small>{{ page.summary }}</small>
        </button>
      </div>

      <div class="side-menu-series">
        <span>Product series</span>
        <button
          v-for="series in homeData.productShowcase.series"
          :key="series.key"
          type="button"
          @click="selectSeries(series.key)"
        >
          {{ series.name }}
        </button>
      </div>
    </aside>

    <section v-if="activePage === 'home'" class="hero page-view" id="top">
      <img :src="homeData.hero.image" :alt="homeData.hero.title" />
      <div class="hero-content">
        <p class="eyebrow">{{ homeData.hero.eyebrow }}</p>
        <h1>{{ homeData.hero.title }}</h1>
        <p class="hero-copy">{{ homeData.hero.copy }}</p>
        <button class="text-link link-button" type="button" @click="setPage('contact')">Scan WhatsApp QR</button>
      </div>
    </section>

    <section v-if="activePage === 'home'" class="statement-section">
      <div>
        <p class="eyebrow">One-stop service</p>
        <h2>Factory, design, sales, and after-sales.</h2>
        <p class="service-copy">
          Integrated support from production and project matching to quotation,
          delivery coordination, and follow-up service.
        </p>
      </div>
      <div class="service-flow">
        <article v-for="service in homeData.services" :key="service.title">
          <img :src="service.image" :alt="`${service.title} service scene`" />
          <div>
            <span>YIFANXI</span>
            <strong>{{ service.title }}</strong>
          </div>
        </article>
      </div>
    </section>

    <section v-if="activePage === 'about'" class="origin-section page-view">
      <div class="section-title">
        <span>Origin</span>
        <h2>{{ homeData.brand.originTitle }}</h2>
      </div>
      <div class="origin-copy">
        <p v-for="copy in homeData.brand.originCopy" :key="copy">{{ copy }}</p>
      </div>
    </section>

    <section v-if="activePage === 'products'" class="catalog-section page-view">
      <div class="section-title">
        <span>01</span>
        <h2>Product Showcase</h2>
      </div>

      <div class="showcase-intro">
        <p class="eyebrow">{{ homeData.productShowcase.eyebrow }}</p>
        <h3>{{ homeData.productShowcase.title }}</h3>
        <p>{{ homeData.productShowcase.copy }}</p>
      </div>

      <div class="series-chooser" aria-label="Choose product series">
        <button
          v-for="series in homeData.productShowcase.series"
          :key="series.key"
          type="button"
          class="series-option"
          :class="{ active: selectedSeriesKey === series.key }"
          @click="selectSeries(series.key)"
        >
          <img :src="series.coverImage" :alt="series.name" />
          <span>{{ series.name }}</span>
          <strong>{{ series.name }} Series</strong>
          <small>{{ series.summary }}</small>
        </button>
      </div>

      <div v-if="selectedSeries" ref="selectedSeriesSection" class="selected-series">
        <div class="selected-heading">
          <p class="eyebrow">Selected series</p>
          <h3>{{ selectedSeries.name }} Products</h3>
          <p>{{ selectedSeries.summary }}</p>
        </div>

        <div class="category-grid">
          <article
            v-for="product in selectedSeries.products"
            :key="product.name"
            class="category-card"
          >
            <div
              class="category-media"
              :class="{ split: product.images.length > 1 }"
            >
              <img
                v-for="image in product.images.slice(0, 2)"
                :key="image"
                :src="image"
                :alt="product.name"
              />
            </div>
            <div class="category-copy">
              <span>{{ selectedSeries.name }}</span>
              <h4>{{ product.name }}</h4>
              <p>{{ product.description }}</p>
            </div>
          </article>
        </div>
      </div>

      <div v-else class="empty-showcase">
        <span>Select a product series to view representative products.</span>
      </div>
    </section>

    <section v-if="activePage === 'about'" class="statement-section">
      <div>
        <p class="eyebrow">One-stop service</p>
        <h2>Factory, design, sales, and after-sales.</h2>
        <p class="service-copy">
          Integrated support from production and project matching to quotation,
          delivery coordination, and follow-up service.
        </p>
      </div>
      <div class="service-flow">
        <article v-for="service in homeData.services" :key="service.title">
          <img :src="service.image" :alt="`${service.title} service scene`" />
          <div>
            <span>YIFANXI</span>
            <strong>{{ service.title }}</strong>
          </div>
        </article>
      </div>
    </section>

    <section v-if="activePage === 'about'" class="factory-section">
      <div class="section-title">
        <span>02</span>
        <h2>Factory Capability</h2>
      </div>
      <div class="factory-layout">
        <div class="factory-copy">
          <p class="eyebrow">Production scenes</p>
          <h3>From materials to final inspection, every order is handled inside the factory.</h3>
        </div>
        <div class="factory-gallery">
          <article
            v-for="item in homeData.factoryGallery"
            :key="item.title"
            class="factory-card"
          >
            <img :src="item.image" :alt="`${item.title} production scene`" />
            <div>
              <span>{{ item.title }}</span>
              <p>{{ item.copy }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section v-if="activePage === 'about'" class="qualification-section">
      <div class="section-title">
        <span>03</span>
        <h2>Qualifications</h2>
      </div>
      <div class="qualification-layout">
        <div class="qualification-panel">
          <p class="eyebrow">Company profile</p>
          <h2>Registered furniture company with export and customization capability.</h2>
        </div>
        <div class="qualification-copy">
          <p class="eyebrow">Business proof</p>
          <ul>
            <li v-for="item in homeData.qualifications" :key="item">
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="legal-documents">
        <figure class="license-proof">
          <img :src="homeData.businessLicenseImage" alt="Business license" />
          <figcaption>Business license</figcaption>
        </figure>
        <figure class="license-proof">
          <img :src="homeData.trademarkRegistrationImage" alt="Trademark registration certificate" />
          <figcaption>Trademark registration</figcaption>
        </figure>
      </div>
    </section>

    <section v-if="activePage === 'contact'" class="contact-section page-view">
      <div class="section-title">
        <span>04</span>
        <h2>WhatsApp Inquiry</h2>
      </div>
      <div class="contact-line">
        <p>
          Scan the WhatsApp QR code to contact {{ homeData.contact.name }} for
          product style, size, material, delivery, customization, and quotation
          details. Email: {{ homeData.contact.email }}.
        </p>
        <div class="social-cards">
          <div class="whatsapp-card" aria-label="WhatsApp QR code">
            <img :src="homeData.contact.qrImage" alt="WhatsApp QR code" />
            <span>{{ homeData.contact.name }} - {{ homeData.contact.label }}</span>
          </div>
          <div class="whatsapp-card" aria-label="Instagram QR code">
            <img :src="homeData.contact.instagramQrImage" alt="Instagram QR code" />
            <span>Instagram - {{ homeData.contact.instagramHandle }}</span>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <strong>{{ homeData.brand.name }} - {{ homeData.brand.company }}</strong>
      <div class="footer-links">
        <a :href="`mailto:${homeData.contact.email}`">{{ homeData.contact.email }}</a>
        <button type="button" @click="setPage('contact')">WhatsApp Inquiry</button>
      </div>
    </footer>
  </main>
</template>

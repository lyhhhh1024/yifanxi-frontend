import type { HomeData } from "../types";

export const fallbackHomeData: HomeData = {
  brand: {
    name: "YIFANXI",
    company: "Foshan Nuoyuan Furniture",
    logo: "/assets/brand/logo.png",
    originTitle: "Rooted in Longjiang, Foshan.",
    originCopy: [
      "YIFANXI carries the furniture craftsmanship of Longjiang, Foshan, focusing on light luxury and minimalist furnishing.",
      "We provide customized solutions for high-end private villas, commercial offices, and luxury hotels, with flexible options in size, material, finish, and project matching.",
    ],
  },
  hero: {
    eyebrow: "YIFANXI home interiors",
    title: "Whole-home Furnishing from Foshan",
    copy: "Light luxury and minimalist furnishing solutions for villas, offices, and hotel projects across the Middle East.",
    image: "/assets/minimal/037a1cca5acf71643770bda3602bc9a4.png",
  },
  productShowcase: {
    eyebrow: "Product showcase",
    title: "Choose a series before viewing products.",
    copy:
      "The collection is organized into two clear directions: light luxury and minimal. Select one series to view representative product categories without overloading the page.",
    series: [
    {
      key: "light-luxury",
      name: "Light Luxury",
      summary:
        "Warm upholstery, refined metal lines, illuminated details, luxury stone, and statement bedroom pieces.",
      coverImage: "/assets/minimal/04225ea51388627e5e3288a8f61c80b3.png",
      products: [
        {
          name: "Living Room Solutions",
          description: "Complete living room sets for villa and hotel lounge spaces.",
          images: ["/assets/minimal/04225ea51388627e5e3288a8f61c80b3.png", "/assets/minimal/037a1cca5acf71643770bda3602bc9a4.png"],
        },
        {
          name: "Modular Sofas",
          description: "Formal and lounge sofa systems with leather, fabric, and metal detail options.",
          images: ["/assets/minimal/accent-chair.png"],
        },
        {
          name: "Luxury Stone Tables",
          description: "Central tables and side tables with stone tops and refined metal bases.",
          images: ["/assets/minimal/luxury-stone-round-table.jpg"],
        },
        {
          name: "Upholstered Beds",
          description: "Wide-screen beds and soft bedroom systems for private residences and suites.",
          images: ["/assets/minimal/bed.png"],
        },
      ],
    },
    {
      key: "minimal",
      name: "Minimal",
      summary:
        "Clean silhouettes, calm colors, soft upholstery, stone finishes, and modern whole-home matching.",
      coverImage: "/assets/minimal/dining-table.png",
      products: [
        {
          name: "Dining Room Furniture",
          description: "Minimal dining tables and chairs for calm residential and office interiors.",
          images: ["/assets/minimal/dining-table.png", "/assets/minimal/stone-table.png"],
        },
        {
          name: "Bedroom Furniture",
          description: "Low-profile upholstered beds and quiet modern sleeping spaces.",
          images: ["/assets/minimal/bed.png"],
        },
        {
          name: "Stone Tables",
          description: "Lightweight stone visual language for tables and whole-home matching.",
          images: ["/assets/minimal/stone-table.png"],
        },
        {
          name: "Lounge Chairs",
          description: "Accent chairs and occasional seating for flexible interior layouts.",
          images: ["/assets/minimal/accent-chair.png"],
        },
        {
          name: "Whole-home Matching",
          description: "Coordinated furniture language for villas, offices, and hotel projects.",
          images: [
            "/assets/minimal/037a1cca5acf71643770bda3602bc9a4.png",
            "/assets/minimal/04225ea51388627e5e3288a8f61c80b3.png",
          ],
        },
      ],
    },
  ],
  },
  videoShowcase: {
    eyebrow: "Video showcase",
    title: "Short scenes for production, design, and finished spaces.",
    copy:
      "Use this page for factory process clips, showroom walkthroughs, product detail videos, and project presentation videos. Current cards are prepared as replaceable video slots.",
    items: [
      {
        title: "Factory Process",
        description: "Cutting, sewing, upholstery, and assembly scenes for custom furniture orders.",
        poster: "/assets/factory/factory-cutting-room.jpg",
        videoUrl: "/assets/videos/about-factory-showcase-web.mp4",
        meta: "Factory / Production",
      },
      {
        title: "Showroom Walkthrough",
        description: "Light luxury and minimalist product displays for overseas project buyers.",
        poster: "/assets/minimal/04225ea51388627e5e3288a8f61c80b3.png",
        meta: "Products / Showroom",
      },
      {
        title: "Material Details",
        description: "Stone, upholstery, metal trim, and finish details used in whole-home matching.",
        poster: "/assets/minimal/luxury-stone-round-table.jpg",
        meta: "Materials / Details",
      },
    ],
  },
  services: [
    { title: "Factory", image: "/assets/factory/factory-cutting-room.jpg" },
    { title: "Design", image: "/assets/generated/design-studio-original.jpg" },
    { title: "Sales", image: "/assets/generated/sales-consultation.png" },
    { title: "After-sales", image: "/assets/generated/after-sales-inspection.png" },
  ],
  factoryGallery: [
    {
      title: "Material Cutting",
      copy: "Pattern storage, fabric cutting, and upholstery preparation for custom production.",
      image: "/assets/factory/factory-cutting-room.jpg",
    },
    {
      title: "Frame Assembly",
      copy: "Wood frame, soft package, and structural assembly handled inside the factory.",
      image: "/assets/factory/factory-upholstery-assembly.jpg",
    },
    {
      title: "Sewing Detail",
      copy: "Upholstery stitching and soft-cover finishing with hands-on quality control.",
      image: "/assets/factory/factory-sewing.jpg",
    },
    {
      title: "Packaging Check",
      copy: "Export packaging preparation and final checks before delivery coordination.",
      image: "/assets/factory/factory-packaging.jpg",
    },
  ],
  qualifications: [
    "YIFANXI brand owner and operating company: Foshan Nuoyuan Furniture Co., Ltd.",
    "Unified social credit code: 91440605MAE87BUK2D",
    "YIFANXI trademark registered for furniture category",
    "Business scope includes furniture sales, manufacturing, design, installation, maintenance, import and export",
  ],
  businessLicenseImage: "/assets/legal/business-license-electronic.jpg",
  trademarkRegistrationImage: "/assets/legal/trademark-registration.jpg",
  contact: {
    name: "Kitty",
    label: "WhatsApp Business",
    qrImage: "/assets/brand/whatsapp-kitty-qr.jpg",
    whatsappUrl:
      "https://wa.me/8613602888775?text=Hello%2C%20I%20am%20interested%20in%20YIFANXI%20furniture.",
    email: "ms5863494@gmail.com",
    instagramHandle: "@YFX5863494",
    instagramQrImage: "/assets/brand/instagram-qr-card.jpg",
    instagramUrl: "https://www.instagram.com/yfx5863494/",
  },
};

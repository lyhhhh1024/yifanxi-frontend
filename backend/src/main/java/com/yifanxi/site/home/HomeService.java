package com.yifanxi.site.home;

import com.yifanxi.site.home.HomeModels.Brand;
import com.yifanxi.site.home.HomeModels.Contact;
import com.yifanxi.site.home.HomeModels.FactoryGalleryItem;
import com.yifanxi.site.home.HomeModels.Hero;
import com.yifanxi.site.home.HomeModels.HomeData;
import com.yifanxi.site.home.HomeModels.ProductItem;
import com.yifanxi.site.home.HomeModels.ProductSeries;
import com.yifanxi.site.home.HomeModels.ProductShowcase;
import com.yifanxi.site.home.HomeModels.ServiceItem;
import com.yifanxi.site.home.HomeModels.VideoItem;
import com.yifanxi.site.home.HomeModels.VideoShowcase;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HomeService {
    public HomeData getHomeData() {
        return new HomeData(
                brand(),
                hero(),
                productShowcase(),
                videoShowcase(),
                services(),
                factoryGallery(),
                qualifications(),
                "/assets/legal/business-license-electronic.jpg",
                "/assets/legal/trademark-registration.jpg",
                new Contact(
                        "Kitty",
                        "WhatsApp Business",
                        "/assets/brand/whatsapp-kitty-qr.jpg",
                        "https://wa.me/8613602888775?text=Hello%2C%20I%20am%20interested%20in%20YIFANXI%20furniture.",
                        "ms5863494@gmail.com",
                        "@YFX5863494",
                        "/assets/brand/instagram-qr-card.jpg",
                        "https://www.instagram.com/yfx5863494/"
                )
        );
    }

    private Brand brand() {
        return new Brand(
                "YIFANXI",
                "Foshan Nuoyuan Furniture",
                "/assets/brand/logo.png",
                "Rooted in Longjiang, Foshan.",
                List.of(
                        "YIFANXI carries the furniture craftsmanship of Longjiang, Foshan, focusing on light luxury and minimalist furnishing.",
                        "We provide customized solutions for high-end private villas, commercial offices, and luxury hotels, with flexible options in size, material, finish, and project matching."
                )
        );
    }

    private Hero hero() {
        return new Hero(
                "YIFANXI home interiors",
                "Whole-home Furnishing from Foshan",
                "Light luxury and minimalist furnishing solutions for villas, offices, and hotel projects across the Middle East.",
                "/assets/minimal/037a1cca5acf71643770bda3602bc9a4.png"
        );
    }

    private ProductShowcase productShowcase() {
        return new ProductShowcase(
                "Product showcase",
                "Choose a series before viewing products.",
                "The collection is organized into two clear directions: light luxury and minimal. Select one series to view representative product categories without overloading the page.",
                List.of(
                new ProductSeries(
                        "light-luxury",
                        "Light Luxury",
                        "Warm upholstery, refined metal lines, illuminated details, luxury stone, and statement bedroom pieces.",
                        "/assets/minimal/04225ea51388627e5e3288a8f61c80b3.png",
                        List.of(
                                new ProductItem("Sofas", "Sofa 01", "Tailored upholstered sofa with a refined silhouette for light luxury living spaces.", List.of("/assets/products/light-luxury/sofa-01.jpg", "/assets/products/light-luxury/sofa-01-detail.jpg")),
                                new ProductItem("Sofas", "Sofa 02", "A sculptural upholstered sofa with generous seating and a confident color statement.", List.of("/assets/products/light-luxury/sofa-02.jpg")),
                                new ProductItem("Sofas", "Sofa 03", "Soft modular seating with clean geometry and a polished metal accent.", List.of("/assets/products/light-luxury/sofa-03.jpg")),
                                new ProductItem("Sofas", "Sofa 04", "Statement sofa composition designed for private villas and hospitality interiors.", List.of("/assets/products/light-luxury/sofa-04.jpg")),
                                new ProductItem("Upholstered Beds", "Bed 01", "Wide upholstered bed with a structured headboard and calm bedroom presence.", List.of("/assets/products/light-luxury/bed-01.jpg")),
                                new ProductItem("Upholstered Beds", "Bed 02", "A dark statement headboard paired with a tailored upholstered base.", List.of("/assets/products/light-luxury/bed-02.jpg")),
                                new ProductItem("Upholstered Beds", "Bed 03", "Soft contemporary bed system with generous proportions for suites and villas.", List.of("/assets/products/light-luxury/bed-03.jpg")),
                                new ProductItem("Upholstered Beds", "Bed 04", "Elegant upholstered bed with a layered headboard and refined bedside composition.", List.of("/assets/products/light-luxury/bed-04.jpg")),
                                new ProductItem("Dining & Coffee Tables", "Table 01", "Stone-topped table collection with an architectural metallic base.", List.of("/assets/products/light-luxury/table-01.jpg")),
                                new ProductItem("Dining & Coffee Tables", "Table 02", "Dark stone occasional tables with slim, refined supports.", List.of("/assets/products/light-luxury/table-02.jpg")),
                                new ProductItem("Dining & Coffee Tables", "Table 03", "Rounded coffee table forms with warm stone surfaces and a sculptural base.", List.of("/assets/products/light-luxury/table-03.jpg")),
                                new ProductItem("Dining & Coffee Tables", "Table 04", "Compact side and coffee tables for coordinated light luxury interiors.", List.of("/assets/products/light-luxury/table-04.jpg")),
                                new ProductItem("Chairs", "Chair 01", "Curved lounge seating with a softly upholstered back and refined frame.", List.of("/assets/products/light-luxury/chair-01.jpg")),
                                new ProductItem("Chairs", "Chair 02", "Elegant dining chair silhouettes for villas, offices, and hospitality projects.", List.of("/assets/products/light-luxury/chair-02.jpg")),
                                new ProductItem("Chairs", "Chair 03", "Upholstered accent seating with tailored detailing and a soft profile.", List.of("/assets/products/light-luxury/chair-03.jpg")),
                                new ProductItem("Chairs", "Chair 04", "Contemporary occasional chairs selected for complete interior matching.", List.of("/assets/products/light-luxury/chair-04.jpg"))
                        )
                ),
                new ProductSeries(
                        "minimal",
                        "Minimal",
                        "Clean silhouettes, calm colors, soft upholstery, stone finishes, and modern whole-home matching.",
                        "/assets/minimal/dining-table.png",
                        List.of(
                                new ProductItem("Dining", "Dining Room Furniture", "Minimal dining tables and chairs for calm interiors.", List.of("/assets/minimal/dining-table.png", "/assets/minimal/stone-table.png")),
                                new ProductItem("Bedroom", "Bedroom Furniture", "Low-profile upholstered beds and quiet modern sleeping spaces.", List.of("/assets/minimal/bed.png")),
                                new ProductItem("Tables", "Stone Tables", "Lightweight stone visual language for tables and whole-home matching.", List.of("/assets/minimal/stone-table.png")),
                                new ProductItem("Chairs", "Lounge Chairs", "Accent chairs and occasional seating for flexible layouts.", List.of("/assets/minimal/accent-chair.png")),
                                new ProductItem("Whole-home", "Whole-home Matching", "Coordinated furniture language for villas, offices, and hotel projects.", List.of("/assets/minimal/037a1cca5acf71643770bda3602bc9a4.png", "/assets/minimal/04225ea51388627e5e3288a8f61c80b3.png"))
                        )
                )
        ));
    }

    private VideoShowcase videoShowcase() {
        return new VideoShowcase(
                "Video showcase",
                "Short scenes for production, design, and finished spaces.",
                "Use this area for factory process clips, showroom walkthroughs, product detail videos, and project presentation videos. Current cards are prepared as replaceable video slots.",
                List.of(
                        new VideoItem(
                                "Factory Process",
                                "Cutting, sewing, upholstery, and assembly scenes for custom furniture orders.",
                                "/assets/factory/factory-cutting-room.jpg",
                                "/assets/videos/about-factory-showcase-web.mp4",
                                "Factory / Production"
                        ),
                        new VideoItem(
                                "Showroom Walkthrough",
                                "Light luxury and minimalist product displays for overseas project buyers.",
                                "/assets/minimal/04225ea51388627e5e3288a8f61c80b3.png",
                                null,
                                "Products / Showroom"
                        ),
                        new VideoItem(
                                "Material Details",
                                "Stone, upholstery, metal trim, and finish details used in whole-home matching.",
                                "/assets/minimal/luxury-stone-round-table.jpg",
                                null,
                                "Materials / Details"
                        )
                )
        );
    }

    private List<ServiceItem> services() {
        return List.of(
                new ServiceItem("Factory", "/assets/factory/a143553ba837e2174fa123c19cee9cde.jpg"),
                new ServiceItem("Design", "/assets/generated/design-studio-original.jpg"),
                new ServiceItem("Sales", "/assets/generated/sales-consultation.png"),
                new ServiceItem("After-sales", "/assets/generated/after-sales-inspection.png")
        );
    }

    private List<FactoryGalleryItem> factoryGallery() {
        return List.of(
                new FactoryGalleryItem(
                        "Upholstery Finishing",
                        "Hand-finished upholstery work for tailored furniture components.",
                        "/assets/factory/a143553ba837e2174fa123c19cee9cde.jpg"
                ),
                new FactoryGalleryItem(
                        "Woodworking",
                        "Cutting and shaping structural wood components for custom orders.",
                        "/assets/factory/d2460e988fff984e70391fe15691f013.jpg"
                ),
                new FactoryGalleryItem(
                        "Pattern Making",
                        "Templates and panels are prepared for precise furniture construction.",
                        "/assets/factory/fdb8a55f2d308effb0c6aa09dd00cf60.jpg"
                ),
                new FactoryGalleryItem(
                        "Assembly Floor",
                        "Furniture frames and upholstery components come together on the production floor.",
                        "/assets/factory/6da3cb9599098fd7b7852aea23f5baef.jpg"
                ),
                new FactoryGalleryItem("Edge Stitching", "Detailed stitching and wrapping work for upholstered seating and tables.", "/assets/factory/b7915be25ec39b5eb265dad8fbf2e1f5.jpg"),
                new FactoryGalleryItem("Foam Cutting", "Layered foam is cut and shaped for comfort, support, and long-term use.", "/assets/factory/89048ba944c9263d280fbc8d0a8784fe.jpg"),
                new FactoryGalleryItem("Panel Preparation", "Workshop teams prepare panels and structural pieces for final assembly.", "/assets/factory/a0035e6d36849419fd443ac06e8f1ab4.jpg"),
                new FactoryGalleryItem("Hardware Assembly", "Functional hardware and storage elements are fitted and checked by hand.", "/assets/factory/43ddb77df6421089750cd8516a291b7e.jpg"),
                new FactoryGalleryItem("Pattern Cutting", "Fabric patterns are organized and cut for consistent, repeatable production.", "/assets/factory/40a003087b9d33ae57e0b0a4d632909f.jpg"),
                new FactoryGalleryItem("Sewing Workshop", "Sewing specialists join quilted and upholstered details with precision.", "/assets/factory/22b20946272483814738c44c9571dd96.jpg"),
                new FactoryGalleryItem("Export Preparation", "Finished components are prepared for safe packing and project delivery.", "/assets/factory/ca5db96f1bce5565987693a8043b45aa.jpg"),
                new FactoryGalleryItem("Final Upholstery", "Final upholstery details are shaped, secured, and checked before dispatch.", "/assets/factory/7e6cf589ecd77240146463b0b4a9e725.jpg"
                )
        );
    }

    private List<String> qualifications() {
        return List.of(
                "YIFANXI brand owner and operating company: Foshan Nuoyuan Furniture Co., Ltd.",
                "Unified social credit code: 91440605MAE87BUK2D",
                "YIFANXI trademark registered for furniture category",
                "Business scope includes furniture sales, manufacturing, design, installation, maintenance, import and export"
        );
    }
}

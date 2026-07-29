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
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HomeService {
    public HomeData getHomeData() {
        return new HomeData(
                brand(),
                hero(),
                productShowcase(),
                services(),
                factoryGallery(),
                qualifications(),
                "/assets/legal/business-license-electronic.jpg",
                "/assets/legal/trademark-registration.jpg",
                new Contact(
                        "Kitty",
                        "WhatsApp Business",
                        "/assets/brand/whatsapp-kitty-qr.jpg",
                        "https://wa.me/",
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
                                new ProductItem("Living Room Solutions", "Complete living room sets for villa and hotel lounge spaces.", List.of("/assets/minimal/04225ea51388627e5e3288a8f61c80b3.png", "/assets/minimal/037a1cca5acf71643770bda3602bc9a4.png")),
                                new ProductItem("Modular Sofas", "Formal and lounge sofa systems with leather, fabric, and metal detail options.", List.of("/assets/minimal/accent-chair.png")),
                                new ProductItem("Luxury Stone Tables", "Central tables and side tables with stone tops and refined metal bases.", List.of("/assets/minimal/luxury-stone-round-table.jpg")),
                                new ProductItem("Upholstered Beds", "Wide-screen beds and soft bedroom systems for private residences and suites.", List.of("/assets/minimal/bed.png"))
                        )
                ),
                new ProductSeries(
                        "minimal",
                        "Minimal",
                        "Clean silhouettes, calm colors, soft upholstery, stone finishes, and modern whole-home matching.",
                        "/assets/minimal/dining-table.png",
                        List.of(
                                new ProductItem("Dining Room Furniture", "Minimal dining tables and chairs for calm residential and office interiors.", List.of("/assets/minimal/dining-table.png", "/assets/minimal/stone-table.png")),
                                new ProductItem("Bedroom Furniture", "Low-profile upholstered beds and quiet modern sleeping spaces.", List.of("/assets/minimal/bed.png")),
                                new ProductItem("Stone Tables", "Lightweight stone visual language for tables and whole-home matching.", List.of("/assets/minimal/stone-table.png")),
                                new ProductItem("Lounge Chairs", "Accent chairs and occasional seating for flexible interior layouts.", List.of("/assets/minimal/accent-chair.png")),
                                new ProductItem("Whole-home Matching", "Coordinated furniture language for villas, offices, and hotel projects.", List.of("/assets/minimal/037a1cca5acf71643770bda3602bc9a4.png", "/assets/minimal/04225ea51388627e5e3288a8f61c80b3.png"))
                        )
                )
        ));
    }

    private List<ServiceItem> services() {
        return List.of(
                new ServiceItem("Factory", "/assets/factory/factory-cutting-room.jpg"),
                new ServiceItem("Design", "/assets/generated/design-studio-original.jpg"),
                new ServiceItem("Sales", "/assets/generated/sales-consultation.png"),
                new ServiceItem("After-sales", "/assets/generated/after-sales-inspection.png")
        );
    }

    private List<FactoryGalleryItem> factoryGallery() {
        return List.of(
                new FactoryGalleryItem(
                        "Material Cutting",
                        "Pattern storage, fabric cutting, and upholstery preparation for custom production.",
                        "/assets/factory/factory-cutting-room.jpg"
                ),
                new FactoryGalleryItem(
                        "Frame Assembly",
                        "Wood frame, soft package, and structural assembly handled inside the factory.",
                        "/assets/factory/factory-upholstery-assembly.jpg"
                ),
                new FactoryGalleryItem(
                        "Sewing Detail",
                        "Upholstery stitching and soft-cover finishing with hands-on quality control.",
                        "/assets/factory/factory-sewing.jpg"
                ),
                new FactoryGalleryItem(
                        "Packaging Check",
                        "Export packaging preparation and final checks before delivery coordination.",
                        "/assets/factory/factory-packaging.jpg"
                )
        );
    }

    private List<String> qualifications() {
        return List.of(
                "Foshan Nuoyuan Furniture Co., Ltd.",
                "Unified social credit code: 91440605MAE87BUK2D",
                "YIFANXI trademark registered for furniture category",
                "Business scope includes furniture sales, manufacturing, design, installation, maintenance, import and export"
        );
    }
}

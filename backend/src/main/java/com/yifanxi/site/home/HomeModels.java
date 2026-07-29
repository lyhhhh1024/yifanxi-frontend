package com.yifanxi.site.home;

import java.util.List;

public final class HomeModels {
    private HomeModels() {
    }

    public record HomeData(
            Brand brand,
            Hero hero,
            ProductShowcase productShowcase,
            List<ServiceItem> services,
            List<FactoryGalleryItem> factoryGallery,
            List<String> qualifications,
            String businessLicenseImage,
            String trademarkRegistrationImage,
            Contact contact
    ) {
    }

    public record Brand(
            String name,
            String company,
            String logo,
            String originTitle,
            List<String> originCopy
    ) {
    }

    public record Hero(
            String eyebrow,
            String title,
            String copy,
            String image
    ) {
    }

    public record ProductShowcase(
            String eyebrow,
            String title,
            String copy,
            List<ProductSeries> series
    ) {
    }

    public record ProductSeries(
            String key,
            String name,
            String summary,
            String coverImage,
            List<ProductItem> products
    ) {
    }

    public record ProductItem(
            String name,
            String description,
            List<String> images
    ) {
    }

    public record ServiceItem(
            String title,
            String image
    ) {
    }

    public record FactoryGalleryItem(
            String title,
            String copy,
            String image
    ) {
    }

    public record Contact(
            String name,
            String label,
            String qrImage,
            String whatsappUrl,
            String email,
            String instagramHandle,
            String instagramQrImage,
            String instagramUrl
    ) {
    }
}

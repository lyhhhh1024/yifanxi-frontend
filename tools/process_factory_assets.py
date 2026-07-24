from pathlib import Path
from PIL import Image, ImageEnhance, ImageFilter, ImageOps
import shutil

SRC_DIR = Path(
    r"C:\Users\Rainjet\Documents\xwechat_files\wxid_4jxql7mehr3l12_2de9\temp\RWTemp\2026-07\f3c6ad9e05c9ba659f47d7d19df975d1"
)
OUT_FACTORY = Path(r"D:\shop\frontend\public\assets\factory")
OUT_BRAND = Path(r"D:\shop\frontend\public\assets\brand")

OUT_FACTORY.mkdir(parents=True, exist_ok=True)
OUT_BRAND.mkdir(parents=True, exist_ok=True)

BRAND_FILES = {
    "ba36ffb447fbdcb44b4660df262fb324.jpg": "instagram-qr.jpg",
    "71872f20143516cbdc38bf77c7a52bf9.jpg": "business-license.jpg",
}

SELECTED_FACTORY_IMAGES = [
    ("40a003087b9d33ae57e0b0a4d632909f.jpg", "factory-cutting-room.jpg", (1600, 1067)),
    ("6da3cb9599098fd7b7852aea23f5baef.jpg", "factory-upholstery-assembly.jpg", (1600, 1067)),
    ("22b20946272483814738c44c9571dd96.jpg", "factory-sewing.jpg", (1600, 1067)),
    ("a0035e6d36849419fd443ac06e8f1ab4.jpg", "factory-woodworking-wide.jpg", (1600, 1067)),
    ("ca5db96f1bce5565987693a8043b45aa.jpg", "factory-packaging.jpg", (1600, 1067)),
    ("89048ba944c9263d280fbc8d0a8784fe.jpg", "factory-foam-cutting.jpg", (1200, 1500)),
]


def process_image(source: Path, dest: Path, size: tuple[int, int]) -> None:
    image = Image.open(source).convert("RGB")
    image = ImageOps.exif_transpose(image)

    target_ratio = size[0] / size[1]
    width, height = image.size
    current_ratio = width / height

    if current_ratio > target_ratio:
        new_width = int(height * target_ratio)
        left = max(0, (width - new_width) // 2)
        image = image.crop((left, 0, left + new_width, height))
    else:
        new_height = int(width / target_ratio)
        top = max(0, int((height - new_height) * 0.22))
        image = image.crop((0, top, width, top + new_height))

    image = image.resize(size, Image.Resampling.LANCZOS)
    image = ImageEnhance.Brightness(image).enhance(1.04)
    image = ImageEnhance.Contrast(image).enhance(1.08)
    image = ImageEnhance.Color(image).enhance(0.88)
    image = image.filter(ImageFilter.UnsharpMask(radius=1.2, percent=85, threshold=3))
    image.save(dest, quality=86, optimize=True, progressive=True)


def main() -> None:
    for source_name, dest_name in BRAND_FILES.items():
        shutil.copy2(SRC_DIR / source_name, OUT_BRAND / dest_name)

    for source_name, dest_name, size in SELECTED_FACTORY_IMAGES:
        process_image(SRC_DIR / source_name, OUT_FACTORY / dest_name, size)

    print(
        f"Processed {len(SELECTED_FACTORY_IMAGES)} factory images and "
        f"{len(BRAND_FILES)} brand images."
    )


if __name__ == "__main__":
    main()

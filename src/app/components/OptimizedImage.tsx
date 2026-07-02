import type { ImgHTMLAttributes } from "react";

type ImageKind = "hero" | "banner" | "content" | "product" | "thumbnail";

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  kind?: ImageKind;
  priority?: boolean;
}

const CLOUDINARY_UPLOAD_MARKER = "/image/upload/";

const IMAGE_PRESETS: Record<
  ImageKind,
  { sizes: string; widths: readonly number[] }
> = {
  hero: {
    sizes: "100vw",
    widths: [640, 960, 1280, 1600, 1920],
  },
  banner: {
    sizes: "100vw",
    widths: [480, 768, 1024, 1280, 1600],
  },
  content: {
    sizes: "(max-width: 767px) 100vw, 60vw",
    widths: [480, 768, 1024, 1280, 1440],
  },
  product: {
    sizes: "(max-width: 767px) 50vw, 25vw",
    widths: [240, 360, 480, 640, 800],
  },
  thumbnail: {
    sizes: "(max-width: 767px) 40vw, 20vw",
    widths: [160, 240, 320, 480],
  },
};

function inferKind(src: string): ImageKind {
  if (/\/hero-|\/hero\//i.test(src)) return "hero";
  if (/banner|c-ms-ba-nn-er|s-ec-ti-on|fondo-categorias/i.test(src)) {
    return "banner";
  }
  if (/historia|familia-y-mascota/i.test(src)) return "content";
  if (/testimonio|t-es-ti/i.test(src)) return "thumbnail";
  return "product";
}

function transformedUrl(src: string, width: number) {
  if (!src.includes(CLOUDINARY_UPLOAD_MARKER)) return src;
  const transformation = `f_auto,q_auto,c_limit,w_${width}`;
  return src.replace(
    CLOUDINARY_UPLOAD_MARKER,
    `${CLOUDINARY_UPLOAD_MARKER}${transformation}/`,
  );
}

export function OptimizedImage({
  alt = "",
  decoding = "async",
  kind,
  loading,
  priority = false,
  sizes,
  src = "",
  ...props
}: OptimizedImageProps) {
  const cloudinaryImage = src.includes(CLOUDINARY_UPLOAD_MARKER);
  const preset = IMAGE_PRESETS[kind ?? inferKind(src)];
  const responsiveProps = cloudinaryImage
    ? {
        sizes: sizes ?? preset.sizes,
        srcSet: preset.widths
          .map((width) => `${transformedUrl(src, width)} ${width}w`)
          .join(", "),
      }
    : {};
  const priorityProps = priority ? { fetchpriority: "high" } : {};

  return (
    <img
      {...props}
      {...responsiveProps}
      {...priorityProps}
      alt={alt}
      decoding={decoding}
      loading={priority ? "eager" : (loading ?? "lazy")}
      src={
        cloudinaryImage
          ? transformedUrl(src, preset.widths[preset.widths.length - 1])
          : src
      }
    />
  );
}

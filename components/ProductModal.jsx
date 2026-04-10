"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

export default function ProductModal({ isOpen, onClose, product }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleClose = useCallback(() => {
    if (typeof onClose === "function") onClose();
  }, [onClose]);

  const title = product?.title ?? product?.name ?? "";
  const subtitle = product?.subtitle ?? product?.tagline ?? "";
  const description_modal = product?.description_modal ?? "";
  const images = product?.images ?? [];
  const ingredients = product?.ingredients ?? [];

  const hasImages = Array.isArray(images) && images.length > 0;
  const safeActiveImageIndex = useMemo(() => {
    if (!hasImages) return 0;
    return Math.min(activeImageIndex, images.length - 1);
  }, [activeImageIndex, hasImages, images]);
  const mainImageSrc = hasImages ? images[safeActiveImageIndex] : null;

  // Reset image when modal opens / product changes
  useEffect(() => {
    if (isOpen) setActiveImageIndex(0);
  }, [isOpen, product]);

  // Close on ESC key
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") handleClose();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!product) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!isOpen}
      aria-modal="true"
      role="dialog"
      aria-labelledby="product-modal-title"
      aria-describedby="product-modal-description"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-300 sm:max-h-[85vh] max-h-[90vh] ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white cursor-pointer"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="flex max-h-[90vh] overflow-y-auto flex-col gap-8 p-6 sm:flex-row sm:gap-10 sm:p-8">
          {/* LEFT: Images */}
          <div className="flex w-full flex-col items-center sm:w-1/2 sm:items-stretch">
            {mainImageSrc ? (
              <div className="relative mb-4 w-full overflow-hidden rounded-2xl bg-neutral-50 shadow-md sm:mb-5">
                <div className="flex w-full items-center justify-center p-4 sm:p-6">
                  <div className="relative aspect-4/5 w-full">
                    <img
                      src={mainImageSrc}
                      alt={title || "Ürün görseli"}
                      className="object-contain h-full w-full scale-200"
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          {/* RIGHT: Details */}
          <div className="flex w-full flex-col sm:w-1/2">
            <div className="flex-1 overflow-y-auto pr-2 sm:pr-4">
              {/* Header */}
              <div className="pb-6">
                <h2 id="product-modal-title" className="text-xl font-semibold leading-tight text-gray-900 sm:text-2xl">
                  {title}
                </h2>
                {subtitle ? (
                  <p className="mt-2 text-sm font-medium text-gray-600">
                    {subtitle}
                  </p>
                ) : null}
              </div>

              <div className="space-y-6 pb-6">
                {/* 1. Ürün Bilgileri */}
                <section>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-800 sm:text-[15px]">
                    Ürün Bİlgİlerİ
                  </h3>
                  <div className="mt-3 space-y-2 text-sm text-gray-600">
                    <p id="product-modal-description" className="leading-relaxed">
                      {description_modal || "—"}
                    </p>
                  </div>
                </section>

                {/* 2. İçindekiler */}
                {Array.isArray(ingredients) && ingredients.length > 0 ? (
                  <section>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-800 sm:text-[15px]">
                      İçİndekİler
                    </h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600">
                      {ingredients.map((item, idx) => (
                        <li key={`${item}-${idx}`}>{item}</li>
                      ))}
                    </ul>
                  </section>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


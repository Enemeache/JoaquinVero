type ParallaxBannerProps = {
  image: string;
  quote?: string;
  alt?: string;
};

export default function ParallaxBanner({ image, quote, alt = "" }: ParallaxBannerProps) {
  return (
    <div className="relative h-[38vh] min-h-[200px] overflow-hidden">
      {/* Parallax background — fixed on desktop, scroll on mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />
      {/* Optional quote */}
      {quote && (
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <p className="font-bebas text-3xl sm:text-4xl md:text-5xl text-white tracking-widest text-center max-w-3xl leading-tight">
            {quote}
          </p>
        </div>
      )}
      <span className="sr-only">{alt}</span>
    </div>
  );
}

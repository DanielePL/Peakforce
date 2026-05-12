export default function ImageDivider({ image, caption, height = 'h-[70vh]' }) {
  return (
    <section className={`relative w-full overflow-hidden bg-charcoal ${height}`}>
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover md:bg-fixed"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80 backdrop-blur-[2px]" />
      {caption && (
        <div className="absolute inset-0 flex items-center justify-center container-edge">
          <p
            className="font-serif italic text-primary-foreground text-center leading-tight max-w-5xl"
            style={{ fontSize: 'clamp(2rem, 5vw, 60px)' }}
          >
            {caption}
          </p>
        </div>
      )}
    </section>
  )
}

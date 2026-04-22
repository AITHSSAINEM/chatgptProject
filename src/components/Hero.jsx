export default function Hero() {
  return (
    <section className="hero-luxury mx-auto mt-4 max-w-7xl overflow-hidden rounded-3xl px-6 py-16 shadow-luxury md:mt-8 md:px-12 md:py-24">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.35em] text-gold-300">Campagne Printemps-Été 2026</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-6xl">
          La signature d&apos;un luxe discret
        </h2>
        <p className="mt-5 max-w-xl text-sm text-stone-300 md:text-base">
          Des silhouettes joaillières inspirées des maisons iconiques, avec une finition premium,
          des détails précis et une esthétique éditoriale.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button className="rounded-full bg-gold-500 px-7 py-3 text-sm font-medium text-black transition hover:bg-gold-400">
            Découvrir la collection
          </button>
          <button className="rounded-full border border-stone-500 px-7 py-3 text-sm font-medium text-white transition hover:border-gold-300 hover:text-gold-200">
            Voir le lookbook
          </button>
        </div>
      </div>
    </section>
  );
}

export default function NewsletterAndAds() {
  return (
    <section className="mx-auto mt-10 grid max-w-7xl gap-4 px-4 pb-12 md:grid-cols-2 md:px-6">
      <div className="glass-card rounded-2xl p-6 shadow-sm">
        <p className="text-xs uppercase tracking-[0.25em] text-stone-500">VIP Club</p>
        <h3 className="mt-2 text-xl font-semibold text-stone-900">Abonnement newsletter</h3>
        <p className="mt-2 text-sm text-stone-600">
          Recevez les lancements exclusifs, drops limités et offres privées Maison Dorée.
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <input
            type="email"
            placeholder="Votre email"
            className="w-full rounded-full border border-stone-300 px-4 py-2"
          />
          <button className="rounded-full bg-gold-500 px-5 py-2 text-sm font-medium text-white">
            S'abonner
          </button>
        </div>
      </div>

      <div className="rounded-2xl border-2 border-dashed border-stone-300 bg-white p-6">
        <p className="text-xs uppercase tracking-[0.25em] text-stone-500">Ads Zone</p>
        <h3 className="mt-2 text-xl font-semibold text-stone-900">Espace sponsorisé</h3>
        <p className="mt-2 text-sm text-stone-600">
          Section réservée à la monétisation future (bannières, produits partenaires, collaborations).
        </p>
      </div>
    </section>
  );
}

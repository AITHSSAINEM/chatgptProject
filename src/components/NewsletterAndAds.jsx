export default function NewsletterAndAds() {
  return (
    <section className="mx-auto mt-12 grid max-w-7xl gap-4 px-4 pb-14 md:grid-cols-2 md:px-6">
      <div className="glass-card rounded-2xl p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Client Privé</p>
        <h3 className="mt-2 font-serif text-2xl text-white">Abonnement newsletter</h3>
        <p className="mt-2 text-sm text-stone-400">
          Recevez les lancements exclusifs, les capsules en édition limitée et les invitations
          événements.
        </p>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <input
            type="email"
            placeholder="Votre email"
            className="w-full rounded-full border border-stone-700 bg-stone-900 px-4 py-2 text-stone-100"
          />
          <button className="rounded-full bg-gold-500 px-5 py-2 text-sm font-medium text-black transition hover:bg-gold-400">
            S'abonner
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-gold-700/40 bg-gradient-to-br from-stone-900 to-black p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Maison Journal</p>
        <h3 className="mt-2 font-serif text-2xl text-white">Storytelling & Éditorial</h3>
        <p className="mt-2 text-sm text-stone-400">
          Intégrez ici vos campagnes visuelles, collaborations mode et temps forts pour créer une
          expérience premium similaire aux maisons de luxe.
        </p>
      </div>
    </section>
  );
}

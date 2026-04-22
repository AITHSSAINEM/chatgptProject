const stepLabels = ['Client', 'Livraison', 'Paiement'];

export default function CheckoutSteps({ step, formData, setFormData, onNext, onBack, onClose }) {
  return (
    <section className="glass-card rounded-2xl p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Checkout guidé</h3>
        <button onClick={onClose} className="text-sm text-stone-500 hover:text-stone-900">
          Fermer
        </button>
      </div>

      <div className="mb-4 flex gap-2">
        {stepLabels.map((label, index) => (
          <div
            key={label}
            className={`flex-1 rounded-full px-3 py-1 text-center text-xs ${
              index <= step ? 'bg-gold-400 text-stone-900' : 'bg-stone-200 text-stone-500'
            }`}
          >
            {label}
          </div>
        ))}
      </div>

      {step === 0 && (
        <div className="grid gap-3">
          <input
            className="rounded-lg border border-stone-300 px-3 py-2"
            placeholder="Nom complet"
            value={formData.name}
            onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
          />
          <input
            className="rounded-lg border border-stone-300 px-3 py-2"
            placeholder="Email"
            value={formData.email}
            onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
          />
        </div>
      )}

      {step === 1 && (
        <div className="grid gap-3">
          <input
            className="rounded-lg border border-stone-300 px-3 py-2"
            placeholder="Adresse"
            value={formData.address}
            onChange={(event) => setFormData((prev) => ({ ...prev, address: event.target.value }))}
          />
          <select
            className="rounded-lg border border-stone-300 px-3 py-2"
            value={formData.shipping}
            onChange={(event) => setFormData((prev) => ({ ...prev, shipping: event.target.value }))}
          >
            <option>Livraison standard (48h)</option>
            <option>Express (24h)</option>
          </select>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-3 rounded-xl border border-dashed border-gold-500 bg-gold-300/20 p-4 text-sm">
          <p className="font-medium">Paiement simulé</p>
          <p>
            Architecture prête pour Stripe : ajoutez plus tard une API backend et redirigez vers une
            session checkout réelle.
          </p>
        </div>
      )}

      <div className="mt-5 flex justify-between">
        <button
          onClick={onBack}
          disabled={step === 0}
          className="rounded-full border border-stone-300 px-4 py-2 text-sm disabled:opacity-40"
        >
          Retour
        </button>
        <button onClick={onNext} className="rounded-full bg-black px-5 py-2 text-sm text-white">
          {step === 2 ? 'Confirmer' : 'Suivant'}
        </button>
      </div>
    </section>
  );
}

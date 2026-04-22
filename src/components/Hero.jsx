import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="gold-gradient mx-auto mt-6 max-w-7xl overflow-hidden rounded-3xl px-6 py-14 text-stone-900 shadow-luxury md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <p className="text-xs uppercase tracking-[0.35em] text-stone-700">Nouvelle collection 2026</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
          Éclat premium, style quotidien
        </h2>
        <p className="mt-4 text-sm text-stone-800 md:text-base">
          Découvrez des pièces en plaqué or pensées pour sublimer chaque moment, du casual au
          sophistiqué.
        </p>
        <button className="mt-6 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800">
          Explorer la collection
        </button>
      </motion.div>
    </section>
  );
}

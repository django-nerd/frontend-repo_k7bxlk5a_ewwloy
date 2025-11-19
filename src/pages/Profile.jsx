import { motion } from 'framer-motion'

export default function Profile({ id, name, role, bio, palette }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden">
        <div className={`absolute -inset-40 opacity-30 blur-3xl bg-gradient-to-tr ${palette}`} />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-black tracking-tight">
            {name}
          </motion.h1>
          <p className="mt-3 text-white/70">{role}</p>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-8 max-w-2xl text-white/80">
            {bio}
          </motion.p>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[1,2,3,4].map((n) => (
              <motion.div key={n} whileHover={{ scale: 1.02 }} className="border border-white/10 rounded-xl p-5 bg-white/0">
                <div className="text-xs uppercase text-white/50 mb-2">Case {n}</div>
                <div className="aspect-video rounded-lg bg-white/5 border border-white/10" />
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <a href="/" className="inline-flex items-center gap-2 px-5 py-3 border border-white/20 rounded-full hover:bg-white/10 transition">
              ← Back
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

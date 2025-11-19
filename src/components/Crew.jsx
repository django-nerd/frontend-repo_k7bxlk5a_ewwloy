import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const members = [
  {
    id: 'karim',
    name: 'Karim Klila',
    role: 'System Architecture Engineer',
    accent: 'from-fuchsia-500 to-purple-500',
    img: 'https://api.dicebear.com/7.x/shapes/svg?seed=karim&backgroundType=gradientLinear&backgroundColor=7e22ce,db2777',
  },
  {
    id: 'firas',
    name: 'Firas Jery',
    role: 'Software Engineer',
    accent: 'from-cyan-500 to-blue-500',
    img: 'https://api.dicebear.com/7.x/shapes/svg?seed=firas&backgroundType=gradientLinear&backgroundColor=06b6d4,3b82f6',
  },
  {
    id: 'khaled',
    name: 'Khaled Ayedi',
    role: 'Data/AI Engineer',
    accent: 'from-lime-400 to-emerald-500',
    img: 'https://api.dicebear.com/7.x/shapes/svg?seed=khaled&backgroundType=gradientLinear&backgroundColor=84cc16,10b981',
  },
]

export default function Crew() {
  return (
    <section id="crew" className="relative bg-black text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.12),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Select a mind</h2>
          <p className="text-white/60 mt-3 max-w-2xl">Hover, distort, click. Each card opens a focused page with work, experiments and contact.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {members.map((m, i) => (
            <Link key={m.id} to={`/${m.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                whileHover={{ rotate: -1 + i, scale: 1.02 }}
                className="group relative overflow-hidden border border-white/10 rounded-2xl bg-gradient-to-br from-zinc-900 to-black"
              >
                <div className={`absolute -inset-40 opacity-30 blur-3xl bg-gradient-to-tr ${m.accent}`} />
                <div className="relative p-6">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-black">
                    <img src={m.img} alt={m.name} className="w-full h-full object-cover mix-blend-screen opacity-90 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{m.name}</h3>
                      <p className="text-white/60 text-sm">{m.role}</p>
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-white/50 group-hover:text-white/80 transition-colors">Open</div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

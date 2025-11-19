import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95]">
            KLILA • JERY • AYEDI
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-white/70">
            Three minds. One signal. A brutalist, post-internet portfolio crafted with motion and intent.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#crew" className="group inline-flex items-center gap-3 px-5 py-3 border border-white/20 rounded-full bg-white/0 hover:bg-white/10 transition">
              <span className="text-sm">Scroll to select a profile</span>
              <span className="size-2 rounded-full bg-fuchsia-400 group-hover:scale-150 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

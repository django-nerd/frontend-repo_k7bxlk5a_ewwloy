import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    const show = () => setVisible(true)
    const hide = () => setVisible(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseenter', show)
    window.addEventListener('mouseleave', hide)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseenter', show)
      window.removeEventListener('mouseleave', hide)
    }
  }, [])

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[1000] hidden md:block"
        animate={{ x: pos.x - 8, y: pos.y - 8, opacity: visible ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="w-4 h-4 rounded-full bg-white/90 mix-blend-difference" />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[999] hidden md:block"
        animate={{ x: pos.x - 40, y: pos.y - 40, opacity: visible ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <div className="w-20 h-20 rounded-full bg-fuchsia-500/10 blur-2xl" />
      </motion.div>
    </>
  )
}

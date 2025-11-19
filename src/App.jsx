import { Routes, Route, useParams } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from './components/Hero'
import Crew from './components/Crew'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import Profile from './pages/Profile'
import { profiles } from './pages'

function ProfileRoute() {
  const { id } = useParams()
  const data = profiles[id]
  if (!data) return <div className="min-h-screen bg-black text-white flex items-center justify-center">Not found</div>
  return <Profile {...data} />
}

function Home() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -1])

  return (
    <div className="bg-black text-white">
      <Cursor />
      <motion.div style={{ scale, rotate }}>
        <Hero />
      </motion.div>
      <Crew />
      <Footer />
    </div>
  )
}

export default function AppRouter(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":id" element={<ProfileRoute />} />
    </Routes>
  )
}

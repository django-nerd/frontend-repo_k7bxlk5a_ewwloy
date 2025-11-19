export default function Footer(){
  return (
    <footer className="bg-black text-white/60 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs">© {new Date().getFullYear()} KLILA • JERY • AYEDI — Built with motion</p>
        <div className="flex gap-4 text-xs uppercase tracking-widest">
          <a href="#top" className="hover:text-white transition">Back to top</a>
          <a href="/test" className="hover:text-white transition">System test</a>
        </div>
      </div>
    </footer>
  )
}

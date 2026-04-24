import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import heroBg from '../assets/BG Hero-Farm.avif'
import heroImg1 from '../assets/Hero Image 1.jpg'
import heroImg2 from '../assets/Hero Image 2.jpg'
import aboutImg1 from '../assets/About us image 1.jpg'
import aboutImg2 from '../assets/aabout us image 2.jpg'
import mapImg from '../assets/Map.png'

// Placeholder image URLs (replace with real assets later)
const PH = {
  collection1: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80',
  collection2: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&q=80',
  collection3: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80',
  portfolio1:  'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80',
  portfolio2:  'https://images.unsplash.com/photo-1601004890657-59e36b47b54a?w=600&q=80',
  portfolio3:  'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
  news1:       'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80',
  news2:       'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&q=80',
  news3:       'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&q=80',
}

const news = [
  { date: 'JANUARY 22, 2026', category: 'Exports', img: PH.news1,
    title: 'How Direct Procurement Is Transforming Indian Agri Exports',
    desc: 'Rungta Exports is pioneering a farmer-first model that connects Indian producers directly with global buyers.' },
  { date: 'FEBRUARY 10, 2026', category: 'Farmers', img: PH.news2,
    title: "India's Export-Led Agriculture: How Startups Are Helping Farmers",
    desc: 'New-age agri export startups are disrupting the traditional supply chain by eliminating middlemen.' },
  { date: 'MARCH 5, 2026', category: 'Global Markets', img: PH.news3,
    title: 'The Rise of Traceable Farm Produce in Global Supply Chains',
    desc: 'International importers are increasingly demanding traceable, ethically sourced agricultural produce.' },
]

// ── CountUp Component ──────────────────────────────────
function CountUp({ val, suffix, prefix, label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const duration = 2000
        const step = Math.ceil(val / (duration / 16))
        const timer = setInterval(() => {
          start += step
          if (start >= val) { setCount(val); clearInterval(timer) }
          else setCount(start)
        }, 16)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [val])

  return (
    <div ref={ref} className="text-center px-6 py-2">
      <p className="text-4xl font-black text-gray-900">{prefix}{count}{suffix}</p>
      <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest font-semibold">{label}</p>
    </div>
  )
}

// ── Main Component ─────────────────────────────────────
export default function Home() {
  return (
    <main className="pt-20">

      {/* ═══ 1. HERO ═══ */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <img src={heroBg} alt="Farm" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative h-full max-w-7xl mx-auto px-8 flex flex-col justify-center">

          {/* Top Right Stat */}
          <div className="absolute top-10 right-8 text-right hidden md:block">
            <p className="text-6xl font-black text-white">$50<span className="text-[#C9A84C]">B+</span></p>
            <p className="text-white/70 text-sm max-w-[160px] leading-snug mt-1">India's annual agricultural export value</p>
          </div>

          {/* Title + Desc + Buttons */}
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase leading-none tracking-tight mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              ROOTS OF<br /><span className="text-[#C9A84C]">THE TRUST</span>
            </h1>
            <p className="text-white/75 text-sm md:text-base max-w-md leading-relaxed mb-10">
              Our commitment goes beyond exports — it's about building long-term relationships with every farmer who trusts us and every buyer who chooses us.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="flex items-center gap-3 bg-[#1E3D1F] hover:bg-[#B8860B] text-white text-sm font-bold tracking-widest uppercase px-7 py-4 transition-all duration-300">
                GET STARTED <span>→</span>
              </Link>
              <Link to="/contact" className="flex items-center gap-3 border border-white/60 hover:border-[#C9A84C] hover:text-[#C9A84C] text-white text-sm font-bold tracking-widest uppercase px-7 py-4 transition-all duration-300">
                DISCOVER MORE <span>→</span>
              </Link>
            </div>
          </div>

          {/* Bottom Right Thumbnails */}
          <div className="absolute bottom-10 right-8 hidden md:flex gap-3">
            <div className="w-36 h-24 rounded overflow-hidden border-2 border-white/20">
              <img src={heroImg1} alt="Farm 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-36 h-24 rounded overflow-hidden border-2 border-white/20">
              <img src={heroImg2} alt="Farm 2" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. ABOUT ═══ */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">

          {/* Row 1 */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
            <div className="max-w-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#B8860B] text-xs">🌿</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Our About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase leading-tight">
                WHERE QUALITY PRODUCE MEETS.
              </h2>
              <p className="text-4xl md:text-5xl font-black italic text-[#B8860B] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                Global Trust
              </p>
            </div>

            {/* Right image + spinning badge */}
            <div className="relative flex-shrink-0 mt-4 md:mt-0">
              <div className="absolute -top-5 -left-5 z-10">
                <div className="relative w-16 h-16">
                  <svg viewBox="0 0 100 100" className="w-16 h-16 animate-spin" style={{ animationDuration: '8s' }}>
                    <path id="ca2" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" fill="none" />
                    <text fontSize="12" fill="#C9A84C" fontWeight="bold">
                      <textPath href="#ca2">Explore • Explore • Explore •</textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#B8860B] flex items-center justify-center shadow-md">
                      <span className="text-white text-sm font-bold">↗</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-64 h-44 rounded-xl overflow-hidden">
                <img src={aboutImg2} alt="About" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* Big image */}
            <div className="relative rounded-2xl overflow-hidden h-72">
              <img src={aboutImg1} alt="Farm" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute top-5 left-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-base">🌾</span>
                </div>
                <div>
                  <p className="text-white font-black text-sm uppercase">Direct Procurement</p>
                  <p className="text-white/60 text-xs mt-0.5">Farm-to-export, zero middlemen & organic solutions</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
                <div className="border-t border-white/20 mb-3" />
                <p className="text-white/60 text-sm italic" style={{ fontFamily: 'Georgia, serif' }}>Divyesh Rungta</p>
              </div>
            </div>

            {/* 2 Cards */}
            <div className="flex flex-col gap-4 justify-center">
              {[
                { icon: '📈', title: 'Export-Linked Pricing',  desc: 'Global market price direct to farmer' },
                { icon: '🌍', title: '120+ Countries Network', desc: 'Global agri-importers sourcing from India' },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-6 bg-white rounded-2xl px-6 py-6 shadow-md border border-gray-100 w-full">
                  <div className="w-14 h-14 rounded-full bg-[#B8860B] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">{c.icon}</span>
                  </div>
                  <div>
                    <p className="font-black text-gray-900 text-sm uppercase tracking-widest mb-1">{c.title}</p>
                    <p className="text-gray-500 text-sm">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. COLLECTIONS ═══ */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-2 mb-8">
            <span className="text-[#B8860B]">🌿</span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Farm Collections</span>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase leading-tight">SUSTAINABLE FARM</h2>
                <p className="text-4xl md:text-5xl font-black italic text-[#B8860B] mb-6" style={{ fontFamily: 'Georgia, serif' }}>Source</p>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                  Rungta Exports sources directly from trusted Indian farmers. We eliminate middlemen and source produce from across India — vegetables, spices, fruits, and grains.
                </p>
              </div>
              <div className="flex gap-2 mt-8">
                {[0,1,2].map(i => <div key={i} className={`h-1 rounded-full transition-all ${i===0?'w-8 bg-[#B8860B]':'w-4 bg-gray-200'}`} />)}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative rounded-xl overflow-hidden h-48">
                <img src={PH.collection1} alt="Collection" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-3 left-4">
                  <p className="text-white/60 text-xs uppercase tracking-widest">PLANTING MATERIAL</p>
                  <p className="text-white font-black text-sm">Fresh Farm Vegetables</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { img: PH.collection2, tag: 'COLOR MATCHING', name: 'Premium Spices' },
                  { img: PH.collection3, tag: 'PLANTING MATERIAL', name: 'Fresh Fruits' },
                ].map((item, i) => (
                  <div key={i} className="relative rounded-xl overflow-hidden h-32">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute bottom-2 left-3">
                      <p className="text-white/60 text-xs uppercase">{item.tag}</p>
                      <p className="text-white font-black text-xs">{item.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. WORLD MAP ═══ */}
      <section className="bg-[#1a0a0a] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 items-stretch">

            {/* LEFT — Map image */}
            <div className="md:col-span-2 relative overflow-hidden flex items-center justify-center" style={{ minHeight: '550px', backgroundColor: '#1a0a0a' }}>
              <img src={mapImg} alt="World Map" className="object-contain" style={{ width: '85%', height: '420px', filter: 'none' }} />

              {/* North America pin */}
              <div className="absolute top-14 left-8 flex items-center shadow-xl">
                <div className="w-10 h-10 bg-[#B8860B] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✈</span>
                </div>
                <div className="bg-white text-gray-900 text-xs font-black uppercase tracking-widest px-5 py-3">NORTH AMERICA</div>
              </div>

              {/* Africa pin */}
              <div className="absolute bottom-20 left-[38%] flex items-center shadow-xl">
                <div className="w-10 h-10 bg-[#B8860B] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✈</span>
                </div>
                <div className="bg-white text-gray-900 text-xs font-black uppercase tracking-widest px-5 py-3">AFRICA</div>
              </div>

              {/* Asia pin */}
              <div className="absolute bottom-16 right-8 flex items-center shadow-xl">
                <div className="w-10 h-10 bg-[#B8860B] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✈</span>
                </div>
                <div className="bg-white text-gray-900 text-xs font-black uppercase tracking-widest px-5 py-3">ASIA</div>
              </div>
            </div>

            {/* RIGHT — Text + progress bars */}
            <div className="md:col-span-1 bg-[#1a0a0a] px-8 py-12 flex flex-col justify-center" style={{ minHeight: '550px' }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#B8860B]">🌾</span>
                <span className="text-xs font-bold uppercase tracking-widest text-white/40">Destination</span>
              </div>
              <h2 className="text-3xl font-black text-white uppercase leading-tight">FARM TO GLOBAL</h2>
              <p className="text-3xl font-black italic text-[#C9A84C] mb-4" style={{ fontFamily: 'Georgia, serif' }}>Solutions</p>
              <p className="text-white/50 text-xs leading-relaxed mb-8">
                Connecting Indian agricultural produce to international importers across 120+ countries through transparent, ethical supply chain.
              </p>
              <div className="space-y-5">
                {[
                  { label: 'Asia',          pct: 60 },
                  { label: 'Africa',        pct: 80 },
                  { label: 'North America', pct: 70 },
                ].map((r, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white text-xs font-semibold">{r.label}</span>
                      <span className="text-[#C9A84C] text-xs font-black">{r.pct}%</span>
                    </div>
                    <div className="w-full bg-white/10 h-px">
                      <div className="bg-[#B8860B] h-px" style={{ width: `${r.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. MIDDLE BANNER ═══ */}
      <section className="py-20 bg-[#f9f5ee]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[#B8860B]">🌿</span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Our Advantages</span>
          </div>

          {/* Heading with inline image thumbnails */}
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase flex items-center justify-center flex-wrap gap-3 mb-2">
            WHERE QUALITY PRODUCE MEETS
            <span className="inline-block w-16 h-10 rounded overflow-hidden align-middle">
              <img src={PH.portfolio1} alt="" className="w-full h-full object-cover" />
            </span>
          </h2>
          <p className="text-4xl md:text-5xl font-black italic text-[#B8860B] flex items-center justify-center gap-3 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
            <span className="inline-block w-16 h-10 rounded overflow-hidden align-middle">
              <img src={PH.portfolio2} alt="" className="w-full h-full object-cover" />
            </span>
            Fabric of Innovation
          </p>

          {/* Solid filled arrow circle */}
          <div className="flex justify-center mb-12">
            <div className="w-14 h-14 rounded-full bg-[#1E3D1F] flex items-center justify-center text-white text-xl hover:bg-[#B8860B] transition-all cursor-pointer shadow-lg">
              ↓
            </div>
          </div>

          {/* Stats with divider lines between */}
          <div className="bg-white rounded-2xl shadow-sm px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-gray-200">
              <CountUp val={120} suffix="+" prefix=""  label="Countries Reached" />
              <CountUp val={0}   suffix=""  prefix=""  label="Middlemen" />
              <CountUp val={100} suffix="%" prefix=""  label="Farmer-First" />
              <CountUp val={1}   suffix="L" prefix="₹" label="Invested So Far" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 6. PORTFOLIO ═══ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#B8860B]">🌿</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Farm Portfolio</span>
              </div>
              <h2 className="text-4xl font-black text-gray-900 uppercase">WHAT OUR AN AGRICULTURAL</h2>
              <p className="text-4xl font-black italic text-[#B8860B]" style={{ fontFamily: 'Georgia, serif' }}>Company</p>
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#B8860B] hover:underline">All Artistry →</Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { img: PH.portfolio1, label: 'FIBRES',  name: 'Durable Fibres' },
              { img: PH.portfolio2, label: 'FIBRES',  name: 'Chic Drapes' },
              { img: PH.portfolio3, label: 'LUXURY',  name: 'Luxury Fabrics' },
            ].map((p, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden h-64 group cursor-pointer">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white/60 text-xs uppercase tracking-widest">{p.label}</p>
                  <p className="text-white font-black text-base uppercase">{p.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7. NEWS ═══ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-[#B8860B]">🌿</span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Latest News</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 uppercase">EXPLORE OUR LATEST</h2>
            <p className="text-4xl font-black italic text-[#B8860B]" style={{ fontFamily: 'Georgia, serif' }}>News & Tips</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((n, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-44 overflow-hidden">
                  <img src={n.img} alt={n.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#B8860B] text-xs font-bold uppercase">{n.category}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-400 text-xs">{n.date}</span>
                  </div>
                  <h3 className="font-black text-gray-900 text-sm leading-snug mb-2">{n.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4">{n.desc}</p>
                  <Link to="/contact" className="text-[#B8860B] text-xs font-bold uppercase tracking-widest hover:underline">Read More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 8. CTA BANNER ═══ */}
      <section className="py-24 bg-[#1E3D1F] text-center text-white">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-4">
            BOOK A FREE <span className="text-[#C9A84C]">15-MINUTE</span><br />EXPORT CONSULTATION
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Talk directly with our team — whether you're a farmer seeking fair prices or a global buyer looking for reliable Indian produce.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-[#B8860B] hover:bg-[#C9A84C] text-white font-black uppercase tracking-widest px-10 py-5 transition-all duration-300 text-sm">
            Book Now →
          </Link>
        </div>
      </section>

    </main>
  )
}

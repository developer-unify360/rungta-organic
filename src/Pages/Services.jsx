import { Link } from 'react-router-dom'

const services = [
  {
    icon: '🌾',
    title: 'Direct Farm Procurement',
    desc: 'We source fresh agricultural produce directly from Indian farmers at pre-agreed, export-linked prices — eliminating all intermediaries.',
    features: ['Pre-agreed pricing', 'Farm visits & verification', 'Quality assessment at source', 'Fair MSP+ pricing'],
  },
  {
    icon: '📦',
    title: 'Export Documentation & Compliance',
    desc: 'Our team handles all export compliance — from APEDA registration to phytosanitary certificates, ensuring smooth international shipments.',
    features: ['APEDA compliance', 'Phytosanitary certificates', 'Custom clearance', 'GST/IEC documentation'],
  },
  {
    icon: '🌍',
    title: 'Global Buyer Network',
    desc: 'Access our growing network of vetted importers across 120+ countries, especially in Middle East, Southeast Asia, and Europe.',
    features: ['Verified importers', 'Middle East & Asia focus', 'Long-term buyer relations', 'Repeat order management'],
  },
  {
    icon: '🚢',
    title: 'Logistics & Shipping',
    desc: 'End-to-end shipment management from cold storage to port, ensuring produce reaches buyers in export-grade quality.',
    features: ['Cold chain logistics', 'Port coordination', 'Insurance support', 'Real-time tracking'],
  },
  {
    icon: '💰',
    title: 'Price Discovery & Advisory',
    desc: 'We help farmers understand global market prices and advise on best crops to grow for export demand.',
    features: ['Global price benchmarks', 'Crop advisory', 'Seasonal demand planning', 'Market intelligence'],
  },
  {
    icon: '📊',
    title: 'CRM & Buyer Management',
    desc: 'Our CRM system ensures consistent follow-up with buyers, repeat orders, and quality feedback loops.',
    features: ['Buyer onboarding', 'Order tracking', 'Quality feedback system', 'Repeat business focus'],
  },
]

export default function Services() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="bg-green-900 py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">What We Do</span>
          <h1 className="text-5xl font-black mt-3 mb-4">Our Services</h1>
          <p className="text-green-200 text-lg leading-relaxed">
            From farm procurement to global shipment — Rungta Exports provides a complete, end-to-end agricultural export solution that benefits both farmers and international buyers.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="text-5xl mb-5">{s.icon}</div>
              <h3 className="text-xl font-black text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
              <ul className="space-y-2">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-green-700">
                    <span className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center text-xs">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Fund Allocation (from pitch deck) */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-green-700 font-bold text-xs uppercase tracking-widest">Investment Plan</span>
          <h2 className="text-4xl font-black text-gray-900 mt-2 mb-12">How We Invest in Growth</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { amount: '₹4L', label: 'Farmer Outreach', color: 'bg-green-100 text-green-800' },
              { amount: '₹6L', label: 'Employment Generation', color: 'bg-amber-100 text-amber-800' },
              { amount: '₹3L', label: 'CRM System', color: 'bg-blue-100 text-blue-800' },
              { amount: '₹5L', label: 'Initial Capital', color: 'bg-purple-100 text-purple-800' },
              { amount: '₹2L', label: 'Client Procurement', color: 'bg-red-100 text-red-800' },
            ].map((item, i) => (
              <div key={i} className={`${item.color} rounded-2xl p-6 text-center`}>
                <p className="text-3xl font-black">{item.amount}</p>
                <p className="text-xs font-semibold mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-800 text-center text-white">
        <h2 className="text-3xl font-black mb-4">Interested in Any of These Services?</h2>
        <p className="text-green-200 mb-8">Reach out to us and our team will get back to you within 24 hours.</p>
        <Link to="/contact" className="inline-block bg-amber-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-amber-400 transition-colors">
          Contact Us →
        </Link>
      </section>

    </main>
  )
}

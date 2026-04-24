import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">RE</span>
            </div>
            <div>
              <p className="font-bold text-white text-lg leading-none">RUNGTA EXPORTS</p>
              <p className="text-xs text-amber-400 tracking-widest uppercase">OPC Private Limited</p>
            </div>
          </div>
          <p className="text-green-200 text-sm leading-relaxed">
            Connecting Indian farmers to global markets through transparent, fair, and ethical trade practices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-amber-400 uppercase tracking-widest text-sm mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[['/', 'Home'], ['/services', 'Services'], ['/contact', 'Contact Us']].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-green-200 hover:text-white text-sm transition-colors">
                  → {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-amber-400 uppercase tracking-widest text-sm mb-4">Contact</h4>
          <ul className="space-y-2 text-green-200 text-sm">
            <li>📍 Flat No 504, Kotu Empire, Andhra University, Visakhapatnam, AP 530003</li>
            <li>🏢 DPIIT No: DIPP243709</li>
            <li>📋 GST: 37AAPCR4594J1ZJ</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-green-800 text-center py-4 text-green-400 text-xs">
        © {new Date().getFullYear()} Rungta Exports (OPC) Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  )
}

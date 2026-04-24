import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // TODO: Connect to MongoDB backend API
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' } })
    await new Promise(r => setTimeout(r, 1000)) // simulate API call
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="bg-green-900 py-20 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">Reach Out</span>
          <h1 className="text-5xl font-black mt-3 mb-4">Contact Us</h1>
          <p className="text-green-200 text-lg">
            Whether you're a farmer, importer, or investor — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* Info */}
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-8">Get in Touch</h2>

            <div className="space-y-6">
              {[
                { icon: '📍', title: 'Office Address', detail: 'Flat No 504, Kotu Empire, Andhra University, Visakhapatnam, AP 530003' },
                { icon: '🏢', title: 'DPIIT Number', detail: 'DIPP243709' },
                { icon: '📋', title: 'GST Number', detail: '37AAPCR4594J1ZJ' },
                { icon: '👤', title: 'Director', detail: 'Divyesh Rungta (B.Com)' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Who should reach out */}
            <div className="mt-10 bg-green-50 border border-green-100 rounded-2xl p-6">
              <h3 className="font-bold text-green-800 mb-3">Who Should Contact Us?</h3>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>🌾 Farmers looking for better export prices</li>
                <li>🌍 International importers seeking Indian produce</li>
                <li>💼 Investors & grant organizations</li>
                <li>🤝 NGOs & farmer collectives</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                  className="mt-6 text-green-700 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-black text-gray-900 mb-6">Send Us a Message</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">I am a...</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 bg-white"
                  >
                    <option value="">Select your role</option>
                    <option>Farmer</option>
                    <option>International Importer</option>
                    <option>Investor</option>
                    <option>NGO / Farmer Collective</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-700 text-white font-bold py-4 rounded-xl hover:bg-green-800 transition-colors disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

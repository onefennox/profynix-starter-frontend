export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
              Welcome to <span className="text-blue-600">Your Project</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              A modern landing page built with Vite + React + Tailwind CSS v4.
              Ready for customization. Deploy anywhere.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a href="#" className="rounded-xl bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition">
                Get Started
              </a>
              <a href="#" className="rounded-xl border border-gray-300 px-8 py-3 text-gray-700 font-semibold hover:bg-gray-50 transition">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl mb-16">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
            Ready to build something great?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
            Customize this template, add your content, and deploy to production.
          </p>
          <a href="#" className="inline-block rounded-xl bg-gray-900 px-10 py-4 text-white font-semibold hover:bg-gray-800 transition">
            Start Building
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-gray-500">
          <p>Powered by Profynix Technology. Built with Vite + React + Tailwind CSS v4.</p>
        </div>
      </footer>
    </div>
  )
}

const features = [
  { icon: "⚡", title: "Fast by Default", desc: "Vite provides instant hot module replacement and lightning-fast builds for rapid development." },
  { icon: "🎨", title: "Tailwind CSS v4", desc: "Utility-first CSS framework with the latest features. Customize your design system with ease." },
  { icon: "📱", title: "Fully Responsive", desc: "Looks great on every device — from mobile phones to large desktop screens. Built mobile-first." },
]

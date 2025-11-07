const solutions = [
  {
    id: 'tiff-ai',
    title: 'Tiff AI',
    desc: 'Conversational AI powering websites, support, and automation.',
    url: 'https://trendify.co.ke/tiff-ai'
  },
  {
    id: 'trendify-pay',
    title: 'Trendify Pay',
    desc: 'Secure payments with wallet, cards and MPesa integrations.',
    url: 'https://trendify.co.ke/pay'
  },
  {
    id: 'marketplace',
    title: 'Trendify Marketplace',
    desc: 'A growing digital marketplace for vendors and buyers.',
    url: 'https://trendify.co.ke'
  },
  {
    id: 'indie-chicas',
    title: 'Sports Management (Indie Chicas)',
    desc: 'Platform for player management, fixtures and analytics.',
    url: 'https://indiechicas.org'
  },
  {
    id: 'vendors',
    title: 'Trendify Vendors Hub',
    desc: 'Analytics, sales tracking and merchant tools for sellers.',
    url: 'https://trendify.co.ke/vendors'
  },
  {
    id: 'insights',
    title: 'Trendify Insights',
    desc: 'Real-time analytics & marketplace reporting dashboard.',
    url: 'https://trendify.co.ke/insights'
  },
  {
    id: 'studio',
    title: 'Trendify Studio',
    desc: 'Creative design and AI-powered content generation tools.',
    url: 'https://trendify.co.ke/studio'
  },
  {
    id: 'cloud',
    title: 'Trendify Cloud',
    desc: 'Cloud hosting and API infrastructure (coming soon).',
    url: 'https://trendify.co.ke/cloud'
  }
]

export default function SolutionsGrid(){
  return (
    <section id="solutions" className="py-10">
      <h3 className="text-2xl font-semibold mb-6">Our Solutions</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map(s => (
          <a key={s.id} href={s.url} className="block p-6 rounded-2xl border hover:shadow-lg transition bg-white/5" target="_blank" rel="noreferrer">
            <h4 className="text-lg font-semibold mb-2">{s.title}</h4>
            <p className="text-sm mb-3">{s.desc}</p>
            <div className="text-xs font-medium text-indigo-200">Visit</div>
          </a>
        ))}
      </div>
    </section>
  )
}

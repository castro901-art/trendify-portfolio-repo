export default function About(){
  return (
    <section id="about" className="py-10">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-3">About Trendify</h3>
          <p>Trendify Group Ltd is a Kenyan innovation company revolutionizing digital solutions through AI, payments, and enterprise software. Our mission is to empower individuals and businesses by merging technology, creativity, and intelligent systems.</p>
          <ul className="mt-4 space-y-2">
            <li>• AI & Automation</li>
            <li>• Fintech & Payments (Trendify Pay)</li>
            <li>• Marketplace Technology</li>
          </ul>
        </div>
        <div className="p-6 bg-white/5 rounded-2xl">
          <h4 className="font-semibold">Our Vision</h4>
          <p className="mt-2">We envision a world where technology bridges gaps, fuels creativity, and accelerates progress. At Trendify Group, we’re not just adapting to trends—we’re setting them.</p>
          <blockquote className="mt-3 italic">"To inspire and innovate, creating tools and platforms that shape a brighter, bolder future for all."</blockquote>
        </div>
      </div>
    </section>
  )
}

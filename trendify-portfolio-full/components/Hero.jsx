export default function Hero(){
  return (
    <header className="bg-gradient-to-br from-trendifyPurple-700 to-trendifyPurple-500 text-white py-28">
      <div className="container text-center">
        <img src="/logo.png" alt="Trendify logo" className="mx-auto mb-6 w-20 h-20 opacity-90" />
        <h1 className="text-5xl font-extrabold mb-4">Trendify Portfolio</h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">Building the Future of AI, Payments, and Intelligent Software Solutions.</p>
        <div className="flex items-center justify-center gap-3">
          <a href="#solutions" className="bg-white text-trendifyPurple-700 px-6 py-2 rounded-full font-semibold">Explore Our Work</a>
          <a href="#contact" className="border border-white px-6 py-2 rounded-full">Contact Us</a>
        </div>
      </div>
    </header>
  )
}

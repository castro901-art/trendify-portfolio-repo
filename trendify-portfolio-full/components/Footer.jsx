export default function Footer(){
  return (
    <footer className="mt-auto bg-slate-900 text-slate-200 py-6">
      <div className="container text-center">
        <div className="mb-2">© {new Date().getFullYear()} Trendify Group Ltd. All rights reserved.</div>
        <div className="text-sm">Built by Trendify Softwares.</div>
      </div>
    </footer>
  )
}

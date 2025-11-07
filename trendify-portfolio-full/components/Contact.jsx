export default function Contact(){
  // Replace FORM_ACTION with your Formspree endpoint (e.g. https://formspree.io/f/{your-id})
  const FORM_ACTION = "https://formspree.io/f/your-form-id"
  return (
    <section id="contact" className="py-10">
      <h3 className="text-2xl font-semibold mb-3">Let’s Build Together</h3>
      <p>Interested in partnering, licensing our software, or learning more about Trendify’s solutions?</p>
      <p className="mt-3">Email: <a href="mailto:hello@trendify.co.ke" className="text-indigo-600">hello@trendify.co.ke</a></p>

      <form action={FORM_ACTION} method="POST" className="mt-6 max-w-xl">
        <label className="block mb-2">
          <span className="text-sm">Your name</span>
          <input name="name" required className="mt-1 block w-full rounded-md border px-3 py-2 bg-white/5" />
        </label>
        <label className="block mb-2">
          <span className="text-sm">Your email</span>
          <input type="email" name="email" required className="mt-1 block w-full rounded-md border px-3 py-2 bg-white/5" />
        </label>
        <label className="block mb-2">
          <span className="text-sm">Message</span>
          <textarea name="message" rows="4" required className="mt-1 block w-full rounded-md border px-3 py-2 bg-white/5"></textarea>
        </label>
        <button type="submit" className="mt-2 bg-trendifyPurple-500 text-white px-4 py-2 rounded">Send Message</button>
      </form>
    </section>
  )
}

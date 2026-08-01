import FadeIn from './FadeIn'

const base = import.meta.env.BASE_URL

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn y={40}>
        <h2 className="font-black uppercase leading-none tracking-tight text-center text-[#0C0C0C] text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
          Contact
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto text-center">
        <FadeIn y={20} delay={0.1}>
          <p className="text-[#0C0C0C] font-medium text-[clamp(1rem,2vw,1.35rem)] leading-relaxed mb-12 sm:mb-16">
            Ready to start your next project or have questions about my work? Let's connect and discuss how we can bring your ideas to life.
          </p>
        </FadeIn>


        <FadeIn y={20} delay={0.3}>
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-8 lg:gap-12">
            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    const qrCode = document.getElementById('whatsapp-qrcode');
                    if (qrCode) {
                      if (qrCode.style.display === 'none') {
                        qrCode.style.display = 'block';
                        qrCode.style.opacity = '0';
                        qrCode.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                          qrCode.style.transition = 'all 0.3s ease';
                          qrCode.style.opacity = '1';
                          qrCode.style.transform = 'scale(1)';
                        }, 10);
                      } else {
                        qrCode.style.transition = 'all 0.2s ease';
                        qrCode.style.opacity = '0';
                        qrCode.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                          qrCode.style.display = 'none';
                        }, 200);
                      }
                    }
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full text-sm font-medium hover:bg-green-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.168 1.24 8.413 3.488 2.245 2.248 3.481 5.235 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-0-3.951-.496-5.688-1.448l-1.852.688z"/>
                  </svg>
                  WhatsApp
                </button>
              </div>
              <div className="flex items-center gap-3 mt-4 lg:mt-0">
                <svg className="w-6 h-6 text-[#0C0C0C] opacity-70" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span className="text-[#0C0C0C] opacity-70">rememberkamu88@gmail.com</span>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <a href="https://github.com/bhatkamu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#0C0C0C] opacity-70 hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>
                <a href="https://www.instagram.com/bhatkamu_09/?hl=en#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#0C0C0C] opacity-70 hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
            <div id="whatsapp-qrcode" className="hidden lg:block opacity-0 lg:ml-12">
              <img src={`${base}images/IMG_0282.jpg`} alt="WhatsApp QR Code" className="w-64 h-64 object-cover rounded-xl shadow-xl border-4 border-green-500" style={{transform: 'scale(0.8)'}}/>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
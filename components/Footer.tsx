import { BookOpen, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer id="kontak" className="bg-[#2c8f75]">
      <div className="bg-linear-to-br from-[#2c8f75] via-[#2c8f75] to-[#2c8f75]/95">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#f2b93b] flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-[#1b3d33]" />
                </div>
                <span className="font-display text-xl font-bold text-[#ffffff]">
                  Ziyad<span className="text-[#f2b93b]">books</span>
                </span>
              </a>
              <p className="text-[#ffffff]/70 max-w-md mb-6">
                Menerbitkan buku-buku Islam yang mencerdaskan dan membawa
                pencerahan bagi umat. Dari buku anak hingga kajian mendalam
                untuk dewasa.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg font-semibold text-[#ffffff] mb-4">
                Kategori
              </h4>
              <ul className="space-y-2">
                {['Motivasi Islami', 'Komik', 'Ibadah', 'Doa', 'Anak'].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#katalog"
                        className="text-[#ffffff]/70 hover:text-[#f2b93b] transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-lg font-semibold text-[#ffffff]mb-4">
                Kontak
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 [#f2b93b] shrink-0 mt-0.5" />
                  <span className="text-[#ffffff]/70">
                    Jl. Penerbit No. 123, Jakarta
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 [#f2b93b] shrink-0" />
                  <span className="text-[#ffffff]/70">+62 21 1234 5678</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 [#f2b93b] shrink-0" />
                  <span className="text-[#ffffff]/70">info@ziyadbooks.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-[#ffffff]/10">
            <p className="text-center text-[#ffffff]/50 text-sm">
              © {new Date().getFullYear()} Ziyadbooks. Hak cipta dilindungi
              undang-undang.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

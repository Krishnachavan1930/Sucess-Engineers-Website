export default function Footer() {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-12 w-full text-gray-500 bg-gray-100 border-t border-gray-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 pb-8 border-b border-gray-300">
        <div className="flex flex-col md:max-w-md">

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Sucess Engineers</h2>
          <p className="text-sm mb-4">
            Leading multi-product manufacturer delivering high-quality panels, switchgear, and engineering solutions for India's industrial landscape. Proudly partnering with industry leaders to shape the future of modern infrastructure.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-red-600"><svg width="24" height="24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75c.97 0 1.75.79 1.75 1.75s-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.07-.93-2-2-2s-2 .93-2 2v4.5h-3v-9h3v1.22c.41-.63 1.36-1.22 2.25-1.22 2.07 0 3.75 1.68 3.75 3.75v5.25z" /></svg></a>
            <a href="mailto:info@sucessengineers.com" aria-label="Email" className="hover:text-red-600"><svg width="24" height="24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8l8 5 8-5v10z" /></svg></a>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/team">Our Team</a></li>
              <li><a href="/career">Career</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Contact</h3>
            <ul className="text-sm space-y-2">
              <li><span className="font-semibold">Email:</span> info@sucessengineers.com</li>
              <li><span className="font-semibold">Phone:</span> +91 9876543210</li>
              <li><span className="font-semibold">Address:</span> Pimpri, Pune, Maharashtra, India</li>
            </ul>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">Newsletter</h3>
            <form className="flex items-center gap-2 pt-2">
              <input className="border border-gray-500/30 placeholder-gray-500 focus:ring-2 ring-red-600 outline-none w-full max-w-64 h-9 rounded px-2" type="email" placeholder="Enter your email" />
              <button type="submit" className="bg-red-600 w-24 h-9 text-white rounded">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-xs md:text-sm pb-5 text-gray-600">
        Copyright 2025 © Sucess Engineers. All Rights Reserved.
      </p>
    </footer>
  );
}

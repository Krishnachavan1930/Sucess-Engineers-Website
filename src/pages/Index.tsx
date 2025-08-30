import Navbar from "@/components/Navbar"
import MissionVision from "@/components/MissionVision"
import CompaniesBranding from "@/components/CompaniesBranding"


export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="w-full">
        <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
          <img
            src="/slidera.jpg"
            alt="Decorative poles in urban setting"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Content Section - RIGHT on desktop, TOP on mobile */}
            <div className="lg:pl-8 order-1 lg:order-2">
              <div className="mb-8">
                <p className="text-red-600 font-semibold text-sm uppercase tracking-wide mb-4">WE BELIEVE</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Together, We Build the Future of Electrical Innovation
                </h2>
                <div className="w-16 h-1 bg-red-600 mb-8"></div>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  The origin of the company, that today in the year 1982, Mr. Tiwari bought a company "SUCCESS
                  ENGINEERS" lies in a small fabrication workshop in Pimpri, Pune. Our founder, Mr. Suresh Tiwari, a man
                  of punctuality and commitment, built the company through sheer determination and focus. Today.
                </p>

                <p className="text-lg">
                  Success Engineers stands tall as a leading multi-product manufacturer, delivering high-quality panels
                  including LT panels, C&R panels, feeder pillars, and distribution boxes. Our growth has been powered
                  by relentless innovation, skilled craftsmanship, and enduring partnerships with industry giants such
                  as Adani, Godrej, and TATA. With decades of excellence behind us and a future-focused mindset, we
                  continue to engineer solutions that empower India's industrial landscape — one panel, one partnership,
                  and one promise at a time.
                </p>
              </div>

              <div className="mt-10">
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl">
                  Learn More
                </button>
              </div>
            </div>

            {/* Timeline Section - LEFT on desktop, BOTTOM on mobile */}
            <div className="relative order-2 lg:order-1">
              <div className="space-y-8">
                {/* Company Logo/Icon */}
                <div className="flex justify-center lg:justify-start mb-12">
                  <div className="w-20 h-20 flex items-center justify-center">
                    <img
                      src="/sucesslogo.jpg"   // put your logo file inside public/logo.png
                      alt="Success Engineers Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Timeline Items */}
                <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-red-200 hidden sm:block"></div>

                  {/* Timeline Item 1982 */}
                  <div className="relative flex items-start space-x-4 mb-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-red-600 rounded-full flex items-center justify-center shadow-sm">
                      <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900">1982</h3>
                      <p className="text-gray-600 mt-1">Started a small fabrication unit</p>
                    </div>
                  </div>

                  {/* Timeline Item 2004 */}
                  <div className="relative flex items-start space-x-4 mb-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center shadow-sm">
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900">2004</h3>
                      <p className="text-gray-600 mt-1">Started supplying feeder pillars & other products to PCMC</p>
                    </div>
                  </div>

                  {/* Timeline Item 2010 */}
                  <div className="relative flex items-start space-x-4 mb-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center shadow-sm">
                      <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900">2010</h3>
                      <p className="text-gray-600 mt-1">
                        Setting up and enhancing then manufacturing capacity to a state of art manufacturing facility
                        for all sorts of panels and switchgear
                      </p>
                    </div>
                  </div>

                  {/* Timeline Item 2015 */}
                  <div className="relative flex items-start space-x-4 mb-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center shadow-sm">
                      <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900">2015</h3>
                      <p className="text-gray-600 mt-1">
                        Manufacturing & supplying super quality panels in and across Maharashtra
                      </p>
                    </div>
                  </div>

                  {/* Timeline Item 2018 */}
                  <div className="relative flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center shadow-sm">
                      <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900">2018</h3>
                      <p className="text-gray-600 mt-1">
                        Fabrication, development and supply of newer products to private businesses across the country
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Mission & Vision Section */}
      <MissionVision />
      {/* Companies Branding Section */}
      <CompaniesBranding />

    </div>
  )
}

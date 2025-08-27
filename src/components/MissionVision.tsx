import { Target, Eye } from "lucide-react"  // you can use lucide-react icons

export default function MissionVision() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12" style={{fontFamily: 'inherit'}}>
          Our Mission & Vision
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="bg-gray-50 rounded-2xl shadow-sm p-8 hover:shadow-md transition">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4" style={{fontFamily: 'inherit'}}>Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              To deliver high-quality, durable, and innovative decorative poles that enhance the beauty, 
              safety, and functionality of urban and rural landscapes, while maintaining our commitment 
              to engineering excellence and customer satisfaction.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-50 rounded-2xl shadow-sm p-8 hover:shadow-md transition">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4" style={{fontFamily: 'inherit'}}>Our Vision</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              To be recognized as a leader in engineering and design of decorative poles, creating 
              sustainable and aesthetic solutions that illuminate communities, inspire trust, and shape 
              the future of modern infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

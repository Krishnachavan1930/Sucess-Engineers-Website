import Navbar from "@/components/Navbar"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="w-full">
        <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
          <img
            src="/public/slidera.jpg"
            alt="Decorative poles in urban setting"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">About Success Engineers</h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            Engineering Decorative Poles with Strength and Elegance.
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              With years of expertise in engineering, Success Engineers designs decorative poles that combine
              durability, style, and innovation. From streets to campuses, we craft solutions that light up spaces while
              elevating their beauty.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

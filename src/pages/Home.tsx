import GlassGallery from "@/components/glass-gallery";

export default function Home() {
  return (
    <div className="space-y-16 p-6">
      {/* HERO */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold">Premium Glass Printing</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Transform your spaces with custom printed glass solutions.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-xl">
          Get a Quote
        </button>
      </section>

      {/* GALLERY */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Our Work</h2>
        <GlassGallery />
      </section>
    </div>
  );
}

export default function About() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold">About Us</h1>

      <p className="text-gray-400">
        We are a modern glass printing company focused on precision,
        durability, and design excellence. Our mission is to bring
        high-quality visuals into everyday spaces.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-4 border border-gray-800 rounded-xl">
          <h3 className="font-semibold">10+ Years Experience</h3>
          <p className="text-gray-400">Trusted by businesses</p>
        </div>
        <div className="p-4 border border-gray-800 rounded-xl">
          <h3 className="font-semibold">Premium Materials</h3>
          <p className="text-gray-400">Durable & safe glass</p>
        </div>
        <div className="p-4 border border-gray-800 rounded-xl">
          <h3 className="font-semibold">Custom Designs</h3>
          <p className="text-gray-400">Fully personalized prints</p>
        </div>
      </div>
    </div>
  );
}
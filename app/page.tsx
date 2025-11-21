import PropertyCard from "./components/PopertyCard";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { properties } from "./lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />

      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                Featured Properties
              </h2>
              <p className="text-sm text-gray-500">
                Handpicked homes and investments from around the world.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                title={property.title}
                images={property.images}
                price={property.price}
                size={property.size}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

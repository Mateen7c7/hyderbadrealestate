import { properties } from "../../lib/data";
import ImageCarousel from "@/app/components/ImageCarousel";

interface PropertyPageProps {
  params: Promise<{
    id: string;
  }>;
}

const Page = async ({ params }: PropertyPageProps) => {
  const { id } = await params;
  const numericId = Number(id);
  const property = properties.find((p) => p.id === numericId);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Property not found
          </h1>
          <p className="text-gray-600">
            The property you are looking for does not exist or may have been
            removed.
          </p>
        </div>
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top section: images + key info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-start">
          {/* Image gallery */}
          <ImageCarousel
            images={property.images}
            title={property.title}
            locationBadge={property.location}
            priceBadge={formattedPrice}
          />

          {/* Details */}
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {property.title}
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">
                {property.location}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wide text-gray-500">
                  Price
                </span>
                <span className="text-lg font-semibold text-gray-900">
                  {formattedPrice}
                </span>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wide text-gray-500">
                  Size
                </span>
                <span className="text-lg font-semibold text-gray-900">
                  {property.size}
                </span>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wide text-gray-500">
                  Type
                </span>
                <span className="text-lg font-semibold text-gray-900">
                  Residential
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {property.description}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                Highlights
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                  Prime location with great neighborhood amenities
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                  Well-maintained with modern finishes
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                  Spacious layout suitable for families or guests
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                  Excellent potential for rental income or investment
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Interested in this property?
                </p>
                <p className="text-sm font-medium text-gray-800">
                  Contact our team to schedule a viewing or request more
                  details.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gray-900 text-white font-semibold text-sm sm:text-base hover:bg-gray-800 transition-colors">
                  Request a Call
                </button>
                <button className="w-full sm:w-auto px-5 py-3 rounded-xl border border-gray-300 text-gray-900 font-semibold text-sm sm:text-base hover:bg-gray-50 transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
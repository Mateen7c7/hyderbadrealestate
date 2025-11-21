
import Image from "next/image";
import Link from "next/link";

interface PropertyCardProps {
  id: number;
  title: string;
  images: string[];
  price: number;
  size: string;
}

const PropertyCard = ({ id, title, images, price, size }: PropertyCardProps) => {
  const firstImage = images && images.length > 0 ? images[0] : null;
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <Link href={`/properties/${id}`} className="block w-full max-w-sm mx-auto">
      <div className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 w-full cursor-pointer">
      {/* Image Container */}
      <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden bg-gray-200">
        {firstImage ? (
          <Image
            src={`/images/${firstImage}`}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
            No Image
          </div>
        )}
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
          <span className="text-lg font-bold text-gray-900">{formattedPrice}</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 sm:p-5 md:p-6">
        {/* Title */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          {title}
        </h3>

        {/* Size Info */}
        <div className="flex items-center gap-2 text-gray-600">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            />
          </svg>
          <span className="text-sm sm:text-base font-medium">{size}</span>
        </div>

        {/* View Details Button */}
        <button className="mt-4 sm:mt-5 w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2.5 sm:py-3 px-4 rounded-lg transition-colors duration-200 text-sm sm:text-base">
          View Details
        </button>
      </div>
    </div>
    </Link>
  );
};

export default PropertyCard;
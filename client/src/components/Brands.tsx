import { Link } from "react-router-dom";
import { brands } from "../data/data.ts";

const Brands = () => {
  const featuredBrands = brands.filter((brand) => brand.featured);

  return (
    <section className="py-20 bg-white text-center" id="Brands">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <h2 className="text-4xl font-bold text-gray-800">
            Premium Equipment Brands
          </h2>
          <p className="text-lg text-gray-600">
            Professional Tools & Equipment Solutions
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
          {featuredBrands.map((brand) => (
            <Link
              key={brand.id}
              to={`/${brand.id}`}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:scale-105 transition-transform duration-200 shadow-sm hover:shadow-md"
              aria-label={`View details for ${brand.name}`}
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="h-20 mb-4 object-contain"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {brand.name}
              </h3>
              <p className="text-sm text-gray-600">{brand.description}</p>
              <p className="text-xs text-gray-500">Since {brand.since}</p>
              {brand.featured && (
                <span className="mt-3 inline-block bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded">
                  Featured
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;

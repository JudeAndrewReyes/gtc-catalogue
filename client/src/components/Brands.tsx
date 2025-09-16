import { Link } from 'react-router-dom';
import { brands } from '../data/data.ts';

const Brands = () => {
  const featuredBrands = brands.filter(
    (brand) => brand.featured
  );

  return (
    <section className="py-16 bg-white text-center" id='Brands'>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Premium Equipment Brands
        </h2>
        <p className="text-xl text-gray-600">Professional Tools & Equipment Solutions</p>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
          {featuredBrands.map((brand) => (
            <Link 
              key={brand.id} 
              to={`/${brand.id}`}
              className="brand-item flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:transform hover:scale-105 transition-transform duration-200"
              aria-label={`View details for ${brand.name}`}
            >
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`} 
                className="h-20 rounded mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {brand.name}
              </h3>
              <p className="text-gray-600 text-center mb-2">
                {brand.description}
              </p>
              <p className="text-gray-500 text-sm mb-2">
                Since: {brand.since}
              </p>
              {brand.featured && (
                <span className="featured-badge inline-block bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded">
                  Featured
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands;
import { brands } from "../data/data";

const Partnerships = () => {
  // ✅ Premium (featured + partnership)
  const partnerBrands = brands.filter(
    (brand) => brand.partnership
  );

  // ✅ Other brands
  const otherBrands = brands.filter(
    (brand) => !(brand.featured && brand.partnership)
  );

  return (
    <section className="py-2 mb-16 bg-white" id="Partnership">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Trusted Partnerships
          </h2>
          <p className="text-xl text-gray-600">
            Authorized Dealer Network & Brand Partners
          </p>
        </div>

        {/* Premium Brands */}
        {partnerBrands.length > 0 && (
          <div className="space-y-12 mb-12">
            {partnerBrands.map((brand) => (
              <div
                key={brand.id}
                className="bg-gradient-to-br from-red-50 to-red-50 border border-red-200 rounded-2xl p-8"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Left Side: Info */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center justify-center shadow-lg">
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="w-20 h-20 rounded-xl object-contain"
                        />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-red-800">
                          {brand.name} Authorized Dealer
                        </h3>
                        <p className="text-red-700 font-medium">
                          Partnership Since {brand.since}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-lg">{brand.description}</p>
                  </div>

                  {/* Right Side: Highlight Card */}
                  <div className="text-center">
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                      <div className="text-6xl text-red-600 mb-4">🏆</div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        Authorized Since {brand.since}
                      </h4>
                      <p className="text-gray-600 mb-4">
                        Longstanding Professional Partnership
                      </p>
                      <div className="bg-red-100 text-gray-800 px-4 py-2 rounded-lg inline-block font-semibold">
                        {brand.name} Partnership
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* More Brands */}
        {otherBrands.length > 0 && (
          <div className="bg-gray-50 rounded-2xl p-2">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              More Brands
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {otherBrands.map((brand) => (
                <div
                  key={brand.id}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow group cursor-pointer"
                >
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-16 max-w-full rounded-sm object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {brand.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};


export default Partnerships;

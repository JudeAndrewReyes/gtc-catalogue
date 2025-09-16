import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { brands, stihlCategories, stihlProducts } from '../data/data';
import type { Brand, Category, CategoryWithProducts } from '../types/brand';
import { useQuoteFormContext } from "../hooks/useQuoteForm.context";
import assets from '../assets/assets';

const BrandPage: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
      useEffect(() => {
          if(showMobileMenu){
              document.body.style.overflow = 'hidden'
          }else{
              document.body.style.overflow = 'auto'
          }
          return ()=>{
              document.body.style.overflow = 'auto'
          }
      }, [showMobileMenu]);

  const { id } = useParams<{ id: string }>(); // Get brand ID (e.g., "stihl")
  const brand = brands.find((b: Brand) => b.id === id);
  const { open } = useQuoteFormContext();

  // State to track selected category
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    id === 'stihl' && stihlCategories.length > 0 ? stihlCategories[0].id : null
  );

  // Get categories (Stihl only for now)
  const categories: Category[] = id === 'stihl' ? stihlCategories : [];

  // Get products for the selected category
  const selectedProducts: CategoryWithProducts | undefined = id === 'stihl' && selectedCategoryId
    ? stihlProducts.categories.find((c: CategoryWithProducts) => c.id === selectedCategoryId)
    : undefined;

  if (!brand) {
    return (
      <div className="p-6 max-w-2xl mx-auto text-center">
        <h1 className="text-2xl font-bold text-gray-900">Brand Not Found</h1>
        <Link
          to="/"
          className="mt-4 inline-block text-blue-500 hover:text-blue-600 font-medium transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="brand-page mx-auto bg-white min-h-screen">
      {/* Brand Details */}
      <div className="flex items-center justify-between bg-white shadow-sm rounded-md p-2 md:p-3 fixed top-0 left-0 w-full z-10 gap-2">
        
        {/* Logo + Name */}
        <div className="flex items-center gap-2 min-w-0">
          <img
            src={brand.logo}
            alt={`${brand.name} logo`}
            className="h-8 w-8 md:h-10 md:w-auto rounded-sm transition-all hover:scale-105 flex-shrink-0"
          />
          <div className="truncate">
            <h1 className="text-base md:text-xl font-semibold text-gray-900 leading-tight truncate">
              {brand.name}
            </h1>
            {/* Show description only on md+ */}
            <p className="hidden md:block text-sm text-gray-700 max-w-xs truncate">
              {brand.description}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            to="/"
            className="sm:inline-block px-2 py-1 bg-gray-100 text-gray-500 text-xs md:text-sm font-medium rounded hover:bg-gray-200 transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Back to home page"
          >
            Home
          </Link>
          <button
            onClick={open}
            className="px-2 md:px-3 py-1 md:py-1.5 bg-red-600 text-white text-xs md:text-sm font-medium rounded hover:bg-red-700 transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Open quote form"
          >
            Quote
          </button>
        </div>
      </div>

      {/* Categories and Products Layout */}
      {categories.length > 0 ? (
        <div className="flex flex-col md:flex-row gap-8 py-12 md:py-24">
          
          {/* Left Sidebar: Categories */}
          <aside
            className={`
              fixed top-0 left-0 h-full w-3/4 max-w-xs bg-gray-50 p-4 shadow-lg transform transition-transform duration-300 z-50
              ${showMobileMenu ? "translate-x-0" : "-translate-x-full"}
              md:sticky md:top-24 md:w-1/4 md:translate-x-0 md:block md:h-auto md:shadow-sm md:rounded-lg
            `}
          >
            {/* Mobile Close Button */}
            <div className="flex justify-between items-center mb-4 md:hidden">
              <h2 className="text-lg font-bold text-gray-900">Categories</h2>
              <img
                onClick={() => setShowMobileMenu(false)}
                src={assets.cross_icon}
                className="w-6 cursor-pointer"
                alt="Close"
              />
            </div>

            {/* Desktop Title */}
            <h2 className="hidden md:block text-xl font-bold text-gray-900 mb-3">Categories</h2>

            <ul className="space-y-2">
              {categories.map((category: Category) => (
                <li key={category.id}>
                  <button
                    onClick={() => {
                      setSelectedCategoryId(category.id);
                      setShowMobileMenu(false); // auto-close on mobile
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm md:text-base font-medium ${
                      selectedCategoryId === category.id
                        ? "bg-red-100 text-red-600 font-semibold"
                        : "text-gray-700 hover:bg-gray-200 hover:text-red-600"
                    } transition-colors focus:outline-none focus:ring-2 focus:ring-red-500`}
                    aria-current={selectedCategoryId === category.id ? "true" : "false"}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Right Content: Products */}
          <main className="flex-1">
            {selectedProducts ? (
              <>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                  {selectedProducts.name}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {selectedProducts.products.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
                    >
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={`${product.name} image`}
                          className="h-20 w-20 md:h-24 md:w-24 object-contain mb-3 rounded-md"
                        />
                      ) : (
                        <div className="h-20 w-20 md:h-24 md:w-24 bg-gray-100 flex items-center justify-center mb-3 rounded-md text-gray-500 text-xs font-medium">
                          No Image
                        </div>
                      )}
                      <span className="text-gray-800 text-sm md:text-base font-medium text-center">
                        {product.name}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-gray-600 text-center">Select a category to view products.</p>
            )}
          </main>
        </div>
      ) : (
        <p className="text-gray-600 text-center text-lg">
          No categories available for this brand.
        </p>
)}
    </div>
  );
};

export default BrandPage;
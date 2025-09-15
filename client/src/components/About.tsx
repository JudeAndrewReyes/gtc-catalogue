import { useState } from "react";
import QuoteForm from "./QuoteForm";
import assets from "../assets/assets";

export default function About() {
    const [isQuoteFormOpen, setIsQuoteFormOpen] = useState<boolean>(false);

    const handleOpenQuoteForm = () => {
        setIsQuoteFormOpen(true);
    }

    const handleCloseQuoteForm = () => {
        setIsQuoteFormOpen(false);
    }

    return (
        <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col items-center text-center lg:text-left">
                    <img src= {assets.logo} alt="Gensson Logo" className="w-30 h-30 rounded-full shadow-md mx-auto lg:mx-0 mb-6" />
                    <div className="space-y-3 text-gray-700">
                        <p className="font-medium">National Procurement</p>
                        <p className="font-medium">Partner Solutions</p>
                        <p className="font-medium">Trusted Network</p>
                    </div>
                </div>
                <div className="space-y-6 text-center lg:text-left">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        Professional Equipment
                        <span className="text-red-500 block">Sourcing</span>
                    </h1>
                    <button className="w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-900 p-6 rounded-xl transition-all text-left shadow-md hover:shadow-lg">
                        <h3 className="font-bold text-lg mb-2">Upload Purchase Order</h3>
                        <p className="text-gray-600">Already know what you need?</p>
                    </button>
                    <button
                        onClick={handleOpenQuoteForm}
                        className="w-full bg-red-500 hover:bg-red-600 text-white p-6 rounded-xl transition-all text-left shadow-lg hover:shadow-xl">
                        <h3 className="font-bold text-lg mb-2">Request Custom Quote</h3>
                        <p className="text-red-100">Tell us what you need and we'll source it for you</p>
                    </button>

                    
                </div>
            </div>
            <QuoteForm
                        isOpen={isQuoteFormOpen}
                        onClose={handleCloseQuoteForm}
            />
        </div>
    )
}
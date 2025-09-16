import React, { createContext, useContext } from "react";
import { useQuoteForm } from "./useQuoteForm";
import type { QuoteFormContextType } from "./useQuoteForm.types";

const QuoteFormContext = createContext<QuoteFormContextType | undefined>(undefined);

export const QuoteFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const value = useQuoteForm();
  return React.createElement(
    QuoteFormContext.Provider,
    { value },
    children
  );
};

export function useQuoteFormContext(): QuoteFormContextType {
  const ctx = useContext(QuoteFormContext);
  if (!ctx) throw new Error("useQuoteFormContext must be used inside QuoteFormProvider");
  return ctx;
}

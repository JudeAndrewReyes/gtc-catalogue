import { useState } from "react";
import type { QuoteFormContextType } from "./useQuoteForm.types";

export function useQuoteForm(): QuoteFormContextType {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };
}

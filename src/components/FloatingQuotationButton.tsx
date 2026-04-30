import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface FloatingQuotationButtonProps {
  projectName: string;
  onClick: () => void;
}

const FloatingQuotationButton = ({ projectName, onClick }: FloatingQuotationButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      const scrollThreshold = 500;
      setIsVisible(window.scrollY > scrollThreshold && isMobile);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={onClick}
          className="fixed bottom-6 right-6 bg-accent text-white rounded-full p-4 shadow-lg hover:shadow-xl hover:bg-accent/90 transition-all z-40 flex items-center justify-center"
          aria-label="Solicitar cotización"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default FloatingQuotationButton;

import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Only scroll to top on normal link navigation
    if (navigationType === "PUSH") {
      window.scrollTo(0, 0);
    }

  }, [pathname, navigationType]);

  return null;
};

export default ScrollToTop;

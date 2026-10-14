
import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Whisperly`;
  }, [title]);
};

export default usePageTitle;

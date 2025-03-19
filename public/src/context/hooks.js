import { useContext } from "react";
import { GlobalContext } from "./store";

// Custom Hook to Use Global Store
export const useGlobalStore = () => useContext(GlobalContext);

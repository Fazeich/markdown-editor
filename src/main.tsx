import { createRoot } from "react-dom/client";
import "../public/index.css";

import { App } from "./App";

const root = document.getElementById("root")!;

createRoot(root).render(<App />);

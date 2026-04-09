import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="p-8">
      <h1 className="text-2xl font-bold">kavia-ai Component Library</h1>
      <p className="text-muted-foreground mt-2">Run <code>npm run storybook</code> to view the component stories.</p>
    </div>
  </StrictMode>
)

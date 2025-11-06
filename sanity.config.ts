import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import project from "./sanity/schemas/project";

export default defineConfig({
  name: "cortezzi",
  title: "Cortezzi CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/admin",
  plugins: [structureTool(), visionTool()],
  schema: { types: [project] },
});

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas/index";

const config = defineConfig({
  name: "default",
  title: "projectHorizonCms",

  projectId: "7n9s8rfi",
  dataset: "deployment",
  apiVersion: "2024-02-07",
  plugins: [structureTool(), visionTool()],
  basePath: "/admin",

  schema: {
    types: schemaTypes,
  },
});

export default config;

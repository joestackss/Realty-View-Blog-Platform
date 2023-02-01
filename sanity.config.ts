import { defineConfig, Studio, StudioNavbar } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";
import StudiosNavbar from "./components/StudiosNavbar";
import Logo from "./components/Logo";
import { getDefaultDocumentNode } from "./structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: "/studio",
  name: "Realty-S-CMS",
  title: "Realty S CMS",
  projectId: "56yvtnu3",
  dataset: "production",

  plugins: [
    deskTool({ defaultDocumentNode: getDefaultDocumentNode }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      logo: Logo,
      navbar: StudiosNavbar,
    },
  },

  theme: myTheme,
});

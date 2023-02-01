import { createClient } from "next-sanity";

export const projectId = "56yvtnu3";
export const dataset = "production";
const apiVersion = "2023-01-30";

export const client = createClient({
  projectId: "56yvtnu3",
  dataset: "production",
  apiVersion: "2023-01-30",
  useCdn: false,
});

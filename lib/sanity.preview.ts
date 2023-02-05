"use client";

import { definePreview } from "next-sanity/preview";
import { projectId, dataset } from "lib/sanity.client";

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`);
}

if (!projectId || !dataset) {
  throw new Error(
    `Missing "projectId" or "dataset" in "lib/sanity.preview.ts". Make sure this file is present and populated.`
  );
}

export const usePreview = definePreview({
  projectId: "ie73nwi4",
  dataset: "production",
  onPublicAccessOnly,
});

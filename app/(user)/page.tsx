import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "@/components/PreviewBlogList";
import BlogList from "@/components/BlogList";

const query = groq`*[_type == "post"] {
  ...,
  author ->,
  categories[] ->,
} | order(_createdAt desc) `;

const inter = Inter({ subsets: ["latin"] });

export const revalidate = 30;
// Revalidate code after 30 seconds

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#3A76DA]">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  // console.log(posts);

  return <BlogList posts={posts} />;
}

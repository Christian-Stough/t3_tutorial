import Link from "next/link";
import { mock } from "node:test";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/39f40ebb-e265-4a30-8fe4-7dfc118412bf-zcuagf.png",
  "https://utfs.io/f/f7237ba6-ea54-40e6-a650-86b8a35c8a44-bx2mpy.png",
  "https://utfs.io/f/3f5a1c13-7ab1-4209-8fa2-a24fdec12482-qz53fz.png",
  "https://utfs.io/f/7e02dd8d-ea93-4abe-9414-29d7788eaf1b-ir56qd.png",
  "https://utfs.io/f/6feee506-94f1-4485-b90e-96b1388fa8f7-1v0koq.png",
  "https://utfs.io/f/2a6ed1e0-aac5-40b7-9e6a-21e5ad986ce8-zb6xfr.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const post = await db.query.posts.findMany();

  return (
    <main>
      <div className="flex flex-wrap gap-2">
        {post.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages].map((image, index) => (
          <img
            key={`image.id-${index}`}
            src={image.url}
            alt="mock"
            className="w-1/4"
          />
        ))}
      </div>
    </main>
  );
}

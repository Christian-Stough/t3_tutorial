/* eslint-disable @next/next/no-img-element */
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
      <div className="flex flex-wrap gap-2">
        {images.map((image, index) => (
          <div
            key={`image.id-${index}`}
            className="h-fity flex w-fit flex-col gap-2"
          >
            <img src={image.url} alt="mock" className="w-96" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

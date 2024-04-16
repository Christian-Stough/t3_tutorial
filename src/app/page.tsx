/* eslint-disable @next/next/no-img-element */
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-screen w-full text-center text-2xl">
          You are not signed in
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {images.map((image) => (
        <div key={image.id} className="flex h-fit w-fit flex-col gap-2">
          <Image
            src={image.url}
            alt="mock"
            style={{ objectFit: "contain" }}
            width={400}
            height={400}
          />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

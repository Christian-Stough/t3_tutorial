import { getMyImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid id");

  const image = await getMyImage(idAsNumber);

  return (
    <div>
      <img className="h-42" src={image.url} />
    </div>
  );
}

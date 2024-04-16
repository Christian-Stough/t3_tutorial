import FullPageImageView from "~/components/full-image-page";
import { getMyImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);

  return <FullPageImageView id={idAsNumber} />;
}

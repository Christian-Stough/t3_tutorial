import { getMyImage } from "~/server/queries";
import { Modal } from "~/app/@modal/(.)img/[id]/modal";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getMyImage(props.id);

  return (
    <Modal>
      <img className="h-42 z-10" src={image.url} />
    </Modal>
  );
}

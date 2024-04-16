import { getMyImage } from "~/server/queries";
import { Modal } from "~/app/@modal/(.)img/[id]/modal";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getMyImage(props.id);

  return (
    <div className="flex h-full w-full min-w-0 ">
      <div className="flex flex-shrink items-center justify-center">
        <img className=" w-96 object-contain" src={image.url} />
      </div>
      <div className="flex h-full w-48 flex-shrink-0 flex-col border-l">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}

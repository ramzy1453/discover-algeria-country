type Props = {
  img: string;
  head: string;
  body: string;
};

export default function RegionCard(props: Props) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
      <a href={"https://en.wikipedia.org/wiki/" + props.head} className="flex">
        <img
          className="rounded-t-lg cursor-pointer flex-[1] hover:scale-[1.03] duration-300 ease-in transition-all"
          src={props.img}
          alt=""
        />
      </a>
      <div className="p-5 flex-[1]">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {props.head}
        </h5>
        <p className="mb-3 font-normal text-gray-700">{props.body}</p>
      </div>
    </div>
  );
}

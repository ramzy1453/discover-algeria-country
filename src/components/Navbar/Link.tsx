import c from "classnames";

type Props = {
  text: string;
  section: string;
};

export default function Link({ text, section }: Props) {
  return (
    <a href={`#${section}`}>
      <p className="relative cursor-pointer group p-3">
        <span className="group-hover:text-white group-hover:transition-all flex text-center">
          {text}
        </span>
        <span
          className={c(
            "absolute left-0 w-full h-0 bottom-0 bg-[#43ae57] -z-10 group-hover:h-full group-hover:transition-all"
          )}
        />
      </p>
    </a>
  );
}

import CloseIcon from "../../../components/svg/CloseIcon";

interface Experience {
  id: number;
  start_date: string;
  end_date: string;
  title: string;
  company: string;
  desc: string;
}
export default function ExperienceDetail({
  experience,
  onClick,
}: {
  experience: Experience;
  onClick: (exp: undefined) => void;
}) {
  const lines: string[] = experience.desc.split("</br>");
  console.log(lines);
  return (
    <div className="relative flex border-2 bg-[#f2f2f2] p-4">
      <button
        className="absolute -top-4 -left-4 z-10 bg-transparent"
        onClick={() => onClick(undefined)}
      >
        <CloseIcon />
      </button>
      <div className="flex w-full flex-col">
        <h1 className="font-bold">{experience?.title}</h1>
        <h2 className="font-medium">{experience?.company}</h2>
        <h2>
          {experience.start_date}-{">"}
          {experience.end_date && <span>{experience.end_date}</span>}
        </h2>
        <div className="mt-2 items-baseline text-left">
          {lines.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Link } from "@tanstack/react-router";

import { useImageUrl } from "@/lib/query";

type PreviousUploadCardProps = {
  name: string;
};

export const PreviousUploadCard = ({ name }: PreviousUploadCardProps) => {
  const { data } = useImageUrl(name);
  return (
    <Link to="/projects/$name" params={{ name }}>
      <div className="border-border cursor-pointer overflow-clip rounded-lg border opacity-90 shadow-lg transition-all hover:-translate-y-2 hover:opacity-100">
        <img src={data} className="aspect-square" />
        <p className="p-2 text-sm">{name}</p>
      </div>
    </Link>
  );
};

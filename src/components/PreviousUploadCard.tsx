import { useImageUrl } from '@/lib/query'
import { Link } from '@tanstack/react-router'

type PreviousUploadCardProps = {
  name: string
}

export const PreviousUploadCard = ({ name }: PreviousUploadCardProps) => {
  const { data } = useImageUrl(name)
  return (
    <Link to="/projects/$name" params={{ name }}>
      <div className="rounded-lg overflow-clip border border-border shadow-lg opacity-90 hover:opacity-100 cursor-pointer hover:-translate-y-2 transition-all">
        <img src={data} className="aspect-square" />
        <p className="text-sm p-2">{name}</p>
      </div>
    </Link>
  )
}

interface TecnologiaProps {
    title: string
    image: string
    description: string
    rating: number
}

export default function Tecnologia({ title, image, description, rating }: TecnologiaProps) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{image}</p>
            <p>{description}</p>
            <p>{rating}</p>
        </div>
    )
}
export interface Tecnologia {
  title: string;
  image: string;
  description: string;
  rating: number;
}

export const tecnologias: Tecnologia[] = [
  {
    title: "React",
    image: "globe.svg",
    description: "Biblioteca JavaScript para criação de interfaces de utilizador.",
    rating: 5,
  }
];

export interface Promocao {
  id: string;
  title: string;
  image: {
    data: string;
  };
  dateStart: string;
  dateEnd: string;
  link: string;
  description: string;
  cupom: string;
}

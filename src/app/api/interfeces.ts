export interface Promocao {
  _id: string;
  title: string;
  image: {
    data: string;
  };
  dateStart: string;
  dateEnd: string;
  link: string;
  description: string;
  cupom: string;
  categoria: string;
}

export interface VipUser {
  _id: string;
  nome: string;
  email: string;
  whatsApp: string;
}

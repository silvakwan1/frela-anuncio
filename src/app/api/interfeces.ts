export interface Promocao {
  id: string;
  title: string;
  image: string;
  dateStart: string;
  dateEnd: string;
  link: string;
  description: string;
  cupom: string;
  categoria: string;
}

export interface VipUser {
  id: string;
  nome: string;
  email: string;
  whatsApp: string;
}

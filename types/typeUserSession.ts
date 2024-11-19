export interface DadosUsuario {
  id: number;
  name: string;
  email: string;
  active: boolean;
  permissao: Permissao;
  endereco: Endereco[]; 
  emailVerified: boolean;
}

export interface Permissao {
  id: number;
  nome: string;
  userId: number;
}

export interface Endereco { 
  id: number;
  estado: string;
  cidade: string;
  logradouro: string;
  numero: number;
  complemento: string;
  cep: string;
}

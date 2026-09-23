import type { Transacao } from "../types/Transacao";

export function buscarTransacoes(): Promise<Transacao[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          nome: "Salário",
          descricao: "Pagamento mensal",
          valor: 3500,
          id_categoria: 1,
          data: "18/09/2026",
        },
        {
          id: 2,
          nome: "Internet",
          descricao: "Conta mensal",
          valor: 120,
          id_categoria: 2,
          data: "18/09/2026",
        },
        {
          id: 3,
          nome: "Energia",
          descricao: "Conta de energia",
          valor: 250,
          id_categoria: 2,
          data: "18/09/2026",
        },
      ]);
    }, 2000);
  });
}
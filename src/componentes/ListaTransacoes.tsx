import { CartaoTransacao } from "./CartaoTransacao";
import type { Transacao } from "../types/Transacao";

interface ListaTransacoesProps {
  transacoes: Transacao[];
}

export function ListaTransacoes({
  transacoes,
}: ListaTransacoesProps) {
  if (transacoes.length === 0) {
    return <p>Nenhuma transação encontrada.</p>;
  }

  return (
    <>
      {transacoes.map((transacao) => (
        <CartaoTransacao
          key={transacao.id}
          transacao={transacao}
        />
      ))}
    </>
  );
}
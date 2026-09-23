import { useState } from "react";
import type { Transacao } from "../types/Transacao";

interface CartaoTransacaoProps {
  transacao: Transacao;
  destaque?: boolean;
}

export function CartaoTransacao({
  transacao,
  destaque = false,
}: CartaoTransacaoProps) {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  return (
    <article>
      <h2>{transacao.nome}</h2>

      <button
        onClick={() => setMostrarDetalhes(!mostrarDetalhes)}
      >
        {mostrarDetalhes
          ? "Ocultar Detalhes"
          : "Mostrar Detalhes"}
      </button>

      {mostrarDetalhes && (
        <p>{transacao.descricao}</p>
      )}

      <p>
        <strong>Valor:</strong> R$ {transacao.valor}
      </p>

      <p>
        <strong>Data:</strong> {transacao.data}
      </p>

      {destaque && <strong>Destaque</strong>}
    </article>
  );
}
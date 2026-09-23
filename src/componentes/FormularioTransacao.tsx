import { useState } from "react";
import type { Transacao } from "../types/Transacao";

interface FormularioTransacaoProps {
  setTransacaoFormulario: React.Dispatch<
    React.SetStateAction<Transacao>
  >;
}

export function FormularioTransacao({
  setTransacaoFormulario,
}: FormularioTransacaoProps) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        setTransacaoFormulario({
          id: 3,
          nome: nome,
          descricao: descricao,
          valor: parseFloat(valor) || 0,
          id_categoria: 1,
          data: "22/09/2026",
        });
      }}
    >
      <h2>Nova Transação</h2>

      <label>Nome</label>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <label>Descrição</label>
      <input
        type="text"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />

      <label>Valor</label>
      <input
        type="number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />

      <button type="submit">
        Aplicar ao cartão
      </button>
    </form>
  );
}
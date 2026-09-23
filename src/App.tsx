import { useState } from "react";
import { Cabecalho } from "./componentes/Cabecalho";
import { Rodape } from "./componentes/Rodape";
import { CartaoTransacao } from "./componentes/CartaoTransacao";
import { FormularioTransacao } from "./componentes/FormularioTransacao";
import type { Transacao } from "./types/Transacao";

function App() {
  const [transacaoFormulario, setTransacaoFormulario] =
    useState<Transacao>({
      id: 3,
      nome: "",
      descricao: "",
      valor: 0,
      id_categoria: 1,
      data: "22/09/2026",
    });

  const transacao1: Transacao = {
    id: 1,
    nome: "Salário",
    descricao: "Pagamento mensal",
    valor: 3500,
    id_categoria: 1,
    data: "18/09/2026",
  };

  const transacao2: Transacao = {
    id: 2,
    nome: "Internet",
    descricao: "Conta mensal",
    valor: 120,
    id_categoria: 2,
    data: "18/09/2026",
  };

  return (
    <>
      <Cabecalho />

      <FormularioTransacao
        setTransacaoFormulario={setTransacaoFormulario}
      />

      <CartaoTransacao
        transacao={transacao1}
        destaque
      />

      <CartaoTransacao
        transacao={transacao2}
      />

      <CartaoTransacao
        transacao={transacaoFormulario}
      />

      <Rodape />
    </>
  );
}

export default App;
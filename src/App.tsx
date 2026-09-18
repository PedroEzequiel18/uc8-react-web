import { Cabecalho } from "./componentes/Cabecalho";
import { Rodape } from "./componentes/Rodape";
import { CartaoTransacao } from "./componentes/CartaoTransacao";

function App() {
  const transacao1 = {
    id: 1,
    nome: "Salário",
    descricao: "Pagamento mensal",
    valor: 3500,
    id_categoria: 1,
    data: "18/09/2026",
  };

  const transacao2 = {
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

      <CartaoTransacao
        transacao={transacao1}
        destaque
      />

      <CartaoTransacao
        transacao={transacao2}
      />

      <Rodape />
    </>
  );
}

export default App;
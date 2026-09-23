import { useEffect, useState } from "react";
import { Cabecalho } from "./componentes/Cabecalho";
import { Rodape } from "./componentes/Rodape";
import { FormularioTransacao } from "./componentes/FormularioTransacao";
import { ListaTransacoes } from "./componentes/ListaTransacoes";
import { buscarTransacoes } from "./services/TransacaoService";
import type { Transacao } from "./types/Transacao";

function App() {
  const [transacaoFormulario, setTransacaoFormulario] =
    useState<Transacao>({
      id: 999,
      nome: "",
      descricao: "",
      valor: 0,
      id_categoria: 1,
      data: "22/09/2026",
    });

  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    buscarTransacoes().then((dados) => {
      setTransacoes(dados);
      setCarregando(false);
    });
  }, []);

  if (carregando) {
    return <p>Carregando transações...</p>;
  }

  return (
    <>
      <Cabecalho />

      <FormularioTransacao
        setTransacaoFormulario={setTransacaoFormulario}
      />

      <ListaTransacoes
        transacoes={[...transacoes, transacaoFormulario]}
      />

      <Rodape />
    </>
  );
}

export default App;
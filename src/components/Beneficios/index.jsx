import "./Beneficios.module.css";

export default function Beneficios() {
  return (
    
      <section>
        <div className="beneficios">
          <h2>Benefícios</h2>
          <div className="beneficios-container">
            <div className="beneficios-card">
              <h3>Praticidade</h3>
              <p>
                A solução utiliza tecnologia de reconhecimento de imagem que
                dispensa a necessidade de um avaliador para realizar a vistoria,
                automatizando o processo sem comprometer a qualidade.
              </p>
            </div>
            <div className="beneficios-card">
              <h3>Eficiência</h3>
              <p>
                Desde o inicio do projeto tornar o processo mais eficiente sempre foi o foco,e foi com isso em mente que nós desenvolvemos uma solução totalmente web, agilizando e simplificando o processo.
              </p>
            </div>
            <div className="beneficios-card">
              <h3>Escalabilidade</h3>
              <p>
                O uso de tecnologias recentes garante a escalabilidade e flexibilidade da solução para que no futuro ela possa ser adaptada para diversos outros objetos e tipos de veiculos.
              </p>
            </div>
          </div>
        </div>
      </section>

  );
}
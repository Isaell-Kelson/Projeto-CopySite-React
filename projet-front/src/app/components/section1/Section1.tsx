import { MetricCards } from "./metricCards/MetricCards";
import "./section1.css";

export const Section1 = () => {
  return (
    <section className="section1">
      <div className="up-container-section1">
        <h6 className="h6-section1">Sobre nós</h6>
        <h1 className="h1-section1">Porque somos diferentes?</h1>
        <p className="p-section1">
          Nós focamos nos detalhes de tudo que fazemos. Tudo para ajudar as
          empresas de todo o mundo a se concentrarem naquilo que é realmente
          importante para elas.
        </p>
      </div>
      <div className="bottom-container-section1">
        <div className="content-section1">
          <div className="card-section">
            <MetricCards
              metric="400+"
              cardTitle="Projetos concluídos"
              description="Nós ajudamos a construir mais de 400 projetos incríveis."
            />
            <MetricCards
              metric="100+"
              cardTitle="Colaboladores"
              description="Temos mais de 100 colaboradores no nosso time que se preocupam com nossos clientes."
            />
            <MetricCards
              metric="20K"
              cardTitle="Downloads"
              description="Nossos projetos que estão disponíveis em lojas já foram baixados mais de 20.000 vezes."
            />
            <MetricCards
              metric="500+"
              cardTitle="Review 5 estrelas"
              description="Estamos orgulhosos de contar com mais de 500 reviews 5 estrelas em nossos produtos."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

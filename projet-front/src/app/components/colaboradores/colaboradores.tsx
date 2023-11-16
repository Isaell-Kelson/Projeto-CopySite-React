import "./colaboradores.css";
export function ColaboradoresAvaliacao() {
  return (
    <div className="div-colaboradores">
      <section id="colaboradores" className="colaboradores-avaliacao">
        <span className=" subtitulo-colaboradores">
          Veja o que os nossos colaboradores falam sobre nós
        </span>
        <h2 className="subtitulo-destaque-colaboradores">
          OptimusTech se importa com a saúde dos seus colaboradores e sempre
          procura nos dar todo tipo de auxílio possível.
        </h2>
        <div className="usuario">
          <img
            src="	https://optimus-tech-lucash.vercel.app/assets/img/Avatar.svg"
            alt=""
            className="perfil-julia"
          />
          <p className="usuario-nome">Júlia Castro</p>
          <p className="usuario-profissao">Desenvolvedora Web</p>
        </div>
      </section>
    </div>
  );
}

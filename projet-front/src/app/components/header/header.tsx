import "./header.css";
export function Cabecalho() {
  return (
    <header className="header">
      <div className="container">
        <div className="cabecalho-logo">
          <img
            src="https://optimus-tech-lucash.vercel.app/assets/img/worldwide.svg"
            alt=""
            className="logo"
          />
          <h1 className="cabecalho-titulo">Optimus Tech</h1>
        </div>
        <nav className="nav">
          <ul className="cabecalho-lista">
            <li className="cabecalho-item">
              <a href="#">Home</a>
            </li>
            <li className="cabecalho-item">
              <a href="#section1">Sobre nós</a>
            </li>
            <li className="cabecalho-item">
              <a href="#vagas">Vagas abertas</a>
            </li>
            <li className="cabecalho-item">
              <a href="#colaboradores">Colaboradores</a>
            </li>
            <li className="cabecalho-item">
              <a href="#cadastro">Cadastro</a>
            </li>
          </ul>
        </nav>
        <div className="btn-nav">
          <button className="btn1">Entrar</button>
          <button className="btn2">Cadastrar</button>
        </div>
      </div>
    </header>
  );
}

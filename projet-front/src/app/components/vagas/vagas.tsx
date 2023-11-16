import Image from "next/image";
import reuniao from '../../assets/reuniao.png';


export function Vagas() {
  return (
    <main>
      <div className="center-span">
        <span>Vagas abertas!</span>
      </div>
      <div className="title-h1">
        <h1 className="container-h1">Estamos procurando por talentos</h1>
      </div>
      <div className="title-h3">
        <h3 className="container-h3">
          Somos uma equipe 100% remota com pessoas do Brasil inteiro.
        </h3>
      </div>
      <div className="img">
        <Image src={reuniao} alt="img" width={1290} />
      </div>
      <div className="container-area">
        <h3>Design</h3>
        <ul className="container-vagas">
          <li>
            <strong>Product Designer</strong>
            <div className="paragraph">
              <p>Full-time</p>
              <p>Faixa salarial: R$7.000</p>
            </div>
          </li>
          <li>
            <strong>UX Designer</strong>
            <div className="paragraph">
              <p>Full-time</p>
              <p>Faixa salarial: R$6.000</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="container-area">
        <h3>Desenvolvimento de Software</h3>
        <ul className="container-vagas">
          <li>
            <strong>Desenvolvedor(a) iOS</strong>
            <div className="paragraph">
              <p>Full-time</p>
              <p>Faixa salarial: R$8.000</p>
            </div>
          </li>
          <li>
            <strong>Desenvolvedor(a) Front-end</strong>
            <div className="paragraph">
              <p>Full-time</p>
              <p>Faixa salarial: R$7.000</p>
            </div>
          </li>
          <li>
            <strong>Desenvolvedor(a) Back-end</strong>
            <div className="paragraph">
              <p>Full-time</p>
              <p>Faixa salarial: R$8.000</p>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}

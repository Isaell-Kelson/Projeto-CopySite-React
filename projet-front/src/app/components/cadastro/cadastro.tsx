import React from 'react';
import './cadastro.css';
import '../../globals.css';



const Cadastro = () => {
  return (
    <section className="cadastro-container">
      <h1 className="cadastro-title">Acompanhe nossas oportunidades</h1>
      <p className="cadastro-subtitle">Seja o primeiro a saber quando novas vagas serão abertas!</p>

      <div className="cadastro-input-container">
        <input className='box-input' type="email" placeholder="Seu e-mail" />
        <button className='btn-footer'>Cadastrar</button>
      </div>

      <p className="cadastro-subtitle-footer">© 2022 OptimusTech. Todos os direitos reservados.</p>
    </section>
  );
};

export default Cadastro;
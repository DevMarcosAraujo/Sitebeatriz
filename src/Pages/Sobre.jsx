import imagemBeatriz from '../assets/CONVITE-00239.jpg';
import imagemBeatriz2 from '../assets/CONVITE-00238.jpg';
function Sobre() {
  return (
    <div className="sobre-container">
      <div className="sobre-conteudo">

        {/* Imagem no canto superior esquerdo */}
        <div className="imagem-superior">
          <img src={imagemBeatriz} alt="Doutora Beatriz" />
        </div>

        <div className="texto-sobre">
          <h1>Sobre a Doutora Beatriz</h1>
          <p>
          Sou médica formada em 2024 pela Universidade Federal de Jataí (UFJ), em Goiás, e quero te contar um pouco da minha história — não só como profissional, mas como alguém que tem verdadeira paixão por cuidar.           </p>
          <p>
          Desde sempre, tive dentro de mim um chamado para acolher o outro. O cuidado com o próximo nunca foi apenas uma escolha profissional, mas uma expressão natural de quem eu sou. 
          </p>
          <p>
          Entendo que ser médica vai muito além da técnica: é ouvir com empatia, olhar nos olhos e enxergar além dos sintomas.
          </p>

          {/* Imagem no canto inferior direito */}
          <div className="imagem-inferior">
            <img src={imagemBeatriz2} alt="Doutora Beatriz" />
          </div>

          <p>
          Durante a graduação, descobri um amor ainda maior pela Medicina quando entrei em contato com as Práticas Integrativas e Complementares (PICS) e com o poder da espiritualidade na saúde. Para mim, tudo está conectado — corpo, mente, alma e emoções. Acredito que a verdadeira cura e a prevenção nascem dessa compreensão profunda e integrada do ser humano.
          </p>
          <p>
          Nos meus atendimentos, procuro enxergar cada paciente como um todo: suas dores, suas histórias, suas crenças e esperanças. Estou sempre em busca de me atualizar, aprendendo com a ciência, com a prática, e também com cada pessoa que cruza o meu caminho.
          </p>
          
          <p>
          Sou comprometida com o que faço e sigo firme no propósito de oferecer uma medicina mais humana, sensível e respeitosa — uma medicina que toca, acolhe e transforma.
          </p>
          <p>
          Se você chegou até aqui, quero que saiba que estou pronta para caminhar ao seu lado com escuta, cuidado e presença.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sobre;

import './styles.scss';

function Perfil() {
  return (
    <div className="perfil-container">
      <img className="perfil-image" src="./images/perfil.png" alt="" />
      <div className="perfil-description">
        <div className="name">
          Roy Andres Huaman Avila
        </div>
        <div className="occupation">
          Estudiante en Make It Real
        </div>
        <div className="description">
          Soy estudiante de Desarrollo de Sofware de 2do ciclo,
          actualmente aprendiendo desarrollo web Fullstack Vivo actualmente en Lima, Perú.
        </div>
        <div className="learning">
          <span>Aprendido ultimamente:</span>
          <br />
          -React
          <br />
          -Sass
          <br />
          -Github
        </div>
        <div className="contact">
          <div className="mail">
            <span>Email: </span>
            rhavila789@gmail.com
          </div>
          <div className="github">
            <span>Github: </span>
            https://github.com/RoyHuamanAvila
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;

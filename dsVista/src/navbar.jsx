import logoDs from './assets/images/DS-LINES2.png'


export function navbar() {
  return (

    <nav className="navbar navbar-expand-sm bg-light navbar-dark">
      <div className='container'></div>
      <div className='container centrar'>
        <a>
          <img src={logoDs} alt="Logo" className="m-3 logoDSnav" />
        </a>
      </div>

      <div className='container cderecha'>
        <a href="" type="button" className='btn cafe'>
          <h5>&#128242; Descargar</h5>
        </a>
      </div>

    </nav>

  );
}

export default navbar;
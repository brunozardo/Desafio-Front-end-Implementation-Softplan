import './SmallCard.css'

export const SmallCard = ({
  numero,
  assunto,
  interessados,
  selecionado = false
}) => (
  <div className={`small-card ${selecionado ? 'selected' : ''}`}>
    <div className='info-group'>
      <div className='small-card-title'>Número</div>
      <span>{numero}</span>
    </div>
    <div className='info-group'>
      <div className='small-card-title subject'>Assunto</div>
      <span>{assunto}</span>
    </div>
    <div className='info-group'>
      <div className='small-card-title'>Interessado</div>
      <span>{interessados[0]}</span>
    </div>
  </div>
)

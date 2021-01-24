import './Card.css'
import { ReactComponent as Rectangle } from './rectangle.svg'
export const Card = ({ numero, assunto, interessados, descricao }) => (
  <div>
    <div className='card'>
      <Rectangle className='rectangle' />
      <div className='content'>
        <div className='content-item'>
          <div className='card-title'>Número</div>
          <span>{numero}</span>
        </div>
        <div className='content-item'>
          <div className='card-title'>Assunto</div>
          <span>{assunto}</span>
        </div>
        <div className='content-item'>
          <div className='card-title'>Interessado</div>
          <span>{interessados[0]}</span>
        </div>
        <div className='content-item'>
          <div className='card-title'>Descrição</div>
          <span>{descricao}</span>
        </div>
      </div>
    </div>
  </div>
)
// <span>Número: <span>{Numero}</span>;</span>
// <span>Assunto: <span>{Assunto}</span>;</span>
// <span>Interessado: {Interessado}</span>;
// <span>Descrição: {Descrição}</span>;

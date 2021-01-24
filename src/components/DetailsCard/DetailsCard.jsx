import './DetailsCard.css'
import { ReactComponent as Rectangle } from '../Card/rectangle.svg'
import { ReactComponent as Cross } from '../Cross.svg'
import { Spacer } from '../Spacer'
import { Button } from '../Button/Button'
export const DetailsCard = ({
  numero,
  entrada,
  assunto,
  interessados = [<Spacer key='' vertical='20px' />],
  descricao,
  id,
  onClose,
  onDelete
}) => (
  <div className='details-card'>
    <div className='header'>
      <Rectangle className='rectangle-details-card' />
      <div className='grow'>
        <div className='first-line'>
          <div className='info'>
            <p className='details-card-title'>Processo</p>
            <span>{numero}</span>
          </div>
          <div className='date-title'>
            <p className='details-card-title'>Data</p>
            <span>{entrada}</span>
          </div>
          <Cross className='cross' onClick={() => onClose()} />
        </div>
        <div>
          <p className='details-card-title'>Assunto</p>
          <span>{assunto}</span>
        </div>
      </div>
    </div>
    <div className='details'>
      <div>
        <div className='subtitle third-color'>Interessados</div>
        <ul>
          {interessados.map(interessado => (
            <li key={interessado}>{interessado}</li>
          ))}
        </ul>
      </div>
      <div>
        <div className='subtitle third-color description'>Descrição</div>
        <p>{descricao}</p>
      </div>

      <div className='buttons-row'>
        <Button ghost onClick={onDelete}>
          Deletar
        </Button>
        <Button
          ghost
          primary
          onClick={() => window.alert('API não suporta edições')}
        >
          Editar
        </Button>
      </div>
    </div>
  </div>
)

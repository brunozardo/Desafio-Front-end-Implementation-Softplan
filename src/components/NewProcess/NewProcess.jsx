import { Button } from '../Button/Button'
import './NewProcess.css'
import { ReactComponent as Cross } from '../Cross.svg'
import { useHistory } from 'react-router-dom'
import { useCallback, useState } from 'react'
import { createProcess } from '../../api/process'

export const NewProcess = () => {
  const history = useHistory()
  const [process, setProcess] = useState({
    interessados: [],
    descricao: '',
    assunto: ''
  })
  const [newInteressado, setNewInteressado] = useState('')

  const value = key => process[key]
  const onChange = key => ev =>
    setProcess(process => ({
      ...process,
      [key]: ev.target.value
    }))

  const postProcess = useCallback(async () => {
    if (process.interessados.length && process.descricao && process.assunto) {
      try {
        await createProcess(process)
        history.goBack()
      } catch (error) {
        window.alert('Erro ao criar processo, tente novamente.')
      }
    } else {
      window.alert('Todos os campos devem ser preenchidos.')
    }
  }, [process, history])

  const addInteressado = useCallback(() => {
    setProcess(process => ({
      ...process,
      interessados: process.interessados.concat([newInteressado])
    }))
    setNewInteressado('')
  }, [newInteressado])

  return (
    <div className='new-process--page'>
      <div className='new-process--card'>
        <div className='title new-process--title'>Cadastro de processo</div>
        <label className='new-process--label' htmlFor='assunto'>
          Assunto
        </label>
        <input
          className='new-process--input'
          id='assunto'
          type='text'
          value={value('assunto')}
          onChange={onChange('assunto')}
        />
        <label className='new-process--label'>Interessados</label>
        <ul className='new-process-people-list'>
          {process.interessados.map(interessado => (
            <li key={interessado}>{interessado}</li>
          ))}
        </ul>
        <label className='new-process--label' htmlFor='novoInteressado'>
          Novo interessado
        </label>
        <div className='new-process--line'>
          <input
            className='new-process--input'
            id='novoInteressado'
            type='text'
            value={newInteressado}
            onChange={ev => setNewInteressado(ev.target.value)}
            onKeyPress={ev => {
              if (ev.key === 'Enter') {
                addInteressado()
              }
            }}
          />
          <Button onClick={addInteressado}>adicionar</Button>
        </div>
        <label className='new-process--label' htmlFor='descricao'>
          Descrição
        </label>
        <input
          className='new-process--input new-process--input-description'
          id='descricao'
          type='text'
          value={value('descricao')}
          onChange={onChange('descricao')}
        />
        <div className='new-process--save-btn'>
          <Button primary onClick={postProcess}>
            salvar
          </Button>
        </div>
        <Cross
          className='new-process--cross'
          onClick={() => history.goBack()}
        />
      </div>
    </div>
  )
}

import './SearchPage.css'
import { Card } from '../Card/Card'
import { SearchBar } from '../SearchBar/SearchBar'
import { useParams, useHistory, Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import { DetailsCard } from '../DetailsCard/DetailsCard'
import { SmallCard } from '../SmallCard/SmallCard'
import { ReactComponent as Loading } from './Loading.svg'
import { deleteProcess, useProcesses } from '../../api/process'
import { useCallback } from 'react'

export const SearchPage = () => {
  const { term = '', id = '' } = useParams()
  const history = useHistory()
  const [processes, loading] = useProcesses(term, history.location)
  const ListCard = ({ process }) => {
    if (id) {
      return <SmallCard {...process} selecionado={process.id === id} />
    } else {
      return <Card {...process} />
    }
  }

  const onSearch = newTerm =>
    history.push(`/busca/${encodeURIComponent(newTerm)}`)

  const removeProcess = useCallback(async () => {
    try {
      await deleteProcess(id)
      history.goBack()
    } catch {
      window.alert('Não foi possivel deletar o processo, tente novamente.')
    }
  }, [id, history])

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div className={`search-page ${id ? 'details-selected' : ''}`}>
          <div className='search-page--title'>Busca de processos</div>
          <div className='search-page--search-bar'>
            <SearchBar
              defaultValue={decodeURIComponent(term)}
              onSearch={onSearch}
              key={term}
            />
          </div>
          <div className='search-page--new-btn'>
            <Button ghost onClick={() => history.push('/novo-processo')}>
              novo
            </Button>
          </div>
          <div className='search-page--list'>
            {processes.map(process => (
              <Link
                style={{ textDecoration: 'none', color: 'unset' }}
                key={process.id}
                to={`/busca/${encodeURIComponent(
                  term
                )}/detalhes/${encodeURIComponent(process.id)}`}
              >
                <ListCard process={process} />
              </Link>
            ))}
          </div>
          {processes.map(x => x.id).includes(id) && (
            <div className='search-page--details'>
              <DetailsCard
                {...processes.find(process => process.id === id)}
                key={process.id}
                onClose={() => onSearch(term)}
                onDelete={removeProcess}
              />
            </div>
          )}
        </div>
      )}
    </>
  )
}

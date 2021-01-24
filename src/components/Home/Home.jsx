import { SearchBar } from '../SearchBar/SearchBar'
import './Home.css'
import { Spacer } from '../Spacer'
import { Card } from '../Card/Card'
import { SmallCard } from '../SmallCard/SmallCard'
import { DetailsCard } from '../DetailsCard/DetailsCard'
import { Link, useHistory } from 'react-router-dom'

export const Home = () => {
  const history = useHistory()

  return (
    <div className='home'>
      <div className='home-container'>
        <span className='primary-color title'>Busca de processos</span>
        <SearchBar
          placeholder='Pesquise por uma informação do processo'
          onSearch={term => history.push(`/busca/${term}`)}
        />
        <Spacer vertical='17px' />
        <span>
          Você pode criar um novo processo{' '}
          <Link
            to='/novo-processo'
            className='primary-color'
          >
            clicando aqui
          </Link>
        </span>
      </div>
      {/* <Card numero='SOFT 0001/2018' assunto='In vestibulum dis laroque...' interessado='Danilo Barbosa Correia' descricao='Etiam aliquam socio das...'/>
            <SmallCard numero='SOFT 0001/2018' assunto='In vestibulum dis laroque...' interessado='Danilo Barbosa Correia'/>
            <DetailsCard processo='SOFT 0001/2018' data='07/08/2018' assunto='In vestibulum dis laroque Ac parturient dapibu' interessados={['Danilo Barbosa Correia','Nicolas Araujo Castro','Manuela Oliveira Lima','Julia Barros Correia','Antônio Ribeiro Fernandes','Melissa Ribeiro Pinto']} descricao='Vehicula ullamcorper leo ullamcorper arcu dui a hendrerit vestibulum cum ut adipiscing a parturient consectetur eget adipiscing eu. Mi nisl potenti adipiscing cursus vehicula a parturient maecenas a a blandit per pulvinar accumsan natoque aliquam quisque ipsum a rhoncus ornare condimentum porta mattis dui cursus a. Eros velit lacus erat vestibulum elementum ut sociosqu iaculis parturient consequat luctus felis proin congue suspendisse placerat netus. Eu a ante ante ac sit vel magna a est eu a ullamcorper elementum porta urna parturient nullam adipiscing urna sem elit convallis. Fusce in lectus dapibus a condimentum dis phasellus justo ullamcorper nisl risus nisi placerat viverra id egestas ad auctor ac dui.'/>  */}
    </div>
  )
}

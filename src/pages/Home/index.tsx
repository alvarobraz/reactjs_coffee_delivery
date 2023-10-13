import { useContext } from 'react'
import { CoffeeList, ContentIntro, H3, InfoWrap } from './styles'
import imgCoffeeIntro from '../../assets/img_coffee_intro.svg'
// import { InfoWrapHome } from '../../components/InfoWrapHome'
import { CardCoffee } from '../../components/Home/CardCoffee'
import { Context } from '../../contexts/Context'
import { InfoWrapHome } from '../../components/App/InfoWrapHome'

export function Home() {
  const { products } = useContext(Context)

  return (
    <>
      <ContentIntro>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <InfoWrap>
            <InfoWrapHome variant="shopping" />
            <InfoWrapHome variant="package" />
            <InfoWrapHome variant="timer" />
            <InfoWrapHome variant="coffee" />
          </InfoWrap>
        </div>
        <div>
          <img src={imgCoffeeIntro} alt="imagem ilustrada de um lindo café" />
        </div>
      </ContentIntro>
      <H3>Nossos Cafés</H3>
      <CoffeeList>
        {products.length !== 0
          ? products.map((product) => (
              <CardCoffee key={product.id} product={product} />
            ))
          : ''}
      </CoffeeList>
    </>
  )
}

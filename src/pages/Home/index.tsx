import { CoffeeList, ContentIntro, H3, InfoWrap } from './styles'
import imgCoffeeIntro from '../../assets/img_coffee_intro.svg'
import { InfoWrapHome } from '../../components/InfoWrapHome'
import { CardCoffee } from '../../components/CardCoffee'

export function Home() {
  const products = [
    {
      img: 'expresso_tradicional',
      types: ['TRADICIONAL'],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 10.0,
      quantity: 0,
    },
    {
      img: 'expresso_americano',
      types: ['TRADICIONAL'],
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 12.0,
      quantity: 0,
    },
  ]

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
        {products.map((product, index) => (
          <CardCoffee key={index} product={product} />
        ))}
      </CoffeeList>
    </>
  )
}

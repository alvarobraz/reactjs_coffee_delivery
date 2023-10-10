import { useContext } from 'react'
import { CoffeeList, ContentIntro, H3, InfoWrap } from './styles'
import imgCoffeeIntro from '../../assets/img_coffee_intro.svg'
import { InfoWrapHome } from '../../components/InfoWrapHome'
import { CardCoffee } from '../../components/CardCoffee'
// import { api } from '../../server/api'
import { Context } from '../../contexts/Context'

// interface PropsCardCoffee {
//   img: string
//   types: string[]
//   name: string
//   description: string
//   price: number | string
//   quantity: number
// }

export function Home() {
  const { products } = useContext(Context)

  // const [products, setProducts] = useState([])

  // async function getProducts() {
  //   const response = await api.get('/produtos')
  //   const formattedProducts = response.data.map((product: PropsCardCoffee) => {
  //     if (typeof product.price === 'number') {
  //       product.price = product.price.toLocaleString('pt-BR', {
  //         minimumFractionDigits: 2,
  //         maximumFractionDigits: 2,
  //       })
  //     }
  //     return product
  //   })
  //   setProducts(formattedProducts)
  // }

  // useEffect(() => {
  //   getProducts()
  // }, [])

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
          ? products.map((product, index) => (
              <CardCoffee key={index} product={product} />
            ))
          : ''}
      </CoffeeList>
    </>
  )
}

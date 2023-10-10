import { ContentCoffeeCard, ContentType } from './style'

import imgCoffeeExpressoTradicional from '../../assets/img_coffee_expresso_tradicional.svg'
import imgCoffeeExpressoAmericano from '../../assets/img_coffee_expresso_americano.svg'

import { TypeCoffee } from '../TypeCoffee'
import { CofeeCard } from '../CofeeCard'

interface PropsCardCoffee {
  product: {
    img: string
    types: string[]
    name: string
    description: string
    price: number
    quantity: number
  }
}

export function CardCoffee({ product }: PropsCardCoffee) {
  return (
    <ContentCoffeeCard>
      <img
        src={
          product.img === 'expresso_tradicional'
            ? imgCoffeeExpressoTradicional
            : imgCoffeeExpressoAmericano
        }
        alt="café"
      />
      <ContentType>
        {product.types.map((type) => (
          <TypeCoffee key={type} nome={type} />
        ))}
      </ContentType>
      <h1>{product.name}</h1>
      <h2>{product.description}</h2>
      <CofeeCard price={product.price} quantity={product.quantity} />
    </ContentCoffeeCard>
  )
}

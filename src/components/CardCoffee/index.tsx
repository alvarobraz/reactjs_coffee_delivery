import { ContentCoffeeCard, ContentType } from './style'

import { TypeCoffee } from '../TypeCoffee'
import { CofeeCard } from '../CofeeCard'
import { PropsCardCoffee } from '../../contexts/Context'

// interface PropsCardCoffee {
//   product: {
//     img: string
//     types: string[]
//     name: string
//     description: string
//     price: number
//     quantity: number
//   }
// }

export function CardCoffee({ product }: PropsCardCoffee) {
  return (
    <ContentCoffeeCard>
      <img src={product.img} alt="café" />
      <ContentType>
        {product.types.map((type) => (
          <TypeCoffee key={type} nome={type} />
        ))}
      </ContentType>
      <h1>{product.name}</h1>
      <h2>{product.description}</h2>
      <CofeeCard product={product} />
    </ContentCoffeeCard>
  )
}

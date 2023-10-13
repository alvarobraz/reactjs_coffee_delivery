import { ContentCoffeeCard, ContentType } from './style'
import { TypeCoffee } from '../../Home/TypeCoffee'
import { CofeeCard } from '../../Home/CofeeCard'
import { PropsCardCoffee } from '../../../contexts/Context'

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

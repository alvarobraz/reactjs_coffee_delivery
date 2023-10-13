import { ContentActions, ContentBuy, ContentPrice } from './style'

import { PropsCardCoffee } from '../../../contexts/Context'
import { CounterQuantity } from '../../App/CounterQuantity'
import { ButtonCart } from '../../App/ButtonCart'

export function CofeeCard({ product }: PropsCardCoffee) {
  return (
    <ContentBuy>
      <ContentPrice>
        <span>R$&nbsp;</span>
        <p>{product.price}</p>
      </ContentPrice>
      <ContentActions>
        <CounterQuantity product={product} />
        <ButtonCart />
      </ContentActions>
    </ContentBuy>
  )
}

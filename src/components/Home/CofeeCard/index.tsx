import { ContentActions, ContentBuy, ContentPrice } from './style'

import { PropsCardCoffee } from '../../../contexts/Context'
import { CounterQuantity } from '../../App/CounterQuantity'
import { ButtonCart } from '../../App/ButtonCart'
import { formatPriceWithPrefix } from '../../../utils'

export function CofeeCard({ product }: PropsCardCoffee) {
  return (
    <ContentBuy>
      <ContentPrice>
        <span>R$&nbsp;</span>
        <p>{formatPriceWithPrefix(Number(product.price))}</p>
      </ContentPrice>
      <ContentActions>
        <CounterQuantity product={product} />
        <ButtonCart />
      </ContentActions>
    </ContentBuy>
  )
}

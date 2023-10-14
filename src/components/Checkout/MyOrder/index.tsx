import { useContext } from 'react'
import { CounterQuantity } from '../../App/CounterQuantity'
import { Button } from '../Button'
import { ContentOrder, ContentTitleCounterRemove } from './styles'
import { Context, PropsCardCoffee } from '../../../contexts/Context'
import { formatPrice } from '../../../utils'

export function MyOrder({ product }: PropsCardCoffee) {
  const { handleDeleteMyProduct } = useContext(Context)
  return (
    <>
      <ContentOrder>
        <img src={product.img} alt="" />
        <ContentTitleCounterRemove>
          <p>{product.name}</p>
          <div>
            <CounterQuantity product={product} />
            <Button
              product={product.id}
              handleDeleteMyProduct={handleDeleteMyProduct}
              variant="trash"
            />
          </div>
        </ContentTitleCounterRemove>
        <div>
          <p>{formatPrice(product.valueProduct)}</p>
        </div>
      </ContentOrder>
    </>
  )
}

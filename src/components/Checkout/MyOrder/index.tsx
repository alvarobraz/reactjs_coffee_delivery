import { useContext } from 'react'
import { CounterQuantity } from '../../App/CounterQuantity'
import { Button } from '../Button'
import { ContentOrder, ContentTitleCounterRemove } from './styles'
import { Context, PropsCardCoffee } from '../../../contexts/Context'

export function MyOrder({ product }: PropsCardCoffee) {
  const { handleDeleteMyProduct } = useContext(Context)
  return (
    <>
      <ContentOrder>
        <img src="http://localhost:5173/arabe.svg" alt="" />
        <ContentTitleCounterRemove>
          <p>Expresso Tradicional</p>
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
          <p>R$ 19,80</p>
        </div>
      </ContentOrder>
    </>
  )
}

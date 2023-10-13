import { useContext } from 'react'
import { Counter } from './styles'
import { Minus, Plus } from 'phosphor-react'
import { Context, PropsCardCoffee } from '../../../contexts/Context'

export function CounterQuantity({ product }: PropsCardCoffee) {
  const { countAndSaveMyProduct } = useContext(Context)

  return (
    <>
      <Counter>
        <button onClick={() => countAndSaveMyProduct(product?.id, 'less')}>
          <Minus size={15} />
        </button>
        <span>{product.quantity}</span>
        <button onClick={() => countAndSaveMyProduct(product?.id, 'more')}>
          <Plus size={15} />
        </button>
      </Counter>
    </>
  )
}

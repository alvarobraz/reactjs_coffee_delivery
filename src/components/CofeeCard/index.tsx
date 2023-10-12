import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Cart,
  ContentActions,
  ContentBuy,
  ContentPrice,
  Counter,
} from './style'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Context, PropsCardCoffee } from '../../contexts/Context'

export function CofeeCard({ product }: PropsCardCoffee) {
  const { countAndSaveMyProduct } = useContext(Context)

  // console.log('product.id -> ' + product.id)

  return (
    <ContentBuy>
      <ContentPrice>
        <span>R$&nbsp;</span>
        <p>{product.price}</p>
      </ContentPrice>
      <ContentActions>
        <Counter>
          <button onClick={() => countAndSaveMyProduct(product?.id, 'less')}>
            <Minus size={15} />
          </button>
          <span>{product.quantity}</span>
          <button onClick={() => countAndSaveMyProduct(product?.id, 'more')}>
            <Plus size={15} />
          </button>
        </Counter>
        <Cart>
          <NavLink to="/checkout  ">
            <ShoppingCart size={22} />
          </NavLink>
        </Cart>
      </ContentActions>
    </ContentBuy>
  )
}

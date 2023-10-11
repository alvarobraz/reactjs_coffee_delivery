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
  const { saveMyProduct } = useContext(Context)

  return (
    <ContentBuy>
      <ContentPrice>
        <span>R$&nbsp;</span>
        <p>{product.priceResult}</p>
      </ContentPrice>
      <ContentActions>
        <Counter>
          <button onClick={() => saveMyProduct(product, 'less')}>
            <Minus size={15} />
          </button>
          <span>{product.quantity}</span>
          <button onClick={() => saveMyProduct(product, 'more')}>
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

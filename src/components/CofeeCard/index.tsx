import {
  Cart,
  ContentActions,
  ContentBuy,
  ContentPrice,
  Counter,
} from './style'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

interface PropsBuy {
  price: number
  quantity: number
}

export function CofeeCard({ price, quantity }: PropsBuy) {
  return (
    <ContentBuy>
      <ContentPrice>
        <span>R$&nbsp;</span>
        <p>{price}</p>
      </ContentPrice>
      <ContentActions>
        <Counter>
          <button>
            <Minus size={15} />
          </button>
          <span>{quantity}</span>
          <button>
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

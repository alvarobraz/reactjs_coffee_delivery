import { NavLink } from 'react-router-dom'
import { Cart, Counter, PropsButtonCart } from './styles'
import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { Context } from '../../../contexts/Context'

export function ButtonCart({ variant = 'cart' }: PropsButtonCart) {
  const { countMyProducts } = useContext(Context)
  return (
    <>
      <Cart variant={variant}>
        <NavLink to="/checkout  ">
          <ShoppingCart size={22} />
        </NavLink>
      </Cart>
      {variant !== 'cart' ? (
        <Counter>
          <p>{countMyProducts}</p>
        </Counter>
      ) : null}
    </>
  )
}

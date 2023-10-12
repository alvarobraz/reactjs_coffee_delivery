import { useContext } from 'react'
import { Context } from '../contexts/Context'

export function Checkout() {
  const { totalMyProducts, myProducts } = useContext(Context)

  // console.log(totalMyProducts)

  return (
    <>
      <h1>Checkout - Total de produtos: {totalMyProducts}</h1>
      <p>{JSON.stringify(myProducts)}</p>
    </>
  )
}

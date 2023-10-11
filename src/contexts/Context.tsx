import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../server/api'
import { isCheckExistsMyProduct, resultPrice, totalMyProducts } from '../utils'

interface PropsProductCoffee {
  id?: string
  img: string
  types: string[]
  name: string
  description: string
  price: number | string
  priceResult: number | string
  quantity: number
}

export interface PropsCardCoffee {
  product: {
    id?: string
    img: string
    types: string[]
    name: string
    description: string
    price: number | string
    priceResult: number | string
    quantity: number
  }
}

export interface PropsMyProductCoffee {
  id?: string
  img: string
  types: string[]
  name: string
  description: string
  price: number | string
  priceResult: number | string
  quantity: number
}

interface ContextType {
  getProducts: () => void
  products: PropsProductCoffee[]
  saveMyProduct: (product: PropsMyProductCoffee, counter: string) => void
  countMyProducts: number
}

export const Context = createContext({} as ContextType)

interface ContextProps {
  children: ReactNode
}

export function ContextProvider({ children }: ContextProps) {
  const [products, setProducts] = useState([])
  const [myProducts, setMyProducts] = useState<PropsMyProductCoffee[]>([])
  const [countMyProducts, setCountMyProducts] = useState<number>(0)
  const [ip, setIP] = useState('')

  async function getProducts() {
    const response = await api.get('/produtos')
    const formattedProducts = response.data.map(
      (product: PropsProductCoffee) => {
        product.priceResult = product.price
        if (typeof product.price === 'number') {
          product.price = product.price.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        }
        return product
      },
    )
    setProducts(formattedProducts)
  }

  async function getIp() {
    const res = await api.get('https://api.ipify.org/?format=json')
    setIP(res.data.ip)
  }

  async function saveMyProduct(product: PropsMyProductCoffee, counter: string) {
    if (myProducts.length !== 0) {
      if (counter === 'more') {
        const isExists = isCheckExistsMyProduct(myProducts, product.id)
        if (isExists.length !== 0) {
          isExists[0].quantity = isExists[0].quantity + 1
          isExists[0].priceResult = resultPrice(
            isExists[0].price,
            isExists[0].quantity,
          )
          const myProductFiltered = myProducts.filter(
            (mp) => mp.id !== isExists[0].id,
          )
          setMyProducts([...myProductFiltered, isExists[0]])
        } else {
          setCountMyProducts((state) => state + 1)
          product.quantity = 1
          setMyProducts((state) => [...state, product])
        }
      }
      if (counter === 'less') {
        const isExists = isCheckExistsMyProduct(myProducts, product.id)
        if (isExists.length !== 0 && isExists[0].quantity > 0) {
          isExists[0].quantity = isExists[0].quantity - 1
          isExists[0].priceResult = resultPrice(
            isExists[0].price,
            isExists[0].quantity,
          )
          const myProductFiltered = myProducts.filter(
            (mp) => mp.id !== isExists[0].id,
          )
          if (isExists[0].quantity !== 0) {
            setMyProducts([...myProductFiltered, isExists[0]])
          } else {
            setCountMyProducts((state) => state - 1)
            setMyProducts([...myProductFiltered])
          }
        }
      }
    } else {
      if (counter === 'more') {
        setCountMyProducts((state) => state + 1)
        product.quantity = product.quantity + 1
        setMyProducts((state) => [...state, product])
      }
    }
  }

  useEffect(() => {
    getProducts()
    getIp()
  }, [])

  console.log('myProducts')
  console.log(myProducts)
  // console.log('countMyProducts')
  // console.log(countMyProducts)

  return (
    <Context.Provider
      value={{
        getProducts,
        products,
        saveMyProduct,
        countMyProducts,
      }}
    >
      {children}
    </Context.Provider>
  )
}

import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../server/api'

interface PropsProductCoffee {
  img: string
  types: string[]
  name: string
  description: string
  price: number | string
  quantity: number
}

export interface PropsCardCoffee {
  product: {
    img: string
    types: string[]
    name: string
    description: string
    price: number | string
    quantity: number
  }
}

interface PropsMyProductCoffee {
  ip: string
  img: string
  types: string[]
  name: string
  description: string
  price: number | string
  quantity: number
}

interface ContextType {
  getProducts: () => void
  products: PropsProductCoffee[]
}

export const Context = createContext({} as ContextType)

interface ContextProps {
  children: ReactNode
}

export function ContextProvider({ children }: ContextProps) {
  const [products, setProducts] = useState([])
  const [ip, setIP] = useState('')

  async function getProducts() {
    const response = await api.get('/produtos')
    const formattedProducts = response.data.map(
      (product: PropsProductCoffee) => {
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

  useEffect(() => {
    getProducts()
    getIp()
  }, [])

  return (
    <Context.Provider
      value={{
        getProducts,
        products,
      }}
    >
      {children}
    </Context.Provider>
  )
}

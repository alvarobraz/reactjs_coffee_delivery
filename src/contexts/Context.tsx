import { ReactNode, createContext, useEffect, useState } from 'react'
import { calcTotalMyProducts } from '../utils'

interface PropsProductCoffee {
  id: number
  img: string
  types: string[]
  name: string
  description: string
  price: number | string
  quantity: number
  valueProduct: number
}

export interface PropsCardCoffee {
  product: {
    id: number
    img: string
    types: string[]
    name: string
    description: string
    price: number | string
    quantity: number
    valueProduct: number
  }
}

export interface PropsMyProductCoffee {
  id: number
  img: string
  types: string[]
  name: string
  description: string
  price: number | string
  quantity: number
  valueProduct: number
}

interface ContextType {
  products: PropsProductCoffee[]
  countAndSaveMyProduct: (product: number, counter: string) => void
  countMyProducts: number
  totalMyProducts: number
}

export const Context = createContext({} as ContextType)

interface ContextProps {
  children: ReactNode
}

export function ContextProvider({ children }: ContextProps) {
  const defaultProducts = [
    {
      id: 1,
      img: 'http://localhost:5173/expresso_tradicional.svg',
      types: ['TRADICIONAL', 'COM LEITE'],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 5,
      quantity: 0,
      valueProduct: 0,
    },
    {
      id: 2,
      img: 'http://localhost:5173/expresso_americano.svg',
      types: ['TRADICIONAL'],
      name: 'Expresso americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 7.5,
      quantity: 0,
      valueProduct: 0,
    },
    {
      id: 3,
      img: 'http://localhost:5173/expresso_cremoso.svg',
      types: ['TRADICIONAL'],
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 10,
      quantity: 0,
      valueProduct: 0,
    },
    {
      id: 4,
      img: 'http://localhost:5173/expresso_gelado.svg',
      types: ['TRADICIONAL', 'GELADO'],
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 12.5,
      quantity: 0,
      valueProduct: 0,
    },
    {
      id: 5,
      img: 'http://localhost:5173/cafe_com_leite.svg',
      types: ['TRADICIONAL', 'COM LEITE'],
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 15,
      quantity: 0,
      valueProduct: 0,
    },
    {
      id: 6,
      img: 'http://localhost:5173/cafe_latte.svg',
      types: ['TRADICIONAL', 'COM LEITE'],
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 17.5,
      quantity: 0,
      valueProduct: 0,
    },
    {
      id: 7,
      img: 'http://localhost:5173/capuccino.svg',
      types: ['TRADICIONAL', 'COM LEITE'],
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 20,
      quantity: 0,
      valueProduct: 0,
    },
    {
      id: 8,
      img: 'http://localhost:5173/macchiato.svg',
      types: ['TRADICIONAL', 'COM LEITE'],
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 22.5,
      quantity: 0,
      valueProduct: 0,
    },
    {
      id: 9,
      img: 'http://localhost:5173/mocaccino.svg',
      types: ['TRADICIONAL', 'COM LEITE'],
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 25,
      quantity: 0,
      valueProduct: 0,
    },
    {
      id: 10,
      img: 'http://localhost:5173/chocolate_quente.svg',
      types: ['TRADICIONAL', 'COM LEITE'],
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 27.5,
      quantity: 0,
      valueProduct: 0,
    },
    {
      id: 11,
      img: 'http://localhost:5173/cubano.svg',
      types: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 30,
      quantity: 0,
      valueProduct: 0,
    },
    {
      id: 12,
      img: 'http://localhost:5173/havaiano.svg',
      types: ['ESPECIAL'],
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 32.5,
      quantity: 0,
      valueProduct: 0,
    },
    {
      id: 13,
      img: 'http://localhost:5173/arabe.svg',
      types: ['ESPECIAL'],
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 35,
      quantity: 0,
      valueProduct: 0,
    },
    {
      id: 14,
      img: 'http://localhost:5173/irlandes.svg',
      types: ['ESPECIAL', 'ALCOÓLICO'],
      name: 'Irlândes',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 37.5,
      quantity: 0,
      valueProduct: 0,
    },
  ]

  const [products, setProducts] =
    useState<PropsProductCoffee[]>(defaultProducts)
  const [myProducts, setMyProducts] = useState<PropsProductCoffee[]>([])
  const [countMyProducts, setCountMyProducts] = useState<number>(0)
  const [totalMyProducts, setTotalMyProducts] = useState<number>(0)

  async function countAndSaveMyProduct(productId: number, counter: string) {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === productId) {
          const newQuantity =
            counter === 'more'
              ? product.quantity + 1
              : Math.max(product.quantity - 1, 0)
          const newValueProduct = Number(product.price) * newQuantity

          return {
            ...product,
            quantity: newQuantity,
            valueProduct: newValueProduct,
          }
        }
        return product
      })
    })

    if (counter === 'more') {
      setMyProducts((prevMyProducts) => {
        const existingProduct = prevMyProducts.find(
          (product) => product.id === productId,
        )

        if (existingProduct) {
          return (prevMyProducts || []).map((product) => {
            if (product.id === productId) {
              const newQuantity =
                counter === 'more'
                  ? product.quantity + 1
                  : Math.max(product.quantity - 1, 0)
              const newValueProduct = Number(product.price) * newQuantity

              return {
                ...product,
                quantity: newQuantity,
                valueProduct: newValueProduct,
                img: product.img || '',
              }
            }
            return product
          })
        } else {
          const newProduct = products.find(
            (product) => product.id === productId,
          )
          if (newProduct) {
            const newQuantity = 1
            const newValueProduct = Number(newProduct.price) * newQuantity

            return [
              ...(prevMyProducts || []),
              {
                ...newProduct,
                quantity: newQuantity,
                valueProduct: newValueProduct,
                img: newProduct.img || '',
              },
            ]
          }
        }
      }) ///
    }
    if (counter === 'less') {
      setMyProducts((prevMyProducts) => {
        const existingProduct = prevMyProducts.find(
          (product) => product.id === productId,
        )

        if (existingProduct) {
          return (prevMyProducts || []).map((product) => {
            if (product.id === productId) {
              const newQuantity = Math.max(product.quantity - 1, 0)
              const newValueProduct = Number(product.price) * newQuantity
              return {
                ...product,
                quantity: newQuantity,
                valueProduct: newValueProduct,
                img: product.img || '',
              }
            }
            return product
          })
        } else {
          const newProduct = products.find(
            (product) => product.id === productId,
          )

          if (newProduct) {
            const newQuantity = 1
            const newValueProduct = Number(newProduct.price) * newQuantity
            return [
              ...(prevMyProducts || []),
              {
                ...newProduct,
                quantity: newQuantity,
                valueProduct: newValueProduct,
                img: newProduct.img || '',
              },
            ]
          }
        }
      })
    }
  }

  const total = calcTotalMyProducts(myProducts)
  const countTotalMyProducts = myProducts.reduce((counter, myProduct) => {
    if (myProduct.quantity !== 0) {
      return counter + 1
    }
    return counter
  }, 0)

  useEffect(() => {
    setTotalMyProducts(total)
    setCountMyProducts(countTotalMyProducts)
  }, [total, countTotalMyProducts])

  // console.log('myProducts')
  // console.log(JSON.stringify(myProducts))
  // console.log('products')
  // console.log(JSON.stringify(products[0]))

  return (
    <Context.Provider
      value={{
        products,
        countAndSaveMyProduct,
        countMyProducts,
        totalMyProducts,
      }}
    >
      {children}
    </Context.Provider>
  )
}

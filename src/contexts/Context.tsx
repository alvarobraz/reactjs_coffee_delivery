import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react'
import { calcTotalMyProducts } from '../utils'

import {
  storageProductsSave,
  storageProductsGet,
} from '../storage/storageProducts'

import {
  storageMyProductsGet,
  storageMyProductsSave,
} from '../storage/storageMyproducts'

export interface PropsProductCoffee {
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

export interface PropsAdressDelivery {
  cep?: string | undefined
  logradouro: string | undefined
  numero: string | undefined
  complemento?: string | undefined
  bairro: string | undefined
  localidade: string | undefined
  uf: string | undefined
}

interface ContextType {
  products: PropsProductCoffee[]
  countAndSaveMyProduct: (product: number, counter: string) => void
  countMyProducts: number
  totalMyProducts: number
  myProducts: PropsProductCoffee[] | undefined
  handleDeleteMyProduct: (product: number) => void
  adressDelivery: PropsAdressDelivery | undefined
  setAdressDelivery: Dispatch<SetStateAction<PropsAdressDelivery | undefined>>
  setPaymentMethod: Dispatch<SetStateAction<string>>
  paymentMethod: string
}

export const Context = createContext({} as ContextType)

interface ContextProps {
  children: ReactNode
}

export function ContextProvider({ children }: ContextProps) {
  const defaultProducts = [
    {
      id: 1,
      img: 'https://reactjs-coffee-delivery.vercel.app/expresso_tradicional.svg',
      types: ['TRADICIONAL', 'COM LEITE'],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 5,
      quantity: 0,
      valueProduct: 0,
    },
    {
      id: 2,
      img: 'https://reactjs-coffee-delivery.vercel.app/expresso_americano.svg',
      types: ['TRADICIONAL'],
      name: 'Expresso americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 7.5,
      quantity: 0,
      valueProduct: 0,
    },
    {
      id: 3,
      img: 'https://reactjs-coffee-delivery.vercel.app/expresso_cremoso.svg',
      types: ['TRADICIONAL'],
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 10,
      quantity: 0,
      valueProduct: 0,
    },
    {
      id: 4,
      img: 'https://reactjs-coffee-delivery.vercel.app/expresso_gelado.svg',
      types: ['TRADICIONAL', 'GELADO'],
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 12.5,
      quantity: 0,
      valueProduct: 0,
    },
    {
      id: 5,
      img: 'https://reactjs-coffee-delivery.vercel.app/cafe_com_leite.svg',
      types: ['TRADICIONAL', 'COM LEITE'],
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 15,
      quantity: 0,
      valueProduct: 0,
    },
    {
      id: 6,
      img: 'https://reactjs-coffee-delivery.vercel.app/cafe_latte.svg',
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
      img: 'https://reactjs-coffee-delivery.vercel.app/capuccino.svg',
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
      img: 'https://reactjs-coffee-delivery.vercel.app/macchiato.svg',
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
      img: 'https://reactjs-coffee-delivery.vercel.app/mocaccino.svg',
      types: ['TRADICIONAL', 'COM LEITE'],
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 25,
      quantity: 0,
      valueProduct: 0,
    },
    {
      id: 10,
      img: 'https://reactjs-coffee-delivery.vercel.app/chocolate_quente.svg',
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
      img: 'https://reactjs-coffee-delivery.vercel.app/cubano.svg',
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
      img: 'https://reactjs-coffee-delivery.vercel.app/havaiano.svg',
      types: ['ESPECIAL'],
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 32.5,
      quantity: 0,
      valueProduct: 0,
    },
    {
      id: 13,
      img: 'https://reactjs-coffee-delivery.vercel.app/arabe.svg',
      types: ['ESPECIAL'],
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 35,
      quantity: 0,
      valueProduct: 0,
    },
    {
      id: 14,
      img: 'https://reactjs-coffee-delivery.vercel.app/irlandes.svg',
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
  const [myProducts, setMyProducts] = useState<
    PropsProductCoffee[] | undefined
  >([])
  const [countMyProducts, setCountMyProducts] = useState<number>(0)
  const [totalMyProducts, setTotalMyProducts] = useState<number>(0)

  const [adressDelivery, setAdressDelivery] = useState<
    PropsAdressDelivery | undefined
  >()
  const [paymentMethod, setPaymentMethod] = useState<string>('')

  async function countAndSaveMyProduct(productId: number, counter: string) {
    setProducts((prevProducts) => {
      const updateProducts = prevProducts.map((product) => {
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

      storageProductsSave(updateProducts)

      return updateProducts
    })

    if (counter === 'more') {
      setMyProducts((prevMyProducts) => {
        const existingProduct = prevMyProducts?.find(
          (product) => product.id === productId,
        )

        if (existingProduct) {
          const updateMyProducts = (prevMyProducts || []).map((product) => {
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

          storageMyProductsSave(updateMyProducts)
          return updateMyProducts
        } else {
          const newProduct = products.find(
            (product) => product.id === productId,
          )
          if (newProduct) {
            const newQuantity = 1
            const newValueProduct = Number(newProduct.price) * newQuantity

            const updateMyProducts = [
              ...(prevMyProducts || []),
              {
                ...newProduct,
                quantity: newQuantity,
                valueProduct: newValueProduct,
                img: newProduct.img || '',
              },
            ]

            storageMyProductsSave(updateMyProducts)
            return updateMyProducts
          }
        }
      })
    }
    if (counter === 'less') {
      setMyProducts((prevMyProducts) => {
        const existingProduct = prevMyProducts?.find(
          (product) => product.id === productId,
        )

        if (existingProduct) {
          const updateMyProducts = (prevMyProducts || []).map((product) => {
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

          storageMyProductsSave(updateMyProducts)
          return updateMyProducts
        } else {
          const newProduct = products.find(
            (product) => product.id === productId,
          )

          if (newProduct) {
            const newQuantity = 1
            const newValueProduct = Number(newProduct.price) * newQuantity
            const updateMyProducts = [
              ...(prevMyProducts || []),
              {
                ...newProduct,
                quantity: newQuantity,
                valueProduct: newValueProduct,
                img: newProduct.img || '',
              },
            ]

            storageMyProductsSave(updateMyProducts)
            return updateMyProducts
          }
        }
      })
    }
  }

  const total = calcTotalMyProducts(myProducts!)
  const countTotalMyProducts = myProducts?.reduce((counter, myProduct) => {
    if (myProduct.quantity !== 0) {
      return counter + 1
    }
    return counter
  }, 0)

  async function handleDeleteMyProduct(productId: number) {
    console.log('productId -> ' + productId)
  }

  async function getLocalStorageProducts() {
    const storageProducts = await storageProductsGet()
    if (storageProducts.length) {
      setProducts(storageProducts)
    }
  }

  async function getLocalStorageMyProducts() {
    const storageMyProducts = await storageMyProductsGet()
    if (storageMyProducts.length) {
      setMyProducts(storageMyProducts)
    }
  }

  useEffect(() => {
    setTotalMyProducts(total)
    setCountMyProducts(countTotalMyProducts!)
    getLocalStorageProducts()
    getLocalStorageMyProducts()
  }, [total, countTotalMyProducts])

  // console.log('adressDelivery')
  // console.log(JSON.stringify(adressDelivery))
  // console.log('paymentMethod')
  // console.log(JSON.stringify(paymentMethod))

  return (
    <Context.Provider
      value={{
        products,
        countAndSaveMyProduct,
        countMyProducts,
        totalMyProducts,
        myProducts,
        handleDeleteMyProduct,
        adressDelivery,
        setAdressDelivery,
        setPaymentMethod,
        paymentMethod,
      }}
    >
      {children}
    </Context.Provider>
  )
}

import { PropsProductCoffee } from '../contexts/Context'
import { PRODUCTS_STORAGE } from './storageConfig'

export async function storageProductsSave(products: PropsProductCoffee[]) {
  localStorage.setItem(PRODUCTS_STORAGE, JSON.stringify(products))
}

export async function storageProductsGet() {
  const storage = localStorage.getItem(PRODUCTS_STORAGE)
  const products: PropsProductCoffee[] = storage ? JSON.parse(storage) : {}
  return products
}

import { PropsProductCoffee } from '../contexts/Context'
import { MYPRODUCTS_STORAGE } from './storageConfig'

export async function storageMyProductsSave(myProducts: PropsProductCoffee[]) {
  localStorage.setItem(MYPRODUCTS_STORAGE, JSON.stringify(myProducts))
}

export async function storageMyProductsGet() {
  const storage = localStorage.getItem(MYPRODUCTS_STORAGE)
  const myProducts: PropsProductCoffee[] = storage ? JSON.parse(storage) : {}
  return myProducts
}

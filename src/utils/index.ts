import { PropsMyProductCoffee } from '../contexts/Context'

export function calcTotalMyProducts(myProducts: PropsMyProductCoffee[]) {
  if (myProducts.length !== 0) {
    let totalProducts = 0
    myProducts.map((myProduct) => {
      totalProducts = Number(myProduct.valueProduct) + totalProducts
      return null
    })
    return totalProducts
  }
  return 0
}

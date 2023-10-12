import { PropsMyProductCoffee } from '../contexts/Context'

// export function isCheckExistsMyProduct(
//   myProducts: PropsMyProductCoffee[],
//   productId: number,
// ) {
//   return myProducts.filter((myProduct) => myProduct.id === productId)
// }

// export function resultPrice(priceString: string | number, quatitity: number) {
//   const price = priceString.toString()
//   const replacePrice = price.replace(',', '.')
//   const priceToNumber = parseFloat(replacePrice).toFixed(2)
//   return (priceString = parseFloat(priceToNumber) * quatitity)
// }

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

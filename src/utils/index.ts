import { PropsMyProductCoffee } from '../contexts/Context'

export function isCheckExistsMyProduct(
  myProducts: PropsMyProductCoffee[],
  productId: string | undefined,
) {
  return myProducts.filter((myProduct) => myProduct.id === productId)
}

export function resultPrice(priceString: string | number, quatitity: number) {
  const price = priceString.toString()
  const replacePrice = price.replace(',', '.')
  const priceToNumber = parseFloat(replacePrice).toFixed(2)
  return (priceString = parseFloat(priceToNumber) * quatitity)
}

export function totalMyProducts(myProducts: PropsMyProductCoffee[]) {
  if (myProducts.length !== 0) {
    let totalProducts = 0
    myProducts.map((myProduct) => {
      totalProducts = Number(myProduct.priceResult) + totalProducts
      return null
    })
    return totalProducts
  }
  return 0
}

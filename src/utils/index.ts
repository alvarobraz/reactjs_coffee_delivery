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

export function formatPrice(price: number) {
  const roundedPrice = parseFloat(price.toFixed(2))

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(roundedPrice)
}

export function formatPriceWithPrefix(price: number) {
  if (typeof price === 'number') {
    return price.toFixed(2).replace('.', ',')
  }
  return ''
}

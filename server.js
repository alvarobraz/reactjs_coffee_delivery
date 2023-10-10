module.exports = () => {
  const data = {
    products: [],
  }

  for (let i = 0; i < 15; i++) {
    data.products.push({
      id: i + 1,
      img: 'expresso_tradicional',
      types: ['TRADICIONAL'],
      name: `Expresso Tradicional${i + 1}`,
      description: `O tradicional${
        i + 1
      } café feito com água quente e grãos moídos`,
      price: 10.0,
      quantity: 0,
    })
  }

  return data
}

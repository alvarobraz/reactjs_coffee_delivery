// import { useContext } from 'react'
// import { PropsProductCoffee } from '../../../contexts/Context'
import { ContentButton, TypeVariant } from './styles'
import { CreditCard, Bank, Money, Trash } from 'phosphor-react'
// import { Context } from '../../../contexts/Context'

interface TypeContainerProps {
  variant?: TypeVariant
  isSelected?: string
  setIsSelected?: React.Dispatch<React.SetStateAction<string | undefined>>
  product?: number
  handleDeleteMyProduct?: (product: number) => void
}

export function Button({
  variant,
  isSelected,
  setIsSelected,
  product,
  handleDeleteMyProduct,
}: TypeContainerProps) {
  // const { handleDeleteMyProduct } = useContext(Context)
  // console.log('isSelected -> ' + isSelected)
  // console.log('variant -> ' + variant)

  return (
    <>
      <ContentButton
        onClick={
          setIsSelected
            ? () => setIsSelected(variant)
            : handleDeleteMyProduct
            ? () => handleDeleteMyProduct(product!)
            : () => null
        }
        style={
          isSelected === variant
            ? { border: '1px solid #8047F8' }
            : { border: 0 }
        }
        variant={variant}
        type={variant === 'trash' ? 'button' : 'submit'}
      >
        {variant === 'card' ? (
          <>
            <CreditCard size={16} /> <span>CARTÃO DE CRÉDITO</span>
          </>
        ) : variant === 'debit' ? (
          <>
            <Bank size={16} /> <span>CARTÃO DE DÉBITO</span>
          </>
        ) : variant === 'money' ? (
          <>
            <Money size={16} /> <span>DINHEIRO</span>
          </>
        ) : variant === 'trash' ? (
          <>
            <Trash size={16} /> <span>REMOVER</span>
          </>
        ) : null}
      </ContentButton>
    </>
  )
}

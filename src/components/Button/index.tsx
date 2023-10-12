import { ContentButton, TypeVariant } from './styles'
import { CreditCard, Bank, Money } from 'phosphor-react'

interface TypeContainerProps {
  variant?: TypeVariant
  isSelected?: string
  setIsSelected?: React.Dispatch<React.SetStateAction<string | undefined>>
}

export function Button({
  variant,
  isSelected,
  setIsSelected,
}: TypeContainerProps) {
  // console.log('isSelected -> ' + isSelected)
  // console.log('variant -> ' + variant)

  return (
    <>
      <ContentButton
        onClick={setIsSelected ? () => setIsSelected(variant) : () => {}}
        style={isSelected === variant ? { border: '1px solid #8047F8' } : {}}
        type="submit"
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
        ) : null}
      </ContentButton>
    </>
  )
}

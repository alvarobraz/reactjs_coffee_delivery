import { TypeVariant, InfoWrapContent } from './styles'

import {
  ShoppingCart,
  Timer,
  Package,
  Coffee,
  MapPin,
  CurrencyDollar,
} from 'phosphor-react'

interface PropsInfowrap {
  variant: TypeVariant
  children?: React.ReactNode
}

export function InfoWrapHome({ variant, children }: PropsInfowrap) {
  return (
    <InfoWrapContent variant={variant}>
      <span>
        {variant === 'shopping' ? (
          <ShoppingCart size={16} />
        ) : variant === 'timer' || variant === 'timer2' ? (
          <Timer size={16} />
        ) : variant === 'package' ? (
          <Package size={16} />
        ) : variant === 'coffee' ? (
          <Coffee size={16} />
        ) : variant === 'map' ? (
          <MapPin size={16} />
        ) : variant === 'money' ? (
          <CurrencyDollar size={16} />
        ) : null}
      </span>

      {variant === 'shopping' ? (
        <p>Compra simples e segura</p>
      ) : variant === 'timer' ? (
        <p>Entrega rápida e rastreada</p>
      ) : variant === 'package' ? (
        <p>Embalagem mantém o café intacto</p>
      ) : variant === 'coffee' ? (
        <p>O café chega fresquinho até você</p>
      ) : null}

      {children}
    </InfoWrapContent>
  )
}

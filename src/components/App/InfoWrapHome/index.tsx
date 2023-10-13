import { TypeVariant, InfoWrapContent } from './styles'

import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

interface PropsInfowrap {
  variant: TypeVariant
}

export function InfoWrapHome({ variant }: PropsInfowrap) {
  return (
    <InfoWrapContent variant={variant}>
      <span>
        {variant === 'shopping' ? (
          <ShoppingCart size={16} />
        ) : variant === 'timer' ? (
          <Timer size={16} />
        ) : variant === 'package' ? (
          <Package size={16} />
        ) : variant === 'coffee' ? (
          <Coffee size={16} />
        ) : null}
      </span>
      <p>
        {variant === 'shopping'
          ? 'Compra simples e segura'
          : variant === 'timer'
          ? 'Entrega rápida e rastreada'
          : variant === 'package'
          ? 'Embalagem mantém o café intacto'
          : variant === 'coffee'
          ? 'O café chega fresquinho até você'
          : null}
      </p>
    </InfoWrapContent>
  )
}

import { TypeContent } from './styles'

interface PropsTypeCoffe {
  nome: string
}

export function TypeCoffee({ nome }: PropsTypeCoffe) {
  return (
    <TypeContent>
      <p>{nome}</p>
    </TypeContent>
  )
}

import { useState } from 'react'
import { PropsProductCoffee } from '../../contexts/Context'
import { Button } from '../../components/Checkout/Button'
import {
  BaseInput,
  CompleteYourOrder,
  ContentCheckout,
  Box,
  FormOfPayment,
  ConfirmOrder,
  ButtonConfirm,
} from './styles'
import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { MyOrder } from '../../components/Checkout/MyOrder'

export function Checkout() {
  // const { handleDeleteMyProduct } = useContext(Context)

  // console.log(totalMyProducts)
  const { register, handleSubmit } = useForm({
    // resolver: zodResolver(newCycleFormValidationSchema),
  })

  const [isSelected, setIsSelected] = useState<string | undefined>('')

  // console.log('isSelected -> ' + isSelected)

  function handleCreateDeliveryAddress(data: Partial<PropsProductCoffee>) {
    console.log('data ->' + JSON.stringify(data))
    // return data
  }

  const product = {
    id: 1,
    img: 'http://localhost:5173/expresso_tradicional.svg',
    types: ['TRADICIONAL', 'COM LEITE'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 5,
    quantity: 0,
    valueProduct: 0,
  }

  return (
    <>
      {/* <h1>Checkout - Total de produtos: {totalMyProducts}</h1>
      <p>{JSON.stringify(myProducts)}</p> */}
      <ContentCheckout>
        <form onSubmit={handleSubmit(handleCreateDeliveryAddress)}>
          <h1>Complete seu pedido</h1>
          <CompleteYourOrder>
            <Box variant="map">
              <MapPinLine size={19} />
              <div>
                <h3>Endereço de Entrega</h3>
                <h4>Informe o endereço onde deseja receber seu pedido</h4>
              </div>
            </Box>
            <Box>
              <BaseInput optional={true} type="one">
                <input placeholder="CEP" id="cep" {...register('cep')} />
                <span className="optional-text">Opcional</span>
              </BaseInput>
            </Box>
            <Box>
              <BaseInput type="two">
                <input
                  placeholder="Rua"
                  id="logradouro"
                  {...register('logradouro')}
                />
              </BaseInput>
            </Box>
            <Box>
              <BaseInput type="one">
                <input
                  placeholder="Número"
                  id="numero"
                  {...register('numero')}
                />
              </BaseInput>
              <BaseInput type="two" optional={true}>
                <input
                  placeholder="Complemento"
                  id="complemento"
                  {...register('complemento')}
                />
                <span className="optional-text">Opcional</span>
              </BaseInput>
            </Box>
            <Box>
              <BaseInput type="one">
                <input
                  placeholder="Bairro"
                  id="bairro"
                  {...register('bairro')}
                />
              </BaseInput>
              <BaseInput type="two">
                <input
                  placeholder="Cidade"
                  id="localidade"
                  {...register('localidade')}
                />
              </BaseInput>
              <BaseInput type="three">
                <input placeholder="UF" id="uf" {...register('uf')} />
              </BaseInput>
            </Box>
          </CompleteYourOrder>
          <FormOfPayment>
            <Box variant="dollar">
              <CurrencyDollar size={19} />
              <div>
                <h3>Pagamento</h3>
                <h4>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </h4>
              </div>
            </Box>
            <Box>
              <Button
                variant="card"
                setIsSelected={setIsSelected}
                isSelected={isSelected}
              />
              <Button
                variant="debit"
                setIsSelected={setIsSelected}
                isSelected={isSelected}
              />
              <Button
                variant="money"
                setIsSelected={setIsSelected}
                isSelected={isSelected}
              />
            </Box>
          </FormOfPayment>
        </form>
        <div>
          <h1>Cafés selecionados</h1>
          <ConfirmOrder>
            <MyOrder product={product} />
            <MyOrder product={product} />
            <div>
              <div>
                <p>Total de itens</p>
                <span>R$ 29,70</span>
              </div>
              <div>
                <p>Entrega</p>
                <span>R$ 3,50</span>
              </div>
              <div>
                <p>Total</p>
                <span>R$ 32,20</span>
              </div>
            </div>
            <ButtonConfirm>CONFIRMAR PEDIDO</ButtonConfirm>
          </ConfirmOrder>
        </div>
      </ContentCheckout>
    </>
  )
}

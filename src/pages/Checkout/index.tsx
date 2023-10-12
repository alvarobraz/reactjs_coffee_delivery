// import { useContext } from 'react'
// import { Context } from '../../contexts/Context'

import { useState } from 'react'
import { Button } from '../../components/Button'
import {
  BaseInput,
  CompleteYourOrder,
  ContentCheckout,
  Box,
  FormOfPayment,
  ConfirmOrder,
} from './styles'
import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { useForm } from 'react-hook-form'

export function Checkout() {
  // const { totalMyProducts, myProducts } = useContext(Context)

  // console.log(totalMyProducts)
  const { register, handleSubmit, watch } = useForm({
    // resolver: zodResolver(newCycleFormValidationSchema),
  })

  const [isSelected, setIsSelected] = useState<string | undefined>('')

  // console.log('isSelected -> ' + isSelected)

  function handleCreateDeliveryAddress(data: any) {
    console.log('data ->' + JSON.stringify(data))
  }

  return (
    <>
      {/* <h1>Checkout - Total de produtos: {totalMyProducts}</h1>
      <p>{JSON.stringify(myProducts)}</p> */}
      <ContentCheckout onSubmit={handleSubmit(handleCreateDeliveryAddress)}>
        <div>
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
        </div>
        <div>
          <h1>Cafés selecionados</h1>
          <ConfirmOrder></ConfirmOrder>
        </div>
      </ContentCheckout>
    </>
  )
}

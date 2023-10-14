import { useContext, useState } from 'react'
import { Context } from '../../contexts/Context'
import { Button } from '../../components/Checkout/Button'
import {
  BaseInput,
  CompleteYourOrder,
  ContentCheckout,
  Box,
  FormOfPayment,
  ConfirmOrder,
  ButtonConfirm,
  Erros,
} from './styles'
import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { MyOrder } from '../../components/Checkout/MyOrder'
import { formatPrice } from '../../utils'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export function Checkout() {
  const { myProducts, totalMyProducts } = useContext(Context)

  const FormValidationSchema = zod.object({
    cep: zod.string().optional(),
    logradouro: zod.string().min(1, 'Informe a Rua'),
    numero: zod.string().min(1, 'Informe o Número'),
    complemento: zod.string().optional(),
    bairro: zod.string().min(1, 'Informe o Bairro'),
    localidade: zod.string().min(1, 'Informe a Cidade'),
    uf: zod.string().min(1, 'Informe o Estado'),
  })
  type NewCycleFormData = zod.infer<typeof FormValidationSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Partial<NewCycleFormData>>({
    resolver: zodResolver(FormValidationSchema),
  })

  const [isSelected, setIsSelected] = useState<string | undefined>('')

  // console.log('isSelected -> ' + isSelected)

  function handleCreateDeliveryAddress(data: Partial<NewCycleFormData>) {
    console.log('data ->' + JSON.stringify(data))
    // return data
  }

  // console.log('errors -> ' + errors)

  const deliveryPrice = 3.5

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
              {/* <ErrorMessage errors={errors} name="cep" /> */}
            </Box>
            {errors.logradouro && <span>{errors.logradouro.message}</span>}
            <Box>
              <BaseInput type="two">
                <input
                  placeholder="Rua"
                  id="logradouro"
                  {...register('logradouro')}
                />
              </BaseInput>
            </Box>
            {errors.numero && <span>{errors.numero.message}</span>}
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
            {errors.bairro && errors.localidade && errors.uf ? (
              <Erros>
                {errors.bairro && <span>{errors.bairro.message}</span>}
                {errors.localidade && <span>{errors.localidade.message}</span>}
                {errors.uf && <span>{errors.uf.message}</span>}
              </Erros>
            ) : (
              ''
            )}
            {errors.bairro === undefined && errors.localidade && errors.uf ? (
              <Erros variant="two">
                {errors.localidade && <span>{errors.localidade.message}</span>}
                {errors.uf && <span>{errors.uf.message}</span>}
              </Erros>
            ) : (
              ''
            )}
            {errors.bairro === undefined &&
            errors.localidade === undefined &&
            errors.uf ? (
              <Erros variant="one">
                {errors.uf && <span>{errors.uf.message}</span>}
              </Erros>
            ) : (
              ''
            )}
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
            {myProducts.length !== 0
              ? myProducts.map((product) => (
                  <MyOrder key={product.id} product={product} />
                ))
              : ''}
            <div>
              <div>
                <p>Total de itens</p>
                <span>{formatPrice(totalMyProducts)}</span>
              </div>
              <div>
                <p>Entrega</p>
                <span>{formatPrice(deliveryPrice)}</span>
              </div>
              <div>
                <p>Total</p>
                <span>{formatPrice(totalMyProducts + deliveryPrice)}</span>
              </div>
            </div>
            <ButtonConfirm>CONFIRMAR PEDIDO</ButtonConfirm>
          </ConfirmOrder>
        </div>
      </ContentCheckout>
    </>
  )
}

import { useContext } from 'react'
import { InfoWrapHome } from '../../components/App/InfoWrapHome'
import { ContentConfirmOrder, PaymentMethod } from './styles'
import { Context } from '../../contexts/Context'
import ImgMotoboyDelivery from '../../assets/img_motoboy_delivery.svg'

export function ConfirmOrder() {
  const { adressDelivery, paymentMethod } = useContext(Context)

  return (
    <>
      <ContentConfirmOrder>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
        <PaymentMethod>
          <div>
            <div>
              <InfoWrapHome variant="map">
                <div>
                  <p>
                    Entrega em{' '}
                    <strong>
                      {adressDelivery?.logradouro},{adressDelivery?.numero}
                    </strong>
                  </p>
                  <p>
                    {adressDelivery?.bairro} - {adressDelivery?.localidade},{' '}
                    {adressDelivery?.uf}
                  </p>
                </div>
              </InfoWrapHome>
              <InfoWrapHome variant="timer2">
                <div>
                  <p>Previsão de entrega</p>
                  <p>
                    <strong>20 min - 30 min</strong>
                  </p>
                </div>
              </InfoWrapHome>
              <InfoWrapHome variant="money">
                <div>
                  <p>Pagamento na entrega </p>
                  <p>
                    <strong>
                      {paymentMethod === 'card'
                        ? 'Cartão de crédito'
                        : paymentMethod === 'debit'
                        ? 'Cartão de débito'
                        : paymentMethod === 'money'
                        ? 'Dinheiro'
                        : ''}
                    </strong>
                  </p>
                </div>
              </InfoWrapHome>
            </div>
          </div>
          <div>
            <img src={ImgMotoboyDelivery} alt="Ilustração de um motoboy" />
          </div>
        </PaymentMethod>
      </ContentConfirmOrder>
    </>
  )
}

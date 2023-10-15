import { useEffect, useState } from 'react'
import logoCoffeeDelivery from '../../assets/logo_coffee_delivary.svg'
import { MapPin } from 'phosphor-react'
import { HeaderContainer, Weather } from './styles'
import { NavLink } from 'react-router-dom'
import { ButtonCart } from '../App/ButtonCart'

export function Header() {
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function myGeolocation() {
    if ('geolocation' in navigator) {
      setIsLoading(true)
      navigator.geolocation.getCurrentPosition(async function (position) {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude

        await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.address) {
              setCidade(data.address.city)
              setEstado(data.address.state)
              // return { city, state }
              setIsLoading(false)
            } else {
              console.log('Geolocalização não encontrada')
              setIsLoading(false)
            }
          })
          .catch((error) => {
            console.error(
              'Erro ao consultar o serviço de geocodificação:',
              error,
            )
            setIsLoading(false)
          })
      })
    } else {
      setIsLoading(false)
      console.log('Geolocalização não está disponível no navegador do usuário')
    }
  }

  useEffect(() => {
    myGeolocation()
  }, [])

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffeeDelivery} alt="Logotipo do Coffe Delivary" />
      </NavLink>
      <nav>
        <Weather>
          <MapPin size={22} />
          <p>{isLoading ? 'carregando...' : `${cidade}, ${estado}`}</p>
        </Weather>
        <ButtonCart variant="header" />
      </nav>
    </HeaderContainer>
  )
}

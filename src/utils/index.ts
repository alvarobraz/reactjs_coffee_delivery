export async function myGeolocation() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(async function (position) {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude

      await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.address) {
            const city = data.address.city
            const state = data.address.state
            return { city, state }
          } else {
            console.error('Nenhum resultado de geocodificação encontrado.')
          }
        })
        .catch((error) => {
          console.error(
            'Erro ao consultar o serviço de geocodificação reversa:',
            error,
          )
          return { city: 'São Paulo', state: 'SP' }
        })
    })
  } else {
    console.log('Geolocalização não está disponível no navegador do usuário')
  }
}

import useClima from "../Hooks/useClima"


const Resultado = () => {

    const { resultado } = useClima()
    const { name, main } = resultado
    const { description, icon } = resultado.weather[0]

  return (
    <div className='contenedor'>
        <div className='icon'>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={`Icono ${description}`} />
        </div>
        <h2>El clima de {name} es:</h2>
        <h3>Condicion: {description}</h3>
        <p>Temperatura Actual: {parseInt(main.temp)} °C</p>
        <p>Temperatura Minima: {parseInt(main.temp_min)} °C</p>
        <p>Temperatura Maxima: {parseInt(main.temp_max)} °C</p>
    </div>
  )
}

export default Resultado
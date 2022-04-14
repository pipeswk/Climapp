import { useState, createContext } from 'react'
import axios, { Axios } from 'axios'

const ClimaContext = createContext()

const ClimaProvider = ( {children} ) => {


    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    })

    const [resultado, setResultado] = useState({})
    const [mostrar, setMostrar] = useState(false)
    const [spinner, setSpinner] = useState(false)
    

    const datosBusqueda = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const consultarClima = async (datos) => {
        setMostrar(false)
        setSpinner(true)
        const { ciudad, pais } = datos
        try {
            const appId = import.meta.env.VITE_APIKEY
            //Consulta de coordenadas
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`
            const { data } = await axios(url)
            const { lat, lon } = data[0]
            
            //Consulta del clima
            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&lang=es&units=metric`
            const { data: clima } =await axios(urlClima)
            setResultado(clima)
            setSpinner(false)
            setMostrar(true)
            
        } catch (error) {
            console.error(error)
            setSpinner(false)
            alert('No se encontraron resultados')
        }
    }


    return (
        <ClimaContext.Provider
            value={{
                busqueda,
                datosBusqueda,
                consultarClima,
                resultado,
                mostrar,
                spinner
            }}
        >
            {children}
        </ClimaContext.Provider>
    )

}

export {
    ClimaProvider
}

export default ClimaContext
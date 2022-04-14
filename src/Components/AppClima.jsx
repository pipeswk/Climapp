import useClima from "../Hooks/useClima"
import Formulario from "./Formulario"
import Resultado from "./Resultado"
import Spinner from "./Spinner"


const AppClima = () => {

  const { mostrar, spinner } = useClima()

  return (
    <>
      <main className='dos-columnas'>
        <Formulario />

        {spinner ? (
          <Spinner />
        ) : mostrar ? (
          <Resultado />
        ) : (
          <p>Busca el clima de la ciudad que quieras</p>
        )}
      </main>
    </>
  )
}

export default AppClima
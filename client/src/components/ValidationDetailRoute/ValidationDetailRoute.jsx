import { useParams } from "react-router-dom";
import { Detail, NotFound } from "../../Views";

const ValidationDetailRoute = () => {
  
  const { countryId } = useParams();
  console.log(countryId);

  if (countryId.length === 3) {
    // Redirige a la ruta de detalle si el país tiene exactamente 3 caracteres
    return <Detail />;
  } else {
    // Renderiza el componente NotFound si no se cumple la condición
    return <NotFound />;
  }
};

export default ValidationDetailRoute;

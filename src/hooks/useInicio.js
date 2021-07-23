import { graphql, useStaticQuery } from 'gatsby'

const useInicio = () => {
    
    const resultado = useStaticQuery(
        graphql`{
  allStrapiPaginas(filter: {nombre: {eq: "Inicio"}}) {
    nodes {
      id
      nombre
      contenido
      imagen {
        localFile {
          sharp: childImageSharp {
            gatsbyImageData(
              transformOptions: {duotone: {highlight: "#222222", shadow: "#192550", opacity: 30}}
              layout: FULL_WIDTH
            )
          }
        }
      }
    }
  }
}
`);
    

    return resultado.allStrapiPaginas.nodes.map( inicio => ({
        nombre: inicio.nombre,
        contenido: inicio.contenido,
        imagen: inicio.imagen
    }))

}
 
export default useInicio;
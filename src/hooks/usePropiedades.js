import { graphql, useStaticQuery } from "gatsby"

const usePropiedades = () => {
  const datos = useStaticQuery(graphql`
    {
      allStrapiPropiedades {
        nodes {
          nombre
          descripcion
          id
          wc
          precio
          estacionamiento
          habitaciones
          categorias {
            nombre
          }
          agentes {
            nombre
            telefono
            email
          }
          imagen {
            localFile {
              sharp: childImageSharp {
                gatsbyImageData(width: 600, height: 400, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `)

  return datos.allStrapiPropiedades.nodes.map(propiedad => ({
    nombre: propiedad.nombre,
    descripcion: propiedad.descripcion,
    id: propiedad.id,
    wc: propiedad.wc,
    precio: propiedad.precio,
    estacionamiento: propiedad.estacionamiento,
    habitaciones: propiedad.habitaciones,
    categorias: propiedad.categorias,
    agentes: propiedad.agentes,
    imagen: propiedad.imagen.localFile.sharp,
  }))
}

export default usePropiedades

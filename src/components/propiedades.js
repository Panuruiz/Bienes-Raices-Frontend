/** @jsx jsx */
import { jsx } from '@emotion/react';
import Iconos from './iconos';
import styled from '@emotion/styled';
import { GatsbyImage, getImage  } from "gatsby-plugin-image";
import Layout from './layout';
import { graphql } from 'gatsby';

const Contenido = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 3rem;
    width: 95%;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`;
const Sidebar = styled.aside`
    .precio {
        font-size: 2rem;
        color: #75AB00;
    }
    .agente {
        margin-top: 4rem;
        border-radius: 1rem;
        background-color:  #75AB00;
        padding: 3rem;
        color: #FFF;

        p {
            margin: 0;
        }
    }
`;

export const query = graphql`
    query ($id: String!) {
        allStrapiPropiedades(filter: {id: {eq: $id}}) {
            nodes {
                nombre
                descripcion
                habitaciones
                wc
                estacionamiento
                precio
                agentes {
                    nombre
                    telefono
                    email
                }
                imagen {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(width: 1200, layout: CONSTRAINED)
                      }
                    }
                  }
            }
        }
    }
`;

const Propiedades = ({data: { allStrapiPropiedades: { nodes } }}) => {

    const { 
        nombre, 
        descripcion,
        habitaciones,
        wc,
        estacionamiento,
        precio,
        agentes, 
        imagen 
    } = nodes[0];

    const image = getImage(imagen.localFile.childImageSharp);

    return ( 
        <Layout>
            <h1>{nombre}</h1>
            <Contenido>
                <main>
                    <GatsbyImage image={image} alt={nombre} />
                    <p>{descripcion}</p>
                </main>
                <Sidebar>
                    <p className="precio">{precio}€</p>
                    <Iconos 
                    wc={wc}
                        estacionamiento={estacionamiento}
                        habitaciones={habitaciones}
                    />
                    <div className="agente">
                        <h2>Vendedor:</h2>
                        <p>{agentes.nombre}</p>
                        <p>Tel: {agentes.telefono}</p>
                        <p>E-Mail: {agentes.email}</p>
                    </div>
                </Sidebar>
            </Contenido>

        </Layout>
     );
}
 
export default Propiedades;
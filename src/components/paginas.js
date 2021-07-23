/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { GatsbyImage, getImage  } from "gatsby-plugin-image";
import Layout from './layout';
import { graphql } from 'gatsby';
import ListadoPropiedades from './listadoPropiedades';

const ContenidoPagina = styled.div`
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


export const query = graphql`
    query ($id: String!) {
        allStrapiPaginas(filter: {id: {eq: $id}}) {
            nodes {
                nombre
                contenido
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

const Paginas = ({data: { allStrapiPaginas: { nodes } }}) => {

    const { 
        nombre, 
        contenido, 
        imagen 
    } = nodes[0];

    const image = getImage(imagen.localFile.childImageSharp);

    return ( 
        <Layout>
            
            
                <main className="contenedor">
                    <h1>{nombre}</h1>
                    <ContenidoPagina>
                    <GatsbyImage image={image} alt={nombre} />
                    <p>{contenido}</p>
                    </ContenidoPagina>
                </main>
                
                {nombre === "Propiedades" && (<ListadoPropiedades />)}

        </Layout>
     );
}
 
export default Paginas;
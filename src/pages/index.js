/** @jsx jsx */
import { jsx } from '@emotion/react';
import Layout from '../components/layout';
import useInicio from '../hooks/useInicio';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import * as HeroCSS from '../css/hero.module.css';
import Encuentra from '../components/encuentra';
import ListadoPropiedades from '../components/listadoPropiedades';

const ImagenBackground = styled(BackgroundImage)`
    height: 600px;
`;

const Index = () => {

    const inicio = useInicio();
    const { nombre, contenido, imagen } = inicio[0];

    
    return ( 
        <Layout>
            <ImagenBackground
                tag="section"
                fluid={imagen.localFile.sharp.fluid}
                fadeIn="soft"
                
            >
                <div className={HeroCSS.imagenbg}>
                    <h1 className={HeroCSS.titulo} >Venta de casas y apartamentos exclusivos</h1>
                </div>
            </ImagenBackground>
            <main>
                <div css={css`
                        max-width: 800px;
                        margin: 0 auto;
                    `}
                >
                    <h1>{nombre}</h1>
                    <p css={css`
                        text-align: center;
                    `}>{contenido}</p>
                </div>
            </main>
            <Encuentra />
            <ListadoPropiedades />
        </Layout>
    );
}
 
export default Index;
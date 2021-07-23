/** @jsx jsx */
import { jsx } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import * as HeroCSS from '../css/hero.module.css';

const ImageBackground = styled(BackgroundImage)`
    height: 300px;
`;

const Encuentra = () => {

    const { imagen } = useStaticQuery(graphql`{
    imagen: file(relativePath: {eq: "encuentra.jpg"}) {
    sharp: childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`)
  //console.log(imagen.sharp.gatsbyImageData.images.sources[0]);
    return ( 
        <ImageBackground tag="section" fluid={imagen.sharp.gatsbyImageData.images.sources[0]} fadeIn="soft" >
            <div className={HeroCSS.imagenbg}>
                <h3 className={HeroCSS.titulo}>Encuentra la casa de tus sueños</h3>
                <p>15 años de experiencia</p>
            </div>
        </ImageBackground>
     );
}
 
export default Encuentra;
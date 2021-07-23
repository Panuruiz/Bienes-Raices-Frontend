/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { jsx } from "@emotion/react";
import { css } from "@emotion/react";
import usePropiedades from "../hooks/usePropiedades";
import PropiedadPreview from "./propiedadPreview";
import * as ListadoPropiedadesCSS from "../css/listadoPropiedades.module.css";
import useFiltro from "../hooks/useFiltro";

const ListadoPropiedades = () => {
    const resultado = usePropiedades();
    const [propiedades] = useState(resultado);
    const [filtradas, guardarFiltradas] = useState([]);
    // filtrado de propiedades
    const { categoria,  FiltroUI } = useFiltro();

    useEffect(() => {
        if(categoria) {
            const filtro = propiedades.filter( propiedad => propiedad.categorias.nombre === categoria);
            guardarFiltradas(filtro);
        } else {
            guardarFiltradas(propiedades);
        }
    }, [categoria, propiedades]);
    
    console.log(filtradas);
  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Nuestras Propiedades
      </h2>
      {FiltroUI()}
      <ul className={ListadoPropiedadesCSS.propiedades}>
                {filtradas.map( filtrada => (
                    <PropiedadPreview 
                        key={filtrada.id}
                        propiedad={filtrada}
                    />
                ))}
            </ul>
    </>
  )
}

export default ListadoPropiedades;

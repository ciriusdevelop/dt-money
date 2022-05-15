import styled from 'styled-components'

export const Container = styled.div`

margin-top: 4rem;

table {
  width: 100%;
  border-spacing: 0 1rem;
  

th {
  color: var(--texto-claro);
  font-weight: 400;
  padding: 1rem 2rem;
  text-align: left;
  line-height: 1.5rem;
  
}

td {
  padding: 1rem 2rem;
  border: 0;
  background: var(--branco);
  font-weight: 400;
  color: var(--texto-claro);

  &:first-child {
    color: var(--texto);
  }

  &.entrada {
    color: var(--verde-claro);
  }

  &.saida {
    color: var(--Principal);
  }
  
}}

`;
import React, { useEffect, useState } from 'react';
import api from './Api';

export default function Personagens(props) {

  const [personagem, setPersoangem] = useState([]);

  async function carregarDados() {
    const dados = await api.get('/character');

    setPersoangem(dados.data.results);
  }


  useEffect(() => {
    carregarDados();
  }, [])



  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>Especie</th>
            <th>Genero</th>
          </tr>
        </thead>
        <tbody>
          {personagem.length > 0 && personagem.map(perso => (
            <tr key={perso.id}>
              <td><img src={perso.image} alt={perso.name} /></td>
              <td>{perso.name}</td>
              <td>{perso.species}</td>
              <td>{perso.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
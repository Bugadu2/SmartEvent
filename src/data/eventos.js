const dados = [
  {
    id: 1,
    nome: 'Show de Rock',
    local: 'Arena',
    descricao: 'Show ao vivo',
    favorito: false,
    imagem: 'https://picsum.photos/300/200?1'
  },
  {
    id: 2,
    nome: 'Palestra Tech',
    local: 'Senai',
    descricao: 'Tecnologia',
    favorito: false,
    imagem: 'https://picsum.photos/300/200?2'
  }
]

// 🔥 carregar do localStorage
const salvos = JSON.parse(localStorage.getItem('eventos'))

export const eventos = salvos || dados
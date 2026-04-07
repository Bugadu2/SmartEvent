import { ref } from 'vue'
import { eventos as dados } from '../data/eventos'

export const listaEventos = ref(
  JSON.parse(localStorage.getItem('eventos')) || dados
)

export const salvar = () => {
  localStorage.setItem('eventos', JSON.stringify(listaEventos.value))
}
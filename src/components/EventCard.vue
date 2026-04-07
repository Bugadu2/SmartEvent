<script setup lang="ts">
import { ref } from 'vue'
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/vue'


interface Evento {
  id: number
  nome: string
  local: string
  descricao: string
  imagem: string
  favorito: boolean
}

const props = defineProps<{
  evento: Evento
}>()

const emit = defineEmits<{
  favoritar: [evento: Evento]
  abrir: [id: number]
}>()

const animando = ref(false)

const favoritar = () => {
  animando.value = true
  emit('favoritar', props.evento)

  setTimeout(() => (animando.value = false), 300)
}</script>

<template>
  <ion-card class="card" @click="$emit('abrir', evento.id)">
    <div class="img-container">
  <img :src="evento.imagem" />
</div>

    <ion-card-header>
      <ion-card-title>{{ evento.nome }}</ion-card-title>
      <ion-card-subtitle>{{ evento.local }}</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      <p>{{ evento.descricao }}</p>

      <ion-button
        expand="block"
        :color="evento.favorito ? 'warning' : 'primary'"
        @click.stop="favoritar"
      >
        {{ evento.favorito ? '★ Favoritado' : '☆ Favoritar' }}
      </ion-button>
    </ion-card-content>
  </ion-card>
</template>
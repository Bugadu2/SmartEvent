<script setup>
import { ref, onMounted } from 'vue'
import { eventos as dados } from '../data/eventos'
import EventCard from '../components/EventCard.vue'
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonSkeletonText } from '@ionic/vue'
import { listaEventos, salvar } from '../store/eventos'

const lista = ref(dados)

const favoritar = (evento) => {
  evento.favorito = !evento.favorito
  salvar()
  localStorage.setItem('eventos', JSON.stringify(lista.value))
}
const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    lista.value = dados
    loading.value = false
  }, 1000)
})
</script>
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Eventos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div v-if="loading">
        <ion-skeleton-text animated style="width: 100%; height: 100px;"></ion-skeleton-text>
        <ion-skeleton-text animated style="width: 100%; height: 100px;"></ion-skeleton-text>
      </div>

    <EventCard
  v-for="evento in lista"
  :key="evento.id"
  :evento="evento"
  @abrir="(id) => $router.push(`/eventos/${id}`)"
  @favoritar="favoritar"
      />
    </ion-content>
  </ion-page>
</template>
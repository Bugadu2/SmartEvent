<script setup>
import { computed } from 'vue'
import { eventos } from '../data/eventos'
import { IonPage, IonContent } from '@ionic/vue'
import { listaEventos } from '../store/eventos'

const favoritos = computed(() =>
  listaEventos.value.filter(e => e.favorito)
)
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Favoritos</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-header>
  <ion-toolbar color="primary">
    <ion-title>Eventos</ion-title>
  </ion-toolbar>
</ion-header>

    <ion-content class="ion-padding">
      <div v-if="favoritos.length === 0" class="vazio">
        <h1>😢 Nenhum favorito</h1>
        <p>Adicione eventos para ver aqui</p>
      </div>

      <ion-card v-for="e in favoritos" :key="e.id">
        <ion-card-content>
          {{ e.nome }}
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<style scoped>
.vazio {
  text-align: center;
  margin-top: 50%;
  color: gray;
}
.vazio {
  height: 20vh; /* ocupa quase a tela toda */
  display: center;
  flex-direction: column;
  justify-content: center; /* vertical */
  align-items: center;     /* horizontal */
  text-align: center;
  color: gray;
}
</style>
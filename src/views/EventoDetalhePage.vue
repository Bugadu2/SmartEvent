<script setup>
import { useRoute } from 'vue-router'
import { eventos } from '../data/eventos'

import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton
} from '@ionic/vue'

const route = useRoute()

const evento = eventos.find(e => e.id == route.params.id)
</script>


<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>{{ evento.nome }}</ion-title>
      </ion-toolbar>
    </ion-header>
 
    <ion-content class="ion-padding">

      <div class="img-container">
  <img :src="evento.imagem" />
</div>
      <h2>{{ evento.nome }}</h2>

      <p><strong>📍 Local:</strong> {{ evento.local }}</p>

      <p>{{ evento.descricao }}</p>

      <ion-button expand="block" @click="$router.back()">
        Voltar
      </ion-button>
     
    </ion-content>
  </ion-page>
</template>
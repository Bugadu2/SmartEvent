<script setup>
import { ref, watch } from 'vue'
import { IonPage, IonContent } from '@ionic/vue'

const nome = ref('')

watch(nome, (novo) => {
  console.log('Nome mudou:', novo)
})
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Perfil</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-input v-model="nome" placeholder="Digite seu nome"></ion-input>

      <p>Olá, {{ nome || 'usuário' }} 👋</p>
    </ion-content>
  </ion-page>
</template>
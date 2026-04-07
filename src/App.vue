<template>
  <ion-app>
    <ion-tabs>

      <ion-router-outlet />

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <ion-icon :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="eventos" href="/eventos">
          <ion-icon :icon="calendar" />
          <ion-label>Eventos</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="favoritos" href="/favoritos">
          <ion-icon :icon="star" />
          <ion-label>Favoritos</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="perfil" href="/perfil">
          <ion-icon :icon="person" />
          <ion-label>Perfil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>

    </ion-tabs>
  </ion-app>
</template>

<script setup>
import {
  IonApp,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon
} from '@ionic/vue'

import { home, calendar, star, person } from 'ionicons/icons'

</script>
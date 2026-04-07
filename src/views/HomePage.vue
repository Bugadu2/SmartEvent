<script setup>
import { IonPage, IonContent, IonButton } from '@ionic/vue'

</script>

<template>
  <ion-page>
    <ion-content class="home">
      <div class="container">
        <h1>🎉 SmartEvent</h1>
        <p>Descubra eventos incríveis perto de você</p>

        <ion-button expand="block" @click="$router.push('/eventos')">
          Explorar Eventos
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.container {
  padding: 40px;
  background: rgba(255, 255, 255, 0.95);
  
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideIn 0.6s ease-out;
}


ion-button {
  margin-top: 80px;
  margin-bottom: 10px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

ion-button:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

h1 {
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  font-weight: 700;
}

p {
  color: #666;
  margin-bottom: 20px;
  font-size: 16px;
}
</style>

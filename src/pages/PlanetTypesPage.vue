<script setup lang="ts">
import { appData } from 'src/AppData';

defineOptions({
  name: 'PlanetTypesPage',
});

</script>

<template>
  <q-page padding class="card-item-list-page">
    <q-btn class="card-item" no-caps v-for="planetType in appData.sortdPlanetType()" :key="planetType.id"
      :to="{ name: 'planet_type', params: { id: planetType.id } }">
      <div class="card-item-content">
        <div :style="{
          width: 50 + 'px',
          height: 50 + 'px',
          backgroundColor: '#' + planetType.color,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maskImage: `url(${planetType.iconTexture})`,
          maskSize: 'cover',
        }"></div>
        <span>
          {{ planetType.name }}
        </span>
      </div>
    </q-btn>
  </q-page>
</template>

<template>
  <v-container bg fill-height grid-list-md text-xs-center>
    <v-layout row wrap align-center>
      <v-flex class="inner">
        <v-row align="center" justify="center">
          <v-btn class="ma-2" tile outlined color="black" @click="navigate">Navigate</v-btn>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {
  public navigate() {
    this.$router.push({ name: 'main' });
  }
}
</script>

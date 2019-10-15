<!-- template -->
<template>
    <v-container bg fill-height grid-list-md text-xs-center>
    <v-layout row wrap align-center>
      <v-flex class="inner">
        <v-row align="center" justify="center">
          <v-btn class="ma-2" tile outlined color="black" @click="decrement">-</v-btn>
          <h1>{{ counter }}</h1>
          <v-btn class="ma-2" tile outlined color="black" @click="increment">+</v-btn>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<!-- end template -->
<!-- script -->
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { State, Action, Getter } from 'vuex-class';
import { CounterState } from '../store/counter/types';
const namespace: string = 'counter';

@Component
export default class Main extends Vue {
  @Action('increment', { namespace }) increment: any;
  @Action('decrement', { namespace }) decrement: any;
  @Getter('counter', { namespace }) private counter!: number;
}
</script>
<!-- end script -->
<!-- style -->
<style scoped>
</style>
<!-- end style -->


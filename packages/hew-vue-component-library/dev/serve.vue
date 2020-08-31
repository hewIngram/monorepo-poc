<template>
  <div id="app">
    <Button>Whale hello there</Button>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    Button,
  }
});
</script>


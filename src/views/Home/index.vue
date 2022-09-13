<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor/>
    <Floor/>
    <Brand/>
  </div>
</template>

<script>
import ListContainer from '@/views/Home/ListContainer';
import Recommend from '@/views/Home/Recommend';
import Rank from '@/views/Home/Rank';
import Like from '@/views/Home/Like';
import Floor from '@/views/Home/Floor';
import Brand from '@/views/Home/Brand';

import {mapActions, mapState} from 'vuex'
export default {
  name: 'Home',
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  computed: {
    ...mapState('home', ['count'])
  },
  methods: {
    ...mapActions('home', ['add']),
    add1() {
      this.add()
    }
  },
  mounted() {
  }
}
</script>

<style>

</style>
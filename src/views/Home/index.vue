<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor v-for="floor of floorList" :key="floor.id" :list="floor"/>
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
    ...mapState('home', ['count', 'floorList'])
  },
  methods: {
    ...mapActions('home', ['add', 'getFloorList']),
    add1() {
      this.add()
    },
    change() {
      this.obj.c = 1
      console.log(this.obj, 'obj');
    }
  },
  watch: {
    floorList() {
        console.log(this.floorList);
    }
  },
  mounted() {
    this.getFloorList()
  }
}
</script>

<style>

</style>
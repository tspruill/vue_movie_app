<template>
    <div>
        <md-content class="md-accent md-elevation-5">
            <div class="displays" v-bind:key="movie.id" v-for="movie in listOfMovies">
                <movieItem v-bind:movies="movie"/>
            </div>
        </md-content>
    </div>
</template>
<script>
import movieItem from './movieItem'
export default {
   name: 'movieList',
   props:['listOfMovies'],
   components:{
       movieItem
   }
}
</script>

<style lang="scss" scoped>
    .displays{
        display: inline-block;
    }
    .md-content{
        margin: 0 5pt auto;
        padding: 10pt 15pt 0;
    }
</style>
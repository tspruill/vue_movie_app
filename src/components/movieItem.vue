<template>
    <div>
        <!--
        <md-card>
        <p> {{movies.title}}</p>
        </md-card>
         -->
            
        <md-card-media class="md-elevation-5" >
            <img v-bind:src=movieThumb>
        </md-card-media>
       
    </div>
</template>

<script>
export default {
    name: 'movieItem',
    props:['movies'],
    data(){
        return{
    
            movieThumb: 'http://image.tmdb.org/t/p/w500/'+ this.movies.poster_path
        }
    }
}
</script>


<style lang="scss" scoped>
    .md-card-media {
    width: 250px;
    height: 400px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
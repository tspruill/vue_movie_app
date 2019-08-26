<template>
  <div id="app">
    <md-content class="md-elevation-6 md-display-2 md-primary"> 
      Movie-App
    </md-content>
    <Input v-on:search="search"/>
    <movieList v-bind:listOfMovies="movies"/>
    </div>
</template>

<script>


import Input from './components/input'
import movieList from './components/movieList'
import axios from 'axios'
export default {
  name: 'app',
  components:{
    Input,
    movieList
  },
  data(){
    return {
      movies: []
    }
  },
  methods:{
    search(searchQuery){
      const {title, type} = searchQuery
      const url = 'https://api.themoviedb.org/3/search/'+ encodeURIComponent(type)+'?api_key=56b27ae00fbc8a2d765445f8e3faeff6&query='+encodeURIComponent(title)
      axios.get(url)
      .then(res => this.movies = res.data.results)
      .catch(err => console.log(err))
    }
  }
}
</script>

<style lang="scss">


@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("default", (
  primary: md-get-palette-color(purple, A700), // The primary color of your application
  accent: md-get-palette-color(red, A200) // The accent or secondary color
   
));

@import "~vue-material/dist/theme/all"; // Apply the theme

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
  .md-content{
    padding-left: 15pt;
  }
  

</style>

<template>
    <div class="input-layout">
        <md-content class="md-elevation-3">
            <form class="md-layout" @submit="search">
                <md-field>
                    <label>Search</label>
                    <md-input v-model="searchTitle"></md-input>
                </md-field>
                <md-button class="md-raised md-primary" id="submit" @click="search">Search</md-button>
            </form>
        </md-content>
        <div class="buttonGroup">
            <md-button class="md-raised md-accent" @click="searchMovie">Movie </md-button>
             <md-button class="md-raised md-accent" @click="searchTV">TV Show</md-button>
            </div>
    </div>
</template>
<script>
export default {
    name:'input',
    data(){
        return{
            searchTitle: '',
            searchType: 'movie'
        }
    },
    methods:{
        searchMovie(){
            this.searchType = 'movie';
        },
        searchTV(){
            this.searchType = 'tv';
        },
        search(e){
            e.preventDefault();
            const searchQuery = {
                title: this.searchTitle,
                type: this.searchType
            }
            this.$emit('search',searchQuery);
            this.searchTitle = ''
        }
    }
}
</script>


<style lang="scss" scoped>
.buttonGroup{
    margin: 0 auto;
    text-align: center;
}
.input-layout{
    margin: 25pt 5pt 0;
}
form{
    padding: 15pt;
}
#submit{
    margin: 0 auto;
    margin-bottom: 10pt;
}

</style>
<template>
 <v-card
    color="grey lighten-4"
    flat
    height="200px"
    tile
  >
    <v-toolbar dense>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-toolbar-title>LARAVUE</v-toolbar-title>
      <v-spacer></v-spacer>
        <router-link to="/home">
            <v-btn icon>
                <v-icon>mdi-home Home</v-icon>
            </v-btn>
        </router-link>
        <router-link to="/about">
            <v-btn icon>
                <v-icon>mdi-heart About</v-icon>
            </v-btn>
        </router-link>
        <router-link to="/">
            <v-btn icon>
                <v-icon>fas fa-circle-notch fa-spin Login</v-icon>
            </v-btn>
      </router-link>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
    <!-- <div>      
         |
       |
       
       sair o aplicativo
    </div> -->
</template>

<script>
    export default {
        name:"Header"
    }
</script>

<template>
  <v-container>
      <v-dailog max-width="600px">
        <v-card>
          <v-card-title>
            <h2>Add a New Movie</h2>
          </v-card-title>

          <v-card-text>
            <v-form class="px-3">
              <v-text-field label="Name" v-modal="name"></v-text-field>
              <v-file-input @change="onFileSelected" label="Poster Image" v-modal="posterImage"></v-file-input>
              <v-textarea label="Plot" v-modal="content"></v-textarea>
              <v-text-field label="Actors" v-modal="actors"></v-text-field>
              <v-text-field label="Awards" v-modal="awards"></v-text-field>
              <v-text-field label="Genre" v-modal="genre"></v-text-field>
            </v-form>
          </v-card-text>

        </v-card>
        <v-card-actions class="justify-center">
            <v-btn text slot="activator" class="success" @click="back">Back</v-btn>
            <v-btn text slot="activator" class="success" @click="Add">Add</v-btn>
        </v-card-actions>

      </v-dailog>
   </v-container>
</template>

<script>

export default {
  
  data () {
    return {
      name: '',
      posterImage: '',
      content: '',
      actors: '',
      awards: '',
      genre: ''
    }
  },
 
  methods: {
    Add () {
      this.$router.push('/')
    },
    back () {
      this.$router.push('/')
    },
    onFileSelected (event) {
      console.log(event)
    }
  }
}
</script>


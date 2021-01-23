<template>
  <li class="bg-gray-300 rounded-sm text-xs p-1 m-1 flex justify-between"
  v-for="(cities, i) in city">
    {{i + 1}} - {{cities}}
    <button class="text-gray-600 inline-flex items-center ml-8"
    v-on:click="deletecity(i)"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
       <path fill="currentcolor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
      </svg>
    </button>
  </li>
  <hr>
  <div class="flex flex-col">
        <h3 class="text-xs font-semibold ">
          Add location:
        </h3>
    <div class="flex items-center justify-center ">
      <input type="search" name="q" 
        class=" text-center text-xs border-2 border-gray-200 text-white bg-gray-100 rounded-sm focus:outline-none focus:bg-white focus:text-gray-900" 
        :placeholder="MyPlaceholder"
        autocomplete="off"
        v-on:input="inputcity"
        v-on:keypress="inputKeyPress"
        :value="value"
      >
    </div>
  </div>
</template>

<script>

export default {
  name: 'Add',
    data: () => ({
    MyPlaceholder: 'click Enter',
    city: [],
    value: ''
  }),
  methods: {
    inputcity(e) {
      this.value = e.target.value
    },
    inputKeyPress(e) {
      if (e.key === 'Enter' && this.city.length <= 3) {
        this.city.push(this.value)
        this.$store.dispatch('createWither', this.value)
        this.value = ''
      } 
       if (this.city.length > 3) {
        this.MyPlaceholder = 'limit reached'
        this.value = ''
      } 
    },
    deletecity(i) {
      this.city.splice(i, 1)
      localStorage.city = JSON.stringify(this.city)
    }
  },
    mounted() {
    if(localStorage.city){ 
      this.city = JSON.parse(localStorage.city)
      }
  },
  components: {
    
  }
}
</script>


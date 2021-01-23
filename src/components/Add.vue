<template>
<draggable 
  v-model="city"
  group="people" 
  @start="drag=true" 
  @end="drag=false" 
  item-key="id">

  <template #item="{element, index}" >

    <div class="flex justify-between w-full w-64 text-gray-600 text-xs items-center justify-center">
       <i class=" w-6 h-6  items-center flex  justify-center">
         <svg class="svg-icon" viewBox="0 0 20 20">
						<path fill="none" d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
								c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
								s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
								c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z">
            </path>
					</svg>
       </i>
      {{element}}
      <button class="text-gray-600 inline-flex items-center ml-8" v-on:click="deletecity(index)" >
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
          <path fill="currentcolor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
        </svg>
      </button>
    </div>

  </template>

</draggable>



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
import draggable from "vuedraggable"
export default {
  name: 'Add',
    data: () => ({
    MyPlaceholder: 'click Enter',
    city: [],
    value: ''
  }),
   components: {
      draggable
  },
  methods: {
    inputcity(e) {
      this.value = e.target.value
    },
    inputKeyPress(e) {
      if (e.key === 'Enter' && this.city.length <= 3) {
        this.city.push( this.value)
       this.$store.dispatch('createWither', this.value)
        this.value = ''
      } 
       if (this.city.length > 3) {
        this.MyPlaceholder = 'limit reached'
        this.value = ''
      } 
    },
    deletecity(index) {
      this.city.splice(index, 1)
      localStorage.city = JSON.stringify(this.city)
    },
  },
    mounted() {
    if(localStorage.city){ 
      this.city = JSON.parse(localStorage.city)
      }
  },
   watch: {
    city() {
      localStorage.city = JSON.stringify(this.city)
    }
   }
}

</script>

<style >
.svg-icon {
  width: 1em;
  height: 1em;
}

.svg-icon path,
.svg-icon polygon,
.svg-icon rect {
  fill: #414141;
}

.svg-icon circle {
  stroke: #2c2c2c;
  stroke-width: 1;
}
</style>
<template>
  <div>
    <div>
      <div class="flex justify-between w-64 w-full">
         <div class="w-auto text-sm m-0.5">London</div>
          <div class="w-auto object-right"> 
            <router-link to="/setting">
              <img src="https://svgsilh.com/svg/1630709-9e9e9e.svg" alt="setting" 
                  class="top-0 right-0 h-4 w-4 object-right m-1"/>
            </router-link>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Head',
  components: {
    
  }
}
</script>
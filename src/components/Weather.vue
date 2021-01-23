<template>
<div >
  <div>
    <div>
      <div class="flex justify-between w-64 w-full">
         <div class="w-auto text-sm m-0.5 font-semibold ">{{name || 'Add city'}}</div>
          <div class="w-auto object-right"> 
            <router-link to="/setting">
              <img src="https://svgsilh.com/svg/1630709-9e9e9e.svg" alt="setting" 
                  class="top-0 right-0 h-4 w-4 object-right m-1"/>
            </router-link>
          </div>
        </div>
    </div>
  </div>
  <div v-if="dataReady">
    <div class="flex flex-row items-center ">
    <img class="h-18 w-1/2 m-1 rounded-sm justify-center bg-white rounded-full" :src="iconUrl"/>
    <div class="flex items-center rounded-full justify-center bg-white m-1 rounded-sm text-center text-xl font-semibold p-3 h-14">
      {{Math.round(weather.main.temp - 273)}} C
    </div>
    </div>
       <div class="flex flex-row">
    <div class=" h-6 w-3/4 m-1 rounded-sm text-xs">
    <h6 class="font-semibold">Wind speed</h6>
      {{weather.wind.speed}} m/sec
    </div>
    <div class=" m-1 rounded-sm text-xs text-center text-xs">
     <h6 class="font-semibold"> Cloudiness</h6>
     {{weather.clouds.all}} %
    </div>
    </div>
        <div class="flex flex-row">
    <div class="flex flex-row h-4 w-40 m-1 rounded-sm text-xs justify-center">
      <h6 class="font-semibold w-14">Humidity</h6>
     {{weather.main.humidity}} %
    </div>
    </div>
       <div class=" m-1 rounded-sm text-xs text-center">
      {{now}}
    </div>
  </div>
  </div>
</template>


<script>import axios from "axios";


const APP_ID = 'e722367af15a26e45684fe3e2737e543'
const getUrl = (name) => `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${APP_ID}`

export default {
  name: "Weather",
  data: () => ({
    now: new Date()
      .toString()
      .split(" ")
      .filter((it, id) => id < 5)
      .join(" "),
    name: "",
    info: "",
    weather:null,
    dataReady: false,
    iconUrl: '10d'
  }),
  mounted() {
    if (localStorage.city) {
      const n = JSON.parse(localStorage.city);
      this.name = n[0];
      const _this = this;
      axios
      .get(
        getUrl(this.name)
      )
      .then(function({data: weather}) {
         _this.weather = weather
          _this.iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
         } 
      );
      this.dataReady = true
    } else {
      const set = '../router/index'
      this.$router.push('/setting')
    }
  },
  components: {},
};
//function({data: weather}) { _this.weather = weather}
</script>
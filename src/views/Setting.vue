<template>
<div>
<Sethead/>
<hr size="2px">
<Add/>

</div>
</template>


<script>
import Sethead from '../components/SetHead'
import Add from '../components/Add'


export default {
  name: 'Setting',
  components: {
    Add,
    Sethead
  }
}
</script>

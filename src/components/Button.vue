<template>
     <button @click="$emit('btn-click')" :style="{background:color}" class="btn">{{text}}</button>
  
</template>

<script>
export default {
    name: 'ButtonComponent',
    props:{
        text: String,
        color: String
    },
    // methods:{
    //     onClick(){
    //         this.$emit('btn-click')
    //     }
    // }
}
</script>
<template>
    <div>
        
        <h1>funds: {{funds | currency}}</h1>
    </div>
</template>

<script>
export default {
    computed: {

        funds(){
            return this.$store.getters.funds;
        }
    }
}
</script>

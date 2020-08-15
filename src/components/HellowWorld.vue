<template>
    <div>
        <h1 class="title">{{ msg }}</h1>
    </div>
</template>
<script>
export default {
    name:"HelloWorld",
    data(){
        return {
            msg:"Hello Vue"
        }
    }
}
</script>
<style scoped>
    .title {
        color:greenyellow;
        margin:40px 100px;
    }
</style>
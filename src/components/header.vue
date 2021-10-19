<template>
    <div>
        <h1>{{msg}}</h1>
    </div>
</template>
<script>

// 1、export 表示导出,在自定义组件里面使用export default导出  
export default {
    // name 表示设置别名，可以不设置，建议和组件的名称一致
    name:"First",
    data(){
        return{
            msg:"First Vue"
        }
    }
}
</script>

<style scoped>

</style>
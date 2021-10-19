<template>
    <div class="login_form" id="login_form">
        <div class="logGet">
            <dev>
                <!-- 头部提示 -->
                <p class="p1">Login Page</p>
            </dev>
            <div class="lgD">
            <!-- 输入框 -->
            <input type="text" placeholder="Username">
            </div>        
            <div class="lgD">
            <input type="password" placeholder="Password">
            </div>
            <div class="logC">
            <a><button @click="login">Submit</button></a>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data () {
        return
        Username: ''
        Password: ''
        

    }
    
}
</script>

<style>
h1{
    background-color: rgb(0, 0, 0);
    text-decoration-color: rgb(255, 255, 255);
}
</style>



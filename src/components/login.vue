<template>
    <div class="login_form" id="login_form">
        <div class="logGet">
            <dev>
                <!-- 头部提示 -->
                <p class="p1">Login Page</p>
            </dev>
            <div class="lgD">
                <!-- 用户名输入框 -->
                <input type="text" placeholder="Username">
            </div>        
            <div class="lgD">
                <!-- 密码输入框 -->
                <input type="password" placeholder="Password">
            </div>
            <div class="logC">
                <!-- 提交按钮 -->
                <a><button @click="login">Submit</button></a>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        login() {
            // 假设登录成功
            this.$router.replace('/Home');
        }
    }
}
</script>

<style>
    body {
      /* background-image: url(); */
        background-color: rgb(78, 80, 82);
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center center;
    }

    * {
        margin: 0;
        padding: 0;
    }

    .logC a button {
        widows: 100%;
        height: 45px;
        width: 100px;
        background-color: none;
        border: none;
        color: white;
        font-size: 18px;
        position: relative;
        
    }

    

    .logGet .lgD img {
        position: absolute;
        top: 12px;
        left: 8px;
    }

    .logGet .lgD input {
        width: 220px;
        height: 42px;
        position: relative;
        text-indent: 2.5rem;
    }
    input::-webkit-input-placeholder {
        /* placeholder颜色  */
         color: #aab2bd;
        /* placeholder字体大小  */
         font-size: 12px;
         /* placeholder位置  */
         text-align: left;
    }
    

</style>



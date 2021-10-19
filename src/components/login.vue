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
        background-image: url(../assets/logo.png);
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center center;
    }

    * {
        margin: 0;
        padding: 0;
    }

    #wrap {
        height: 120px;
        width: 100;
        background-position: center center;
        position: relative;
    }

    #head {
        height: 120px;
        width: 100;
        background-color: #666666;
        text-align: center;
        position: relative;
    }

    .logC a button {
        widows: 100%;
        height: 45px;
        background-color: aliceblue;
        border: none;
        color: white;
        font-size: 18px;
    }

    #wrap .logGet .logD.logDtip {
        width: 86%;
        border-bottom: 1px solid #ee7700;
        margin-bottom: 60px;
        margin-top: 0px;
        margin-right: auto;
        margin-left: auto;
    }

    .logGet .lgD img {
        position: absolute;
        top: 12px;
        left: 8px;
    }

    .logGet .lgD input {
        width: 100%;
        height: 42px;
        text-indent: 2.5rem;
    }

    #wrap .logGet .lgD {
        width: 86%;
        position: relative;
        margin-bottom: 30px;
        margin-top: 30px;
        margin-right: auto;
        margin-left: auto;
    }

    #wrap .logGet .logC {
        width: 86%;
        margin-top: 0px;
        margin-right: auto;
        margin-bottom: 0px;
        margin-left: auto;
    }


    .title {
        font-family: "宋体";
        color: #FFFFFF;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /* 使用css3的transform来实现 */
        font-size: 36px;
        height: 40px;
        width: 30%;
    }

    .copyright {
        font-family: "宋体";
        color: #FFFFFF;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /* 使用css3的transform来实现 */
        height: 60px;
        width: 40%;
        text-align: center;
    }
        

</style>



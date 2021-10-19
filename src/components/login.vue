<template>
  <div class="login_form" id="login_form">
    <div class="logGet">
      <div>
        <!-- 头部提示 -->
        <p class="p1">Login Page</p>
      </div>

      <div class="lgDu">
        <!-- 用户名输入框 -->
        <input type="text" placeholder="Username" />
      </div>
      <div class="lgDp">
        <!-- 密码输入框 -->
        <input type="password" placeholder="Password" />
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
      this.$router.replace("/Home");
    },
  },
};
</script>

<style>
body {
  /* background-image: url(); */
  background-color: black;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
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

.logGet {
  width: 250px;
  height: 300px;
  position: relative;
  left: 50%;
  background-color: #666666;
}

.logGet .lgDu input {
  width: 220px;
  height: 42px;
  position: relative;
  bottom: 50;
  top: 50;
  font-size: 25px;
  text-indent: 2.5rem;
}

/* .lgDw {
        height: 42px;
        width: 220px;
        top: 0%;
        left: 50%;

    } */

.logGet .lgDp img {
  position: absolute;
  top: 12px;
  left: 8px;
}

.logGet .lgDp input {
  width: 220px;
  height: 42px;
  position: relative;
  bottom: 50;
  top: 50;
  font-size: 25px;
  text-indent: 2.5rem;
}

input::-webkit-input-placeholder {
  /* placeholder颜色  */
  color: #aab2bd;
  /* placeholder字体大小  */
  font-size: 23px;
  /* placeholder位置  */
  text-align: left;
}
</style>



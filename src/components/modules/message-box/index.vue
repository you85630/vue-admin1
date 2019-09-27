<template>
  <div v-show="visible" class="toast-box" :class="{'active':visible}">
    <div class="notice-main" v-if="visible">
      <div class="main-icon">
        <span class="iconfont success" v-if="type=='success'">&#xe613;</span>
        <span class="iconfont error" v-if="type=='error'">&#xe612;</span>
      </div>
      <div class="main-text">{{message}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      visible: false,
      message: '',
      type: ''
    }
  }
}
</script>
<style lang="scss" scoped>
@font-face {
  font-family: 'iconfont';

  src: url('./iconfont/iconfont.eot');
  src: url('./iconfont/iconfont.eot?#iefix') format('embedded-opentype'),
  url('./iconfont/iconfont.woff2') format('woff2'),
  url('./iconfont/iconfont.woff') format('woff'),
  url('./iconfont/iconfont.ttf') format('truetype'),
  url('./iconfont/iconfont.svg#iconfont') format('svg');
}
.iconfont {
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.toast-box {
  position: fixed;
  z-index: 1010;
  top: 20px;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: all 2s 2s ease-in-out;
  text-align: center;
  pointer-events: none;
  .notice-main {
    display: inline-block;
    padding: 20px 30px;
    pointer-events: all;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
  }
  .main-text ,.main-icon {
    display: inline-block;
  }
  .main-icon {
    margin-right: 10px;
    .success {
      color: #19be6b;
    }
    .error {
      color: #ed4014;
    }
  }
  .main-text {
    font-size: 16px;
    color: #515a6e;
  }
}
.active {
  opacity: 1;
  top: 30%;
}
</style>

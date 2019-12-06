<template>
  <div class="about">
    <van-nav-bar
            title="关于"
            left-text="返回"
            right-text="新增"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
    />
    <div>
      <h1>This is an about page</h1>
    </div>

  </div>
</template>

<script>
  import {Toast} from "vant";

  export default {
    name: 'about',
    methods: {
      onClickLeft() {
        this.$router.back();
      },
      onClickRight() {
        Toast('新增');
      }
    }
  }
</script>
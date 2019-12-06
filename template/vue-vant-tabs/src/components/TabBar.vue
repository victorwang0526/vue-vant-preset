<template>
    <van-tabbar route v-if="showTabs">
        <van-tabbar-item v-for="tab in tabs" :key="tab.title"
                         replace
                         :to="tab.path"
                         :icon="tab.icon"
        >
            {{tab.title}}
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>

export default  {
    name: 'tabBar',
    components: {
    },
    data() {
      return {
          tabs: [
              {title: '首页', path: '/', icon: 'home-o'},
              {title: '设置', path: '/setting', icon: 'setting-o'},
          ]
      }
    },
    computed: {
        showTabs() {
            let show = false;
            for(let tab of this.tabs) {
                if(tab.path === this.$route.path) {
                    show = true;
                    break;
                }
            }
            return show;
        }
    }
}
</script>
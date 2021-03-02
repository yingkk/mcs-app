<template>
  <div class="attach-content">
    <ul id="img" v-show="false">
      <li v-for="(src, index) in imgs" :key="index"><img :src="src" alt="Picture 1"></li>
    </ul>
  </div>
</template>

<script>
import "viewerjs/dist/viewer.css";
import Viewer from "viewerjs";

export default {
  mounted() {
    this.viewer = new Viewer(document.getElementById("img"), {
      fullscreen: false,
      toolbar: {
        zoomIn: 1, // 0 隐藏， 1 显示
        zoomOut: 1,
        oneToOne: 0,
        reset: 0,
        prev: 0,
        play: {
          show: 0,
          size: 'large',
        },
        next: 0,
        rotateLeft: 0,
        rotateRight: 0,
        flipHorizontal: 0,
        flipVertical: 0,
      },
    });
  },
  methods: {
    handleClick() {
      this.show();
    },
    show() {
      this.viewer.show();
    },
    hide() {
      this.viewer.hide();
    }
  },
  data() {
    return {
      viewer: null
    };
  },
  props: {
    imgs: { //动态将需要显示的图片传入预览组件
      type: Array,
      default: () => ([
        "https://tse1-mm.cn.bing.net/th?id=OIP.fLI-fIeiAEMZwLhz6KkcMQAAAA&w=201&h=200&c=7&o=5&pid=1.7",
      ]),
    }
  }
};
</script>
<style lang="scss">
</style>
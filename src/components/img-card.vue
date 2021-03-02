<template>
  <div class="img-card">
    <ul id="img" v-show="false">
      <li v-for="(src, index) in imgs" :key="index">
        <img :src="src" alt="Picture 1" />
      </li>
    </ul>
  </div>
</template>

<script>
import "viewerjs/dist/viewer.css";
import Viewer from "viewerjs";

export default {
  mounted() {
    this.viewer = new Viewer(document.getElementById("img"), {
      title: true,
      navbar: false,
      toolbar: {
        zoomIn: true,
        zoomOut: true,
        reset: true,
        rotateRight: true,
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
    },
  },
  data() {
    return {
      viewer: null,
    };
  },
  props: {
    imgs: {
      //动态将需要显示的图片传入预览组件
      type: Array,
      default: () => [
        "https://tse1-mm.cn.bing.net/th?id=OIP.fLI-fIeiAEMZwLhz6KkcMQAAAA&w=201&h=200&c=7&o=5&pid=1.7",
      ],
    },
  },
};
</script>

<style lang="scss" scoped>
.img-card {
  background-color: #000;
}
  
</style>
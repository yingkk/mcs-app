<template>
  <div class="attach-content">
    <img id="img" :src="imgSrc" />
  </div>
</template>

<script>
import "viewerjs/dist/viewer.css";
import Viewer from "viewerjs";

export default {
  mounted() {
    // const viewer = new Viewer(document.getElementById("img"), {
    //   inline: true,
    //   viewed() {
    //     viewer.zoomTo(1);
    //   },
    // });

    const viewer = new Viewer(document.getElementById("img"));
  },
  data() {
    return {
      imgSrc:
        "https://tse1-mm.cn.bing.net/th?id=OIP.fLI-fIeiAEMZwLhz6KkcMQAAAA&w=201&h=200&c=7&o=5&pid=1.7",
    };
  },
};
</script>
<style lang="scss">
.attach-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>
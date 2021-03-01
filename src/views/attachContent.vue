<template>
  <div class="attach-content">
    <viewer :images="descImgs" class="descimgBox">
      <img v-for="(decImg, index) in descImgs" :key="index" :src="decImg" />
    </viewer>
  </div>
</template>

<script>
import "viewerjs/dist/viewer.css";
import Viewer from "viewerjs";

export default {
  components: {
    Viewer
  },
  data() {
    return {
      descImgs: [
        "https://tse1-mm.cn.bing.net/th?id=OIP.fLI-fIeiAEMZwLhz6KkcMQAAAA&w=201&h=200&c=7&o=5&pid=1.7",
        "https://tse1-mm.cn.bing.net/th?id=OIP.fLI-fIeiAEMZwLhz6KkcMQAAAA&w=201&h=200&c=7&o=5&pid=1.7",
        "https://tse1-mm.cn.bing.net/th?id=OIP.fLI-fIeiAEMZwLhz6KkcMQAAAA&w=201&h=200&c=7&o=5&pid=1.7",
        "https://tse1-mm.cn.bing.net/th?id=OIP.fLI-fIeiAEMZwLhz6KkcMQAAAA&w=201&h=200&c=7&o=5&pid=1.7",
        "https://tse1-mm.cn.bing.net/th?id=OIP.fLI-fIeiAEMZwLhz6KkcMQAAAA&w=201&h=200&c=7&o=5&pid=1.7",
      ],
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
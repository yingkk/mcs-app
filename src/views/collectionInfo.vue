<template>
  <div class="attach-detail">
    <div class="attach-detail-inner">
      <span class="top-title">景德镇窑斗采莲池鸳鸯纹盘1</span>
      <div class="attach-detail-main">
        <div class="attach-baseinfo">
          <span class="attach-baseinfo-item">总登号：</span>
          <span class="attach-baseinfo-item">分类号：</span>
          <span class="attach-baseinfo-item">原号：</span>
          <span class="attach-baseinfo-item">名称：</span>
          <span class="attach-baseinfo-item">件数：</span>
          <span class="attach-baseinfo-item">实际件数：</span>
          <span class="attach-baseinfo-item">时代：</span>
          <span class="attach-baseinfo-item">尺寸：</span>
          <span class="attach-baseinfo-item">重量：</span>
          <span class="attach-baseinfo-item">金额：</span>
          <span class="attach-baseinfo-item">现状：</span>
          <span class="attach-baseinfo-item">来源：</span>
          <span class="attach-baseinfo-item">备注：</span>
        </div>
        <div class="attach-otherinfo">
          <span class="baseinfo-item-des reset-pd">
            本藏品的详细信息，请浏览鉴定报告和附件列表：
          </span>
          <div class="main">
            <div
              :class="['item', selectedId === item.id ? 'active' : '']"
              v-for="(item, index) in datas"
              :key="index"
              @click="handleClick(item)"
            >
              <div class="item-icon">
                <div class="item-icon-inner"></div>
              </div>
              <div class="item-content">
                <div class="item-content-inner">
                  <div class="item-content-left">
                    <span class="item-content-title reset-width">{{
                      item.title
                    }}</span>
                    <span class="item-content-des reset-width">2021/02/24</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <image-card :imgs="selected.imgs" ref="imageCard"></image-card>
  </div>
</template>

<script>
import imageCard from "@/components/attachContent"

export default {
  components: {
    imageCard
  },
  data() {
    return {
      selected: {},
      selectedId: "",
      datas: [
        {
          id: 1,
          icon: "1",
          title: "正面-景德镇窑斗采莲池鸳鸯纹盘1",
          imgs: [
            "https://tse1-mm.cn.bing.net/th?id=OIP.fLI-fIeiAEMZwLhz6KkcMQAAAA&w=201&h=200&c=7&o=5&pid=1.7"
          ],
        },
        {
          id: 2,
          icon: "2",
          title: "背面-景德镇窑斗采莲池鸳鸯纹盘2",
          imgs: [
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2054532727,2657034360&fm=26&gp=0.jpg"
          ],
        },
        {
          id: 3,
          icon: "3",
          title: "景德镇窑斗采莲池鸳鸯纹盘3",
          imgs: [
            "https://tse1-mm.cn.bing.net/th?id=OIP.fLI-fIeiAEMZwLhz6KkcMQAAAA&w=201&h=200&c=7&o=5&pid=1.7"
          ],
        },
        {
          id: 4,
          icon: "4",
          title: "鉴定报告-景德镇窑斗采莲池鸳鸯纹盘4",
          imgs: [
            "https://tse1-mm.cn.bing.net/th?id=OIP.fLI-fIeiAEMZwLhz6KkcMQAAAA&w=201&h=200&c=7&o=5&pid=1.7"
          ],
        },
        {
          id: 5,
          icon: "5",
          title: "景德镇窑斗采莲池鸳鸯纹盘5",
          imgs: [
            "https://tse1-mm.cn.bing.net/th?id=OIP.fLI-fIeiAEMZwLhz6KkcMQAAAA&w=201&h=200&c=7&o=5&pid=1.7"
          ],
        },
        {
          id: 6,
          icon: "6",
          title: "景德镇窑斗采莲池鸳鸯纹盘6",
          imgs: [
            "https://tse1-mm.cn.bing.net/th?id=OIP.fLI-fIeiAEMZwLhz6KkcMQAAAA&w=201&h=200&c=7&o=5&pid=1.7"
          ],
        },
        {
          id: 7,
          icon: "7",
          title: "景德镇窑斗采莲池鸳鸯纹盘7",
          imgs: [
            "https://tse1-mm.cn.bing.net/th?id=OIP.fLI-fIeiAEMZwLhz6KkcMQAAAA&w=201&h=200&c=7&o=5&pid=1.7"
          ],
        },
      ],
    };
  },
  methods: {
    handleClick(item) {
      this.selectedId = item.id;
      this.selected = item;
      this.$refs.imageCard.show();
    },
  },
};
</script>

<style lang="scss">
.attach-detail {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #fff;
  z-index: 2;
  .attach-detail-inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .top-title {
      display: block;
      width: 100%;
      height: 60px;
      line-height: 60px;
      text-align: center;
      box-sizing: border-box;
      border-bottom: 1px solid #d3d2d2;
      flex: none;
    }
    .attach-detail-main {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      .attach-baseinfo {
        width: 100%;
        padding: 24px;
        box-sizing: border-box;
        .attach-baseinfo-item {
          display: block;
          width: 100%;
          height: 32px;
          line-height: 32px;
          padding-left: 16px;
          box-sizing: border-box;
          color: #a8a8a8;
          background-color: #f8f8f8;
          margin-top: 16px;
        }
        .attach-baseinfo-item:first-child {
          margin-top: 0;
        }
      }
      .attach-otherinfo {
        width: 100%;
      }
    }
  }
}
</style>
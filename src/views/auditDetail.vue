<template>
  <div class="audit-detail">
    <div class="audit-detail-inner">
      <div class="detail-inner-top">
        <div class="baseinfo">
          <div class="baseinfo-item">
            <span class="baseinfo-item-des"
              >今将附件中的文物12件（实际件数12件），作为正式藏品申请入藏。</span
            >
            <span class="baseinfo-item-text">批次20210225</span>
          </div>
          <div class="baseinfo-item">
            <span class="baseinfo-item-des">考古、征集部门负责人</span>
            <span class="baseinfo-item-text">考古部-吴雄，整机部-王五</span>
          </div>
          <div class="baseinfo-item">
            <span class="baseinfo-item-des">征集人</span>
            <span class="baseinfo-item-text">考古部-李四</span>
          </div>
          <div class="baseinfo-item">
            <span class="baseinfo-item-des">保管部门负责人</span>
            <span class="baseinfo-item-text">张三</span>
          </div>
          <div class="baseinfo-item">
            <span class="baseinfo-item-des">接收人</span>
            <span class="baseinfo-item-text">张三</span>
          </div>
          <div class="baseinfo-item">
            <span class="baseinfo-item-des">接收日期</span>
            <span class="baseinfo-item-text">2021年02月03</span>
          </div>
        </div>
        <hr class="divide-line" />
        <div class="otherinfo">
          <span class="baseinfo-item-des reset-pd"
            >本入藏申请的详细藏品及附件信息，请浏览藏品和附件列表。</span
          >
          <div class="main">
            <div
              :class="['item', selectedId === item.id ? 'active' : '']"
              v-for="(item, index) in datas"
              :key="index"
              @click="handleClick(item.id)"
            >
              <div class="item-icon">
                <div class="item-icon-inner"></div>
              </div>
              <div class="item-content">
                <div class="item-content-inner">
                  <div class="item-content-left">
                    <span class="item-content-title">{{ item.title }}</span>
                    <span class="item-content-des">2021/02/24</span>
                  </div>
                  <div class="item-content-right">
                    <span class="audit-op">
                      <i class="fa fa-database"></i>
                    </span>
                    <span class="audit-op">
                      <i class="fa fa-paperclip"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="divide-line" />
        <div class="audit-opinion">
          <span class="baseinfo-item-des">总体审核意见</span>
          <div class="opinion-text"><textarea name="opinion"></textarea></div>
        </div>
      </div>
      <div class="detail-inner-bottom">
        <div class="btns">
          <div class="btns-left">
            <mt-button type="default" size="small">不通过</mt-button>
          </div>
          <div class="btns-right">
            <mt-button type="default" size="small">取消</mt-button>
            <mt-button type="primary" size="small" style="margin-left: 16px"
              >通过</mt-button
            >
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedId: "",
      datas: [
        {
          id: 1,
          icon: "1",
          title: "景德镇窑斗采莲池鸳鸯纹盘1",
        },
        {
          id: 2,
          icon: "2",
          title: "景德镇窑斗采莲池鸳鸯纹盘2",
        },
        {
          id: 3,
          icon: "3",
          title: "景德镇窑斗采莲池鸳鸯纹盘3",
        },
        {
          id: 4,
          icon: "4",
          title: "景德镇窑斗采莲池鸳鸯纹盘4",
        },
        {
          id: 5,
          icon: "5",
          title: "景德镇窑斗采莲池鸳鸯纹盘5",
        },
        {
          id: 6,
          icon: "6",
          title: "景德镇窑斗采莲池鸳鸯纹盘6",
        },
        {
          id: 7,
          icon: "7",
          title: "景德镇窑斗采莲池鸳鸯纹盘7",
        },
        {
          id: 8,
          icon: "8",
          title: "景德镇窑斗采莲池鸳鸯纹盘8",
        },
        {
          id: 9,
          icon: "9",
          title: "景德镇窑斗采莲池鸳鸯纹盘9",
        },
        {
          id: 10,
          icon: "10",
          title: "景德镇窑斗采莲池鸳鸯纹盘10",
        },
      ],
    };
  },
  methods: {
    handleClick(id) {
      this.selectedId = id;
      console.log(this.selectedId);
      this.$router.push({ name: "collectionInfo", query: { id: id } });
    },
  },
};
</script>


<style lang="scss" scoped>
.audit-detail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #fff;
  .audit-detail-inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .detail-inner-top {
      height: 100%;
      overflow-y: auto;
      padding-bottom: 0;
      .baseinfo {
        display: flex;
        flex-direction: column;
        padding: 16px 16px 0 16px;
        .baseinfo-item {
          display: flex;
          flex-direction: column;
          margin-top: 16px;
          flex: none;
          .baseinfo-item-text {
            display: block;
            width: 100%;
            font-size: 16px;
            height: 30px;
            line-height: 30px;
            padding-left: 8px;
            margin-top: 8px;
            color: #a8a8a8;
            background-color: #f8f8f8;
            box-sizing: border-box;
          }
        }
        .baseinfo-item:first-child {
          margin-top: 0;
        }
      }
    
      .otherinfo {
        width: 100%;
        display: flex;
        flex-direction: column;
      }

      .audit-opinion {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 16px;
        box-sizing: border-box;

        .opinion-text {
          width: 100%;
          height: 100%;
          margin-top: 8px;
          textarea {
            width: 100%;
            height: 60px;
            border: 1px solid #d3d2d2;
            box-sizing: border-box;
            outline: none;
          }
        }
      }
    }
    .detail-inner-bottom {
      padding: 16px;
      height: 34px;
      flex: none;
      z-index: 1;
      .btns {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
}
.mint-button--small {
  padding: 0 20px;
}


</style>
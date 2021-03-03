<template>
  <div class="audit-history">
    <div class="top">
      <search @searchText="handleTextChange"></search>
    </div>

    <div class="loadmore">
      <mt-loadmore
        :top-method="loadTop"
        ref="loadmore"
        :bottom-method="loadMore"
        :auto-fill="true"
        :bottom-all-loaded="allLoaded"
      >
        <div class="main">
          <div class="item" v-for="(item, index) in datas" :key="index">
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
                  <span v-if="item.status === '1'" class="audit-status pass"
                    >已通过</span
                  >
                  <span v-if="item.status === '0'" class="audit-status unpass"
                    >不通过</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
import search from "@/components/search.vue";
export default {
  data() {
    return {
      allLoaded: false,
      selectedId: "",
      searchText: "",
      datas: [
        {
          id: 1,
          icon: "1",
          title: "入藏申请1",
          status: "1",
        },
        {
          id: 2,
          icon: "2",
          title: "入藏申请2",
          status: "1",
        },
        {
          id: 3,
          icon: "3",
          title: "入藏申请3",
          status: "1",
        },
        {
          id: 4,
          icon: "4",
          title: "入藏申请4",
          status: "1",
        },
        {
          id: 5,
          icon: "5",
          title: "入藏申请5",
          status: "1",
        },
        {
          id: 6,
          icon: "6",
          title: "入藏申请6",
          status: "1",
        },
        {
          id: 7,
          icon: "7",
          title: "入藏申请7",
          status: "1",
        },
        {
          id: 8,
          icon: "8",
          title: "入藏申请8",
          status: "1",
        },
        {
          id: 9,
          icon: "9",
          title: "入藏申请9",
          status: "1",
        },
        {
          id: 10,
          icon: "10",
          title: "入藏申请10",
          status: "1",
        },
      ],
    };
  },
  methods: {
    handleBarClick() {
      this.isShowDrawer = !this.isShowDrawer;
    },
    handleTextChange(data) {
      console.log(data);
    },
    loadTop() {
      // TODO
      setTimeout(() => {
        this.$refs.loadmore.onTopLoaded();
      }, 2000);
    },
    loadMore() {
      this.allLoaded = true;
      setTimeout(() => {
        let last = this.datas[this.datas.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.datas.push({
            id: last.id + i,
            icon: last.id + i,
            title: "入藏申请" + (last.id + i),
            status: "0",
          });
        }
        this.allLoaded = false; //this.allLoaded = true; 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded();
      }, 2500);
    },
    handleClick(id) {
      this.selectedId = id;
      this.$router.push({ name: "auditDetail", query: { id: id } });
    },
  },
  components: {
    search,
  },
};
</script>

<style lang="scss" scoped>
.audit-history {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
</style>
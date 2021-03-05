<template>
  <div class="audit">
    <div class="top">
      <search @searchText="handleTextChange"></search>
      <div class="audit-history" @click="handleAuditHistory">
        <div class="audit-history-icon">
          <i class="fa fa-info-circle"></i>
        </div>
      </div>
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
      </mt-loadmore>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import search from "@/components/search.vue";
export default {
  data() {
    return {
      code: '',
      allLoaded: false,
      selectedId: "",
      datas: [
        {
          id: 1,
          icon: "1",
          title: "入藏申请1",
        },
        {
          id: 2,
          icon: "2",
          title: "入藏申请2",
        },
        {
          id: 3,
          icon: "3",
          title: "入藏申请3",
        },
        {
          id: 4,
          icon: "4",
          title: "入藏申请4",
        },
        {
          id: 5,
          icon: "5",
          title: "入藏申请5",
        },
        {
          id: 6,
          icon: "6",
          title: "入藏申请6",
        },
        {
          id: 7,
          icon: "7",
          title: "入藏申请7",
        },
        {
          id: 8,
          icon: "8",
          title: "入藏申请8",
        },
        {
          id: 9,
          icon: "9",
          title: "入藏申请9",
        },
        {
          id: 10,
          icon: "10",
          title: "入藏申请10",
        },
      ],
    };
  },
  created(){
    this.code = this.$route.query.code;
  },
  methods: {
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
    handleAuditHistory() {
      this.$router.push({ name: "auditHistory" });
    },
    handleCollect(id) {
      console.log(id);
    },
    handleAttach(id) {
      console.log(id);
    },
  },
  components: {
    search,
  },
};
</script>

<style lang="scss" scoped>
.audit {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
</style>
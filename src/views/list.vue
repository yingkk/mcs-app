<template>
  <div class="list">
    <div class="top">
      <div class="list-category" @click="handleShowCategory">
        <div class="list-category-icon">
          <i class="fa fa-bars"></i>
        </div>
      </div>
      <search @searchText="handleTextChange"></search>
    </div>

    <mt-popup
      v-if="isShowCategory"
      v-model="isShowCategory"
      popup-transition="popup-fade"
      position="left"
    >
      <div
        class="main"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
      >
        <div
          :class="['item', activeCategory.id === item.id ? 'active' : '']"
          v-for="(item, index) in categories"
          :key="index"
          @click="handleClickCategoryItem(item)"
        >
          <div class="item-icon">
            <div class="item-icon-inner"></div>
          </div>
          <div class="item-content">
            <div class="item-content-inner">
              <div class="item-content-left">
                <span class="item-content-title">{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </mt-popup>

    <div class="container">
      <mt-loadmore :top-method="loadTop" ref="loadmore">
        <div class="cur-category">{{ activeCategory.name }}</div>
        <div
          class="main"
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10"
        >
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
              </div>
            </div>
          </div>
          <div class="loading" v-show="loading">
            <mt-spinner type="fading-circle" color="#1890ff"></mt-spinner>
            <span class="loading-text"> 加载中...</span>
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
      loading: false,
      isShowCategory: false,
      selectedId: "",
      activeCategory: {},
      searchText: "",
      datas: [
        {
          id: 1,
          icon: "1",
          title: "青釉布纹双系壶1",
        },
        {
          id: 2,
          icon: "2",
          title: "青釉布纹双系壶2",
        },
        {
          id: 3,
          icon: "3",
          title: "青釉布纹双系壶3",
        },
        {
          id: 4,
          icon: "4",
          title: "青釉布纹双系壶4",
        },
        {
          id: 5,
          icon: "5",
          title: "青釉布纹双系壶5",
        },
        {
          id: 6,
          icon: "6",
          title: "青釉布纹双系壶6",
        },
        {
          id: 7,
          icon: "7",
          title: "青釉布纹双系壶7",
        },
        {
          id: 8,
          icon: "8",
          title: "青釉布纹双系壶8",
        },
        {
          id: 9,
          icon: "9",
          title: "青釉布纹双系壶9",
        },
        {
          id: 10,
          icon: "10",
          title: "青釉布纹双系壶10",
        },
      ],
      categories: [
        {
          id: "001",
          name: "玉石器、宝石",
        },
        {
          id: "002",
          name: "陶器",
        },
        {
          id: "003",
          name: "瓷器",
        },
        {
          id: "004",
          name: "铜器",
        },
        {
          id: "005",
          name: "金银器",
        },
        {
          id: "006",
          name: "铁器、其他金属器",
        },
        {
          id: "007",
          name: "漆器",
        },
        {
          id: "008",
          name: "雕塑、造像",
        },
        {
          id: "009",
          name: "石器、石刻、砖瓦",
        },
        {
          id: "010",
          name: "test",
        },
        {
          id: "011",
          name: "test1",
        },
      ],
    };
  },
  created() {
    this.activeCategory = this.categories[0];
  },
  methods: {
    loadTop() {
      // TODO
      setTimeout(() => {
        this.$refs.loadmore.onTopLoaded();
      }, 2000);
    },
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.datas[this.datas.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.datas.push({
            id: last.id + i,
            icon: last.id + i,
            title: "青釉布纹双系壶" + (last.id + i),
          });
        }
        this.loading = false;
      }, 2500);
    },
    handleClick(id) {
      this.selectedId = id;
      this.$router.push({ name: "collectionInfo", query: { id: id } });
    },
    handleClickCategoryItem(item) {
      this.activeCategory = item;
      this.isShowCategory = false;
      this.$router.push({ name: "list", query: { id: item.id } });
      //todo query data by categoryId
      this.datas = [
        {
          id: 1,
          icon: "1",
          title: "青釉1",
        },
        {
          id: 2,
          icon: "2",
          title: "青釉2",
        },
        {
          id: 3,
          icon: "3",
          title: "青釉3",
        },
        {
          id: 4,
          icon: "4",
          title: "青釉4",
        },
        {
          id: 5,
          icon: "5",
          title: "青釉5",
        },
        {
          id: 6,
          icon: "6",
          title: "青釉6",
        },
        {
          id: 7,
          icon: "7",
          title: "青釉7",
        },
        {
          id: 8,
          icon: "8",
          title: "青釉8",
        },
        {
          id: 9,
          icon: "9",
          title: "青釉9",
        },
        {
          id: 10,
          icon: "10",
          title: "青釉10",
        },
      ];
    },
    handleShowCategory() {
      this.isShowCategory = !this.isShowCategory;
    },
    handleTextChange(data) {
      console.log(data);
    },
  },
  components: {
    search,
  },
};
</script>

<style lang="scss">
.list {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    touch-action: none;
    .mint-loadmore-content {
      height: 100%;
    }
    .cur-category {
      width: 100%;
      height: 32px;
      line-height: 32px;
      padding: 0 16px;
      box-sizing: border-box;
      font-size: 18px;
      font-weight: 600;
      color: rgb(38, 149, 201);
      flex: none;
    }
  }
}
</style>

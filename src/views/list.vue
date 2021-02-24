<template>
  <div class="list">
    <div class="list-query">
      <mt-header title="固定在顶部">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <div
      class="list-fill"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <div
        class="list-item"
        v-for="(item, index) in datas"
        :key="index"
        @click="handleClick(item.id)"
      >
        <div class="list-item-icon">
          <div class="list-item-icon-inner"></div>
        </div>
        <div class="list-item-text">{{ item.name }}</div>
      </div>
      <div class="loading" v-show="loading"><mt-spinner type="snake" color="#26a2ff"></mt-spinner></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      datas: [
        {
          id: 1,
          icon: "1",
          name: "1"
        },
        {
          id: 2,
          icon: "2",
          name: "2"
        },
        {
          id: 3,
          icon: "3",
          name: "3"
        },
        {
          id: 4,
          icon: "4",
          name: "4"
        },
        {
          id: 5,
          icon: "5",
          name: "5"
        },
        {
          id: 6,
          icon: "6",
          name: "6"
        },
        {
          id: 7,
          icon: "7",
          name: "7"
        },
        {
          id: 8,
          icon: "8",
          name: "8"
        },
        {
          id: 9,
          icon: "9",
          name: "9"
        },
        {
          id: 10,
          icon: "10",
          name: "10"
        }
      ]
    };
  },
  methods: {
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.datas[this.datas.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.datas.push(last);
        }
        this.loading = false;
      }, 2500);
    },
    handleClick(id) {
      this.$router.push({ name: "listDetail", query: { id: id } });
    }
  }
};
</script>

<style lang="scss">
.list {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .list-query {
    width: 100%;
    flex: none;
    .mint-header {
      height: 72px;
    }
  }
  .list-fill {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    .loading{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 0;
    }
    .list-item {
      width: 100%;
      height: 75px;
      display: flex;
      align-items: stretch;
      border-bottom: 1px solid rgba(0, 0, 0, 0.03); /*no*/
      box-sizing: border-box;
      .list-item-icon {
        width: 75px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        .list-item-icon-inner {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgb(237, 240, 242);
        }
      }
      .list-item-text {
        flex: 1;
        padding: 16px 0;
        overflow: hidden;
      }
    }
  }
}
</style>

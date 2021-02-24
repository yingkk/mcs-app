<template>
  <div class="list">
    <div class="list-query">
      <mt-header fixed title="固定在顶部"></mt-header>
    </div>
    <div class="list-fill">
      <mt-loadmore @top-status-change="handleTopChange">
        <ul>
          <li v-for="(item, index) in datas" :key="index">{{ item.name }}</li>
        </ul>
        <div slot="top" class="mint-loadmore-top">
          <span
            v-show="topStatus !== 'loading'"
            :class="{ rotate: topStatus === 'drop' }"
            >↓</span
          >
          <span v-show="topStatus === 'loading'">Loading...</span>
        </div>
      </mt-loadmore>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topStatus: '',
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
    handleTopChange(status) {
        this.topStatus = status;
    },
    handleClick(id) {
      this.$router.push({ name: "listDetail", query: { id: id } });
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .list-query {
    width: 100%;
    flex: none;
    height: 50px;
    min-height: 120vh;
  }
  .list-fill {
    width: 100%;
    height: 100%;
    overflow-y: auto;
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

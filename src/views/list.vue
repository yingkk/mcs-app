<template>
  <div class="list">
    <div class="list-query"></div>
    <div class="list-fill">

      <div class="list-item">
            <div class="list-item-icon">
                <div class="list-item-icon-inner">
                </div>
            </div>
            <div class="list-item-text"></div>
        </div>
         <div class="list-item">
            <div class="list-item-icon">
                <div class="list-item-icon-inner">
                </div>
            </div>
            <div class="list-item-text"></div>
        </div>
         <div class="list-item">
            <div class="list-item-icon">
                <div class="list-item-icon-inner">
                </div>
            </div>
            <div class="list-item-text"></div>
        </div>
         <div class="list-item">
            <div class="list-item-icon">
                <div class="list-item-icon-inner">
                </div>
            </div>
            <div class="list-item-text"></div>
        </div>
         <div class="list-item">
            <div class="list-item-icon">
                <div class="list-item-icon-inner">
                </div>
            </div>
            <div class="list-item-text"></div>
        </div>
         <div class="list-item">
            <div class="list-item-icon">
                <div class="list-item-icon-inner">
                </div>
            </div>
            <div class="list-item-text"></div>
        </div>
         <div class="list-item">
            <div class="list-item-icon">
                <div class="list-item-icon-inner">
                </div>
            </div>
            <div class="list-item-text"></div>
        </div>
         <div class="list-item">
            <div class="list-item-icon">
                <div class="list-item-icon-inner">
                </div>
            </div>
            <div class="list-item-text"></div>
        </div>
         <div class="list-item">
            <div class="list-item-icon">
                <div class="list-item-icon-inner">
                </div>
            </div>
            <div class="list-item-text"></div>
        </div>
         <div class="list-item">
            <div class="list-item-icon">
                <div class="list-item-icon-inner">
                </div>
            </div>
            <div class="list-item-text"></div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list {
  width: 100%;
  height: 100%;
  padding: 0 10px;
  box-sizing: border-box;

  .list-query {
    width: 100%;
    height: 100px;
    flex: none;
  }
  .list-fill {
    width: 100%;
    height: 100%;
    .list-item {
      width: 100%;
      height: 175px;
      display: flex;
      align-items: stretch;
      border-bottom: 1px solid rgba(0, 0, 0, 0.03); /*no*/
      box-sizing: border-box;
      .list-item-icon {
        width: 175px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        .list-item-icon-inner {
          width: 140px;
          height: 140px;
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

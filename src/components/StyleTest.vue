<template>
  <div id="wrapper">
    <div class="less">
      <div>less test</div>
    </div>

    <div class="scss">
      <div class="scss-child">scss test</div>
    </div>

    <div class="sass">
      <div class="sass-child">sass test</div>
    </div>

    <div class="postcss">
      <div>postcss test</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StyleTest"
};
</script>


<style lang="less" scoped>
@base: #f938ab;

.box-shadow(@style, @c) when (iscolor(@c)) {
  -webkit-box-shadow: @style @c;
  box-shadow: @style @c;
}
.box-shadow(@style, @alpha: 50%) when (isnumber(@alpha)) {
  .box-shadow(@style, rgba(0, 0, 0, @alpha));
}
.less {
  color: saturate(@base, 5%);
  border-color: lighten(@base, 30%);
  width: 30%;
  margin: 0 auto;
  div {
    .box-shadow(0 0 5px, 30%);
  }
}
</style>

<style lang="scss" scoped>
.scss {
  padding: 2px;

  width: 30%;
  margin: 10px auto;

  div {
    color: red;
    background-color: yellowgreen;
  }
}
</style>

<style lang="sass" scoped>
.sass
  width: 30%
  margin: 0 auto
  padding: 10px
  background-color: #faa
</style>

<style lang="scss" scoped>
.postcss {
  display: flex;
  justify-content: center;
  div {
    width: 30%;
    background-color: yellow;
    margin: 20px;
  }
}
</style>


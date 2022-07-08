<template>
  <button
    class="vk-button"
    :class="btnClass"
    :style="styles"
    @click="$emit('click', $event)"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      fill="none"
      version="1.1"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      style="margin-right: 3px"
      v-if="
        type == 'secondmaini' ||
        type == 'secondmainib' ||
        type == 'secondminorib' ||
        type == 'textmaini' ||
        type == 'textminori'
      "
    >
      <path
        d="M4.28571,4.28571L4.28571,0L5.71429,0L5.71429,4.28571L10,4.28571L10,5.71429L5.71429,5.71429L5.71429,10L4.28571,10L4.28571,5.71429L0,5.71429L0,4.28571L4.28571,4.28571Z"
        fill="#B5D1E0"
        fill-opacity="1"
      />
    </svg>
    <span v-if="this.$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'vking-btn',
  props: {
    type: {
      String,
      default: ''
    },
    disable: {
      Boolean,
      default: false
    },
    styles: {
      String,
      default: ''
    }
  },
  computed: {
    btnClass() {
      let classes = []
      if (this.disable) {
        console.log(this)
        classes.push(`vk-button-disable-${this.type}`)
      }
      //  else {
      if (this.type) {
        classes.push(`vk-button-${this.type}`)
      }
      // }
      return classes
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss">
@import '../style/_var.scss';
$height: 40px;
$font-size: 16px;
// $color: #ffffff;
$border-color: #dcdfe6;
// $background: #37b9ff;
$active-color: #0085ca;
.vk-button {
  // width: 240px;
  border-radius: $border-radius;
  border: none;
  // color: $color;
  background-color: #00a6ff;
  font-family: HarmonyOS Sans;
  height: $height;
  cursor: pointer;
  font-size: $font-size;
  line-height: 1;
  padding: 3px 16px 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  // transition: all 0.5s;
  // &:hover {
  //   border-color: $border-color;
  //   background-color: $background;
  // }
  // // &:focus,
  // &:active {
  //   // color: $active-color;
  //   // border-color: $active-color;
  //   background-color: $active-color;
  //   transition: all 0s;
  //   outline: none;
  // }
}
$back-list: (
  firstmain: $firstmain,
  firstminor: $firstminor,
  secondmain: $secondmain,
  secondminor: $secondminor,
  secondmaini: $secondmaini,
  secondmainib: $secondmainib,
  secondminorib: $secondminorib,
  thirdmain: $thirdmain,
  thirdminor: $thirdminor,
  thirdmainb: $thirdmainb,
  thirdminorb: $thirdminorb,
  textmain: $textmain,
  textminor: $textminor,
  textmaini: $textmaini,
  textminori: $textminori
);
$txt-list: (
  firstmain: $firstmain-txt,
  firstminor: $firstminor-txt,
  secondmain: $secondmain-txt,
  secondminor: $secondminor-txt,
  secondmaini: $secondmaini-txt,
  secondmainib: $secondmainib-txt,
  secondminorib: $secondminorib-txt,
  thirdmain: $thirdmain-txt,
  thirdminor: $thirdminor-txt,
  thirdmainb: $thirdmainb-txt,
  thirdminorb: $thirdminorb-txt,
  textmain: $textmain-txt,
  textminor: $textminor-txt,
  textmaini: $textmaini-txt,
  textminori: $textminori-txt
);
$hover-list: (
  firstmain: $firstmain-hover,
  firstminor: $firstminor-hover,
  secondmain: $secondmain-hover,
  secondminor: $secondminor-hover,
  secondmaini: $secondmaini-hover,
  secondmainib: $secondmainib-hover,
  secondminorib: $secondminorib-hover,
  thirdmain: $thirdmain-hover,
  thirdminor: $thirdminor-hover,
  thirdmainb: $thirdmainb-hover,
  thirdminorb: $thirdminorb-hover,
  textmain: $textmain-hover,
  textminor: $textminor-hover,
  textmaini: $textmaini-hover,
  textminori: $textminori-hover
);
$active-list: (
  firstmain: $firstmain-active,
  firstminor: $firstminor-active,
  secondmain: $secondmain-active,
  secondminor: $secondminor-active,
  secondmaini: $secondmaini-active,
  secondmainib: $secondmainib-active,
  secondminorib: $secondminorib-active,
  thirdmain: $thirdmain-active,
  thirdminor: $thirdminor-active,
  thirdmainb: $thirdmainb-active,
  thirdminorb: $thirdminorb-active,
  textmain: $textmain-active,
  textminor: $textminor-active,
  textmaini: $textmaini-active,
  textminori: $textminori-active
);
$disableb-list: (
  firstmain: $firstmain-disableb,
  firstminor: $firstminor-disableb,
  secondmain: $secondmain-disableb,
  secondminor: $secondminor-disableb,
  secondmaini: $secondmaini-disableb,
  secondmainib: $secondmainib-disableb,
  secondminorib: $secondminorib-disableb,
  thirdmain: $thirdmain-disableb,
  thirdminor: $thirdminor-disableb,
  thirdmainb: $thirdmainb-disableb,
  thirdminorb: $thirdminorb-disableb,
  textmain: $textmain-disableb,
  textminor: $textminor-disableb,
  textmaini: $textmaini-disableb,
  textminori: $textminori-disableb
);
$disablet-list: (
  firstmain: $firstmain-disablet,
  firstminor: $firstminor-disablet,
  secondmain: $secondmain-disablet,
  secondminor: $secondminor-disablet,
  secondmaini: $secondmaini-disablet,
  secondmainib: $secondmainib-disablet,
  secondminorib: $secondminorib-disablet,
  thirdmain: $thirdmain-disablet,
  thirdminor: $thirdminor-disablet,
  thirdmainb: $thirdmainb-disablet,
  thirdminorb: $thirdminorb-disablet,
  textmain: $textmain-disablet,
  textminor: $textminor-disablet,
  textmaini: $textmaini-disablet,
  textminori: $textminori-disablet
);
// // 格式：@each 类型,颜色  in (key:值) {
// //  #{}取值表达式
// // }
@each $type, $color in $back-list {
  .vk-button-#{$type} {
    @if ($type == 'firstmain') or ($type == 'firstminor') {
      height: 40px;
    }
    @if ($type == 'secondmain') or
      ($type == 'secondminor') or
      ($type == 'secondmaini') or
      ($type == 'secondmainib') or
      ($type == 'secondminorib')
    {
      height: 32px;
      font-size: 14px;
      path {
        fill: map-get($txt-list, $type);
      }
    }
    @if ($type == 'thirdmain') or
      ($type == 'thirdminor') or
      ($type == 'thirdmainb') or
      ($type == 'thirdminorb')
    {
      height: 28px;
      font-size: 14px;
    }
    @if ($type == 'secondminor') or
      ($type == 'secondmainib') or
      ($type == 'secondminorib') or
      ($type == 'thirdmainb') or
      ($type == 'thirdminorb')
    {
      font-family: HarmonyOS_Sans_Bold;
      font-weight: bold;
      color: map-get($txt-list, $type);
      background: $color;
      border: 1.5px solid map-get($txt-list, $type);
      path {
        fill: map-get($txt-list, $type);
      }
    } @else if
      ($type == 'textmain') or
      ($type == 'textminor') or
      ($type == 'textmaini') or
      ($type == 'textminori')
    {
      height: auto;
      padding: 3px 8px 4px;
      font-family: HarmonyOS_Sans_Bold;
      font-size: 14px;
      font-weight: bold;
      color: map-get($txt-list, $type);
      background: none;
      path {
        fill: map-get($txt-list, $type);
      }
    } @else {
      background: #{$color};
      color: #fff;
    }
  }
}
@each $type, $color in $hover-list {
  .vk-button-#{$type}:hover {
    @if ($type == 'secondminor') or
      ($type == 'secondmainib') or
      ($type == 'secondminorib')
    {
      background: $color;
    } @else if ($type == 'thirdmainb') or ($type == 'thirdminorb') {
      color: $color;
      border: 1.5px solid $color;
    } @else if
      ($type == 'textmain') or
      ($type == 'textminor') or
      ($type == 'textmaini') or
      ($type == 'textminori')
    {
      color: $color;
      path {
        fill: $color;
      }
    } @else {
      background: #{$color};
      color: #fff;
    }
  }
}
@each $type, $color in $active-list {
  .vk-button-#{$type}:active {
    @if ($type == 'secondminor') or
      ($type == 'secondmainib') or
      ($type == 'secondminorib')
    {
      background: $color;
    } @else if ($type == 'thirdmainb') or ($type == 'thirdminorb') {
      color: $color;
      border: 1.5px solid $color;
    } @else if
      ($type == 'textmain') or
      ($type == 'textminor') or
      ($type == 'textmaini') or
      ($type == 'textminori')
    {
      color: $color;
      path {
        fill: $color;
      }
    } @else {
      background: $color;
      color: #fff;
    }
  }
}
@each $type, $color in $disableb-list {
  .vk-button-disable-#{$type} {
    @if ($type == 'secondmainib') or
      ($type == 'secondminorib') or
      ($type == 'thirdmainb') or
      ($type == 'thirdminorb')
    {
      // background: $color;
      color: map-get($disablet-list, $type);
      border: 1.5px solid map-get($disablet-list, $type);
      pointer-events: none;
      path {
        fill: map-get($disablet-list, $type);
      }
    } @else if
      ($type == 'textmain') or
      ($type == 'textminor') or
      ($type == 'textmaini') or
      ($type == 'textminori')
    {
      color: map-get($disablet-list, $type);
      background: $color;
      pointer-events: none;
      path {
        fill: map-get($disablet-list, $type);
      }
    } @else {
      background: $color;
      pointer-events: none;
      color: map-get($disablet-list, $type);
      path {
        fill: map-get($disablet-list, $type);
      }
    }
    @if ($type == 'secondminor') or
      ($type == 'thirdmainb') or
      ($type == 'thirdminorb')
    {
      border: none;
      background: $color;
    }
  }
}
.vk-button-disable {
  color: #8cb0c0;
  background-color: #4b6573;
  pointer-events: none;
}
</style>

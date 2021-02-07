<template>
  <div class="cart-popup">
    <div class="cart-item">
      <h3 class="cart-item__name">Корзина</h3>
      <div class="cart-item__close" @click="closecart()">
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M24.6133 0.00572781L0 24.6121L2.38323 26.996L26.9965 2.38963L24.6133 0.00572781Z"
              fill="#000"
            />
            <path
              d="M2.38713 0.00403785L0.00390625 2.38794L24.6172 26.9943L27.0004 24.6104L2.38713 0.00403785Z"
              fill="#000"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="27" height="27" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <!-- <svg
          width="25"
          height="25"
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <rect width="128" height="128" fill="url(#pattern0)" />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlink:href="#image0" transform="scale(0.00714286)" />
            </pattern>
            <image
              id="image0"
              width="140"
              height="140"
              xlink:href="data:image/png;base64,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"
            />
          </defs>
        </svg> -->
      </div>
      <div
        class="cart-item__close-burger"
        @click="closecart(), activeScrolling()"
      >
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M24.6133 0.00572781L0 24.6121L2.38323 26.996L26.9965 2.38963L24.6133 0.00572781Z"
              fill="#fff"
            />
            <path
              d="M2.38713 0.00403785L0.00390625 2.38794L24.6172 26.9943L27.0004 24.6104L2.38713 0.00403785Z"
              fill="#fff"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="27" height="27" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div class="cart-empty">
        <p>Пока Ваша корзина пуста, но вы можете в нее что-нибудь добавить!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showEmpty: false,
    };
  },
  methods: {
    closecart() {
      this.$emit("closecart");
    },
    activeScrolling() {
      this.$emit("activeScrolling");
    },
  },
};
</script>

<style>
</style>
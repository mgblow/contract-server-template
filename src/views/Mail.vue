<template>
  <div class="container page" style="padding: 0; margin-top: 20px; margin-bottom: 50px">
    <div class="row">
      <ol class="list-group" >
        <li class="list-group-item d-flex  align-items-start" @click="profileClicked()">
          <img class="list-item-image" :src="require('@/assets/fox.jpg')">
          <div class="ms-2">
            <div class="fw-bold">mgblow</div>
            <span class="text-muted last-message">Cras justo odio</span>
          </div>
          <span class="notification badge bg-primary rounded-pill">14</span>
        </li>
        <li class="list-group-item d-flex justify-content-start align-items-start">
          <img class="list-item-image" :src="require('@/assets/fox.jpg')">
          <div class="ms-2">
            <div class="fw-bold">Subheading</div>
            <span class="text-muted last-message">Cras justo odio</span>
          </div>
          <span class="notification badge bg-primary rounded-pill">14</span>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mail',
  components: {},
  data() {
    return {}
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    profileClicked() {
      this.$router.push('/chat/h59gk50gm40e39')
    }
  }
}
</script>

<style scoped>
.list-group .last-message {
  font-size: 0.8rem;
}

.list-group-item:active{
  border: 3px solid #999;
}
.list-item-image {
  width: 50px; /* Adjust the width as per your requirement */
  height: 50px; /* Adjust the height as per your requirement */
  margin-left: 10px; /* Adjust the margin as per your requirement */
}

.list-group .notification{
  position: absolute;
  left: 10px;
}
</style>

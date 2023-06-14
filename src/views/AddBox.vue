<template>
  <div class="container page" style="padding:0;margin-top: 50px;margin-bottom: 50px;">
    <div class="row">
      <div class="col-12 p-1">
        <div class="box p-2">
          <div class="row add-box">
            <img :src="require('@/assets/add-box.avif')">
            <h2 class="pt-2">همین حالا یه باکس اضافه کن</h2>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">گروه</label>
            <select class="form-control">
              <option>گربه</option>
              <option>سگ</option>
              <option>حیوانات خانگی</option>
              <option>آموزشی</option>
            </select>
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">عنوان باکس</label>
            <input type="text" class="form-control"
                   placeholder="سر تیتر باکس">
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">شرح و اطلاعات بیشتر</label>
            <textarea class="form-control" placeholder="شرح و اطلاعات بیشتر"></textarea>
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>
          <div class="form-group">
            <label class="sr-only" for="inlineFormInputGroup">تگ ها</label>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">#</div>
              </div>
              <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="تگ های مورد نظر">
              <div class="input-group-append">
                <div class="input-group-text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor"
                       class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">بها</label>
            <input type="number" class="form-control"
                   placeholder="بها">
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>
          <button class="btn btn-dark">
            <img :src="require('@/assets/add-box.png')">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddBox',
  components: {},
  data() {
    return {
      post: {
        title: 'لورم ایپسوم متن ساختگی با تولید داخلی بر پایه منطق خارجی',
        text: 'Finally, modify the template section to bind the boxExpanded property to the class of the box div. When the boxExpanded property is true, the box-expanded class will be applied to the box div, which will cause it to fill the entire screen',
      }

    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    boxClicked(post) {
      this.$router.push('/box/12');
    }
  }
}

</script>

<style scoped>
.page {
  animation: slideUp 0.2s ease-out;
}


@keyframes slideUp {
  from {
    transform: scaleX(0.2);
    transition: transform 0.5s ease-in-out;
  }

  to {
    transform: scaleX(1.2);
    transition: transform 0.2s ease-in-out;
  }
}

.inner-box {
  background: #ffffff;
  margin-bottom: 10px;
}

.box {
  background: #ffffff;
  margin-bottom: 10px;
  border-radius: 1rem;
  border: 1px solid #555;
  box-shadow: 0 0 2px #222;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  width: 100%;
}

.add-box {
  text-align: center;
}

.add-box img {
  width: 60%;
  display: inline-block;
  height: auto;
  margin: auto;
}

.box h2 {
  font-size: 1rem;
}

.box p {
  font-size: 0.6rem;
}

.box:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}


.full-post .box {
  padding-top: 10px;
  position: fixed;
  overflow: hidden;
  width: 100%;
  opacity: 1;
}

.full-post .box img {
  border-radius: 1rem;
}


.box .content h2 {
  font-weight: 500;
  color: #ffffff;
  font-size: 16px;
  width: 100%;
}

.full-post .box .content p {
  font-size: 1rem;
  text-wrap: normal;
  word-break: break-all;
}

button{
  margin-top: 20px;
  float: left;
}

button img{
  width: 30px;
}
</style>
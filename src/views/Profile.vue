<template>
  <div class="container page" style="padding:0;margin-top: 50px;margin-bottom: 50px;">
    <div class="row">
      <div class="col-12 p-1 profile" style="direction: ltr !important;">
        <div class="user-profile mb-2">
          <div class="col col-xs-10 communication" style="direction: rtl">
            <h4 style="direction: ltr;color:">
              <router-link to="/profile/@mojtaba">mojtaba</router-link>
            </h4>            
            <button class="btn btn-warning btn-sm" style="margin-left:10px;background: #f19066;color: #596275; border: 1px solid #596275;">Hi Fox</button>&nbsp;
            <button class="btn btn-success p-2 mb-2 btn-sm" style="margin-left:10px;background: #f3a683;color: #596275; border: 1px solid #596275;">Hi Friends</button>&nbsp;
            <button class="btn btn-dark btn-sm" style="background: #e77f67;color: #596275; border: 1px solid #596275;">I am</button>&nbsp;
          </div>
          <div class="image" style="width: 80px;height: 80px;border-radius: 100%;overflow: hidden;">
            <img :src="require('@/assets/fox.jpg')" style="width: 80px;height: 80px;">
          </div>
        </div>
      </div>
      <div class="col-4 p-1 col-xs-3 col-sm-3 col-md-3" v-for="post in posts">
        <div class="box" @click="boxClicked(post)">
          <img class="image"
               :src="(post.img) ? post.img : 'https://upload.wikimedia.org/wikipedia/commons/0/03/Rumfold_Red_Bull.png'">
          <div class="row content">
            <h2 v-text="post.title.slice(0, 30)"></h2>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  components: {},
  data() {
    return {
      posts: [
        {
          expanded: false,
          title: 'Packahge B',
          text: 'This appears to be a Vue.js single file component that contains a template, script, and style section. The template section contains HTML code that defines the structure of the component, including a container div, row divs, and box divs that contain images, headers, and paragraphs. The script section defines a Vue.js component named "Home", which has an empty components object and a method named "boxClicked". The style section contains CSS code that styles the box divs with background colors, borders, and box shadows, as well as hover and active effects on the boxes.',
          img: "https://upload.wikimedia.org/wikipedia/commons/0/03/Rumfold_Red_Bull.png"

        },
        {
          expanded: false,
          title: 'Packahge for the new learners who are veryconserned about learning new technologies',
          text: 'This appears to be a Vue.js single file component that contains a template, script, and style section. The template section contains HTML code that defines the structure of the component, including a container div, row divs, and box divs that contain images, headers, and paragraphs. The script section defines a Vue.js component named "Home", which has an empty components object and a method named "boxClicked". The style section contains CSS code that styles the box divs with background colors, borders, and box shadows, as well as hover and active effects on the boxes.',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Straight-eared_Scottish_Fold.jpg/800px-Straight-eared_Scottish_Fold.jpg'
        },
        {
          expanded: false,
          title: 'Packahge B',
          text: 'This appears to be a Vue.js single file component that contains a template, script, and style section. The template section contains HTML code that defines the structure of the component, including a container div, row divs, and box divs that contain images, headers, and paragraphs. The script section defines a Vue.js component named "Home", which has an empty components object and a method named "boxClicked". The style section contains CSS code that styles the box divs with background colors, borders, and box shadows, as well as hover and active effects on the boxes.'
        },
        {
          expanded: false,
          title: 'Packahge B',
          text: 'This appears to be a Vue.js single file component that contains a template, script, and style section. The template section contains HTML code that defines the structure of the component, including a container div, row divs, and box divs that contain images, headers, and paragraphs. The script section defines a Vue.js component named "Home", which has an empty components object and a method named "boxClicked". The style section contains CSS code that styles the box divs with background colors, borders, and box shadows, as well as hover and active effects on the boxes.',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Adult_Scottish_Fold.jpg/800px-Adult_Scottish_Fold.jpg'
        },
        {
          expanded: false,
          title: 'Online JAVA with Mojtaba Asadi',
          text: 'This appears to be a Vue.js single file component that contains a template, script, and style section. The template section contains HTML code that defines the structure of the component, including a container div, row divs, and box divs that contain images, headers, and paragraphs. The script section defines a Vue.js component named "Home", which has an empty components object and a method named "boxClicked". The style section contains CSS code that styles the box divs with background colors, borders, and box shadows, as well as hover and active effects on the boxes.',
          img: "https://i.pinimg.com/564x/0b/e3/3b/0be33b1c04e4453f3e5a4b3fb22158ca.jpg"
        },
        {
          expanded: false,
          title: 'Packahge B',
          text: 'This appears to be a Vue.js single file component that contains a template, script, and style section. The template section contains HTML code that defines the structure of the component, including a container div, row divs, and box divs that contain images, headers, and paragraphs. The script section defines a Vue.js component named "Home", which has an empty components object and a method named "boxClicked". The style section contains CSS code that styles the box divs with background colors, borders, and box shadows, as well as hover and active effects on the boxes.'
        },
        {
          expanded: false,
          title: 'Packahge B',
          text: 'This appears to be a Vue.js single file component that contains a template, script, and style section. The template section contains HTML code that defines the structure of the component, including a container div, row divs, and box divs that contain images, headers, and paragraphs. The script section defines a Vue.js component named "Home", which has an empty components object and a method named "boxClicked". The style section contains CSS code that styles the box divs with background colors, borders, and box shadows, as well as hover and active effects on the boxes.'
        },
        {
          expanded: false,
          title: 'Packahge B',
          text: 'This appears to be a Vue.js single file component that contains a template, script, and style section. The template section contains HTML code that defines the structure of the component, including a container div, row divs, and box divs that contain images, headers, and paragraphs. The script section defines a Vue.js component named "Home", which has an empty components object and a method named "boxClicked". The style section contains CSS code that styles the box divs with background colors, borders, and box shadows, as well as hover and active effects on the boxes.',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Blue_Toby.jpg/800px-Blue_Toby.jpg'
        },
        {
          expanded: false,
          title: 'Packahge B',
          text: 'This appears to be a Vue.js single file component that contains a template, script, and style section. The template section contains HTML code that defines the structure of the component, including a container div, row divs, and box divs that contain images, headers, and paragraphs. The script section defines a Vue.js component named "Home", which has an empty components object and a method named "boxClicked". The style section contains CSS code that styles the box divs with background colors, borders, and box shadows, as well as hover and active effects on the boxes.',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Golden_Rebel_D%27Oaxaca_of_Feliland_4_months.JPG/1024px-Golden_Rebel_D%27Oaxaca_of_Feliland_4_months.JPG'
        }

      ],
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
.profile{
  height: 100px;
  margin-bottom: 40px;
}

.profile button{
  border-radius: 1rem;
}

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
  float: left;
  background: #ffffff;
  margin-bottom: 10px;
  border-radius: 1rem;
  border: 1px solid #555;
  box-shadow: 0 0 2px #222;
  opacity: 0.8;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100px;
}

.box img {
  width: 100%;
  height: auto;
  border-radius: 1rem;
}

.box h2 {
  font-size: 0.8rem !important;
}

.box p {
  font-size: 0.4rem;
}

.box:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.box:active {
  box-shadow: 0 0 8px #000;
  transform: scaleX(1.2);
  transition: transform 0.5s ease-in-out;
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

.box .content {
  position: absolute;
  top: 0;
  width: 100%;
  background: #574b90;
  opacity: 0.5;
  padding: 10px;
  color: #ffffff;
  margin: 0;
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

.actions {
  background: #ffffff;
  border-radius: 20px;
  padding: 10px;
}

.user-profile {
  background: #596275;
  margin-bottom: 50px;
  border-radius: 1rem;
  border: 1px solid #555;
  box-shadow: 0 0 2px #222;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  width: 100%;
  padding: 10px;
}

.user-profile .image {
  float: right;
}

.user-profile .communication {
  float: left;
  text-align: left;
}

.communication h4{
}

.communication h4 a{
  color: #f19066;
  text-decoration: none;
}
</style>
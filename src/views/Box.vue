<template>
  <div class="container page" style="padding:0;margin-top: 30px;">
    <div class="row">
      <div class="col-12 p-1 col-xs-3 col-sm-3 col-md-3" v-for="post in posts">
        <div class="box" @click="boxClicked(post)">
          <img class="image"
               :src="(post.img) ? post.img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637'">
          <div class="row content">
            <h2 v-text="post.title.slice(0, 60)"></h2>
          </div>
        </div>
        <div class="col col-12 actions">
          <svg
              style="float:left;"
              xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
          </svg>
          <svg
              style="float:left;margin-left: 10px"
              xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bookmark"
              viewBox="0 0 16 16">
            <path
                d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
          </svg>
          <svg
              style="float:left;margin-left: 10px"
              xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
          </svg>
          <svg
              style="float:left;margin-left: 10px"
              xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-day"
               viewBox="0 0 16 16">
            <path
                d="M4.684 12.523v-2.3h2.261v-.61H4.684V7.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V9.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43zm.094 5.093h.672V8.418h-.672v4.105z"/>
            <path
                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
            <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
          </svg>
          1402/03/07
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
               class="bi bi-currency-dollar" viewBox="0 0 16 16">
            <path
                d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
          </svg>
          2000.0000
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-fill"
               viewBox="0 0 16 16">
            <path
                d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z"/>
          </svg>
          Tehran
          <div class="tags">
            <a href="#">#اسکاتیش</a>&nbsp;
            <a href="#">#بریتیش</a>&nbsp;
            <a href="#">#golden</a>&nbsp;
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Box',
  components: {},
  data() {
    return {
      post: null,
      posts: [
        {
          expanded: false,
          title: 'Online Daf Sessions With Hooman Tootoonchian',
          text: 'Finally, modify the template section to bind the boxExpanded property to the class of the box div. When the boxExpanded property is true, the box-expanded class will be applied to the box div, which will cause it to fill the entire screen',
          img: "https://i.pinimg.com/564x/8f/95/1b/8f951b9d4df725eb600bcb550c5860e0.jpg",
        },
        {
          expanded: false,
          title: 'Packahge B',
          text: 'This appears to be a Vue.js single file component that contains a template, script, and style section. The template section contains HTML code that defines the structure of the component, including a container div, row divs, and box divs that contain images, headers, and paragraphs. The script section defines a Vue.js component named "Home", which has an empty components object and a method named "boxClicked". The style section contains CSS code that styles the box divs with background colors, borders, and box shadows, as well as hover and active effects on the boxes.',
          img: "https://i.pinimg.com/564x/9b/3e/6b/9b3e6b629891dec3087b0f06df508b6a.jpg"

        },
        {
          expanded: false,
          title: 'Packahge for the new learners who are veryconserned about learning new technologies',
          text: 'This appears to be a Vue.js single file component that contains a template, script, and style section. The template section contains HTML code that defines the structure of the component, including a container div, row divs, and box divs that contain images, headers, and paragraphs. The script section defines a Vue.js component named "Home", which has an empty components object and a method named "boxClicked". The style section contains CSS code that styles the box divs with background colors, borders, and box shadows, as well as hover and active effects on the boxes.',
          img: 'https://i.pinimg.com/564x/1f/ec/6b/1fec6b5302b88d087dbb6071e0397e7b.jpg'
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
          text: 'This appears to be a Vue.js single file component that contains a template, script, and style section. The template section contains HTML code that defines the structure of the component, including a container div, row divs, and box divs that contain images, headers, and paragraphs. The script section defines a Vue.js component named "Home", which has an empty components object and a method named "boxClicked". The style section contains CSS code that styles the box divs with background colors, borders, and box shadows, as well as hover and active effects on the boxes.'
        },
        {
          expanded: false,
          title: 'Packahge B',
          text: 'This appears to be a Vue.js single file component that contains a template, script, and style section. The template section contains HTML code that defines the structure of the component, including a container div, row divs, and box divs that contain images, headers, and paragraphs. The script section defines a Vue.js component named "Home", which has an empty components object and a method named "boxClicked". The style section contains CSS code that styles the box divs with background colors, borders, and box shadows, as well as hover and active effects on the boxes.'
        }

      ],
      boxExpanded: false
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
  height: 200px;
  width: 100%;
}

.box img {
  width: 100%;
  height: auto;
  border-radius: 1rem;
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
  background: #000000;
  opacity: 0.6;
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
</style>
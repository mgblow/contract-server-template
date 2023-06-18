<template>
  <div class="container page" style="padding:0;margin-top: 50px;margin-bottom: 50px;">
    <div class="row">
      <div class="col-12 p-1">
        <div class="box p-2">
          <div class="row add-box">
            <img :src="require('@/assets/add-box.avif')">
            <h2 class="pt-2">همین حالا یه باکس اضافه کن</h2>
          </div>
          <!-- Rest of the component's HTML code -->

          <div class="form-group file-upload">
            <div class="custom-file">
              <input type="file" id="file1" class="custom-file-input"
                     accept="image/jpeg, image/png, image/gif, video/mp4" v-on:change="handleFileSelect($event, 0)">
              <label for="file1" class="custom-file-label">انتخاب مدیا</label>
            </div>
            <div class="custom-file">
              <input type="file" id="file2" class="custom-file-input"
                     accept="image/jpeg, image/png, image/gif, video/mp4" v-on:change="handleFileSelect($event, 1)">
              <label for="file2" class="custom-file-label">انتخاب مدیا</label>
            </div>
            <div class="custom-file">
              <input type="file" id="file3" class="custom-file-input"
                     accept="image/jpeg, image/png, image/gif, video/mp4" v-on:change="handleFileSelect($event, 2)">
              <label for="file3" class="custom-file-label">انتخاب مدیا</label>
            </div>
            <div class="custom-file">
              <input type="file" id="file4" class="custom-file-input"
                     accept="image/jpeg, image/png, image/gif, video/mp4" v-on:change="handleFileSelect($event, 3)">
              <label for="file4" class="custom-file-label">انتخاب مدیا</label>
            </div>
          </div>

          <!-- Rest of the component's HTML code -->
          <div class="form-group">
            <label for="exampleInputEmail1">گروه</label>
            <select class="form-control" v-model="group">
              <option v-for="group in groups" :value="group._id" :key="group._id">{{ group.name }}</option>
            </select>
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">عنوان باکس</label>
            <input v-model="name" type="text" class="form-control"
                   placeholder="سر تیتر باکس">
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">شرح و اطلاعات بیشتر</label>
            <textarea v-model="description" class="form-control" placeholder="شرح و اطلاعات بیشتر"></textarea>
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>
          <div class="form-group">
            <label class="sr-only" for="inlineFormInputGroup">تگ ها</label>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">#</div>
              </div>
              <input v-model="tag" type="text" class="form-control" id="inlineFormInputGroup"
                     placeholder="تگ های مورد نظر">
              <div class="input-group-append">
                <div class="input-group-text" @click="addTag()">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor"
                       class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                  </svg>
                </div>
              </div>
            </div>
            <a v-for="tag in tags"  class="form-text text-muted badge badge-primary">{{tag}}</a>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">بها</label>
            <input v-model="price" type="number" class="form-control"
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
import {post} from "../api";
import { setCookie, getCookie } from '@/cookie';

export default {
  name: 'AddBox',
  components: {},
  data() {
    return {
      files: [], // Store the selected files
      groups: [],
      group: '',
      name: '',
      description: '',
      tag: '',
      tags: [],
      price: '',
    };
  },
  mounted() {
    this.fetchCategories();
  },
  created() {
    this.scrollToTop();
  },
  methods: {
    handleFileSelect(event, index) {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        this.files[index] = selectedFile; // Store the selected file in the corresponding index
      }
    },
    addBox() {
      // Create a new FormData object
      const formData = new FormData();

      // Append each file to the FormData object
      this.files.forEach((file, index) => {
        formData.append(`file${index + 1}`, file);
      });

      post("/proxy", {
        token: getCookie("app-token"),
        media: this.media,
        group: this.group,
        name: this.name,
        description: this.description,
        tags: this.tags,
        price: this.price
      }).then(response => {

      }).catch(error => {

      });

    },
    fetchCategories(){
      var self = this;
      post("/proxy", {
        topic: "fetchCategories",
        data: {
          token: getCookie("app-token"),
          limit: 100,
          page: 1
        }
      }).then(response => {
          if(response){
            self.groups = response.data.body.categories;
          }
      }).catch(error => {
          console.log(error);
      });
    },
    addTag(){
      if(this.tag.length < 3);
        this.tags.push(this.tag);
        this.tag = '';
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}

</script>

<style scoped>
label {
  margin: 10px 0;
}

.page {
  animation: slideUp 0.2s ease-out;
}

.file-upload {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.custom-file {
  position: relative;
  width: 165px;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
}

.custom-file-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.custom-file-label {
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  text-align: center;
  color: #777;
}

.custom-file-input:focus + .custom-file-label,
.custom-file-input.has-file + .custom-file-label {
  outline: dotted 2px #888;
}

.custom-file-input.has-file + .custom-file-label {
  color: #333;
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

button {
  margin-top: 20px;
  float: left;
}

button img {
  width: 30px;
}
</style>
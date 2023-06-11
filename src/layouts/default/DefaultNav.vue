<template>
  <div style="direction: ltr !important;padding: 10px">
    <div class="row top-header">
      <ul class="main-categories" v-show="mainCategoriesSlidedDown">
        <li>گربه</li>
        <li>پرندگان</li>
        <li>چهارپا</li>
        <li>خزندگان</li>
        <li>احبار</li>
      </ul>
      <div class="breadcrumb-follow">
        <h1>
            <span v-for="nav in navs">
              <span v-text="nav"></span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
              </svg>
            </span>
        </h1>
      </div>
      <div class="menu-arrow-icon" @click="() => {mainCategoriesSlidedDown = !mainCategoriesSlidedDown}">
        <svg v-if="!mainCategoriesSlidedDown" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
        </svg>
        <svg v-if="mainCategoriesSlidedDown" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-compact-up" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/>
        </svg>
      </div>
    </div>

    <div class="navigation-menu" v-if="showOptions" style="direction: rtl;">
      <ul>
        <li>
          <a @click="()=> {mainCategoriesSlidedDown = true; showOptions = false}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 class="bi bi-file-text" viewBox="0 0 16 16">
              <path
                  d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
              <path
                  d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
            </svg>
            &nbsp
            دسته بندی ها
          </a>
        </li>
        <li>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 class="bi bi-file-text" viewBox="0 0 16 16">
              <path
                  d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
              <path
                  d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
            </svg>
            &nbsp
            قراردادها
          </a>
        </li>
        <li>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 class="bi bi-cash-coin"
                 viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                    d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
              <path
                  d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
              <path
                  d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
              <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
            </svg>
            &nbsp
            حساب تجاری
          </a>
        </li>
        <li><a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
               class="bi bi-person-circle"
               viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </svg>
          &nbsp
          پروفایل
        </a>
        </li>
      </ul>
    </div>
    <nav class="navbar navbar-expand-md navbar-light fixed-bottom">
      <div class="col col-12 p-1">
        <div class="input-group mb-2" style="width: 100% !important;">
          <input type="text" class="form-control search-home" placeholder="جست و جو برای ..." style="direction: rtl;">
          <button class="btn btn-dark nav-menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 class="bi bi-search-heart"
                 viewBox="0 0 16 16">
              <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
              <path
                  d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"/>
            </svg>
          </button>
          <button class="btn btn-dark nav-menu" @click="toggleOptions()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: ["خانه", "گربه", "اسکاتیش"],
      navbarExpanded: false,
      showOptions: false,
      mainCategoriesSlidedDown: false
    }
  },
  methods: {
    toggleNavbar() {
      this.navbarExpanded = !this.navbarExpanded
    },
    collapseNavbar() {
      this.navbarExpanded = false
    },
    toggleOptions() {
      this.showOptions = !this.showOptions;
    }

  }
}
</script>
<style scoped>
.top-header {
  background: #ffffff;
  box-shadow: 0 0 5px #444;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  position: fixed;
  top: 0;
  margin: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  text-align: center;
  padding: 0;
  padding-top: 5px;
  text-align: center;
}

.top-header ul {
  animation: slideUp 0.2s ease-out;
  padding-bottom: 0;
}

.top-header ul li {
  padding: 5px;
  border-bottom: 1px solid #d1d1d1;
  list-style: none;
}

.top-header ul li:active{
  background: #e5e5e5;
}

.breadcrumb-follow{
  border-bottom: 1px solid #e1e1e1;
}

.top-header .breadcrumb-follow h1 {
  font-size: 14px;
  display: inline-block;
  padding-bottom: 10px;
}

.navbar {
  padding-bottom: 0 !important;
  border-radius: 1rem;
  box-shadow: 0 0 4px #333333;
  margin-bottom: 5px;
  background: #ffffff;
}

.search-home, .nav-menu {
  border-radius: 1rem;
}

.nav-menu {
  line-height: 0rem;
}

.menu-arrow-icon{
  cursor: pointer;
  display: inline-block;
}


.navigation-menu {
  background: #444;
  opacity: 0.8;
  position: fixed;
  bottom: 70px;
  right: 10px;
  box-shadow: 0 0 5px #444;
  border-radius: 20px;
  width: max-content;
  padding: 10px;
  animation: slideUp 0.2s ease-out;
}


@keyframes slideUp {
  from {
    transform: scaleY(0.2);
    transition: transform 0.5s ease-in-out;
  }

  to {
    transform: scaleY(1.2);
    transition: transform 0.2s ease-in-out;
  }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: max-content;
    opacity: 1;
  }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: max-content;
    opacity: 1;
  }
}

/* Internet Explorer */
@-ms-keyframes fadein {
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: max-content;
    opacity: 1;
  }
}

.navigation-menu ul {
  padding: 0;
  margin: 0;
  width: max-content;
}

.navigation-menu li {
  list-style: none;
  background: #333;
  padding: 5px 10px;
  border-radius: 0.5rem;
  margin-bottom: 5px;
}

.navigation-menu li:active {
  background: #222222;
}


.navigation-menu li a {
  color: #ffffff;
  text-decoration: none;
}
</style>

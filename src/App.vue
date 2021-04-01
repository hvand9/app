<template>
  <main id="app" @mousemove="mousemove">
    <section class="products">
      <Product
        v-for="product in products"
        :key="product.color"
        :product="product"
      />

       <div id="nav">
    <router-link to="/">Shop</router-link> |
    <router-link to="/omos">Om os</router-link> |
    <router-link to="/kontakt">Kontakt</router-link> |
    <router-link to="/logind">Log ind</router-link>
    <router-view/>
  </div> 
    </section>
    <router-link to="contact">Contact</router-link>
    <router-view/>
  </main>
</template>


  
<script>
import Product from './components/Product';

export default {
  name: 'app',
  components: {
    Product
  },
  data () {
    return {
      products: [
        {
          title: 'Black T-Shirt',
          color: 'green',
          bgtext: 'BE',
          src: require('./assets/T-Shirt-Free-Download-PNG.png')
        },
        {
          title: 'Red T-Shirt',
          color: 'blue',
          bgtext: 'A',
          src: require('./assets/T-Shirt-Free-Download-PNG.png')
        },
        {
          title: 'Blue T-Shirt',
          color: 'pink',
          bgtext: 'STAR!',
          src: require('./assets/T-Shirt-Free-Download-PNG.png')
        }
      ]
    }
  },
  methods: {
    mousemove (e) {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let products = document.querySelectorAll('.products .product');

      for (let i = 0; i < products.length; i++) {
        let product = products[i];

        let product_image = product.querySelector('.product-image-wrap');

        let img_x = mouseX - this.coords(product_image).x;
        let img_y = mouseY - this.coords(product_image).y;
        product_image.style.transform = `translateY(-${img_y/40}px) translateX(-${img_x/40}px) translateZ(100px)`;

        let bgtext = product.querySelector('.bg-text');
        let bg_x = mouseX - this.coords(bgtext).x;
        bgtext.style.transform = `translateX(${bg_x/25}px)`;
      }
    },
    coords (el) {
      let coords = el.getBoundingClientRect();

      return {
        x: coords.left / 2,
        y: coords.top / 2
      }
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'montseratt', sans-serif;
  }

  main {
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;

    background-color: #EEE;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .products {
    display: auto;
    max-width: 500px;
    padding: 15px;
    margin: 0 auto;
  }

  #nav {
  padding: 30px;
  tab-size: 0ex;
  text-align: center;
  font-weight: 800;
  font-size: 20px;
  font-optical-sizing: 10px;
  font-stretch: expanded;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}
</style>

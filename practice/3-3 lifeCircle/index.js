import Vue from 'vue'

// The lifecycle function is a function that is executed at a certain point in time. vm: vue instcance
const app = new Vue({
  data() {
    return {
      test: 'hello vue'
    }
  },
  // init event & lifecycle
  beforeCreate() { // initialization dom not complete, Do not modify the data, Server rendering call
    console.log(this.$el, 'beforeCreate') // undefined
  },
  // init injections & reactivity
  created() { // initialization dom not complete, Can change data, Data is not monitored, Server rendering call
    console.log(this.$el, 'created') // undefined
  },
  el: '#root',
  // has 'el' option? N: when vm.$mount(el) is called
  // Y: has 'template' option? N: compile outHTML(el) as template
  // Y: compile template as render function
  template: '<div>{{test}}</div>',
  beforeMount() { // Data and templates are about to be combined with the moment before being mounted on the page, dom Related, No data, Server rendering is not called(Server rendering does not dom)
    // <div id="app"></div>
    console.log(this.$el, 'beforeMount')
  },
  render(h) { // h: createElement() time consuming, low efficiency
    throw new TypeError('render error')
  },
  renderError(h, err) { // h: createElement() Used in development environment, Don't care about subcomponents
    return h('div', {}, err.stack)
  },
  errorCaptured() {}, // Will bubble up, Used in a formal environment, Collecting errors
  // create vm.$el and replace 'el' with it
  mounted() { // dom Related, Have data, Server rendering is not called, Server rendering does not dom, mounted after, Execution of the life cycle is required for external triggering, through render, Node becomes: <div>hello world</div>
    // <div>hello world</div>
    console.log(this.$el, 'mounted')
  },
  beforeUpdate() { // when data changes
    console.log(this, 'beforeUpdate')
  },
  updated() { // virtual DMO re-render and patch Data updates are invoked
    console.log(this, 'updated')
  },
  activated() { // When used keep-alive, App.vue Activate add-on, Will run when the page is redisplayed
    console.log(this, 'activated')
  },
  deactivated() { // deactivated(){}, contrast activated opposite
    console.log(this, 'deactivated')
  },
  beforeDestroy() { // when vm.$destory() is called
    console.log(this, 'beforeDestroy')
  },
  destroyed() { // teardown watches, child components and events listeners
    console.log(this, 'destroyed')
  }
})

app.$mount('#root')
// setInterval(() => { // Data Update
//   app.text = app.text += 1
// }, 1000)

setTimeout(() => {
  app.$destroy()
}, 1000)

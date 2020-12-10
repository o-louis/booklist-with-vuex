# BookList with vuex

### Memo

```
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {}
});
```

Mutations: To call a mutation you can either do **this.\$store.commir(MUTATION, params)** or import and write **...mapGetters** to computed property

Actions: To call an action you can either do **this.\$store.dispatch(ACTION, params)** or import and write **...mapAction** to methods property

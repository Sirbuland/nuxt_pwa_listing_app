import {fireDb} from '~/plugins/firebase.js'
export const state = () => ({
  itemList: [],
  totalProduct : 0,
})

export const mutations = {
  countItemList(state, payload) {
    state.totalProduct = payload;
  },
  addToItemList(state, payload) {
    state.itemList = payload;
  },
  setItemList(state, payload) {
    state.itemList = payload;
    state.totalProduct = payload.length;
  },
  sortAscItemList(state, payload) {
    state.itemList = payload;
  },
  sortDesItemList(state, payload) {
    state.itemList = payload;
  }
}

export const actions = {
  countItemListAction(context){
    let counter = 0;
    const ref = fireDb.collection("products")
    try {
      ref.get().then((snapshot)=> {
        counter = snapshot.size;
        context.commit('countItemList', counter);
      })
    }catch (e) {
      console.error(e)
    }
  },
  addToItemListAction(context) {
    let tempArray = [];
    const ref = fireDb.collection("products").limit(9)
    try {
      ref.get().then((snapshot)=> {
        snapshot.docs.forEach(doc=> {
          tempArray.push(doc.data());
        });
        context.commit('addToItemList', tempArray);
      })
    }catch (e) {
      console.error(e)
    }
  },
  paginateItemListAction(context,page) {
    let tempArray = [];
    let index = page * 9;
    index = index - 9;
    console.log(index);
    const ref = fireDb.collection("products").startAt(5).limit(9)
    try {
      ref.get().then((snapshot)=> {
        snapshot.docs.forEach(doc=> {
          tempArray.push(doc.data());
        });
        console.log(tempArray);
        context.commit('addToItemList', tempArray);
      })
    }catch (e) {
      console.error(e)
    }
  },
  setItemListAction(context,item) {
    let kategorieList = [];
    const ref = fireDb.collection("products").where('kategorie','==',item)
    try {
      ref.get().then((snapshot)=> {
        snapshot.docs.forEach(doc=> {
          kategorieList.push(doc.data());
        });
        context.commit('setItemList', kategorieList);
      })
    }catch (e) {
      console.error(e)
    }
  },
  filterItemListByTitelAction(context,item) {
    let titelList = [];
    const ref = fireDb.collection("products").where('titel', '==', item)
    try {
      ref.get().then((snapshot)=>{
        snapshot.docs.forEach(doc=> {
          titelList.push(doc.data());
        });
        context.commit('setItemList', titelList);
      })
    }catch (e) {
      console.error(e)
    }
  },
  sortDesItemListAction(context){
    let sortedList = [];
    const ref = fireDb.collection("products").orderBy('preis')
    try {
      ref.get().then((snapshot) => {
        snapshot.docs.forEach(doc=> {
          sortedList.unshift(doc.data());
        });
        context.commit('sortDesItemList', sortedList)
      })
    }catch (e) {
      console.error(e)
    }
  },
  sortAscItemListAction(context) {
    let sortedList = [];
    const ref = fireDb.collection("products").orderBy('preis')
    try {
      ref.get().then((snapshot) => {
        snapshot.docs.forEach(doc=> {
          sortedList.push(doc.data());
        });
        context.commit('sortDesItemList', sortedList)
      })
    }catch (e) {
      console.error(e)
    }
  }
}

export const getters = {
  getItemList(state) {
    return state.itemList;
  },
  getProductCount(state) {
    return state.totalProduct;
  }
}
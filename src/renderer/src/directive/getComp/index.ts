import { ObjectDirective } from "@vue/runtime-core";

const getComp:ObjectDirective = {//用于无状态组件获取子组件vnode
  beforeMount(el, binding) {

  }
  , mounted(el, binding,vnode) {
    let ret = vnode
    console.log(`vnode`,vnode);
    if(vnode.ref && 'i' in vnode.ref && 'ctx' in vnode.ref?.i){
      vnode.ref.i.ctx && (ret = vnode.ref.i.ctx)
    }
    binding && binding.value(ret);    // 关键
  }
  , unmounted(el) {
    // clearInterval(el.__vueSetInterval__);
  }
}

export default getComp

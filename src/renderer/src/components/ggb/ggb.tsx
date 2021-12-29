import { ref, FunctionalComponent, reactive, Ref, onMounted, defineComponent, PropType } from 'vue'
import style from './index.module.scss'
import { NInput, NButton, NSpin, NIcon, NModal, FormRules, NScrollbar } from 'naive-ui';
interface Props {
  // submitFn: (input: string, target: string) => void
  curClickBtnI?: Ref<string>
  style?: CSSModuleClasses
}
// interface AccData {
//   acc: string
//   , psw: string
// }
type Emit = {
  childClick: () => void;
}
export default function useGGb() {
  const sty = JSON.parse(JSON.stringify(style))
  const data: any = reactive({
    spinShow: false
    , modalShow: false
  })

  const mount = (el:any) => {
    console.log(`ggb`,el);
  }

  const GGb: FunctionalComponent<Props, Emit> =
    (props, ctx) => {
      const { emit, attrs } = ctx
      Object.assign(sty, props.style)
      // let item = props.item
      data.props = props
      // console.log(`props item`, props.item);

      return (
        <NSpin class={sty.con} show={data.spinShow}>
          <div class={sty.con} v-getComp={(el:any) => { mount(el) }} >
            fuck you bb
          </div>
        </NSpin>
      )
    }
  // export default (() => gridInput)(); //只有这样才能正常使用defineAsyncComponent挂载
  return {
    GGb
  }
}
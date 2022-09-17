<template>
  <h1>{{ msg }}</h1>
  <button @click="countChange(0, 1)">count is {{ count }}</button>
  <p>double count is {{ doubleConut }}</p>

  <div>
    <p>{{ state.name + " -- " + state.age }}</p>
    <p>{{ name + " -- " + age }}</p>
  </div>

  <button @click="handleChangeMsg">change msg</button>
</template>

<script setup lang="ts">
import {
  computed,
  getCurrentInstance,
  reactive,
  ref,
  toRefs,
  watch,
} from "vue";

// defineProps
defineProps<{ msg: string }>();
// const props = defineProps({
//   msg: {
//     type: String,
//     default: "",
//   },
// });
// const props = withDefaults(defineProps<{ msg: string }>(), {
//   msg: "msg",
// });
// props.msg

// defineEmits
// const emits = defineEmits(["changeMsg"]);
const emits = defineEmits<{
  (e: "changeMsg", value: string): void;
}>();

const count = ref<number>(0);
const doubleConut = computed(() => {
  return count.value * 2;
});
const countChange = (type: number, num: number): void => {
  if (type === 0) {
    count.value += num;
  } else if (type === 1) {
    count.value -= num;
  }
};
watch(count, (newV: number, oldV: number) => {
  console.log(newV, oldV);
});

const state = reactive({
  name: "wen",
  age: 23,
});
const { name, age } = toRefs(state);

const handleChangeMsg = () => {
  emits("changeMsg", "child-msg");
};

const { proxy } = getCurrentInstance() as any;
console.log(proxy.test);

// nextTick(() => {})

// slot
// const slots = useSlots();
// const defaultSlot = reactive(slots.default && slots.default().length);
// const titleSlot = reactive(slots.title && slots.title().length);

defineExpose({
  count,
  // ...toRefs(state),
  state,
});

// v-bind()：css 变量注入
const css = reactive({
  color: "#42b883",
});
</script>

<style scoped>
h1 {
  color: v-bind("css.color");
}
</style>

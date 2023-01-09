<template>
  <el-col :span="span" class="elCard">
    <el-card
      ref="card_content"
      :shadow="shadow"
      class="card_content card_item"
      :style="`height:${height}`"
    >
      <slot></slot>
      <slot name="content"></slot>
    </el-card>
  </el-col>
</template>

<script lang="ts" setup>
import { toRefs, ref } from 'vue'

interface Props {
  span?: number
  shadow?: 'always' | 'hover'
  height?: string
}

const props = withDefaults(defineProps<Props>(), {
  span: 24,
  shadow: 'always',
  height: 'auto'
})
const { span, shadow, height } = toRefs(props)
const card_content = ref()
defineExpose({
  card_content
})
</script>

<style scoped>
.card_content {
  padding: 2px;
  margin-bottom: 5px;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

/*隐藏滚动条*/
.card_content::-webkit-scrollbar {
  width: 0 !important;
}
:deep(.el-card__body){
  width: 100%;
  padding: 2px;
}
</style>

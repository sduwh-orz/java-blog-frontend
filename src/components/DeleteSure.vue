<template>
  <el-popover v-model:visible="visible" placement="top" :width="160" trigger="click">
    <p>确定要删除么？</p>
    <div style="text-align: right; margin: 0">
      <el-button size="small" text @click="visible = false">取消</el-button>
      <el-button type="primary" size="small" @click="click_delete">确认</el-button>
    </div>
    <template #reference>
      <el-button size="small" type="danger"> 删除 </el-button>
    </template>
  </el-popover>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const emits = defineEmits(['delete'])
const visible = ref(false)

function click_delete() {
  visible.value = false
  emits('delete')
}
</script>

<style scoped></style>

<template>
  <div class="login-modal-view">
    <el-dialog
      v-model="dialogVisible"
      title=""
      width="25%"
      :close-on-click-modal="false"
      :before-close="handleClose"
    >
      <div class="content">
        <RegisterComponents />
      </div>
      <!-- <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="dialogVisible = false"> Confirm </el-button>
          </div>
        </template> -->
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import RegisterComponents from "@/views/registerComponents/RegisterComponents.vue";
import { ref } from "vue";
import { ElMessageBox } from "element-plus";
import { useCommonStore } from "@/stores/modules/common";
const commonStore = useCommonStore();
const dialogVisible = ref(commonStore.showRegisterModal);
const handleClose = (done: () => void) => {
  commonStore.setShowRegisterModal(false);
  done();
  //   ElMessageBox.confirm("Are you sure to close this dialog?")
  //     .then(() => {
  //       done();
  //     })
  //     .catch(() => {
  //       // catch error
  //     });
};
watch(
  () => commonStore.showRegisterModal,
  (newVal: boolean) => {
    dialogVisible.value = newVal;
  },
  {
    immediate: true,
  }
);
</script>
<style scoped lang="less"></style>

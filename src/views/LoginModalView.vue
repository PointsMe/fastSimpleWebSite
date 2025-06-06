<template>
  <div class="login-modal-view">
    <el-dialog
    
      v-model="dialogVisible"
      title=""
      width="25%"
      :close-on-click-modal="false"
      :before-close="handleClose"
    >
      <div class="content" v-if="dialogVisible">
        <LoginComponents />
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
import LoginComponents from "@/views/loginComponents/LoginComponents.vue";
import { ref } from "vue";
import { ElMessageBox } from "element-plus";
import { useCommonStore } from "@/stores/modules/common";
import { getRandomString } from "@/utils";
const commonStore = useCommonStore();
const dialogVisible = ref(commonStore.showLoginModal);
const key = ref<string>(getRandomString(8))
const handleClose = (done: () => void) => {
  commonStore.setShowLoginModal(false);
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
  () => commonStore.showLoginModal,
  (newVal: boolean) => {
    dialogVisible.value = newVal;
  },
  {
    immediate: true,
  }
);
</script>
<style scoped lang="less"></style>

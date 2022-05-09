<script setup>
import { useFileSystemAccess } from "@vueuse/core";
const { open, file } = useFileSystemAccess({
  dataType: "ArrayBuffer",
  types: [
    {
      description: "image",
      accept: {
        "image/plain": [".png", ".jpg"],
      },
    },
  ],
  excludeAcceptAllOption: true,
});

const openFile = async () => {
  await open();
  console.log(file.value);
};
</script>

<template>
  <div>
    <button @click="openFile">打开文件</button>
  </div>
</template>

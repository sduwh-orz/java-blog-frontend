<script setup lang="ts">
    import request from '@/utils/request'

    request.get("/user/logout").then(res => {
        window.location.href = '/login'
    })
</script>
<template>

</template>
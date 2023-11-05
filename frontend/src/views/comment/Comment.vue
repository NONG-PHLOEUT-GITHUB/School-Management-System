<template>
    <custom-title icon="mdi-lightbulb-on">
        <span class="d-inline-block capitalize-first-letter">My Comment</span>
    </custom-title>
    <comment/>
</template>
<script>
import Comment from "@/components/comments/Comment.vue"
export default ({
    components:{
        Comment
    }
})
</script>


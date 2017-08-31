<template>
    <div class="comments">
        <p>
        {{comment.description}}
        </p>
    </div>
</template>

<script>
export default {
        name: 'Comments',
        props: ["comment"],
        data() {
            return {
            }
        },
         computed: {
            
        }
}
</script>

<style scoped>

</style>
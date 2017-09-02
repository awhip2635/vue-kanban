<template>
    <div class="foot">
        <div class="container-fluid">
            <div class="row">
                <div class="bottom">
                    <div class="col-xs-12 col-sm-3">
                        <h4>Website Developed By:</h4>
                    </div>
                    <div class="col-xs-12 col-sm-2">
                        <a href="https://github.com/awhip2635">
                            <h4>Alex Whipple</h4>
                        </a>
                    </div>
                    <div class="col-xs-12 col-sm-2">
                        <a href="https://treverjohnston.github.io/">
                            <h4>Trever Johnston</h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'foot',
        data() {
            return {
            }
        }
    }

</script>
<style scoped>
    .bottom {
        background-color: rgba(0, 0, 0, .8);
        /* padding: 2rem 0 2rem 0; */
        color: white;
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 4rem;
    }

    a {
        color: white;
    }
</style>
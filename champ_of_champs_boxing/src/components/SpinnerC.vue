<template>
<div class="spinner text-light text-center">
    <span>L</span>
    <span>O</span>
    <span>A</span>
    <span>D</span>
    <span>I</span>
    <span>N</span>
    <span>G</span>
</div>
</template>

<script>
    export default {
        name:"SpinnerC"
    }
</script>

<style scoped>
.spinner {
    margin-top: 100px;
}
.spinner span {
    font-size: 40px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
    animation: blur 10s linear infinite;
    line-height: 20px;
    transition: all 0.5s;
    letter-spacing: 0.2em;
}

@keyframes blur {
    0%, 90% {
        filter: blur(0);
    }

    50% {
        filter: blur(10px);
    }
}
</style>
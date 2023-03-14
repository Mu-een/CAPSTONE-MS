<template>
    <footer class="container-fluid">
        <div class="footerText text-center">
            <p> &copy; {{ currentYear }} CHAMP OF CHAMPS BOXING. CAPE TOWN, SOUTH AFRICA. ALL RIGHTS RESERVED</p>
            <p>DESIGNED BY MU-EEN SLAMAT </p>
        </div> 
        <div class="socials text-center" v-for="items in socials" :key="items">
            <p>FOLLOW US</p>
            <a :href="items.linkedin" target="_blank" style="font-size: 30px; color: #F1F2EE;"><i class="bi bi-linkedin"></i></a>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterC',
    data(){
        return {
            currentYear : new Date().getFullYear(),
            socials: [
                {
                    linkedin: 'https://www.linkedin.com/in/mueenslamat/'
                }
            ]
        }
    }
}
</script>

<style scoped>
footer {
background-color:#BFB7B6;
padding: 50px;
}

.footerText {
padding-top: 50px;
line-height: 0.8;
}
</style>
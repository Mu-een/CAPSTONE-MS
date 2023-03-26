<template>
    <footer class="container-fluid">
        <div class="footerText text-center">
            <p> &copy; {{ currentYear }} CHAMP OF CHAMPS BOXING. CAPE TOWN, SOUTH AFRICA. ALL RIGHTS RESERVED</p>
            <p>DESIGNED BY MU-EEN SLAMAT </p>
        </div> 
        <div class="socials text-center" v-for="items in socials" :key="items">
            <p>FOLLOW US</p>
            <a :href="items.linkedin" target="_blank" style="font-size: 30px; color: black;"><i class="bi bi-linkedin"></i></a>
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
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');

footer {
background-color:#DEDBD8;
padding: 50px;
font-family: 'Alata', sans-serif;
}

.footerText {
padding-top: 50px;
line-height: 0.8;
}
</style>
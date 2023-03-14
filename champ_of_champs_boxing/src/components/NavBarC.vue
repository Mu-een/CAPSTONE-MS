<template>
    <nav class="navbar navbar-expand-lg bg-body-transparent">
        <div class="container-fluid ">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/">Home<i class="bi bi-house"></i></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/events">Events<i class="bi bi-list"></i></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/admin">Admin<i class="bi bi-person"></i></router-link>
                    </li>
                </ul>
                <img src="https://i.postimg.cc/5ybDSZXM/shirt-1545782662-3abb6c46d471a5f79609be7df4b2e867-removebg-preview-1.png" style="height: 120px;" alt="">
                <ul class="navbar-nav ms-auto" style="list-style: none;display: flex;">
                    <li class="nav-item">
                        <router-link to="/cart">Cart<i class="bi bi-cart"></i></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/login">Login<i class="bi bi-box-arrow-in-right"></i></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/register">Register<i class="bi bi-pencil-square"></i></router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBarC'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');

nav {
    background-color: #BFB7B6;
    padding: 30px;
    font-family: 'DM Serif Display', serif;

}

a {
    text-decoration: none;
    color: #435058;
    font-size: 25px;
    padding: 5px;
}
</style>
<template>
    <footer class="footer footer_bg">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="footer__logobox">
                        <img src="../assets/images/icons/Logo-white.png" alt="" class="footer__logo">
                    </div>
                    <ul class="footer__socials">
                        <li class="footer__social">
                            <a href="https://www.facebook.com/ptuxerman" target="_blank" class="footer__link">
                                <img src="../assets/images/icons/facebook-icon.png" alt="" class="footer__pic">
                            </a>
                        </li>
                        <li class="footer__social">
                            <a href="https://www.instagram.com/ptuxerman/" target="_blank" class="footer__link">
                                <img src="../assets/images/icons/Instagram-icon.png" alt="" class="footer__pic">
                            </a>
                        </li>
                        <li class="footer__social">
                            <a href="https://www.youtube.com/channel/UClI9aidW3X044NeB4QS-yxw" target="_blank" class="footer__link">
                                <img src="../assets/images/icons/YouTube-icon.png" alt="" class="footer__pic">
                            </a>
                        </li>
                        <li class="footer__social">
                            <a href="https://vk.com/ptuxerman" target="_blank" class="footer__link">
                                <img src="../assets/images/icons/VK-icon.png" alt="" class="footer__pic">
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <h3 class="footer__title">Навигация</h3>
                    <ul class="footer__list">
                        <li class="footer__item" v-for="({ name,path }, i) in footerMenu" :key="i">
                            <router-link :to="path" class="footer__link">{{ name }}</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <h3 class="footer__title">Связь</h3>
                    <ul class="footer__list">
                        <li>
                            <p>Украина, Киев</p>
                        </li>
                        <li>
                            <p>Юля (Всесильная) : +380980133671</p>
                            <p>Наташа (DJ Букирующая) +380674538878</p>
                        </li>
                        <li class="mail__link">
                           <a class="footer__link" href="mailto:ptushkevich@gmail.com" target="_blank">
                               <p>ptushkevich@gmail.com</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
 import {menuList} from '../constants/menuList'
 export default {
     data() {
         return {
            footerMenu: menuList
         }
     },
 }
</script>
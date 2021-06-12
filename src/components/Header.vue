<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container">
			<a class="navbar-brand logo" href="/"><img src="../assets/images/icons/Logo.png" alt=""></a>
			<div class="collapse collapse--fontsize navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ">
					<li class="nav-item icon" v-for="(menu, index) in headerMenuList" :key="index">
						<router-link class="nav-link active" aria-current="page" :to="menu.path">
							{{ menu.name }}
						</router-link>
					</li>
				</ul>
				<div class="links">
					<a href="https://www.facebook.com/ptuxerman" target="_blank"><img src="../assets/images/icons/facebook-icon.png" alt="" /></a>
					<a href="https://www.instagram.com/ptuxerman/" target="_blank"><img src="../assets/images/icons/Instagram-icon.png" alt="" /></a>
					<a href="https://www.youtube.com/channel/UClI9aidW3X044NeB4QS-yxw" target="_blank"><img src="../assets/images/icons/YouTube-icon.png" alt="" /></a>
					<a href="https://vk.com/ptuxerman" target="_blank"><img src="../assets/images/icons/VK-icon.png" alt="" /></a>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import {menuList} from '../constants/menuList'
	export default {
		data() {
			return {
				headerMenuList: menuList,
			}
		},
	}
</script>

<style lang="sass">
.links
  a
    margin: 0 7px

  img
    width: 21px
    height: 20px
.navbar-brand
	img
		width: 48px
		height: 48px
.navbar-nav
	margin-right: 24%!important
.logo
  margin-right: 5%	
.collapse--fontsize
  font-size: 18px
  font-weight: 600
.nav-item
  padding: 0 25px

  &:hover
    background-color: #ededed
</style>
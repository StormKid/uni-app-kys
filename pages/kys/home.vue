<template>
	<view>
		<team v-if="PageCur==0"></team>
		<shopping v-if="PageCur==1"></shopping>
		<introduce v-if="PageCur==2"></introduce>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="0">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/icon/team' + [PageCur==0?'-select':''] + '.png'"></image>
				</view>
				<view :class="PageCur==0?'kys-pink-gray':'text-gray'">悦诗团队</view>
			</view>
			<view class="action" @click="NavChange" data-cur="1">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/icon/shoping' + [PageCur == 1?'-select':''] + '.png'"></image>
				</view>
				<view :class="PageCur==1?'kys-pink-gray':'text-gray'">妈妈良品</view>
			</view>
			<view class="action"  @click="NavChange" data-cur="2">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/icon/introduce' + [PageCur == 2?'-select':''] + '.png'"></image>
				</view>
				<view :class="PageCur==2?'kys-pink-gray':'text-gray'">品牌介绍</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 0
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>

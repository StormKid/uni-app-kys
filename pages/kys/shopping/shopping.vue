<template>
	<view>
		<view class="titlebar kys-main"></view>
		<view class="cu-bar kys-main"><view class="action text-bold">妈妈良品</view></view>
		<view class="cu-bar search bg-white">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索图片、文章、视频" confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-pink light shadow-blur round">搜索</button>
			</view>
		</view>
		<view class="">
		<mescroll @down="downCallback" @up="upCallback">
			
		</mescroll>
		</view>
		
		
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
			/*下拉刷新的回调, 有三种处理方式: */
				downCallback(mescroll){
					
				},
				/*上拉加载的回调*/
				upCallback(mescroll) {
				}
			}
		}
</script>

<style>
.titlebar{
	height:50upx ;
}
</style>

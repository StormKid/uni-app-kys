<template>
	<view>
		<view class="cu-bar kys-main"></view>
		<view class="cu-bar kys-main"><view class="content text-bold">悦诗团队</view></view>
		<view class="VerticalBox">
			<scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop" style="height:calc(100vh - 375upx)">
				<view class="cu-item" :class="index == tabCur ? 'text-blue cur' : ''" v-for="(item, index) in list" :key="index" @tap="TabSelect" :data-id="index">
					{{ item.name }}
				</view>
			</scroll-view>
			<scroll-view class="VerticalMain" scroll-y scroll-with-animation style="height:calc(100vh - 375upx)" :scroll-into-view="'main-' + mainCur" @scroll="VerticalMain">
				<view class="padding-top padding-lr" v-for="(item, index) in list" :key="index" :id="'main-' + index">
					<view class="cu-bar solid-bottom bg-white">
						<view class="action">
							<text class="cuIcon-title text-blue"></text>
							{{ item.name }}
						</view>
					</view>
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);">
							</view>
							<view class="content">
								<view>
									<text class="text-cut">李医师</text>
								</view>
								<view class="text-gray text-sm flex">
									<view class="text-gray text-sm flex"><text class="text-cut">资质 8 年</text></view>
								</view>
							</view>
							<view class="action">
								<view class="cu-capsule round">
									<view class="cu-tag round bg-orange sm">产后瑜伽</view>
								</view>
							</view>
						</view>
						
						<view class="cu-item cur">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
							<view class="content">
								<view>
									<text class="text-cut">张医师</text>
								</view>
								<view class="text-gray text-sm flex">
									<view class="text-gray text-sm flex"><text class="text-cut">资质 5 年</text></view>
								</view>
							</view>
							<view class="action" >
								<view class="cu-capsule round">
									<view class='cu-tag bg-blue sm'>
										盆骨修复
									</view>
								</view>
							</view>
						</view>
						
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);">
							</view>
							<view class="content">
								<view>
									<text class="text-cut">李医师</text>
								</view>
								<view class="text-gray text-sm flex">
									<view class="text-gray text-sm flex"><text class="text-cut">资质 8 年</text></view>
								</view>
							</view>
							<view class="action">
								<view class="cu-capsule round">
									<view class="cu-tag round bg-orange sm">产后瑜伽</view>
								</view>
							</view>
						</view>
						
						<view class="cu-item cur">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
							<view class="content">
								<view>
									<text class="text-cut">张医师</text>
								</view>
								<view class="text-gray text-sm flex">
									<view class="text-gray text-sm flex"><text class="text-cut">资质 5 年</text></view>
								</view>
							</view>
							<view class="action" >
								<view class="cu-capsule round">
									<view class='cu-tag bg-blue sm'>
										盆骨修复
									</view>
								</view>
							</view>
						</view>
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);">
							</view>
							<view class="content">
								<view>
									<text class="text-cut">李医师</text>
								</view>
								<view class="text-gray text-sm flex">
									<view class="text-gray text-sm flex"><text class="text-cut">资质 8 年</text></view>
								</view>
							</view>
							<view class="action">
								<view class="cu-capsule round">
									<view class="cu-tag round bg-orange sm">产后瑜伽</view>
								</view>
							</view>
						</view>
						
						<view class="cu-item cur">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
							<view class="content">
								<view>
									<text class="text-cut">张医师</text>
								</view>
								<view class="text-gray text-sm flex">
									<view class="text-gray text-sm flex"><text class="text-cut">资质 5 年</text></view>
								</view>
							</view>
							<view class="action" >
								<view class="cu-capsule round">
									<view class='cu-tag bg-blue sm'>
										盆骨修复
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [],
			tabCur: 0,
			mainCur: 0,
			verticalNavTop: 0,
			load: true
		};
	},
	onLoad() {
		let list = [{}];
		for (let i = 0; i < 7; i++) {
			list[i] = {};
			switch (i) {
				case 0:
					list[i].name = '光谷店';
					break;
				case 1:
					list[i].name = '南湖店';
					break;
				case 2:
					list[i].name = '硚口店';
					break;
					F;
				case 3:
					list[i].name = '省妇幼店';
					break;
				case 4:
					list[i].name = '香港路店';
					break;
				case 5:
					list[i].name = '东西湖店';
					break;
				case 6:
					list[i].name = '汉阳店';
					break;
			}

			list[i].id = i;
		}
		this.list = list;
		this.listCur = list[0];
	},
	methods: {
		TabSelect(e) {
			this.tabCur = e.currentTarget.dataset.id;
			this.mainCur = e.currentTarget.dataset.id;
			this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50;
		},
		VerticalMain(e) {
			// #ifdef MP-ALIPAY
			return false; //支付宝小程序暂时不支持双向联动
			// #endif
			let that = this;
			let tabHeight = 0;
			if (this.load) {
				for (let i = 0; i < this.list.length; i++) {
					let view = uni.createSelectorQuery().select('#main-' + this.list[i].id);
					view.fields(
						{
							size: true
						},
						data => {
							this.list[i].top = tabHeight;
							tabHeight = tabHeight + data.height;
							this.list[i].bottom = tabHeight;
						}
					).exec();
				}
				this.load = false;
			}
			let scrollTop = e.detail.scrollTop + 10;
			for (let i = 0; i < this.list.length; i++) {
				if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
					this.verticalNavTop = (this.list[i].id - 1) * 50;
					this.tabCur = this.list[i].id;
					return false;
				}
			}
		}
	}
};
</script>

<style>
.fixed {
	position: fixed;
	z-index: 99;
}

.VerticalNav.nav {
	width: 200upx;
	white-space: initial;
}

.VerticalNav.nav .cu-item {
	width: 100%;
	text-align: center;
	background-color: #fff;
	margin: 0;
	border: none;
	height: 50px;
	position: relative;
}

.VerticalNav.nav .cu-item.cur {
	background-color: #f1f1f1;
}

.VerticalNav.nav .cu-item.cur::after {
	content: '';
	width: 8upx;
	height: 30upx;
	border-radius: 10upx 0 0 10upx;
	position: absolute;
	background-color: currentColor;
	top: 0;
	right: 0upx;
	bottom: 0;
	margin: auto;
}

.VerticalBox {
	display: flex;
}

.VerticalMain {
	background-color: #f1f1f1;
	flex: 1;
}
</style>

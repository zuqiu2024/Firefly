import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "https://zhanxx.de5.net/file/AgACAgUAAyEGAATXRHq-AAMRace0-_Uruw2IpC9XJ9ss2zhD1CkAAtgOaxvsf0FWEHEXn6ck3WUBAAMCAAN4AAM6BA.jpg",

	// 名字
	name: "Henan-FC",

	// 个人签名
	bio: "Hello, I'm Zhanxx.",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
			name: "qq",
			icon: "fa7-brands:qq",
			url: "http://wpa.qq.com/msgrd?v=3&uin=1647157028&site=qq&menu=yes",
			showName: false,
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:1647157028@qq.com",
			showName: false,
		},
	],
};

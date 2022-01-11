<template>
	<div>
		测试组件
		<SvgIcon name="my"></SvgIcon>
		<TestAuto />
		<el-button
			type="primary"
			round
			v-for="(item, index) in buttonTexts"
			@click="select(index)"
			>{{ item }}
		</el-button>
		<el-input
			v-if="inputVisible"
			style="width: 120px"
			class="w-80 p-2 ml-2"
			ref="InputRef"
			v-model="inputValue"
			size="small"
			@keyup.enter="handleInputConfirm"
			@blur="handleInputConfirm"
			clearable
		></el-input>
		<el-button
			v-else
			class="button-new-tag ml-1"
			size="small"
			@click="showInput"
			>+ New Tag</el-button
		>
	</div>
</template>
<script setup>
import { ref, nextTick } from "vue";
import TestAuto from "./TestAuto.vue";
const buttonTexts = ref(["btn1", "btn 2", "btn 3"]);
const btnindex = ref(0);
const select = function (index) {
	btnindex.value = index;
};
const inputVisible = ref(false);

const InputRef = ref(null);
const showInput = () => {
	inputVisible.value = true;
	nextTick(() => {
		InputRef.value.focus();
	});
};
const inputValue = ref("");

const handleInputConfirm = () => {
	if (inputValue.value) {
		buttonTexts.value.push(inputValue.value);
	}
	inputVisible.value = false;
	inputValue.value = "";
};
</script>

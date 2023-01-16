import { ref, onMounted, reactive, h } from 'vue';
export const params = reactive({
    username: "",
    password: "123",
    role: "管理员",
    token: "",
    isLogin: false
})
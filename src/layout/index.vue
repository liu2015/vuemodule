<template>
<a-layout id="components-layout-demo-responsive">
    <a-layout-sider class="layout-demo" breakpoint="lg" collapsed-width="0" @collapse="onCollapse" @breakpoint="onBreakpoint">
        <div class="neirong">
            <p>内容</p>
        </div>
        <div class="logo" />
        <a-menu theme="dark" mode="inline" :default-selected-keys="['4']">
            <a-menu-item key="1">
                <a-icon type="user" />
                <span class="nav-text">
                    <router-link to="/home/login1" class="nav-text">动作按钮</router-link>
                </span>
            </a-menu-item>
            <a-menu-item key="2">
                <a-icon type="video-camera" />
                <span class="nav-text">
                    <router-link to="/Home" class="nav-text">回到 home</router-link>
                </span>
            </a-menu-item>
            <a-menu-item key="3">
                <a-icon type="upload" />
                <span class="nav-text">nav 3</span>
            </a-menu-item>
            <a-menu-item key="4">
                <a-icon type="user" />
                <span class="nav-text">nav 4</span>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
    <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
            <About></About>
        </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px 0' }">
            <div :style="{ padding: '24px', background: '#fff', minHeight: '80vh' }">
                <!-- 这里可以配置路由 内容 -->
                <router-view />
            </div>
        </a-layout-content>
        <a-layout-footer style="textalign: center">
            Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
    </a-layout>
</a-layout>
</template>

<script>
import About from "../views/About.vue";
export default {
    components: {
        About,
    },

    methods: {
        onCollapse(collapsed, type) {
            console.log(collapsed, type);
        },
        onBreakpoint(broken) {
            console.log(broken);
        },
    },
};
</script>

<style lang="scss" scoped>
#components-layout-demo-responsive .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.219);
    margin: 16px;
}

.layout-demo {
    height: 90vh;
    right: 0%;
}

.nav-text {
    color: red;
}

.neirong {
    margin: auto;
    text-align: center;
    padding: 10px;
    color: red;
}
</style>

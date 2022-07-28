//求和相关的配置
/* eslint-disable */
export default {
    namespaced: true,
    actions: {},
    mutations: {
        uniqueTabs(state, tabOption) {
            // let {label} = {tabOption};
            let label = tabOption.label;
            let contain = state.tabList.find(e => e.label == label)
            if (!contain) {
                //激活路由
                state.tabList.push(tabOption)
                //	保存活动的tab
                state.activeTab = label;
            }

        },
        removeTab(state, tabName) {
            if (tabName == '/home') {
                return
            }
            let index = state.tabList.findIndex((element) => element.name == tabName);
            state.tabList.splice(index, 1);
            //	将关闭的前一个tab设置为活动的表情
            if (index < state.tabList.length) {
                state.activeTab = state.tabList[index]
            } else {
                state.activeTab = state.tabList[index - 1]

            }
        },
        changActive(state, option) {

            state.activeTab=option
        }

    },
    state: {
        tabList: [
            {
                label: '首页',
                name: '/home'
            }
        ],
        activeTab: {
            label: '首页',
            name: '/home'
        }

    },
    getters: {},
}
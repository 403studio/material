# 支持自定义选择值和未选中值得Checkbox
基于Vant checkbox组件二次开发

安装使用：`zlzv add checkbox`

::: demo 通过`checked-value`和`un-checked-value`来指定值

```html
<zv-checkbox class="test" v-model="test" checked-value="X" un-checked-value="">选项框一</zv-checkbox>
<zv-checkbox v-model="test2" checked-value="yes" un-checked-value="no">选项框二</zv-checkbox>
<zv-checkbox v-model="test3" @change="change" @click="click" shape="square">选项框三</zv-checkbox>

<script>
export default {
  data () {
    return {
      test: '',
      test2: 'yes',
      test3: true
    }
  },
  methods: {
    change (value) {
      console.log(value)
    },
    click (e) {
      console.log(e)
    }
  }
}
</script>
```

:::

## Props
兼容所有vant checkbox的相关参数和事件处理

| 参数 | 说明 | 类型 | 可选值| 默认值 |
|-|-|-|-|-|
| checked-value | 指定选中状态值 | string/boolean |  — | true |
| un-checked-value | 指定未选中状态值 | string/boolean |  — | false |

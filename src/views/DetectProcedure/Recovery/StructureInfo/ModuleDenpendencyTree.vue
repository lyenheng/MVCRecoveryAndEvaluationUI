<template>
  <div id="moduleDependencyTree"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  props: ["moduleDependencyTree"],
  data() {
    return {
      mychart: null,
    };
  },

  mounted() {
    let chartDom = document.getElementById("moduleDependencyTree");
    this.myChart = echarts.init(chartDom);
    this.handleDisplay();
  },

  watch: {
    moduleDependencyTree(newValue) {
      this.handleDisplay(newValue);
    },
  },

  methods: {
    handleDisplay(treeData) {
      const option = {
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove",
        },
        series: [
          {
            type: "tree",
            data: treeData,
            top: "1%",
            left: "20%",
            bottom: "1%",
            right: "30%",
            symbolSize: 7,
            label: {
              position: "top",
              verticalAlign: "middle",
              align: "right",
              fontSize: 9,
            },
            leaves: {
              label: {
                position: "right",
                verticalAlign: "middle",
                align: "left",
              },
            },
            emphasis: {
              focus: "descendant",
            },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750,
          },
        ],
      };
      option && this.myChart.setOption(option);
    },
  },
};
</script>

<style>
#moduleDependencyTree {
  height: 170px;
  width: 350px;
}
</style>

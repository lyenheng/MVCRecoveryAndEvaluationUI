<template>
  <div id="layersRelationGraph"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  props: ["layersRelationGraph"],
  data() {
    return {
      mychart: null,
    };
  },

  mounted() {
    let chartDom = document.getElementById("layersRelationGraph");
    this.myChart = echarts.init(chartDom);
    this.handleDisplay();
  },

  watch: {
    layersRelationGraph(newValue) {
      this.handleDisplay(newValue);
    },
  },

  methods: {
    handleDisplay(graphData) {
      this.myChart.hideLoading();
      graphData.nodes.forEach(function (node) {
        node.label = {
          show: node.symbolSize > 10,
        };
      });
      const option = {
        title: {
          text: "MVC层次调用关系图",
          subtext: "Default layout",
          top: "bottom",
          left: "right",
        },
        tooltip: {},
        legend: [
          {
            data: graphData.categories.map(function (a) {
              return a.name;
            }),
          },
        ],
        animationDuration: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            name: "MVC层次调用关系图",
            type: "graph",
            layout: "circular",
            data: graphData.nodes,
            links: graphData.links,
            categories: graphData.categories,
            roam: true,
            label: {
              position: "right",
              formatter: "{b}",
            },
            lineStyle: {
              color: "source",
              curveness: 0.3,
            },
            emphasis: {
              focus: "adjacency",
              lineStyle: {
                width: 10,
              },
            },
          },
        ],
      };
      option && this.myChart.setOption(option);
    },
  },
};
</script>

<style>
#layersRelationGraph {
  height: 500px;
  width: 500px;
}
</style>

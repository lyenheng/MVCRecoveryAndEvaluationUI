<template>
  <div>
    <div id="main"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "ProjectInfo",
  props: ["moduleDependencyGraph"],
  data() {
    return {
      id: "",
      myChart: null,
    };
  },
  created() {
    // console.log(this.$route.params);
  },

  watch: {
    moduleDependencyGraph(newValue) {
      console.log(newValue);
      this.handleGraph(newValue);
    },
  },

  mounted() {
    let chartDom = document.getElementById("main");
    this.myChart = echarts.init(chartDom);
  },

  methods: {
    handleGraph(moduleDependencyGraph) {
      const nodes = moduleDependencyGraph.nodes.map((node) => {
        return {
          name: node.artifactId,
          tooltip: {
            formatter: () => {
              return `<pre><b>groupId:</b>${node.groupId}
<b>artifactId:</b>${node.artifactId}</pre>`;
            },
          },
          itemStyle: {
            color: node.moduleType === "POM" ? "#0396FF" : "skyblue",
          },
        };
      });
      const links = moduleDependencyGraph.edges.map((edge) => {
        return {
          source: edge.begin,
          target: edge.end,
          symbolSize: [5, 20],
          label: {
            show: true,
          },
          lineStyle: {
            width: 5,
            curveness: 0.2,
          },
        };
      });

      let option = {
        title: {},
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            type: "graph",
            layout: "circular",
            symbolSize: [180, 35],
            symbol: "rect",
            roam: true,
            label: {
              show: true,
            },
            edgeSymbol: ["circle", "arrow"],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              fontSize: 8,
            },

            data: nodes,
            links: links,
            lineStyle: {
              opacity: 0.9,
              width: 1,
              curveness: 0,
            },
          },
        ],
      };

      option && this.myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
#main {
  height: 350px;
  width: 800px;
}
</style>

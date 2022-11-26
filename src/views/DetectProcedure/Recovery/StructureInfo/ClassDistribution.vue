<template>
  <div class="class-distribution-container">
    <div class="class-distribution-description">
      <div>
        <div>{{ this.controllerNum }}</div>
        <div>Controller</div>
      </div>
      <div>
        <div>{{ this.serviceNum }}</div>
        <div>Service</div>
      </div>
      <div>
        <div>{{ this.daoNum }}</div>
        <div>Dao</div>
      </div>
      <div>
        <div>{{ this.othersNum }}</div>
        <div>Others</div>
      </div>
    </div>
    <div id="classDistribution"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  props: ["classInfo"],

  data() {
    return {
      controllerNum: 0,
      serviceNum: 0,
      daoNum: 0,
      othersNum: 0,
      myChart: null,
    };
  },

  mounted() {
    let chartDom = document.getElementById("classDistribution");
    this.myChart = echarts.init(chartDom);
    this.handleDisplay();
  },

  watch: {
    classInfo(newValue) {
      let controllerNum, serviceNum, daoNum, othersNum;
      controllerNum = serviceNum = daoNum = othersNum = 0;
      newValue.forEach((element) => {
        switch (element.classType) {
          case "CONTROLLER":
            controllerNum++;
            break;
          case "SERVICE":
            serviceNum++;
            break;
          case "DAO":
            daoNum++;
            break;
          default:
            othersNum++;
            break;
        }
      });
      this.controllerNum = controllerNum;
      this.serviceNum = serviceNum;
      this.daoNum = daoNum;
      this.othersNum = othersNum;
      this.handleDisplay(controllerNum, serviceNum, daoNum, othersNum);
    },
  },

  methods: {
    handleDisplay(controllerNum, serviceNum, daoNum, othersNum) {
      const option = {
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "各层类分布",
            type: "pie",
            radius: "80%",
            avoidLabelOverlap: false,
            data: [
              { value: controllerNum, name: "controller" },
              { value: serviceNum, name: "service" },
              { value: daoNum, name: "dao" },
              { value: othersNum, name: "others" },
            ],
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
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
.class-distribution-container {
  display: flex;
  align-items: center;
  flex-flow: row-reverse nowrap;
}
.class-distribution-description > div {
  font-size: 10px;
  text-align: center;
  margin-bottom: 3px;
  color: gray;
}
.class-distribution-description > div > div:nth-child(1) {
  font-size: 18px;
  font-weight: 700;
}
#classDistribution {
  height: 150px;
  width: 150px;
}
</style>

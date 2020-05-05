<template>
  <div class="text-center section">
    <h2 class="h2">诗词日历</h2>
    <div class="wnrl_k">
      <div class="wnrl_k_zuo">
        <div class="wnrl_xuanze_top">
          <input
            type="button"
            @click="prevYear()"
            :disabled="currentYear === 1990"
            value="<"
          />
          <select @change="yearChange($event)" :value="currentYear">
            <option value="1990">1990</option>
            <option value="1991">1991</option>
            <option value="1992">1992</option>
            <option value="1993">1993</option>
            <option value="1994">1994</option>
            <option value="1995">1995</option>
            <option value="1996">1996</option>
            <option value="1997">1997</option>
            <option value="1998">1998</option>
            <option value="1999">1999</option>
            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
            <option value="2031">2031</option>
            <option value="2032">2032</option>
            <option value="2033">2033</option>
            <option value="2034">2034</option>
            <option value="2035">2035</option>
            <option value="2036">2036</option>
            <option value="2037">2037</option>
            <option value="2038">2038</option>
            <option value="2039">2039</option>
            <option value="2040">2040</option>
            <option value="2041">2041</option>
            <option value="2042">2042</option>
            <option value="2043">2043</option>
            <option value="2044">2044</option>
            <option value="2045">2045</option>
            <option value="2046">2046</option>
            <option value="2047">2047</option>
            <option value="2048">2048</option>
            <option value="2049">2049</option>
            <option value="2050">2050</option>
          </select>
          <input
            type="button"
            @click="nextYear()"
            value=">"
            :disabled="currentYear === 2050"
          />
          <input type="button" @click="prevMonth()" value="<" />
          <select @change="monthChange($event)" :value="currentMonth"
            ><option value="01">01月</option
            ><option value="02">02月</option
            ><option value="03">03月</option
            ><option value="04">04月</option
            ><option value="05">05月</option
            ><option value="06">06月</option
            ><option value="07">07月</option
            ><option value="08">08月</option
            ><option value="09">09月</option
            ><option value="10">10月</option
            ><option value="11">11月</option
            ><option value="12">12月</option></select
          >
          <input type="button" @click="nextMonth()" value=">" />
          <input type="button" @click="backToday()" value="回到今天" />
          <span class="wnrl_xuanze_top_wenzi"
            >{{ currentYear }}年{{ currentMonth }}月</span
          >
        </div>
        <div class="wnrl_xingqi">一</div>
        <div class="wnrl_xingqi">二</div>
        <div class="wnrl_xingqi">三</div>
        <div class="wnrl_xingqi">四</div>
        <div class="wnrl_xingqi">五</div>
        <div class="wnrl_xingqi">六</div>
        <div class="wnrl_xingqi">日</div>
        <div class="wnrl_kongbai" v-for="item in firstBlank" :key="item"></div>
        <div class="wnrl_riqi" v-for="item in dateArr" :key="item.glText">
          <a
            href="javascript:;"
            :class="[item.aClass, { active: item.glText === currentDay }]"
            @click="clickDay(item.glText)"
            ><span :class="item.glClass">{{ item.glText }}</span
            ><span :class="item.bzlClass">{{ item.bzlText }}</span></a
          >
        </div>
        <div class="wnrl_kongbai" v-for="item in lastBlank" :key="item"></div>
      </div>
      <div
        class="wnrl_k_you"
        v-for="item in detailArr"
        :key="item.nongli"
        :style="{ display: item.riqi === currentDay ? 'block' : 'none' }"
      >
        <div class="wnrl_k_you_id_biaoti">{{ item.biaoti }}</div>
        <div class="wnrl_k_you_id_wnrl_riqi">{{ item.riqi }}</div>
        <div class="wnrl_k_you_id_wnrl_nongli">{{ item.nongli }}</div>
        <div class="wnrl_k_you_id_wnrl_nongli_ganzhi">
          {{ item.ganzhi }}
        </div>
        <div class="wnrl_k_you_id_wnrl_jieri" v-if="item.jieri">
          <span class="wnrl_k_you_id_wnrl_jieri_biaoti">节日</span
          ><span class="wnrl_k_you_id_wnrl_jieri_neirong"
            >{{ item.jieri }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDocData } from "./data";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      currentMonth: null,
      currentYear: null,
      currentDay: null,
      lastBlank: [],
      firstBlank: [],
      dateArr: [],
      detailArr: []
    };
  },
  mounted() {
    this.backToday();
  },
  methods: {
    fetchDetail() {
      const query = `${this.currentYear}-${this.currentMonth}`;
      fetch(`/api/ajax/?q=${query}`, {
        method: "get"
      })
        .then(stream => stream.text())
        .then(response => {
          const { firstBlank, lastBlank, dateArr, detailArr } = getDocData(
            response
          );
          this.firstBlank = [...Array(firstBlank).keys()].map(x => "first" + x);
          this.lastBlank = [...Array(lastBlank).keys()].map(x => "last" + x);
          this.dateArr = dateArr;
          this.detailArr = detailArr;
        });
    },
    clickDay(day) {
      this.currentDay = day;
    },
    getString(monthOrDay) {
      return parseInt(monthOrDay / 10) === 0 ? `0${monthOrDay}` : monthOrDay;
    },
    prevMonth() {
      let number = parseInt(this.currentMonth);
      number--;
      if (number === 0) {
        number = 12;
        this.currentYear--;
      }
      this.currentMonth = this.getString(number);
      this.fetchDetail();
    },
    nextMonth() {
      let number = parseInt(this.currentMonth);
      number++;
      if (number === 13) {
        number = 1;
        this.currentYear++;
      }
      this.currentMonth = this.getString(number);
      this.fetchDetail();
    },
    prevYear() {
      if (this.currentYear === 1990) {
        return;
      }
      let number = parseInt(this.currentYear);
      number--;
      this.currentYear = this.getString(number);
      this.fetchDetail();
    },
    nextYear() {
      if (this.currentYear === 2050) {
        return;
      }
      let number = parseInt(this.currentYear);
      number++;
      this.currentYear = this.getString(number);
      this.fetchDetail();
    },
    monthChange(event) {
      this.currentMonth = event.target.value;
      this.fetchDetail();
    },
    yearChange(event) {
      this.currentYear = parseInt(event.target.value);
      this.fetchDetail();
    },
    backToday() {
      const month = new Date().getMonth() + 1;
      const day = new Date().getDate();
      this.currentMonth = this.getString(month);
      this.currentYear = new Date().getFullYear();
      this.currentDay = this.getString(day);
      this.fetchDetail();
    }
  }
};
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-track {
  display: none;
}
.custom-calendar.vc-container {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 90px;
  --day-height: 90px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;
  border-radius: 0;
  & .vc-header {
    background-color: #f1f5f8;
    padding: 10px 0;
  }
  & .vc-weeks {
    padding: 0;
  }
  & .vc-weekday {
    background-color: var(--weekday-bg);
    border-bottom: var(--weekday-border);
    border-top: var(--weekday-border);
    padding: 5px 0;
  }
  & .vc-day {
    padding: 0 5px 3px 5px;
    text-align: left;
    height: var(--day-height);
    min-width: var(--day-width);
    background-color: white;
    &.weekday-1,
    &.weekday-7 {
      background-color: #eff8ff;
    }
    &:not(.on-bottom) {
      border-bottom: var(--day-border);
      &.weekday-1 {
        border-bottom: var(--day-border-highlight);
      }
    }
    &:not(.on-right) {
      border-right: var(--day-border);
    }
  }
  & .vc-day-dots {
    margin-bottom: 5px;
  }
}
</style>

<template>
  <div class="calendar">
    <div class="header">
      <button class="btn btn-sm btn-dark" @click="prevMonth">Previous Month</button>
      <h2>{{ month }} {{ year }}</h2>
      <button class="btn btn-sm btn-dark" @click="nextMonth">Next Month</button>
    </div>
    <table>
      <thead>
      <tr>
        <th>Sun</th>
        <th>Mon</th>
        <th>Tue</th>
        <th>Wed</th>
        <th>Thu</th>
        <th>Fri</th>
        <th>Sat</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="week in weeks" :key="week">
        <td v-for="day in week" :key="day.date" :class="{ today: day.today, 'not-in-month': !day.inMonth }">
          {{ day.date }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  data() {
    return {
      date: new Date()
    }
  },
  computed: {
    month() {
      return this.date.toLocaleString('default', {month: 'long'})
    },
    year() {
      return this.date.getFullYear()
    },
    weeks() {
      const daysInMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate()
      const daysInPrevMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate()
      const firstDayOfMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay()
      const lastDayOfMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay()
      const weeks = []
      let week = []
      for (let i = 0; i < firstDayOfMonth; i++) {
        week.push({date: daysInPrevMonth - firstDayOfMonth + i + 1, inMonth: false})
      }
      for (let i = 1; i <= daysInMonth; i++) {
        week.push({
          date: i,
          inMonth: true,
          today: i === new Date().getDate() && this.date.getMonth() === new Date().getMonth() && this.date.getFullYear() === new Date().getFullYear()
        })
        if (week.length === 7) {
          weeks.push(week)
          week = []
        }
      }
      for (let i = lastDayOfMonth; i < 6; i++) {
        week.push({date: i - lastDayOfMonth + 1, inMonth: false})
      }
      if (week.length) {
        weeks.push(week)
      }
      return weeks
    }
  },
  methods: {
    prevMonth() {
      this.date = new Date(this.date.getFullYear(), this.date.getMonth() - 1, 1)
    },
    nextMonth() {
      this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1)
    }
  }
}
</script>

<style scoped>
.calendar {
  border: 1px solid #ccc;
  border-radius: 1rem;
  padding: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}


table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #ccc;
  text-align: center;
  padding: 10px;
  font-size: 16px;
  font-weight: 400;
}

th {
  background-color: #eee;
}

td.not-in-month {
  color: #ccc;
}

td.today {
  background-color: #ddd;
}
</style>
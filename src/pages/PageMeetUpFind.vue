<template>
  <div>
    <div class="lookup-prebody">
      <AppHero />
      <div class="meetup-lookup-wrap">
        <div class="meetup-lookup centered">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <input type="text" class="input" placeholder="New York" />
              </div>
              <div class="level-item">
                <span>Meetups in New York, USA</span>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <button class="button is-medium m-r-sm">Meetups</button>
                <button class="button is-medium">Calendar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <section class="section page-find">
        <div class="columns cover is-multiline">
          <div
            v-for="meetup of meetups"
            :key="meetup._id"
            class="column is-one-third"
            :style="{'min-height': '160px'}"
          >
            <router-link
              :to="'/meetups/' + meetup._id"
              class="meetup-card-find"
              href="#"
              :style="{'background-image': `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${meetup.image})`}"
            >
              <div class="meetup-card-find-content">
                <div class="meetup-card-find-content-date is-pulled-right">
                  <span class="month">{{meetup.startDate | formatDate('MMM')}}</span>
                  <span class="day">{{meetup.startDate | formatDate('D')}}</span>
                </div>
                <div class="meetup-card-find-content-info">
                  <p class="title is-4 no-padding is-marginless m-b-xs">{{meetup.title}}</p>
                  <span class="tag is-success m-b-xs">{{meetup.category.name | capital}}</span>
                  <p class="subtitle is-7">{{meetup.location}}</p>
                </div>
                <div class="meetup-card-find-interest">
                  <p class="subtitle is-7">{{meetup.joinedPeopleCount}}</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div>
          <span
            class="tag is-warning is-large"
          >No meetups found :( You might try to change search criteria (:</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    meetups() {
      return this.$store.state.meetups;
    }
  },
  created() {
    this.$store.dispatch("fetchMeetups");
  }
};
</script>
<style scoped>
@import "../sass/PageMeetUpFind/PageMeetUpFind.css";
</style>
<template>
  <div>
    <AppHero />
    <div class="container">
      <section class="section">
        <div class="m-b-lg">
          <h1 class="title is-inline">Featured Meetups in "Location"</h1>
          <AppDropdown />
          <button class="button is-primary is-pulled-right m-r-sm">Create Meetups</button>
          <button class="button is-primary is-pulled-right m-r-sm">
            <router-link :to="{name:'PageFind'}" style="color:white">All</router-link>
          </button>
        </div>
        <div class="row columns is-multiline">
          <!-- Iterate Your Meetups  -->
          <MeetUp v-for="meet in meetups" :key="meet._id" :meet="meet"></MeetUp>
        </div>
      </section>
      <section class="section">
        <div>
          <h1 class="title">categories</h1>
          <div class="columns cover is-multiline is-mobile">
            <!-- Categories in here -->
            <CategoryItem v-for="category in categories" :key="category._id" :category="category"></CategoryItem>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import CategoryItem from "../components/shared/CategoryItem";
import MeetUp from "../components/shared/MeetUp";
export default {
  computed: {
    meetups() {
      return this.$store.state.meetups;
    },
    categories() {
      return this.$store.state.categories;
    }
  },
  created() {
    this.$store.dispatch("fetchMeetups");
    this.$store.dispatch("fetchCategories");
  },
  components: {
    CategoryItem,
    MeetUp
  }
};
</script>

<style scoped>
</style>

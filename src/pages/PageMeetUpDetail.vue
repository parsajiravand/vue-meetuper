<template>
  <div class="meetup-detail-page">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h2 class="subtitle">
            <!-- TODO: meetup startDate -->
            {{meetup.startDate|formatDate}}
          </h2>
          <h1 class="title">
            <!-- TODO: title -->
            {{meetup.title}}
          </h1>
          <article class="media v-center">
            <figure class="media-left">
              <p class="image is-64x64">
                <!-- OPTIONAL: meetupCreator avatar -->
                <img class="is-rounded" :src="meetup.image" />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <!-- OPTIONAL: meetupCreator name -->
                  Created by
                  <!--  <strong>{{meetup.category.name}}</strong> -->
                </p>
              </div>
            </div>
          </article>
        </div>
        <div class="is-pulled-right">
          <!-- We will handle this later (: -->
          <button class="button is-danger">Leave Group</button>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-3">
            <aside class="is-medium menu">
              <div class="meetup-side-box">
                <div class="meetup-side-box-date m-b-sm">
                  <p>
                    <b>Date</b>
                  </p>
                  <!-- TODO: meetup startDate -->
                  <p>{{meetup.startDate | formatDate}}</p>
                </div>
                <div class="meetup-side-box-date m-b-sm">
                  <p>
                    <b>Time</b>
                  </p>
                  <!-- TODO: meetup timeFrom - timeTo -->
                  <span>{{meetup.timeFrom}}</span> -
                  <span>{{meetup.timeTo}}</span>
                </div>
                <div class="meetup-side-box-place m-b-sm">
                  <p>
                    <b>How to find us</b>
                  </p>
                  <!-- TODO: meetup location -->
                  <p>{{meetup.location}}</p>
                </div>
                <div class="meetup-side-box-more-info">
                  <p>
                    <b>Additional Info</b>
                  </p>
                  <!-- TODO: meetup shortInfo -->
                  <p>{{meetup.shortInfo}}</p>
                </div>
              </div>
              <div class="meetup-side-box-map">
                <img
                  src="https://cnet2.cbsistatic.com/img/H_zPLL8-QTZOLxJvgHQ1Jkz0EgY=/830x467/2013/07/10/f0bcef02-67c2-11e3-a665-14feb5ca9861/maps_routemap.png"
                  class="venueMap-mapImg span--100"
                  alt="Location image of meetup venue"
                />
              </div>
              <!-- Threads Start -->
              <p class="menu-label">Threads</p>
              <ul>
                <li v-for="thread in Threads" :key="thread._id">{{thread.title}}</li>
              </ul>
              <p class="menu-label">Who is Going</p>
              <div class="columns is-multiline is-mobile">
                <!-- Joined People Images Here -->
                <div
                  v-for="person in meetup.joinedPeople"
                  :key="person._id"
                  class="column is-3"
                >
                  <figure class="image is-64x64">
                    <img class="is-rounded" :src="person.avatar" alt="Image" />
                  </figure>
                </div>
              </div>
              <!-- Threads Ends -->
            </aside>
          </div>
          <div class="column is-7 is-offset-1">
            <div class="content is-medium">
              <h3 class="title is-3">About the Meetup</h3>
              <!-- TODO: meetup description -->
              <p>{{meetup.description}}</p>
              <!-- Join Meetup, We will handle it later (: -->
              <button class="button is-primary">Join In</button>
              <!-- Not logged In Case, handle it later (: -->
              <!-- <button :disabled="true"
              class="button is-warning">You need authenticate in order to join</button>-->
            </div>
            <!-- Thread List START -->
            <div class="content is-medium">
              <h3 class="title is-3">Threads</h3>
              <div class="box" v-for="thread in Threads" :key="thread._id">
                <!-- Thread title -->
                <h4 id="const" class="title is-3">{{thread.title}}</h4>
                <!-- Create new post, handle later -->
                <form class="post-create">
                  <div class="field">
                    <textarea class="textarea textarea-post" placeholder="Write a post" rows="1"></textarea>
                    <button :disabled="true" class="button is-primary m-t-sm">Send</button>
                  </div>
                </form>
                <!-- Create new post END, handle later -->
                <!-- Posts START -->
                <article class="media post-item" v-for="post in Threads.posts" :key="post._id">
                  <figure class="media-left is-rounded user-image">
                    <p class="image is-32x32">
                      <img class="is-rounded" :src="post.user.avatar" />
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content is-medium">
                      <div class="post-content">
                        <!-- Post User Name -->
                        <strong class="author">{{post.user.name}}</strong>
                        <!-- {{' '}} -->
                        <!-- Post Updated at -->
                        <small class="post-time">{{post.updatedAt}}</small>
                        <br />
                        <p class="post-content-message">{{post.text}}</p>
                      </div>
                    </div>
                  </div>
                </article>
                <!-- Posts END -->
              </div>
            </div>
            <!-- Thread List END -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  computed: {
    meetup() {
      return this.$store.state.meetup;
    },
    Threads() {
      return this.$store.state.threads;
    }
  },
  created() {
    const meetupId = this.$route.params.id;

    this.$store.dispatch("fetchMeetupById", meetupId);

    this.$store.dispatch("fetchThreads", meetupId);
  }
  /*     computed: {
    meetUpCreator() {
      return this.meetup.meetUpCreator;
    }
  } */
};
</script>

<style scoped>
@import "../sass/PageMeetUpDetail.css";
</style>


<template>

       <div class="column is-one-third" >
            <router-link :to="'/meetups/'+meet._id" class="card large">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="meet.image" alt="Image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="level m-b-md">
                  <div class="media-left">
                    <div class="level-item has-text-centered">
                      <div>
                        <p class="title">{{meet.startDate | formatDate('MMM')}}</p>
                        <p class="title">{{meet.startDate | formatDate('D')}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="media-content">
                    <p class="title is-4 no-padding is-marginless">{{meet.title}}</p>
                    <!-- <p><span class="title is-6"><a href="http://twitter.com/#">@twitterid</a></span></p> -->
                    <span class="tag is-success">{{meet.category.name}}</span>
                    <p class="subtitle is-7">{{meet.location}}</p>
                  </div>
                </div>
                <div class="content">
                  {{ meet.description}}
                  <div class="background-icon">
                    <span class="icon-twitter"></span>
                  </div>
                </div>
              </div>
            </router-link>
          </div>    
    
</template>
<script>
export default {
     props: {
    meet: {
      required: true,
      type: Object
    }
  }
}
</script>
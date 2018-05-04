import Vue from 'vue';
import './style.scss';
import genres from './util/genres';

new Vue ({
  el: '#app',
  components: {
    'movie-list': {
      template: `<div id="movie-list">
                  <div class='movie' v-for="movie in movies">
                    {{ movie.title }}
                  </div>
                </div>`,
      data() {
        return {
          movies: [
            {title: 'moo'},
            {title: 'moo2'}
          ]
        }
      }
    },
    'movie-filter': {
      data() {
        return {
          genres
        }
      },
      template: `<div id="movie-filter">
                  <h2>Filter Results</h2>
                  <div class="filter-group"> </div>
                  <check-filter v-for="genre in genres" :title="genre"></check-filter>
                </div>`,
      components: {
        'check-filter': {
          props: ['title'],
          data() {
            return {
              checked: false
            }
          },
          template: `<div class="check-filter">
                      <input class='checkbox' type="checkbox">
                      <span class="check-filter-title">{{title}}</span>
                     </div>`
        }
      }
    }
  }
});

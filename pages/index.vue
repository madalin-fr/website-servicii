<template>
  <div id="home">
    <Carrousel :type="this.type"/>
    <!--Iniciativas-->

    <section id="projects">
      <div class="container" data-aos="fade-up">
        <h1 class="title"> {{$t('home.titleProjects')}} </h1>
        <p class="subtitle"> {{$t('home.subtitleProjects')}} </p>
        <div class="columns is-variable is-1">
          <div class="column" v-for="(project, i) in datos('projects')" :key="i" data-aos="fade-up" :data-aos-delay="300 + 100*i">
            <ProjectsHome :title=project.title :type=project.type :image=project.image :path=project.path :description=project.description />
          </div>
        </div>
      </div>
    </section>

    <!--Information-->
    <section id="information">
    <div v-for="(item, i) in datos('information')" :key="i">
      <Information :type="item.type" :image="item.image" :text="item.text" :titulo="item.titulo" :boton="item.boton" :path="item.Path" />
    </div>
    </section>

    <!--Eventos -->
    <section id="events">
      <div class="container" >
        <h1 class="title"> {{$t('home.titleEvents')}} </h1>
        <p class="subtitle"> {{$t('home.subtitleEvents')}} </p>
        <Event :isCondensed="true" />
      </div>
    </section>

    <!-- Numbers -->
    <section id="metrics" class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <nav class="level">
            <div v-for="(item, i) in datos('metrics')" :key="i">
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">{{item.name}}</p>
                  <p class="title">{{item.value}}</p>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>

    <!--Contributors and partners -->
    <section id="contributors">
      <div class="container" data-aos="fade-up" data-aos-delay="200">
        <h1 class="title"> {{$t('home.titlePartners')}} </h1>
        <p class="subtitle">{{$t('home.subtitlePartners')}} </p>
        <div class="buttons">
<!--          <b-button tag="a" class="is-primary is-rounded " href="mailto:recaudacion@ninaspro.cl?subject=Me gustaría colaborar con Niñas Pro">-->
<!--              {{$t('home.buttonPartnersMail')}}-->
<!--          </b-button>-->
<!--          <b-button tag="nuxt-link" class="is-primary is-rounded" to="/Alliances">-->
<!--              {{$t('home.buttonPartnersAll')}}-->
<!--          </b-button>-->
        </div>

        <div class="left-moved">
          <ListOfItems :data="contributorsList.galati" :detailed="true" category="galati" type='is-warning' />
          <ListOfItems :data="contributorsList.bucuresti" :detailed="false" category="bucuresti" type='is-light' />
          <ListOfItems :data="contributorsList.ploiesti" :detailed="false" category="ploiesti" type='is-success' />
          <ListOfItems :data="contributorsList.constanta" :detailed="false" category="constanta" type='is-primary' />
        </div>
      </div>
    </section>

    <!-- Newsletter Button -->
    <!-- <section id="newsletter">
      <a class="button is-primary is-rounded is-large" href="http://eepurl.com/gn7I3r" target="_blank">
          {{$t('home.newsletter')}}
      </a>
    </section> -->

  </div>
</template>

<script>
import Carrousel from "~/components/Carrousel.vue";
import ProjectsHome from "~/components/ProjectsHome.vue";
import ListOfItems from '~/components/ListOfItems.vue';
import Information from '~/components/Information.vue';
import Event from '~/components/Event.vue';
import * as Data from '~/data/home.js';
import * as Contributors from '~/data/contributors.js';

export default {
  name: "Home",
  props: {
    msg: String,
    type: {
      type: String,
      default: 'is-primary'
    }
  },
  mounted() {
    this.$store.commit('setType', this.type);
  },

  data(){
    const lang = `${this.$i18n.locale}`
    const data=Data.default
    const contributors = Contributors.default


    return{
      lang,
      data,
      contributors
    }
  },
  components: {
    Carrousel,
    ProjectsHome,
    ListOfItems,
    Event,
    Information,
  },

  methods: {
    //data according to language
    datos(section) {
      if(this.lang == "en") {
            if(section=="projects"){
              return this.data.en.projectsHome
            } else if(section=="information") {
              return this.data.en.information
            } else if(section=="metrics") {
              return this.data.en.metrics
            } else {
              return null
            }
        } else {
            if(section=="projects") {
              return this.data.ro.projectsHome
            } else if(section=="information") {
              return this.data.ro.information
            } else if(section=="metrics") {
              return this.data.ro.metrics
            } else {
              return null
            }
        }
    }
  },
  computed: {


    contributorsList: function(){
      return this.contributors.ro
    }
  }

};
</script>

<style lang="scss" scoped>
  .column, .columns {
    border: 0px;
  }

  section {
    margin: 160px 0;

    .title {
      font-size: 30px;
      font-weight: 600;
      text-align: center;
      margin-bottom: 30px;
    }

    .subtitle {
      font-size: 18px;
      text-align: center;
      margin-bottom: 40px;
    }
  }

  #metrics {
    padding: 2rem 0 1rem 0;
  }

  #contributors {

    .left-moved {
        position: relative;
        left: -45px;
    }

    .buttons {
      margin-top: 3rem;
      display:flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media only screen and (max-device-width: 1220px) {

    #contributors {

      .left-moved {
        left: 0px;
      }
    }
  }

</style>

<template>
  <div class="hello">
    <Header></Header>
    <h1>{{ msg }}</h1>

    <br />

    <div class="table">
      <div class="row ">
        <div class="col-xs-2 col-sm-2">
          <router-link :to="{ name: 'Course' }">
            <button type="button" class="btn btn-info">
              <h4>Professional Carrer</h4>
            </button>
          </router-link>
        </div>

        <div class="col-xs-2 col-sm-2">
          <router-link :to="{ name: 'Course' }">
            <button type="button" class="btn btn-secondary">
              <h4>Needs Analysis</h4>
            </button>
          </router-link>
        </div>

        <div class="col-xs-2 col-sm-2">
          <router-link :to="{ name: 'Course' }">
            <button type="button" class="btn btn-info">
              <h4>Product Owner</h4>
            </button>
          </router-link>
        </div>

        <div class="col-xs-2 col-sm-2">
          <router-link :to="{ name: 'ScrumMaster' }">
            <button type="button" class="btn btn-secondary">
              <h4>Scrum Master</h4>
            </button>
          </router-link>
        </div>

        <div class="col-xs-2 col-sm-2">
          <router-link :to="{ name: 'Course' }">
            <button type="button" class="btn btn-info">
              <h4>Functional Specifications</h4>
            </button>
          </router-link>
        </div>

        <div class="col-xs-2 col-sm-2">
          <router-link :to="{ name: 'Course' }">
            <button type="button" class="btn btn-secondary">
              <h4>Functional Tests</h4>
            </button>
          </router-link>
        </div>
      </div>
      <div class="row ">
        <div class="col-xs-2 col-sm-2">
          <router-link :to="{ name: 'Course' }">
            <button type="button" class="btn btn-info">
              <h4>Roadmap Product</h4>
            </button>
          </router-link>
        </div>

        <div class="col-xs-2 col-sm-2">
          <router-link :to="{ name: 'Course' }">
            <button type="button" class="btn btn-secondary">
              <h4>Benchmarking</h4>
            </button>
          </router-link>
        </div>

        <div class="col-xs-2 col-sm-2">
          <router-link :to="{ name: 'Course' }">
            <button type="button" class="btn btn-info">
              <h4>Database Administration</h4>
            </button>
          </router-link>
        </div>

        <div class="col-xs-2 col-sm-2">
          <router-link :to="{ name: 'Course' }">
            <button type="button" class="btn btn-secondary">
              <h4>Management</h4>
            </button>
          </router-link>
        </div>

        <div class="col-xs-2 col-sm-2">
          <router-link :to="{ name: 'Course' }">
            <button type="button" class="btn btn-info">
              <h4>Visual Identity</h4>
            </button>
          </router-link>
        </div>

        <div class="col-xs-2 col-sm-2">
          <router-link :to="{ name: 'Course' }">
            <button type="button" class="btn btn-secondary">
              <h4>Audit</h4>
            </button>
          </router-link>
        </div>
      </div>
      <div class="row ">
        <div class="col-xs-2 col-sm-2">
          <router-link :to="{ name: 'Course' }">
            <button type="button" class="btn btn-info">
              <h4>Coding</h4>
            </button>
          </router-link>
        </div>

        <div class="col-xs-2 col-sm-2">
          <router-link :to="{ name: 'Course' }">
            <button type="button" class="btn btn-secondary">
              <h4>Ergonomics</h4>
            </button>
          </router-link>
        </div>

        <div class="col-xs-2 col-sm-2">
          <router-link :to="{ name: 'Course' }">
            <button type="button" class="btn btn-info">
              <h4>Virtualization Docker</h4>
            </button>
          </router-link>
        </div>

        <div class="col-xs-2 col-sm-2">
          <router-link :to="{ name: 'Course' }">
            <button type="button" class="btn btn-secondary">
              <h4>Blockchain</h4>
            </button>
          </router-link>
        </div>

        <div class="col-xs-2 col-sm-2">
          <router-link :to="{ name: 'Course' }">
            <button type="button" class="btn btn-secondary">
              <h4>Business Intelligence</h4>
            </button>
          </router-link>
        </div>

        <div class="col-xs-2 col-sm-2">
          <router-link :to="{ name: 'ArtIntell' }">
            <button type="button" class="btn btn-secondary">
              <h4>Artifical Intelligence</h4>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./home.js"></script>

<style scoped lang="scss" src="./home.scss"></style>

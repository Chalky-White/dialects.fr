<template>
  <div class="hello">
    <div class="title">Background, notes.</div>
    <div class="table">
      <div class="row">
        <div class="col-xs-2 col-sm-2 offset-2">
          <router-link :to="{ name: 'BusinessAnalyst' }">
            <button type="button" class="btn btn-primary" disabled>
              <h4>Business Analyst</h4>
            </button>
          </router-link>
        </div>
        <div class="col-xs-4 col-sm-4">
          <router-link :to="{ name: 'ProfessionalCareer' }">
            <button type="button" class="btn btn-warning">
              <h4>Professional Career</h4>
            </button>
          </router-link>
        </div>
        <div class="col-xs-2 col-sm-2">
          <router-link :to="{ name: 'Agility' }">
            <button type="button" class="btn btn-success">
              <h4>Agility</h4>
            </button>
          </router-link>
        </div>
      </div>

      <div class="row ">
        <div class="col-xs-2 col-sm-2">
          <router-link :to="{ name: 'ProjectManagement' }">
            <button type="button" class="btn btn-info">
              <h4>Project Management Principles</h4>
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
          <router-link :to="{ name: 'Accessibility' }">
            <button type="button" class="btn btn-secondary">
              <h4>Accessibility</h4>
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
          <router-link :to="{ name: 'Audit' }">
            <button type="button" class="btn btn-secondary">
              <h4>Audit</h4>
            </button>
          </router-link>
        </div>
      </div>

      <div class="row ">
        <div class="col-xs-2 col-sm-2">
          <router-link :to="{ name: 'BddTdd' }">
            <button type="button" class="btn btn-info">
              <h4>BDD / TDD</h4>
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
            <button type="button" class="btn btn-info">
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


<style scoped>

@font-face {
  font-family: "ubuntulight";
  src: url("../../fonts/ubuntulight.ttf");
}

button {
  width: 100%;
  font-size: 80%;
}

a {
  text-decoration: none;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.table {
  padding-bottom: 12em;

}

.btn {
  height: 5em;
  margin-top: 3em;
  font-size-adjust: unset;
}

.hello {
  background: url("../../assets/beach.jpg");
  padding-top: 10em;
  font-family: ubuntulight;
  font-weight: bold;}

.title,
.title2 {
  font-size: 5em;
  color: rgb(75, 75, 75);
  font-family: ubuntulight;
}

</style>
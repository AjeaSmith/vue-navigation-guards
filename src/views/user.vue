<template>
  <div>
    <h2>Users Page</h2>
    <div v-for="(user, index) in users" :key="index">
      {{user.name.first}}
      <button>
        <router-link :to="{name: 'userdetails', params: {uuid: user.login.uuid}}">View More</router-link>
      </button>
      <p>name is</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      users: null
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("https://randomuser.me/api/?results=5")
        .then(response => {
          const user = response.data.results;
          localStorage.setItem("userData", JSON.stringify(user));
          this.users = JSON.parse(localStorage.getItem("userData"));
        })
        .catch(error => {
          console.log("api request error", error);
        });
    }
  }
};
</script>
<style>
</style>

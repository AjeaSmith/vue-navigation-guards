<template>
  <div>
    user detail
    <p>{{email}}</p>
    {{gender}}
  </div>
</template>

<script>
export default {
  name: "userDetails",
  data() {
    return {
      email: null,
      gender: null
    };
  },
  beforeRouteEnter(to, from, next) {
    let userdetail = JSON.parse(localStorage.getItem("userData"));
    console.log(userdetail);
    userdetail.forEach(detail => {
      if (to.params.uuid == detail.login.uuid) {
        console.log(detail.login.uuid, detail.email);
        next(vm => {
          vm.email = detail.email;
          vm.gender = detail.gender;
        });
      } else {
        next(false);
      }
    });
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      let userdetail = JSON.parse(localStorage.getItem("userData"));
      userdetail.forEach(detail => {
        if (this.$route.params.uuid == detail.login.uuid) {
          (this.email = detail.email), (this.gender = detail.gender);
        }
      });
    }
  }
};
</script>

<style>
</style>

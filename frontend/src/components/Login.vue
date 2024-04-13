<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.css';
</script>
<template>
  <div class="app-box">
    <div class="login-box row">
      <h1 class="connection-text">Se connecter à <span>Afterjam</span></h1>
      <div class="form-box">
        <form @submit.prevent="login">
          <!-- Display the error message -->
          <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
          <input type="text" class="inputs" v-model="username" placeholder="Nom d'utilisateur" required>
          <input type="password" class="inputs" v-model="password" placeholder="Mot de passe" >
          <button type="submit" class="connection-button">Connexion</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name : "Login",
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    login() {
      // Create an object with the email and password
      const data = {
        username: this.username,
        password: this.password
      };

      // Send a POST request
      fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
          .then(response => {
            if (response.status === 401) {
              return response.json().then(data => {
                this.errorMessage = data.message; // Set the error message
              });
            }else if (response.status === 429) {
                this.errorMessage = "Trop de tentatives réessayez dans 1 minute."; // Set the error message
            } else if (response.status === 200){
              //Redirect to the home page
              this.$router.push({ path: '/home' });
            }
            else {
              return response.json();
            }
          }).then(data => {
        if (data) {
          console.log('Success:', data);
        }
      })
          .catch((error) => {
            console.error('Error: Connection failed', error);
          });
    }
  }
}
</script>
<style scoped>
.logo-box .logo {
  left: 36px;
  position: fixed;
  top: 36px;
}
.form-box{
  height: 50%;
}
.app-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.error-message {
  color: red;
}
.connection-button {
  fill: #b82525;
  stroke-width: 4px;
  stroke: rgba(27, 19, 54, 0.50);
}

.inputs {
  font-family: Roboto-Regular,serif;
  font-size: 16px;
  font-style: normal;
  width: 55%;
  height: 54px;
  flex-shrink: 0;
  border: 4px solid rgba(27, 19, 54, 0.50);
  border-radius: 8px;
  padding: 0 20px;
  margin-bottom: 20px;
}

.login-box {
  display: flex;
  align-items: center;
  width: 565px;
  height: 590px;
  flex-shrink: 0;
  border-radius: 24px;
  background: #FFF;
  box-shadow: 0px 0px 6.9px 2px rgba(0, 0, 0, 0.25);
}

@media (max-width: 600px) {
  .login-box {
    width: 50%;
  }
}

.connection-button {
  fill: #1B1336;
  stroke-width: 4px;
  stroke: #1B1336;
  width: 307px;
  height: 54px;
  flex-shrink: 0;
}

.connection-text {
  color: #1B1336;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto-Bold;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 52px */
}

.connection-text span {
  color: #EE4836;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: "CA Slalom Extended-Bold";
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
}
</style>
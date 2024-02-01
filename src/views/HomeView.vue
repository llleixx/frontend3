<template>
  <div class="home-container">
    <div class="home-ps">
      <h1>
        <p class="home-p-0 home-p">So, you have to travel to</p>
        <span class="home-p-1 home-p">space</span>
      </h1>
      <p class="home-p-2 home-p">Let’s face it; if you want to go to space, you might as well genuinely go to outer space
        and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world
        experience! Explore
      </p>
    </div>
    <div class="circle-wrapper">
      <div class="home-p-3 home-p">
        <p>Explore</p>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.home-container {
  color: white;
  background: url('../assets/home/background-home-mobile.jpg') top center / 100% 100% no-repeat;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 50px;
  flex-direction: column;
}

.home-p {
  text-align: center;
}

.home-p-0,
.home-p-1 {
  text-transform: uppercase;
  font-weight: normal;
}

.home-p-0,
.home-p-2 {
  font-size: 18px;
  margin-bottom: 20px;
  color: $soft-purple;
}

.home-p-1 {
  font-size: 75px;
  margin-bottom: 30px;
  display: block;
}

.home-p-2 {
  margin-top: 30px;
}

.home-p-3 {
  margin-top: 90px;
  font-size: 30px;
  background-color: white;
  color: black;
  border-radius: 100%;
  width: 150px;
  text-align: cetner;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
}

@media (min-width: 768px) {
  .home-container {
    background: url('../assets/home/background-home-tablet.jpg') top center / 100% 100% no-repeat;
    min-height: calc(100vh - 100px);
  }

  .home-p-1 {
    font-size: 150px;
  }

  .home-p-2 {
    width: 70%;
    line-height: 1.8;
    margin-left: auto;
    margin-right: auto;
  }

  .home-p-3 {
    margin-top: 110px;
  }
}

.circle-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 1024px) {
  .home-container {
    flex-direction: row;
    background: url('../assets/home/background-home-desktop.jpg') top center / 100% 100% no-repeat;
    padding-top: 100px;
    padding-left: 150px;
  }

  .home-p {
    text-align: start;
  }

  .home-ps {
    flex: 1;
  }

  .home-p-2 {
    margin-left: 0;
  }

  .circle-wrapper {
    flex: 1;
  }

  .home-p-3:hover {
    outline: 20px solid rgba(white, 0.5);
    cursor: pointer;
  }
}
</style>
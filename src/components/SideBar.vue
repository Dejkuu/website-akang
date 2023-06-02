<template>
  <aside>
    <header>
      <a href="/">
        <img src="../assets/logo.png" alt="Logo Akang" draggable="false" />
      </a>
      <Transition name="slide-fade">
        <div v-show="isDateShowed">{{ date }}</div>
      </Transition>
    </header>
    <main>
      <section id="overviewContainer">
        <h1>Overview</h1>
        <hr />
        <router-link to="dashboard" class="overviewButton menuButton">
          <div class="menuButtonIcon">
            <svg-icon type="mdi" :path="icons.mdiHomeOutline"></svg-icon>
          </div>
          <p>Dashboard</p>
        </router-link>
        <router-link to="/#" class="overviewButton menuButton">
          <div class="menuButtonIcon">
            <svg-icon
              type="mdi"
              :path="icons.mdiAccountMultipleOutline"
            ></svg-icon>
          </div>
          <p>Lorem Ipsum</p>
        </router-link>
        <router-link to="/#" class="overviewButton menuButton">
          <div class="menuButtonIcon">
            <svg-icon
              type="mdi"
              :path="icons.mdiAccountMultipleOutline"
            ></svg-icon>
          </div>
          <p>Lorem Ipsum</p>
        </router-link>
        <router-link to="/#" class="overviewButton menuButton">
          <div class="menuButtonIcon">
            <svg-icon
              type="mdi"
              :path="icons.mdiAccountMultipleOutline"
            ></svg-icon>
          </div>
          <p>Lorem Ipsum</p>
        </router-link>
        <router-link to="/#" class="overviewButton menuButton">
          <div class="menuButtonIcon">
            <svg-icon
              type="mdi"
              :path="icons.mdiAccountMultipleOutline"
            ></svg-icon>
          </div>
          <p>Lorem Ipsum</p>
        </router-link>
      </section>
      <section id="projectContainer">
        <h1>Projects</h1>
        <hr />
        <router-link
          v-for="project in projects.slice(0, 4)"
          :key="project.id"
          :to="'/projects/' + project.link"
          class="projectButton menuButton"
        >
          <div class="menuButtonIcon">
            <svg-icon type="mdi" :path="icons.mdiFolderOutline"></svg-icon>
          </div>
          <p>{{ project.name }}</p>
        </router-link>
        <router-link to="/projects/new" class="projectButton menuButton">
          <div class="menuButtonIcon">
            <svg-icon type="mdi" :path="icons.mdiFolderPlusOutline"></svg-icon>
          </div>
          <p>New project</p>
        </router-link>
      </section>
      <section id="actionContainer">
        <h1>Actions</h1>
        <hr />
        <router-link to="/notifications" class="actionButton menuButton">
          <div
            :class="{ notificationBell: notificationCount > 0 }"
            class="menuButtonIcon"
          >
            <svg-icon
              v-if="notificationCount > 0"
              type="mdi"
              :path="icons.mdiBellBadgeOutline"
            ></svg-icon>
            <svg-icon v-else type="mdi" :path="icons.mdiBellOutline"></svg-icon>
          </div>
          <p>Notification</p>
        </router-link>
        <router-link to="settings" class="actionButton menuButton">
          <div class="menuButtonIcon">
            <svg-icon type="mdi" :path="icons.mdiCogOutline"></svg-icon>
          </div>
          <p>Settings</p>
        </router-link>
      </section>
    </main>
    <footer>
      <div id="account">
        <img
          id="avatar"
          src="../assets/defaultAvatar.png"
          alt="User Avatar"
          draggable="false"
        />
        <div id="details">
          <p id="username">{{ user.name }}</p>
          <p id="userrole">{{ user.role }}</p>
        </div>
      </div>
      <a href="#" id="logOut">
        <svg-icon type="mdi" :path="icons.mdiPowerStandby"></svg-icon>
      </a>
    </footer>
  </aside>
</template>

<script>
import {
  mdiHomeOutline,
  mdiAccountMultipleOutline,
  mdiFolderOutline,
  mdiFolderPlusOutline,
  mdiBellOutline,
  mdiBellBadgeOutline,
  mdiCogOutline,
  mdiPowerStandby,
} from "@mdi/js";

export default {
  name: "SideBar",
  data() {
    return {
      date: "Monday 00.00.00 | 00:00",
      isDateShowed: false,
      notificationCount: 1,
      user: {
        name: "User",
        role: "Admin",
      },
      icons: {
        mdiHomeOutline,
        mdiAccountMultipleOutline,
        mdiFolderOutline,
        mdiFolderPlusOutline,
        mdiBellOutline,
        mdiBellBadgeOutline,
        mdiCogOutline,
        mdiPowerStandby,
      },
      projects: [
        {
          id: 0,
          name: "Lorem Ipsum",
          link: "loremipsum",
        },
        {
          id: 1,
          name: "Lorem Ipsum",
          link: "loremipsum",
        },
        {
          id: 2,
          name: "Lorem Ipsum",
          link: "loremipsum",
        },
        {
          id: 3,
          name: "Lorem Ipsum",
          link: "loremipsum",
        },
      ],
    };
  },
  methods: {
    timer() {
      const DATE = new Date();
      const DAY_NAMES = [
        "Monday",
        "Tuesday",
        "Wendesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];

      let DAY = DATE.getDate();
      let MONTH = DATE.getMonth() + 1;
      const DAY_NAME = DAY_NAMES[DATE.getDay() - 1];
      const YEAR = DATE.getFullYear();
      let HOUR = DATE.getHours();
      let MINUTE = DATE.getMinutes();

      if (DAY < 10) DAY = "0" + DAY;
      if (MONTH < 10) MONTH = "0" + MONTH;
      if (HOUR < 10) HOUR = "0" + HOUR;
      if (MINUTE < 10) MINUTE = "0" + MINUTE;

      this.date = `${DAY_NAME} ${DAY}.${MONTH}.${YEAR} | ${HOUR}:${MINUTE}`;
    },
    startTimer() {
      this.timer();
      setInterval(this.timer(), 10000);
    },
  },
  created() {
    this.startTimer();
  },
  mounted() {
    this.isDateShowed = true;
  },
};
</script>

<style lang="scss" scoped>
aside {
  position: relative;
  width: 15vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 175px auto 75px;
  background: linear-gradient(180deg, #223f5c 50%, #042a3f 100%);
  border-image: linear-gradient(180deg, #99b3c680 0%, #99b3c600 100%) 30;
  border-right: 4px solid;
  transition: 0.2s linear;

  header {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    user-select: none;

    img {
      width: 15rem;
    }

    .slide-fade-enter-active {
      transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
      transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
      transform: translateY(20px);
      opacity: 0;
    }
  }

  main {
    display: grid;
    grid-template-rows: repeat(2, auto) 100px;
    margin-bottom: 20px;

    section {
      margin: 0;
      padding: 5px 25px;

      h1 {
        margin: 0 0 0 5px;
        text-align: left;
        font-size: 12px;
        letter-spacing: 1px;
        user-select: none;
        cursor: default;
      }

      hr {
        margin: 0 0 10px 0;
        border: 1px solid #d3d7e780;
      }

      &#projectContainer {
        align-self: flex-end;
      }

      .menuButton {
        display: flex;
        flex-flow: row nowrap;
        justify-content: start;
        align-items: center;
        height: 30px;
        padding: 2px 6px;
        border-radius: 10px;

        &:hover {
          color: #7c7e85;
          background: #052a4040;
          cursor: pointer;
        }

        .menuButtonIcon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 24px;
          height: 24px;
          margin: 0 15px 0 5px;
        }

        .notificationBell {
          position: relative;

          &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #165377;
            -webkit-animation: pulse 10s ease-in-out infinite;
            animation: pulse 10s ease-in-out infinite;
          }

          svg {
            animation: shake 10s ease-in-out infinite;
            -webkit-animation: shake 10s ease-in-out infinite;
            transform-origin: 50% 4px;
          }

          @keyframes pulse {
            0%,
            90% {
              opacity: 0.8;
              transform: scale(0);
              -webkit-transform: scale(0);
            }
            94%,
            100% {
              opacity: 0;
              transform: scale(2.5);
              -webkit-transform: scale(2.5);
            }
          }

          @keyframes shake {
            0%,
            90%,
            100% {
              transform: rotateZ(0);
              -webkit-transform: rotateZ(0);
            }
            91% {
              transform: rotateZ(20deg);
              -webkit-transform: rotateZ(20deg);
            }
            92% {
              transform: rotateZ(-17deg);
              -webkit-transform: rotateZ(-17deg);
            }
            93% {
              transform: rotateZ(15deg);
              -webkit-transform: rotateZ(15deg);
            }
            94% {
              transform: rotateZ(-12deg);
              -webkit-transform: rotateZ(-12deg);
            }
            95% {
              transform: rotateZ(10deg);
              -webkit-transform: rotateZ(10deg);
            }
            96% {
              transform: rotateZ(-8deg);
              -webkit-transform: rotateZ(-8deg);
            }
            97% {
              transform: rotateZ(7deg);
              -webkit-transform: rotateZ(7deg);
            }
            98% {
              transform: rotateZ(-5deg);
              -webkit-transform: rotateZ(-5deg);
            }
            99% {
              transform: rotateZ(3deg);
              -webkit-transform: rotateZ(3deg);
            }
          }
        }
      }
    }
  }

  footer {
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #042a3fbf;
    padding: 0 30px;
    user-select: none;

    #account {
      display: flex;
      flex-flow: row nowrap;
      justify-content: start;
      align-items: center;

      #avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }

      #details {
        margin-left: 10px;
        text-align: left;

        p {
          font-family: Lato, sans-serif;
          margin: 0;
        }

        #username {
          font-weight: bold;
          font-size: 16px;
        }

        #userrole {
          font-family: Lato, sans-serif;
          font-weight: normal;
          font-size: 12px;
        }
      }
    }
  }
}
</style>

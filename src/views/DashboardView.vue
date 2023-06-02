<template>
  <SideBar></SideBar>
  <main id="container">
    <div id="mainContainer">
      <div id="accountPanel" class="panel">
        <Transition name="slide">
          <div v-show="isLoaded" id="accountGreetings" class="delay-01s">
            <h1>
              Hello, <span>{{ user.name }}</span>
            </h1>
            <p>Good to see you</p>
          </div>
        </Transition>
        <div id="accountDetails">
          <Transition name="slide">
            <img
              v-show="isLoaded"
              id="accountAvatar"
              class="delay-04s"
              src="../assets/defaultAvatar.png"
              alt="User Avatar"
              draggable="false"
            />
          </Transition>
          <Transition name="slide">
            <div v-show="isLoaded" id="accountRole" class="delay-06s">
              <svg-icon type="mdi" :path="icons.mdiCodeTags"></svg-icon>
              <p>{{ user.role }}</p>
            </div>
          </Transition>
        </div>
      </div>
      <div id="notificationPanel" class="panel">
        <div id="notificationContainer">
          <svg-icon type="mdi" :path="icons.mdiEmailOutline"></svg-icon>
          <p>You have <span>1</span> new notification</p>
        </div>
        <hr id="notificationGap" />
        <div id="refreshContainer">
          <a id="refreshButton">
            <svg-icon type="mdi" :path="icons.mdiRefresh"></svg-icon>
            Refresh data
          </a>
        </div>
      </div>
      <div id="chartPanel" class="panel"></div>
      <div class="panel bottomPanel"></div>
      <div class="panel bottomPanel"></div>
      <div class="panel bottomPanel"></div>
    </div>
    <div id="projectContainer">
      <div
        v-for="project in projects"
        :key="project.id"
        class="projectPanel panel"
      >
        <h1 class="projectTitle">{{ project.name }}</h1>
        <div class="projectIcon">
          <svg-icon type="mdi" :path="icons.mdiFolderOutline"></svg-icon>
        </div>
        <router-link :to="'/projects/' + project.link" class="projectButton">
          Manage the project
        </router-link>
      </div>
      <div class="projectPanel panel">
        <h1 class="projectTitle">Create project</h1>
        <div class="projectIcon">
          <svg-icon type="mdi" :path="icons.mdiFolderPlusOutline"></svg-icon>
        </div>
        <router-link to="/projects/new" class="projectButton"
          >New project</router-link
        >
      </div>
    </div>
  </main>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import {
  mdiEmailOutline,
  mdiRefresh,
  mdiCodeTags,
  mdiFolderOutline,
  mdiFolderPlusOutline,
} from "@mdi/js";

export default {
  name: "DashboardView",
  components: {
    SideBar,
  },
  data() {
    return {
      isLoaded: false,
      user: {
        name: "User",
        role: "Admin",
      },
      icons: {
        mdiEmailOutline,
        mdiRefresh,
        mdiCodeTags,
        mdiFolderOutline,
        mdiFolderPlusOutline,
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
  mounted() {
    this.isLoaded = true;
  },
};
</script>

<style lang="scss" scoped>
#container {
  display: grid;
  grid-template-columns: auto 200px;
  width: 85vw;
  height: 100vh;
  padding: 100px;
  gap: 20px;

  #mainContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 150px 260px auto;
    gap: 30px;

    .slide-enter-active {
      transition: all 0.3s ease-out;
    }

    .slide-leave-active {
      transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-enter-from,
    .slide-leave-to {
      transform: translateY(20px);
      opacity: 0;
    }

    .delay-01s {
      transition-delay: 0.1s;
    }
    .delay-04s {
      transition-delay: 0.4s;
    }
    .delay-06s {
      transition-delay: 0.6s;
    }

    #accountPanel {
      position: relative;
      grid-column: 1 / 2;
      grid-row: 1 / 3;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-flow: column nowrap;
      padding: 30px;

      #accountGreetings {
        h1,
        p {
          margin: 5px;
        }

        h1 {
          font-size: 40px;
        }

        p,
        span {
          color: #ffffff;
        }
      }

      #accountDetails {
        #accountAvatar {
          width: 150px;
          height: 150px;
          border-radius: 50%;
        }

        #accountRole {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 30px;
          gap: 5px;
          color: #fff;
          margin: 5px;

          svg {
            border: 2px solid #d3d7e7;
            border-radius: 50%;
          }
        }
      }
    }

    #notificationPanel {
      grid-column: 2 / 4;
      grid-row: 1 / 2;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      color: #fff;

      div {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      #notificationContainer {
        font-size: 30px;

        svg {
          width: 40px;
          height: 40px;
          margin-right: 5px;
        }

        span {
          font-weight: bold;
        }
      }

      #notificationGap {
        width: 1px;
        height: 50px;
        border: none;
        background: #46627e;
        margin: 40px;
      }

      #refreshContainer {
        font-size: 20px;

        #refreshButton {
          display: flex;
          color: #fff;
          transition: 0.1s linear;

          &:hover {
            color: #7a7c83;
          }

          svg {
            margin-right: 2px;
          }
        }
      }
    }

    #chartPanel {
      grid-column: 2 / 4;
      grid-row: 2 / 3;
    }

    .bottomPanel {
      grid-row: 3 / 4;
    }
  }

  #projectContainer {
    display: grid;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    gap: 10px;

    &::-webkit-scrollbar {
      display: none;
    }

    .projectPanel {
      display: grid;
      width: 180px;
      height: 270px;
      grid-template-rows: 60px auto 90px;

      .projectTitle {
        margin: 20px;
        text-align: start;
        font-size: 16px;
      }

      .projectIcon {
        width: 80px;
        height: 80px;
        margin: auto;

        svg {
          width: 100%;
          height: 100%;
        }
      }

      .projectButton {
        width: fit-content;
        margin: auto;
        padding: 5px 10px;
        background: #042a3f80;
        border: 1px solid #37516b;
        border-radius: 6px;
        font-size: 15px;
        font-family: Lato, sans-serif;
        box-shadow: 0px 4px 4px #00000040;

        &:hover {
          color: #abafbb;
        }
      }
    }
  }

  .panel {
    background: linear-gradient(180deg, #1e3852 0%, #1e364d 100%);
    border: 2px solid #38526c;
    border-radius: 15px;
    box-shadow: 0px 4px 4px #00000040;
  }
}
</style>

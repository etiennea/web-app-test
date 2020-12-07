<template>
  <f7-app :params="f7params">

    <!-- Left panel with cover effect-->
    <f7-panel
      left
      cover
      theme-dark
    >
      <f7-view>
        <f7-page>
          <f7-navbar title="Left Panel"></f7-navbar>
          <f7-block>Left panel content goes here</f7-block>
        </f7-page>
      </f7-view>
    </f7-panel>

    <!-- Right panel with reveal effect-->
    <f7-panel
      right
      reveal
      theme-dark
    >
      <f7-view>
        <f7-page>
          <f7-navbar title="Right Panel"></f7-navbar>
          <f7-block>Right panel content goes here</f7-block>
        </f7-page>
      </f7-view>
    </f7-panel>

    <!-- Views/Tabs container -->
    <f7-views
      tabs
      class="safe-areas"
    >
      <!-- Tabbar for switching views-tabs -->
      <f7-toolbar
        tabbar
        labels
        bottom
      >
        <f7-link
          id="tab-link-home"
          tab-link="#view-home"
          tab-link-active
          icon="ion-home"
          text="Home"
        ></f7-link>
        <f7-link
          tab-link="#view-tests"
          icon="ion-plus"
          text="Test"
        ></f7-link>
        <f7-link
          tab-link="#view-more"
          icon="ion-more"
          text="More"
        ></f7-link>
      </f7-toolbar>

      <!-- Your main view/tab, should have "view-main" class. It also has "tab-active" class -->
      <f7-view
        id="view-home"
        main
        tab
        tab-active
        url="/"
      ></f7-view>

      <!-- Catalog View -->
      <f7-view
        id="view-tests"
        name="tests"
        tab
        url="/tests"
      ></f7-view>

      <!-- Settings View -->
      <f7-view
        id="view-more"
        name="more"
        tab
        url="/more"
      ></f7-view>

    </f7-views>

    <!-- Popup -->
    <f7-popup id="my-popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>
            <p>Popup content goes here.</p>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>
  </f7-app>
</template>
<script>
import { Device } from "framework7/framework7-lite.esm.bundle.js";
import cordovaApp from "../js/cordova-app.js";
import routes from "../js/routes.js";

export default {
    data() {
        return {
            // Framework7 Parameters
            f7params: {
                id: "app.spottyegg.mobile", // App bundle ID
                name: "spottyegg", // App name
                theme: "auto", // Automatic theme detection

                // App root data
                data: function () {
                    return {};
                },

                // App routes
                routes: routes,

                // Register service worker
                serviceWorker: Device.cordova
                    ? {}
                    : {
                        path: "/service-worker.js",
                    },
                // Input settings
                input: {
                    scrollIntoViewOnFocus: Device.cordova && !Device.electron,
                    scrollIntoViewCentered: Device.cordova && !Device.electron,
                },
                // Cordova Statusbar settings
                statusbar: {
                    iosOverlaysWebView: true,
                    androidOverlaysWebView: false,
                },
            },
        };
    },
    methods: {},
    mounted() {
        this.$f7ready((f7) => {
            // Init cordova APIs (see cordova-app.js)
            if (Device.cordova) {
                cordovaApp.init(f7);
            }
            // Call F7 APIs here
        });
    },
};
</script>
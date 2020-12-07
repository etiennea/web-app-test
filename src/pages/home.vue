<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar
      large
      :sliding="false"
    >
      <f7-nav-title sliding>
        Test
      </f7-nav-title>
      <f7-nav-title-large>Test</f7-nav-title-large>
    </f7-navbar>

    <!-- Page content-->
    <f7-block strong>
      <h1>Welcome</h1>
      <p>Find more about us <f7-link href="/about">here</f7-link>.</p>
    </f7-block>

  </f7-page>
</template>
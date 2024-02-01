import 
<template>
  <b-container>
    <b-row>
      <div>
        <!--Comienza el Nav-->
        <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
          <b-navbar-brand href="#">DWP</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="./components/Formulario.vue">Home</b-nav-item>
              <b-nav-item href="#">Formulario</b-nav-item>
              <b-nav-item href="#">Servicio</b-nav-item>
            </b-navbar-nav>
            <!-- Right aligned nav items -->
          </b-collapse>
        </b-navbar>
      </div>
    </b-row>
    <!--Comienza SideBar-->
    <b-row>
      <b-col>
        <div>
          <b-sidebar id="sidebar-1" title="Sidebar" shadow visible z-index="0">
            <div class="px-3 py-2">
              <nav class="mb-3">
                <b-nav vertical>
                  <b-nav-item active>Home</b-nav-item>
                  <b-nav-item href="#link-1">Formulario</b-nav-item>
                  <b-nav-item href="#link-2">Servicio</b-nav-item>
                </b-nav>
              </nav>
            </div>
          </b-sidebar>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <!--Comienza router-view-->
      <router-view>
        
      </router-view>
    </b-row>
  </b-container>
</template>



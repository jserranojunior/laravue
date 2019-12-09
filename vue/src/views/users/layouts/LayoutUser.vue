<template>
<div>

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>LAYOUT USER | Dashboard</title>
        <!-- Tell the browser to be responsive to screen width -->
        <meta name="viewport" content="width=device-width, initial-scale=1">

    </head>

    <body class="sidebar-mini layout-fixed">
        <div class="wrapper">

            <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                <!-- Left navbar links -->
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <router-link to="dashboard">
                            <a href="#" class="nav-link">LAYOUT USER</a>
                        </router-link>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <router-link to="about">
                            <a href="#" class="nav-link">ABOUT</a>
                        </router-link>
                    </li>
                </ul>

                <!-- SEARCH FORM -->
                <form class="form-inline ml-3">
                    <div class="input-group input-group-sm">
                        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
                        <div class="input-group-append">
                            <button class="btn btn-navbar" type="submit">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>

                <!-- Right navbar links -->
                <ul class="navbar-nav ml-auto">
                    <!-- Messages Dropdown Menu -->
                    <li class="nav-item dropdown">
                        <a class="nav-link" data-toggle="dropdown" href="#">
                            <i class="far fa-comments"></i>
                            <span class="badge badge-danger navbar-badge">3</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <a href="#" class="dropdown-item">
                                <!-- Message Start -->
                                <div class="media">
                                    <!-- <img src="dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle"> -->
                                    <div class="media-body">
                                        <h3 class="dropdown-item-title">
                                            Brad Diesel
                                            <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                                        </h3>
                                        <p class="text-sm">Call me whenever you can...</p>
                                        <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                                <!-- Message End -->
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <!-- Message Start -->
                                <div class="media">
                                    <!-- <img src="dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3"> -->
                                    <div class="media-body">
                                        <h3 class="dropdown-item-title">
                                            John Pierce
                                            <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                                        </h3>
                                        <p class="text-sm">I got your message bro</p>
                                        <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                                <!-- Message End -->
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <!-- Message Start -->
                                <div class="media">
                                    <!-- <img src="dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3"> -->
                                    <div class="media-body">
                                        <h3 class="dropdown-item-title">
                                            Nora Silvester
                                            <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                                        </h3>
                                        <p class="text-sm">The subject goes here</p>
                                        <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                                <!-- Message End -->
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
                        </div>
                    </li>
                    <!-- Notifications Dropdown Menu -->
                    <li class="nav-item dropdown">
                        <a class="nav-link" data-toggle="dropdown" href="#">
                            <i class="far fa-bell"></i>
                            <span class="badge badge-warning navbar-badge">15</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span class="dropdown-item dropdown-header">15 Notifications</span>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <i class="fas fa-envelope mr-2"></i> 4 new messages
                                <span class="float-right text-muted text-sm">3 mins</span>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <i class="fas fa-users mr-2"></i> 8 friend requests
                                <span class="float-right text-muted text-sm">12 hours</span>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <i class="fas fa-file mr-2"></i> 3 new reports
                                <span class="float-right text-muted text-sm">2 days</span>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#"><i class="fas fa-th-large"></i></a>
                    </li>

                    <li class="nav-item">
                        <a href="#" class="text-danger" v-if="auth.user.id" @click="logout()">Sair</a>
                    </li>
                </ul>
            </nav>

            <aside class="main-sidebar sidebar-dark-primary elevation-4">
                <!-- Brand Logo -->
                <a href="index3.html" class="brand-link">
                    <!-- <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8"> -->
                    <span class="brand-text font-weight-light">Usuario</span>
                </a>

                <!-- Sidebar -->
                <div class="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
                    <div class="os-resize-observer-host">
                        <div class="os-resize-observer observed" style="left: 0px; right: auto;"></div>
                    </div>
                    <div class="os-size-auto-observer" style="height: calc(100% + 1px); float: left;">
                        <div class="os-resize-observer observed"></div>
                    </div>
                    <div class="os-content-glue" style="margin: 0px -8px; width: 249px; height: 512px;"></div>
                    <div class="os-padding">
                        <div class="os-viewport os-viewport-native-scrollbars-invisible" style="overflow-y: scroll;">
                            <div class="os-content" style="padding: 0px 8px; height: 100%; width: 100%;">
                                <!-- Sidebar user panel (optional) -->
                                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                                    <!-- <div class="image">
                                        <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
                                    </div> -->
                                    <div class="info">
                                        <a href="#" class="d-block">Jorge</a>
                                    </div>
                                </div>

                                <!-- Sidebar Menu -->
                                <nav class="mt-2">
                                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                                                              
            
                                        <li class="nav-item">
                                            <a href="pages/widgets.html" class="nav-link">
                                                <i class="nav-icon fas fa-th"></i>
                                                <p>
                                                    Widgets
                                                    <span class="right badge badge-danger">New</span>
                                                </p>
                                            </a>
                                        </li>
                                        <li class="nav-item has-treeview">
                                            <a href="#" class="nav-link">
                                                <i class="nav-icon fas fa-copy"></i>
                                                <p>
                                                    Layout Options
                                                    <i class="fas fa-angle-left right"></i>
                                                    <span class="badge badge-info right">6</span>
                                                </p>
                                            </a>
                                            <ul class="nav nav-treeview">
                                                <li class="nav-item">
                                                    <a href="pages/layout/top-nav.html" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Top Navigation</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="pages/layout/boxed.html" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Boxed</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="pages/layout/fixed-sidebar.html" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Fixed Sidebar</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="pages/layout/fixed-topnav.html" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Fixed Navbar</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="pages/layout/fixed-footer.html" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Fixed Footer</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="pages/layout/collapsed-sidebar.html" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Collapsed Sidebar</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item has-treeview">
                                            <a href="#" class="nav-link">
                                                <i class="nav-icon fas fa-chart-pie"></i>
                                                <p>
                                                    Charts
                                                    <i class="right fas fa-angle-left"></i>
                                                </p>
                                            </a>
                                            <ul class="nav nav-treeview">
                                                <li class="nav-item">
                                                    <a href="pages/charts/chartjs.html" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>ChartJS</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="pages/charts/flot.html" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Flot</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="pages/charts/inline.html" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Inline</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item has-treeview">
                                            <a href="#" class="nav-link">
                                                <i class="nav-icon fas fa-tree"></i>
                                                <p>
                                                    UI Elements
                                                    <i class="fas fa-angle-left right"></i>
                                                </p>
                                            </a>
                                            <ul class="nav nav-treeview">
                                                <li class="nav-item">
                                                    <a href="pages/UI/general.html" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>General</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="pages/UI/icons.html" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Icons</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="pages/UI/buttons.html" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Buttons</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="pages/UI/sliders.html" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Sliders</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="pages/UI/modals.html" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Modals &amp; Alerts</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="pages/UI/navbar.html" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Navbar &amp; Tabs</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="pages/UI/timeline.html" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Timeline</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="pages/UI/ribbons.html" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Ribbons</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item has-treeview">
                                            <a href="#" class="nav-link">
                                                <i class="nav-icon fas fa-edit"></i>
                                                <p>
                                                    Forms
                                                    <i class="fas fa-angle-left right"></i>
                                                </p>
                                            </a>
                                            <ul class="nav nav-treeview">
                                                <li class="nav-item">
                                                    <a href="pages/forms/general.html" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>General Elements</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="pages/forms/advanced.html" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Advanced Elements</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="pages/forms/editors.html" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Editors</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item has-treeview">
                                            <a href="#" class="nav-link">
                                                <i class="nav-icon fas fa-table"></i>
                                                <p>
                                                    Tables
                                                    <i class="fas fa-angle-left right"></i>
                                                </p>
                                            </a>
                                            <ul class="nav nav-treeview">
                                                <li class="nav-item">
                                                    <a href="pages/tables/simple.html" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Simple Tables</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="pages/tables/data.html" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>DataTables</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="pages/tables/jsgrid.html" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>jsGrid</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- /.sidebar -->
            </aside>

            <div class="content-wrapper" style="min-height: 463px;">
                <div class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1 class="m-0 text-dark title-page">
                                    <slot name="titlepage"></slot>
                                </h1>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item active">Dashboard v1</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </body>
</div>  
</template>

<script>
import VueScript2 from 'vue-script2'
import {
    mapState,
    mapActions
} from "vuex"
export default {
    name: "Header",
    data() {
        return {}
    },

    computed: {
        ...mapState({
            auth: state => state.Auth,
            idUser: state => state.Auth.user.id,
        })
    },
    mounted() {
        //colocar a verficação de login em outro lugar 
        

        VueScript2.load('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js')
        VueScript2.load('https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js')
        VueScript2.load('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js')
        VueScript2.load('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js')
        VueScript2.load('https://cdnjs.cloudflare.com/ajax/libs/jquery-sparklines/2.1.2/jquery.sparkline.min.js')
        VueScript2.load('https://cdnjs.cloudflare.com/ajax/libs/jQuery-Knob/1.2.13/jquery.knob.min.js')
        VueScript2.load('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js')
        VueScript2.load('https://cdnjs.cloudflare.com/ajax/libs/bootstrap-daterangepicker/3.0.5/daterangepicker.min.js')
        VueScript2.load('https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.1.2/js/tempusdominus-bootstrap-4.min.js')
        VueScript2.load('https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote.min.js')
        VueScript2.load('https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/1.9.1/js/OverlayScrollbars.js')
        VueScript2.load('https://cdn.jsdelivr.net/npm/admin-lte@3.0.0/dist/js/adminlte.min.js')

    },
    methods: {
        ...mapActions([
            'logout'
        ]),

    },

}
</script>
<style>
    @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css';
    @import 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css';
    @import 'https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.1.2/css/tempusdominus-bootstrap-4.min.css';
    @import 'https://cdn.jsdelivr.net/npm/admin-lte@3.0.0/dist/css/adminlte.min.css';
    @import 'https://cdnjs.cloudflare.com/ajax/libs/jqvmap/1.5.1/jqvmap.min.css';
    @import 'https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/1.9.1/css/OverlayScrollbars.css';
    @import 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-daterangepicker/3.0.5/daterangepicker.min.css';
    @import 'https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote.css';
    @import 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700';
</style>
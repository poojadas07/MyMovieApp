import Vue from "vue";
import VueRouter from "vue-router";
import LatestMovie from "@/components/LatestMovie";
import Movie from "@/components/Movie";
import SearchMovie from "@/components/SearchMovie";
import AddMovie from "@/components/AddMovie";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
    	path: "/",
    	name: "LatestMovie",
    	component: LatestMovie
    },
    {
    	path: "/movie/:id",
    	name: "Movie",
    	props: true,
    	component: Movie
    },
    {
        path: "/search/:name",
        name: "SearchMovie",
        props: true,
        component: SearchMovie
    },
    {
        path: "/add/",
        name: "AddMovie",
        component: AddMovie
    }
  ],
  mode: "history"
});
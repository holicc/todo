<template>
    <div class="search">
        <img class="search-icon"
            src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
        <input class="search-term" type="search" placeholder="Search.." />
    </div>
</template>

<style scoped>
.search {
    display: flex;
    position: relative;
    width: 100%;
}


.search-icon {
    position: absolute;
    top: 13px;
    left: 10px;
    width: 14px;
}

.search-term {
    height: 40px;
    width: 100%;
    background-color: rgb(219, 211, 217);
    border-radius: 10px;
    padding: 4px 23px 4px 25px;
    outline: none;
    border: 4px solid transparent;
}

.search-term[type="search"]::-webkit-search-cancel-button {

    /* Remove default */
    -webkit-appearance: none;

    /* Now your own custom styles */
    width: 14px;
    height: 15px;
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: top left;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABFUlEQVRIid2VTW7CQAyFP7UiZ+kCVrCDHqIpiDtBb0EERyoVZVsUtmFNWMyMVJk3kxDEon2SpZF/nh3P2IH/jgyYAxtgC5y8bIG1t2VdyafAHqgbZA/ktxA/Ax8tiK0sfWwjupD/TpLE+x3kQaLtyrju+RgYAaUgKoEhMDH6byIXPxckQ2/rmySl1+ELsHEzlWAjHI/AwNtfgB+hO4i4QiX4Eo622r45q9bVuDm5QhVxtl+SqjxIFRyfVKaWqBO2s1I+vEVr4aguVF28jVupBA9/pmrQJqQHbQS8Gv2OxIbNBdGt8hYjD7hn2S2ayMGt3GUH8tbrOiDHLa4m4h0t2hJDhnsRBfCJm9DKnwvcX6/Xlfxv4AK2lPndEfN11QAAAABJRU5ErkJggg==);
    /* Will place small red box on the right of input (positioning carries over) */

}

.search-term:focus {
    border: 4px solid #80A4EF;
    outline: none;

}
</style>

<script setup lang="ts">
</script>
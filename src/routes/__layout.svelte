<script>
    import "../styles/normalize.css";
    import "../styles/grid.css";
</script>

<div id="header">
    <h1><span id="logo">IVS</span> Election Management System</h1>
</div>
<div id="sidebar">
    <ul id="sidebar-nav">
        <li><a href={'javascript:void(0)'}>Thing 1</a></li>
        <li><a href={'javascript:void(0)'}>Thing 2</a></li>
        <li><a href={'javascript:void(0)'}>Thing 3</a></li>
        <li><a href={'javascript:void(0)'}>Thing 4</a></li>
        <li><a href={'javascript:void(0)'}>Thing 5</a></li>
    </ul>
</div>

<slot></slot>



<style>

    :global(:root) {
        --primary-color: #161616;
        --secondary-color: #393939;
        --tertiary-color: #4d4d4d;

        --text-color-light: white;
        --text-color-dark: #161616;
        --text-color-gray: #525252;

        --primary-font: IBMPlexSans;

        --header-height: 40px;
        --sidebar-width: 200px;

        box-sizing: border-box;
        padding-top: var(--header-height);
        min-height: 100vh;

        font-family: var(--primary-font);
        color: var(--text-color-light);

        background-color: var(--primary-color);
        padding-left: calc(var(--sidebar-width)) ;
    }
    
    * {
        box-sizing: border-box;
    }

    #header {
        height: var(--header-height);
        width: 100%;
        padding: 0px 0px 0px 10px;
        background-color: var(--primary-color);
        box-shadow: 0px 0.5px 0px #aaa;
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        
    }

    #header h1 {
        color: var(--text-color-light);
        margin: 0;
        font-weight: 600;
        font-size: 12px;
    }

    #sidebar {
        background-color: white;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        padding: var(--header-height) 20px 0px 20px;
        margin-top: 20px;
        width: var(--sidebar-width);
        z-index: 999;
    }

    #sidebar ul {
        padding: 0;
        list-style-type: none;
    }

    #sidebar ul li {
        min-height: 26px;
        margin-bottom: 5px;
    }

    #sidebar ul li a {
        text-decoration: none;
        color: var(--text-color-gray);
        font-weight: 700;
        font-size: 13px;
        min-height: 26px;
        margin-bottom: 5px;
    }

    #logo {
        margin-right: 5px;
        font-weight: 100;
    }



    @font-face {
        font-family: 'IBMPlexSans';
        font-weight: 100;
        src: url(../fonts/IBM_Plex_Sans/IBMPlexSans-Thin.ttf);
    }
    @font-face {
        font-family: 'IBMPlexSans';
        font-weight: 200;
        src: url(../fonts/IBM_Plex_Sans/IBMPlexSans-ExtraLight.ttf);
    }
    @font-face {
        font-family: 'IBMPlexSans';
        font-weight: 300;
        src: url(../fonts/IBM_Plex_Sans/IBMPlexSans-Light.ttf);
    }
    @font-face {
        font-family: 'IBMPlexSans';
        font-weight: 400;
        src: url(../fonts/IBM_Plex_Sans/IBMPlexSans-Medium.ttf);
    }
    @font-face {
        font-family: 'IBMPlexSans';
        font-weight: 500;
        src: url(../fonts/IBM_Plex_Sans/IBMPlexSans-Medium.ttf);
    }
    @font-face {
        font-family: 'IBMPlexSans';
        font-weight: 600;
        src: url(../fonts/IBM_Plex_Sans/IBMPlexSans-SemiBold.ttf);
    }
    @font-face {
        font-family: 'IBMPlexSans';
        font-weight: 700;
        src: url(../fonts/IBM_Plex_Sans/IBMPlexSans-Bold.ttf);
    }
    
</style>
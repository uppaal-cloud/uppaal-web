import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap'); */

$sidebar-bg-color: pink;
$submenu-bg-color: hotpink;
$submenu-bg-color-collapsed: red;
$sidebar-color: green;
$highlight-color: purple;
$icon-bg-color: yellow;
$icon-size: 35px;

/* @import '~react-
bar/dist/scss/styles.scss'; */
body {
    margin: 0;
    height: 100vh;
    color: #353535;
    font-family: 'Roboto', sans-serif;
}

#root {
    height: 100%;
}

.app {
    height: 100%;
    display: flex;
    position: relative;

    .btn-toggle {
        cursor: pointer;
        width: 35px;
        height: 35px;
        background: #353535;
        color: #fff;
        text-align: center;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        display: none;
    }

    .sidebar-btn-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        .sidebar-btn {
            padding: 1px 15px;
            border-radius: 40px;
            background: rgba(255, 255, 255, 0.05);
            color: #adadad;
            text-decoration: none;
            margin: 0 auto;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-overflow: ellipsis;
            overflow: hidden;
            span {
                margin-left: 5px;
                font-size: 13px;
            }
            &:hover {
                color: $highlight-color;
            }
        }
    }

    .collapsed {
        .sidebar-btn {
            display: inline-block;
            border-radius: 50%;
            width: 35px;
            height: 35px;
            line-height: 40px;
            padding: 0;
        }
    }

    main {
        padding: 24px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        header {
            margin-bottom: 40px;
            border-bottom: 1px solid #efefef;
            h1 {
                display: flex;
                align-items: center;
                transform: translateX(-20px);
            }
        }

        footer {
            margin-top: auto;
            color: #888;
            text-align: center;
            a {
                text-decoration: none;
                color: #888;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
    .social-bagdes {
        margin-top: 10px;
        img {
            margin: 5px;
        }
    }

    .block {
        display: flex;
        margin-bottom: 24px;
        font-size: 14px;
        color: #545454;
        > span {
            margin-left: 10px;
        }
    }

    &.rtl {
        direction: rtl;
        text-align: right;

        header {
            h1 {
                transform: translateX(20px);
            }
        }
        .block {
            direction: rtl;
            > span {
                margin-left: 0;
                margin-right: 10px;
            }
        }
        .sidebar-btn-wrapper {
            .sidebar-btn {
                span {
                    margin-left: 0;
                    margin-right: 5px;
                }
            }
        }
    }

    @media (max-width: 767.98px) {
        overflow-x: hidden;
        header {
            h1 {
                font-size: 24px;
            }
        }
    }
    @media (max-width: $breakpoint-md) {
        .btn-toggle {
            display: flex;
        }

        &.rtl {
            .btn-toggle {
                margin-left: auto;
            }
        }
    }
}

.badge {
    padding: 3px 6px;
    font-size: 9px;
    letter-spacing: 1px;
    border-radius: 15px;
    &.red {
        color: #ffffff;
        background: #d63030;
    }
    &.gray {
        color: #ffffff;
        background: #777777;
    }
    &.yellow {
        color: #000000;
        background: #ffd331;
    }
}
`;
export default GlobalStyle;
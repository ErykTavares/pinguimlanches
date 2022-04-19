import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root{
        --yellow: #EED524;
        --darkyellow : #F7B019;
        --red: #FE0000;
        --white: #F5F4F1;
        --black: #2A2B2D;
        --textred: #D47878;
        --textredweak :#EB6E6E;
        --textwhite: #ECECEC;
        --textgray: #A1A1A1;
        --textblack: #393939;
        --textblackweak : #454545;
        --textgray: #727272;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }

    a, a:hover{
        text-decoration:none;
        color: white;
    }

    li{
        list-style-type:none;
    }

    main{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items:center;
        background-color:var(--black);
    }

    section{
        width: 100%;
    }

    .active rect{
        &.lineone{
            transform: rotate(34deg) translateX(16%);
        }
        &.linetwo{
            transform: translateX(-100%);
        }
        &.linethree{
            transform: rotate(-33deg) translateX(-30%);
        }
    }

    .openmenu{
        animation: openmenu 1s ease-in-out forwards;
    }

    @keyframes openmenu {
        from{
            opacity: 0;
            transform: translateX(100%);
        }
        to{
            opacity: 1;
            transform:translateX(0%);
        }
    }   

    .closemenu{
        animation: closemenu 1s ease-in-out forwards;
    }

    @keyframes closemenu {
        from{
            opacity: 1;
            transform: translateX(0);
        }
        to{
            opacity: 0;
            transform:translateX(100%);
        }
    }   

`

import { createGlobalStyle } from "styled-components";

const GeneralStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ul, li {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    button {
        outline: 0;
        border: 1px solid red;
        background: #000;
        color: #fff;
        padding: 10px;
        &:hover {
            background: red;
        }
    }
    .container {
        width: 100%;
        max-width: 1300px;
        margin-left: auto;
        margin-right: auto;
        ${'' /* padding-left: 30px;
        padding-right: 30px; */}
        @media screen and (max-width: 991px) {
            padding-left: 15px;
            padding-right: 15px;
            border: 1px solid red;
        }
    }
    .main {
        margin-top: 75px;
    }

    ${"" /* slider */}
    .slick-next, .slick-prev {
        z-index: 9;
        width: 40px;
        height: 40px;
        &:before {
            font-size: 40px;
        }
    }
    .slick-next {
        right: 25px;
    }
    .slick-prev {
        left: 25px;
    }
`;

export default GeneralStyle;

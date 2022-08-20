import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
:root{
    --color-primary:  #27AE60;
    --color-primary-50: #93D7AF;
    
    --color-secundary: #EB5757;

    --gray-100: #333333;
    --gray-50: #828282;
    --gray-20: #E0E0E0;
    --gray-4: #BDBDBD;
    --gray-0: #F5F5F5;

    --negative: #E60000;
    --warning: #FFCD07;
    --sucess: #168821;
    --information: #155BCB;
}

body, h1,h2,h3,input,div,li,ul,header,main,figure,img,p,span,button,section, input{
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
    font-family: 'Inter';
}

ul, li{
    list-style: none;
}
`

export default GlobalStyle
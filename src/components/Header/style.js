import styled from "styled-components";

export const ContainerHeader = styled.header`
    width: 100%;

    display: flex;
    justify-content: center;

    padding: 10px 0;

    background-color: var(--gray-0);

    margin-bottom: 30px;

    .contentHeader{
        display: flex;
        align-items: center;
        gap: 1.875rem;
        flex-direction: column;

        width: 100%;
    }

    @media only screen and (min-width: 768px){
        .contentHeader{
            flex-direction: row;
            justify-content: space-between;

            width: 80%;
        }
    }
    

    .contentHeader__containerLogo{
        width: 70%;

        text-align: center;
    }

    @media only screen and (min-width: 768px){
        .contentHeader__containerLogo{
            text-align: left;

            width: 60%;
        }
    }

    @media only screen and (min-width: 992px){
        .contentHeader__containerLogo{
            text-align: left;

            width: 70%;
        }
    }

    .contentHeader__containerLogo img:hover{
        cursor: pointer;
    }

    .containerPesquisa{
        
        width: 90%;

        background-color: #ffffff;

        padding: 15px .625rem;
        border-radius: .5rem;

        display:flex;
        justify-content: space-between;

        border: 2px solid var(--gray-20);

        position: relative;

        @media only screen and (min-width: 480px){
            &{
                width: 60%
            }
        }

        @media only screen and (min-width: 768px){
            &{
                width: 40%
            }
        }

        @media only screen and (min-width: 992px){
            &{
                width: 30%
            }
        }

        input{
            text-align: left
        }

        input:focus{
            outline: none;
        }

        button{
            padding: 10px;

            background-color: var(--color-primary);
            color: white;

            position: absolute;
            top: 10%;
            right: 3%;

            border-radius: .5rem;

            transition: all 0.5s ease-in-out;
        }

        button:hover{
            cursor: pointer;
            background-color: var(--color-primary-50)
        }
    }
`
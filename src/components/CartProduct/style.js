import styled from "styled-components";

export const ItemCart = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .containerImgInfo{
        display: flex;
        gap: .625rem; 
    }

    .containerImageCart{
        background-color: var(--gray-20);

        width: 4rem;
        min-width: 4rem;
        height: 4rem;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: .313rem;
    }

    .containerImageCart__img{
        width:60px;
        height: 60px
    }

    .containerInfo__name{
        font-size: .875rem;
        text-align: left;
        margin: .625rem 0;
    }

    .containerInfo__category{
        font-size: .75rem;
        text-align: left;

        color: var(--gray-50)
    }

    .buttonRemove{
        background: none;
        margin: .625rem 0;
        color: var(--gray-4);

        font-size: .75rem;

        transition: all 0.5s linear 
    }

    .buttonRemove:hover{
        color: var(--gray-100);

        text-decoration: underline;

        cursor: pointer;
    }

    .itemController__counter{
        display: flex;
        justify-content: space-around;
        gap: 10px;

        .counter--max, .counter--min{
            background-color: var(--color-primary);

            height: 20px;
            width: 20px;

            text-align: center;

            border-radius: 0.4rem;

            position: relative;

            span{
                color: white;

                position: absolute;

                bottom: 20%;
                right: 30%;
            }
        }

        .counter--min{
            background-color: #f10;

            span{
                position: absolute;

                bottom: 20%;
                right: 35%;
            }
        }
    }
`
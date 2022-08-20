import styled from "styled-components";


export const ListCard = styled.ul`
    display: flex;

    overflow-x: scroll;
    width: 90%;
    
    align-items: center;
    gap: 1.25rem;

    @media only screen and (min-width: 768px){
        &{
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;

            width: 100%;
            height: 100%;

            overflow: visible;
        }
    }

    .noProduct{
        margin: 0 auto;
    }

    .noProduct__description{
        font-size: 1.25rem;
        text-align: center;
    }

    .noProduct img{
        width: 300px;
        
    }

    &::-webkit-scrollbar-thumb{
            width: 6px;

            background-color: var(--gray-50);

            border-radius: 5px;
            
        }

    &::-webkit-scrollbar{
        
        width: 8px;

        background-color: var(--gray-4);
        
        border-radius: 5px;
    }
`
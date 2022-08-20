import styled from "styled-components";

export const SectionCart = styled.section`
    display: flex;
    flex-direction: column;

    width: 90%;
    
    @media only screen and (min-width: 480px){
        &{
            width: 60%;
        }
    }

    @media only screen and (min-width: 768px){
        &{
            width: 40%;
        }
    }

    @media only screen and (min-width: 992px){
        &{
            width: 30%;
        }
    }

    .headerCart{
        background-color: var(--color-primary);
        color: white;
        
        border-radius: 0.313rem 0.313rem 0 0;
        
        padding: 0.938rem;
    }

    .headerCart h2{
        font-size: 1.125rem;
        text-align: left;
    }

    .listItens{
        padding: ${(cart) => cart.currentSale.length === 0 ? "2.5rem" : "0"};
        
        background-color: ${(cart) => cart.currentSale.length === 0 ? "white" : "var(--gray-0)"};

        border-bottom: ${(cart) => cart.currentSale.length === 0 ? "none" : "2px solid var(--gray-20)"};
        border-radius: ${(cart) => cart.currentSale.length === 0 ? "0 0 .313rem .313rem" : "none"} ;
        border: ${(cart) => cart.currentSale.length === 0 ? "2px solid var(--gray-20)" : "none"};
    }

    .listItens__cart{
        display:flex;
        flex-direction: column;
        gap: 1.25rem;

        height: 50vh;
        max-height: 50vh;

        overflow-y: scroll;

        padding: 10px;

        position: relative;
    }

    .listItens__cart::-webkit-scrollbar-thumb{
            width: 8px;

            background-color: var(--gray-50);

            border-radius: 5px;
            
        }

    .listItens__cart::-webkit-scrollbar{
        position: absolute;
        right: 0;
        
        width: 10px;

        background-color: var(--gray-4);
        
        border-radius: 5px;
    }

    .emptyCart__img{
        width: 100%;
    }
    
`
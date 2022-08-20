import styled from "styled-components";

export const ContainerTotal = styled.div`
    padding: 20px;

    background-color: var(--gray-0);

    width:100%;
    height: max-content;

    border-radius: 0 0 .313rem .313rem;

    visibility: ${(cart) => cart.currentSale.length === 0 ? "hidden" : "visibility"};
    
    .containerTotalValor{
        display: flex;
        justify-content: space-between;

        margin-bottom: 1.25rem
    }

    .containerTotalValor p, .containerTotalValor span{
        font-size: 0.875rem;
        font-weight: 600
    }

    .containerTotalValor span{
        color: var(--gray-50)
    }

    .buttonRemoveItens{
        background-color: var(--gray-20);
        color: var(--gray-50);

        padding: 0.938rem;
        width: 100%;

        border-radius: 0.313rem;

        transition: all 0.4s linear;
    }

    .buttonRemoveItens:hover{
        background-color: var(--gray-50);
        color: var(--gray-20)
    }
    
`
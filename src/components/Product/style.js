import styled from "styled-components";

export const Card = styled.li`

    display: flex;
    flex-direction: column;

    width: 200px;
    min-width: 200px;
    height: max-content;

    margin-bottom: 1.25rem;

    border: 2px solid var(--gray-20);
    border-radius: 0.313rem;
    transition: all 0.5s ease-in-out;

    @media only screen and (min-width: 768px){
        &{
            width: 150px;
            min-width: 150px;
            height: 40%;
        }
        
        &:hover{
            transform: scale(1.1)
        }

    }

    @media only screen and (min-width: 992px){
        width: 30%;
        min-width: 30%;
        height: 60%;
    }

    .containerImage{
        background-color: var(--gray-0);
        
        width: 100%;

        padding: 0 2.5rem;
    }

    @media only screen and (min-width: 768px){
        .containerImage{
            height: 40%;
            
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    @media only screen and (min-width: 992px){
        .containerImage{
            height: max-content;
        }
    }

    .containerImage__img{
        width: 80%;
        
        padding:0;
    }

`

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.625rem;

    height: 100%;
    
    padding: 15px 1.25rem;

    .productName{
        font-size: 1.125rem;
        font-weight: 700;
        text-align: left;

        color: var(--gray-100);

        width: 100%;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        
    }

    .productCategory{   
        font-size: 0.75rem;
        font-weight: 400;

        color: var(--gray-50)
    }

    .productPrice{
        font-size: 0.875rem;
        font-weight: 600;

        color: var(--color-primary);
    }

    .productAddCart{
        padding: .625rem;

        border-radius: .5rem;

        background-color: var(--color-primary);
        color: white;

        transition: all 0.4s ease-in-out
    }

    .productAddCart:hover{
        background-color: var(--color-primary-50);
        cursor: pointer;
    }
`
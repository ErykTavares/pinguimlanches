import styled from 'styled-components';

export const HomeStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const HomeSectionStyle = styled.section`
    height: 500px;
    display: flex;
    align-items:center;
    justify-content:center;
    margin:0 auto;
    background-color: var(--yellow);
    overflow: hidden;
    @media screen and (max-width:1300px){
        flex-direction:column;
        align-items:center;
        justify-content:center;
        height: 800px;
    }
    @media screen and (max-width:470px){
             height:600px ;

        }  
    
    
    .homeleftcontent{
        margin-left:50px;
        transform: translateX(15%);
        z-index: 1;
        @media screen and (max-width:1300px){
            transform: translate(-8%, 70%);
            margin-left:0;
        }
        @media screen and (max-width:675px){
            transform: translate(0%, 50%);
        }
        @media screen and (max-width:550px){
            
        }
        button{
            @media screen and (max-width:550px){
                transform: translateX(45%);
           
            }
            @media screen and (max-width:350px){
                transform: translateX(57%);
    
            }
        }
        @media screen and (max-width:470px){
                transform: translate(5%, 20%);
        }  
        .texts{
            width: 500px;
            display: flex;
            flex-wrap: wrap;
            font-size: 2.8rem;
            color: var(--textwhite);
            margin-bottom: 20px;
            @media screen and (max-width:550px){
                align-items:center;
                justify-content:center;
                font-size:2rem;
            }
            
            .textTitleFirst{
                height: 60px;
                flex-grow:1;
                font-family: "Sacramento", cursive;
                text-shadow: 0px 4px 4px #00000040;
                margin-right:82px;
                @media screen and (max-width:550px){
                    margin-left: 70px;
                }
                @media screen and (max-width:350px){
                transform: translateX(5%);
    
                }  
            }
            .textTitleSecond{
                width: 290px;
                font-size: 4.5rem;
                font-family: "Sansita", cursive;
                margin-right:67px;
                letter-spacing: 4px;
                text-shadow: 0px 4px 4px #00000040;
                @media screen and (max-width:550px){
                margin-right: 98px;
                }
                @media screen and (max-width:470px){
                    font-size: 2.8rem;
                    margin-left: 26px;
                }
                @media screen and (max-width:350px){
                    transform: translateX(5%);
                }
            }
            .textTitleThird{
                font-family: "Single Day", cursive;
                margin-right:18px;
                line-height: 90px;
                letter-spacing: 4px;
                text-shadow: 0px 4px 4px #00000040;
                @media screen and (max-width:470px){
                transform: translateX(-23%);
                }
            }
            .textTitleFourth{
                height: 60px;
                font-family: "Permanent Marker", cursive;
                text-shadow: 0px 4px 11px #CB5A5AA1;
                @media screen and (max-width:470px){
                    font-size: 2.5rem;
                    transform: translateX(-13%);
                }
                @media screen and (max-width:350px){
                    font-size: 2.1rem;
                    transform: translateX(-13%);
                }
            }
        }
    }


    .homerightccontent{
        transform: translateX(5%);
        @media screen and (max-width:1300px){
            transform: translateX(0%);
        }
        @media screen and (max-width:675px){
            width: 100%;
            display: flex;
            align-items: center;
            justify-content:center;
        }
        @media screen and (max-width:470px){
            width: 100%;
            height: 320px;
            transform: translateY(0%);
        }

        img{
            max-width: 850px;
            height: 850px;
            transform: translatey(20%);
            @media screen and (max-width:675px){
            width: 600px;
            height: 600px;
            transform: translateY(32%);
            }
            @media screen and (max-width:470px){
                width: 320px;
                height: 320px;
                transform: translateY(43%);
            }
        }
    }

`

export const HomeSectionTwoStyle = styled.section`
    height: 800px;
    display: flex;
    align-items: center;
    justify-content:center;
    margin: 0 auto;
    background-color: var(--white);
    @media screen and (max-width:1150px){
        height: 1000px;
        flex-direction:column;
    }

    .homesectiontwoleftcontent{
        display: flex;
        align-items: center;
        justify-content:center;
        margin-right: 100px;
        @media screen and (max-width:1150px){
            margin-bottom:50px;
            margin-right:0;
        }
        @media screen and (max-width:523px){
            padding: 0 2rem;
        }

        img{
            width: 100%;
            max-width: 500px;
        }
    }

    .homesectiontworightcontent{
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content:center;
        @media screen and (max-width:523px){
                width: 100%;
                align-items:center;
        }


        .homesectiontworighttexts{
            margin-bottom: 50px;
            @media screen and (max-width:523px){
                 width:100% ;
                 display: flex;
                 align-items: center;
                 justify-content:center;
                 flex-direction:column;
                 padding: 0 2rem;
            }   

            .homesectiontworighttextsfirst{
                font-size: 3rem;
                font-family: "sacramento", cursive;
                color: var(--textredweak);
                text-shadow: 0px 0px 21px #D47878;
                margin-bottom: 12px;
                @media screen and (max-width:523px){
                    align-self:start;
                }
            }

            
            .homesectiontworighttextssecond{
                width: 100%;
                max-width: 465px;
                word-break: break-word;
                color: var(--textblackweak);
                font-size: 2.5rem;
                font-family:"Roboto Condensed";
                @media screen and (max-width:523px){
                    font-size:2.3rem;
                }
            }

            p{
                width: 100%;
                max-width: 465px;
                color: var(--textgray);
                font-family: "Roboto Condensed";
                font-weight: 300;
            }
        }

        button{
            @media screen and (max-width:523px){
                align-self:start;
                margin-left:2rem;
                }
        }
    }


`

export const HomeSectionTreeStyle = styled.section`
    height: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    background-color: var(--black);
    color: var(--textwhite);
    padding: 0 1rem;
    margin: 0 auto;
    @media screen and (max-width:964px){
        height: 1500px;
    }
    @media screen and (max-width:948px){
        height: 1800px;
    }

    .homesectiontree-header{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content:center;
        margin-bottom: 4rem;

        .homesectiontreetext-first{
            color: var(--textred);
            text-shadow: 0px 0px 6px #D47878C9;
            font-family: "Single Day", cursive;
            font-size: 1.5rem;
            transform: rotate(-2.17deg);
            @media screen and (max-width:385px){
                font-size:1.2rem;
            }
            
        }

        .homesectiontreetext-second{
            text-shadow: 0px 0px 10px #FFFFFF82;
            font-size: 4.5rem;
            font-family: "Permanent Marker", cursive;
            transform: rotate(-4.4deg);
            margin-bottom: .8rem;
            @media screen and (max-width:385px){
                font-size:4rem;
            }
            @media screen and (max-width:346px){
                font-size:3.6rem;
            }
    
        }

        .homesectiontreetext-third{
            font-family: "Single Day", cursive;
            font-size: 1.5rem;
        }

    }

   
`
export const HomeSectionTreeGridStyle = styled.div`
    width: 100%;
    max-width: 1170px;
    display: flex;
    flex-direction:column;
    margin-bottom: 4rem;
    @media screen and (max-width:964px){
        padding: 0 4rem;
    }
   
    .homesectiontree-title{
        width: 105px;
        height: 40px;
        align-self: start;
        font-size: 2rem;
        font-family: "Single Day", cursive;
        transform: translateY( -40%) rotate(-8.36deg);
        @media screen and (max-width:775px){
            align-self: center;
        }
    } 
    
    .homesectiontreegird-imgs{
        width: 100%;
        height: auto;
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(300px,auto));
        grid-gap: 1rem;
        place-content: center;
    }
    img{
        width: 100%;
        max-width: 350px;
    }
`

export const HomeSectionFourStyle = styled.section`
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-around;
    background-color: var(--white);
    @media screen and (max-width:940px){
           height: 1500px;
        }

    .title{
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:space-between;

        .homesectionfourtitle{
            font-family:"Permanent Maker", cursive;
            font-size: 5rem;
            color: var(--textblack);
            transform: rotate(-4.4deg);
            @media screen and (max-width:360px){
                font-size:4rem;
            }
    
        }
    
        .homesectionfoursubtitle{
            font-family: "Single Day", cursive;
            font-size: 1.5rem;
            color: var(--textred);
            text-shadow: 0px 4px 21px #D47878C9;
            transform: rotate(-2.17deg);
            @media screen and (max-width:455px){
                font-size:1.2rem;
            }
            @media screen and (max-width:360px){
                font-size:1rem;
            }
    
        }
    }


    .socialapp{
        max-width: 1440px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content:space-evenly;
        @media screen and (max-width:940px){
            flex-direction: column;
        }

        .apps{
            width: 300px;
            height: 350px;
            display: flex;
            flex-direction: column;
            align-items:center;
            justify-content:space-between;
            @media screen and (max-width:940px){
                margin-bottom: 2rem;
            }
        }
    }
`